/**
 * Controlador do modal de enviar NFe por email
 *
 * Created by ATILLA on 25/02/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .controller('EnviarEmailModalController', EnviarEmailModalController);

    /** @ngInject */
    function EnviarEmailModalController($uibModalInstance, selectedRows, ModalUtil, EnviarEmailModalService) {
        var vm = this;

        // constantes;
        var STRING_DOES_NOT_MATCH = -1;
        var UM_ITEM = 1;
        vm.validEmail = '(^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$)|(E.mail.s. contido.s. no arquivo XML)';

        // variáveis globais do controlador
        vm.rows = selectedRows;
        vm.quantidadeItens = vm.rows.length;
        vm.modelo = vm.rows[0] ? vm.rows[0].modelo : 'NF-e';
        vm.invalid = false;
        vm.msgValidacao = null;
        vm.email = new Email();

        definirAssuntos();
        definirAnexos();

        vm.cancelar = cancelar;
        vm.enviar = enviar;
        vm.selecionar = selecionar;
        vm.addAssunto = addAssunto;
        vm.getTagsDefault = getTagsDefault;

        /**
         * Autocomplete de tags default para o input-tags de Destinatários
         *
         * @param query
         *          String digitada pelo usuário no input-tag
         * @returns {*}
         */
        function getTagsDefault(query) {
            var todosEmails = 'E-mail(s) contido(s) no arquivo XML';

            // verifica se a string digitada está presente na string todosEmails
            return todosEmails.indexOf(query) > STRING_DOES_NOT_MATCH ? [todosEmails] : [];
        }

        /**
         * Adiciona uma tag no assunto
         *
         * @param index
         *          Posicao do assunto no array de tags
         */
        function addAssunto(index) {
            // inicializa o assunto do email
            vm.email.assunto = vm.email.assunto || '';

            // adiciona a tag no assunto
            vm.email.assunto += (' ' + vm.assuntos[index].tag);
        }

        /**
         * Executado para selecionar/desfazer seleção de um anexo listado
         *
         * @param $index
         *          Posição do anexo no array de anexos
         */
        function selecionar($index) {
            // seleciona ou desfaz seleção do anexo escolhido no modal
            vm.anexos[$index].selected = !vm.anexos[$index].selected;
        }

        /**
         * Envia os documentos selecionados por email
         */
        function enviar() {
            if (validarEmail() && addAnexos() && !vm.invalid) {
                EnviarEmailModalService.enviarPorEmail(vm.email).then(function(msg) {
                    ModalUtil.msgSuccess(msg);
                    $uibModalInstance.close();
                }).catch(function(reason) {
                    vm.msgValidacao = reason;
                    vm.invalid = true;

                    ModalUtil.msgError(reason);
                    $uibModalInstance.close();
                });
            }
        }

        /**
         * Adiciona os anexos selecionados no corpo do email
         *
         * @return {boolean}
         *          Verdadeiro se algum anexo foi adicionado
         */
        function addAnexos() {
            var anexoAdded = false;
            vm.email.anexos = [];

            vm.anexos.forEach(function (anexo) {
                if (anexo.selected) {
                    vm.email.anexos.push(anexo);
                    anexoAdded = true;
                }
            });

            return validacaoAnexos(anexoAdded);
        }

        /**
         * Adiciona a devida validação para destinatários inválidos
         *
         * @returns {boolean}
         */
        function validacaoDestinatarioInvalido() {
            vm.msgValidacao = 'Ops! Você não informou nenhum <b>Destinatário</b>. Esse campo é obrigatório.';
            vm.invalid = true;

            return false;
        }

        /**
         * Validação usada quando o preenchimento do formulário está ok
         *
         * @returns {boolean}
         */
        function validacaoOk() {
            vm.msgValidacao = null;
            vm.invalid = false;

            return true;
        }

        /**
         * Verifica se o destinatario é inválido
         *
         * @returns {boolean}
         */
        function isDestinatarioInvalido() {
            return !vm.email.para || vm.email.para.length < UM_ITEM;
        }

        /**
         * Valida se os dados do email foram preenchidos
         *
         * @returns {boolean}
         */
        function validarEmail() {
            if (isDestinatarioInvalido()) {
                return validacaoDestinatarioInvalido();
            }

            vm.email.de = vm.email.de || 'naoresponder@oobj.com.br';
            vm.email.assunto = vm.email.assunto || '(sem assunto)';
            vm.email.mensagem = vm.email.mensagem || getMensagemDefault();

            return validacaoOk();
        }

        /**
         * Validação usada para a seleção de anexos
         *
         * @param anexoAdded
         *          Se há anexos adicionados
         * @returns {*}
         */
        function validacaoAnexos(anexoAdded) {
            if (!anexoAdded) {
                vm.msgValidacao = 'Ops! Você não selecionou nenhum <b>Anexo</b>. ' +
                    'Você deve selecionar ao menos <b>um</b> tipo de anexo.';
                vm.invalid = true;
            }

            return anexoAdded;
        }

        /**
         * Mensagem padrão do email
         *
         * @returns {string}
         */
        function getMensagemDefault() {
            return 'Prezado Cliente, \n\n' +
                'Você está recebendo em anexo o arquivo XML referente a uma Nota Fiscal Eletrônica. ' +
                'Abaixo você tem mais detalhes sobre o documento.';
        }

        /**
         * Fecha o modal de enviar email
         */
        function cancelar() {
            vm.rows = null;
            $uibModalInstance.dismiss('cancel');
        }

        /**
         * Cria as tags default do assunto
         */
        function definirAssuntos() {
            vm.assuntos = [
                new Assunto('Número da ' + vm.modelo, 'NUMERO'),
                new Assunto('Série da ' + vm.modelo, 'SERIE'),
                new Assunto('Nome do Emitente da ' + vm.modelo, 'EMITENTE'),
                new Assunto('Nome do Destinatário da ' + vm.modelo, 'DESTINATARIO'),
                new Assunto('Nome do Transportador da ' + vm.modelo, 'TRANSPORTADOR'),
                new Assunto('Chave de acesso da ' + vm.modelo, 'CHAVE_ACESSO')
            ];
        }

        /**
         * Cria as opções de anexos default
         */
        function definirAnexos() {
            vm.anexos = [
                new Anexo('Proc NF-e', true, 'fa-file-code-o'),
                new Anexo('Proc Eventos', false, 'fa-file-code-o'),
                new Anexo('DANFE', false, 'fa-file-pdf-o'),
                new Anexo('DACCE', false, 'fa-file-pdf-o')
            ];
        }

        /**
         * @constructor
         */
        function Email(de, para, assunto, mensagem, anexos) {
            this.de = de;
            this.para = para || ['E-mail(s) contido(s) no arquivo XML'];
            this.assunto = assunto || (vm.modelo + ' |NUMERO| - Série |SERIE| emitida por |EMITENTE|');
            this.mensagem = mensagem || getMensagemDefault();
            this.anexos = anexos;
        }

        /**
         * @constructor
         */
        function Assunto(label, value, tag) {
            this.label = label;
            this.value = value;
            this.tag = tag || '|' + this.value + '|';
        }

        /**
         * @constructor
         */
        function Anexo(name, selected, icon) {
            this.name = name;
            this.selected = selected || false;
            this.icon = icon;
        }
    }
    EnviarEmailModalController.$inject = ['$uibModalInstance', 'selectedRows', 'ModalUtil', 'EnviarEmailModalService'];
})();
