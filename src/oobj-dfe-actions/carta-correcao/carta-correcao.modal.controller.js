/**
 * Controller do modal para registrar um evento de carta de correção
 *
 * Created by ATILLA on 25/02/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .controller('CartaCorrecaoModalController', CartaCorrecaoModalController);

    /** @ngInject */
    function CartaCorrecaoModalController($uibModalInstance, selectedRows, ModalUtil, CartaCorrecaoModalService) {
        var vm = this;

        // constantes
        var TAMANHO_MINIMO_JUSTIFICATIVA = 15;

        // variáveis globais do controlador
        vm.dfe = selectedRows[0];
        vm.modelo = vm.dfe ? vm.dfe.modelo : 'NF-e';
        vm.confirmar = false;
        vm.invalid = false;
        vm.msgValidacao = null;
        vm.evento = {
            data: new Date()
        };

        vm.cancelar = cancelar;
        vm.desfazerEvento = desfazerEvento;
        vm.registrar = registrar;
        vm.exibirConfirmacao = exibirConfirmacao;

        /**
         * Registra o evento de carta de correcao para o documento selecionado
         */
        function registrar() {
            // certifica que há uma nota selecionada e os campos foram preenchidos
            if (eventoValido()) {
                vm.evento.dfe = vm.dfe;

                CartaCorrecaoModalService.registrarEvento(vm.evento).then(function(result) {
                    vm.msgValidacao = result;
                    vm.invalid = false;

                    ModalUtil.msgSuccess('Evento de <b>Carta de Correção</b> Registrado com Sucesso!');
                    $uibModalInstance.close();
                }).catch(function(reason) {
                    vm.msgValidacao = reason;
                    vm.invalid = true;
                    vm.confirmar = false;
                });
            }
        }

        /**
         * Valida se o formulário foi preenchido corretamente
         *
         * @returns {boolean}
         */
        function eventoValido() {
            // verifica se o documento foi selecionado
            if (isDocumentoInvalido()) {
                return validacaoDFe();
            }
            // verifica se a justificativa possui quantidade mínima informada
            else if (isJustificativaInvalida()) {
                return validacaoJustificativa();
            }
            // verifica se a data do evento foi selecionada corretamente
            else if (isDataInvalida()) {
                return validacaoData();
            }
            // formulário OK
            else {
                return validacaoOk();
            }
        }

        /**
         * Reverte a ação de registrar o evento de carta de correção
         */
        function desfazerEvento() {
            vm.confirmar = false;
        }

        /**
         * Exibe/Esconde alerta para confirmação antes de registrar o evento de carta de correção
         */
        function exibirConfirmacao() {
            vm.confirmar = !vm.confirmar;
        }

        /**
         * Fecha o modal de cancelamento
         */
        function cancelar() {
            vm.dfe = null;
            $uibModalInstance.dismiss('cancel');
        }

        /**
         * Obtem o tratamento padrao para DFe inválido
         *
         * @returns {boolean}
         */
        function validacaoDFe() {
            vm.msgValidacao = 'Selecione um <b>documento</b> e preencha <b>todos os campos</b> corretamente.';
            vm.invalid = true;
            vm.confirmar = false;

            return false;
        }

        /**
         * Obtem o tratamento padrao para justificativa inválida
         *
         * @returns {boolean}
         */
        function validacaoJustificativa() {
            vm.msgValidacao = '<b>Justificativa</b> deve ter pelo menos ' +
                TAMANHO_MINIMO_JUSTIFICATIVA + ' caractéres.';
            vm.invalid = true;
            vm.confirmar = false;

            return false;
        }

        /**
         * Obtem o tratamento padrao quando o formulário está ok
         *
         * @returns {boolean}
         */
        function validacaoOk() {
            vm.msgValidacao = null;
            vm.invalid = false;

            return true;
        }

        /**
         * Obtem o tratamento padrao para data inválida
         *
         * @returns {boolean}
         */
        function validacaoData() {
            vm.msgValidacao = 'Selecione uma <b>data</b> válida.';
            vm.invalid = true;
            vm.confirmar = false;

            return false;
        }

        /**
         * Verifica se o documento nao foi selecionado corretamente
         *
         * @returns {boolean}
         */
        function isDocumentoInvalido() {
            return !vm.dfe || !vm.evento;
        }

        /**
         * Verifica se a justificativa é inválida
         *
         * @returns {boolean}
         */
        function isJustificativaInvalida() {
            return !vm.evento.justificativa || vm.evento.justificativa.length < TAMANHO_MINIMO_JUSTIFICATIVA;
        }

        /**
         * Verifica se a data é invalida
         *
         * @returns {boolean}
         */
        function isDataInvalida() {
            return !vm.evento.data;
        }
    }
    CartaCorrecaoModalController.$inject = ['$uibModalInstance', 'selectedRows', 'ModalUtil', 'CartaCorrecaoModalService'];
})();
