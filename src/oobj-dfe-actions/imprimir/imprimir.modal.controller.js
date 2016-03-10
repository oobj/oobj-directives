/**
 * Controller do Modal Imprimir
 *
 * Created by ATILLA on 19/02/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .controller('ImprimirModalController', ImprimirModalController);

    /** @ngInject */
    function ImprimirModalController($uibModalInstance, selectedRows, ModalUtil, ImprimirModalService) {
        var vm = this;

        // variáveis globais do controlador
        vm.rows = selectedRows;
        vm.quantidadeItens = vm.rows.length;
        vm.localizacaoImpressora = 'padrao';

        buscarImpressoras();

        vm.selecionar = selecionar;
        vm.imprimir = imprimir;
        vm.cancel = cancelar;

        /**
         * Faz a busca por impressoras no servidor
         */
        function buscarImpressoras() {
            ImprimirModalService.buscarImpressoras().then(function (impressoras) {
                vm.impressoras = impressoras;
            });
        }

        /**
         * Executado para selecionar/desfazer seleção de uma impressora listada
         *
         * @param $index
         *          Posição da impressora no array de impressoras
         */
        function selecionar($index) {
            vm.impressoras.forEach(function (impressora, index) {
                // desfaz seleção das impressoras, exceto a atual selecionada
                if (impressora.selected && $index !== index) {
                    impressora.selected = false;
                }
            });

            // seleciona ou desfaz seleção da impressora escolhida no modal
            vm.impressoras[$index].selected = !vm.impressoras[$index].selected;
        }

        /**
         * Envia os documentos selecionados para serem impressos nas impressoras selecionadas
         */
        function imprimir() {
            // garante que só é enviado para impressão se algum item for selecionado
            if (vm.quantidadeItens > 0) {
                // impressora selecionada
                var toPrint = null;

                // verifica e armazena a impressora selecionada
                vm.impressoras.forEach(function (impressora) {
                    if (impressora.selected) {
                        toPrint = impressora;
                    }
                });

                // envia os documentos e a impressora selecionada para o service
                ImprimirModalService.imprimir(vm.rows, toPrint).then(function(result) {
                    $uibModalInstance.close();
                    ModalUtil.msgSuccess(result);
                });
            } else {
                $uibModalInstance.close();
                ModalUtil.msgWarning('É necessário selecionar documentos antes de imprimir.');
            }
        }

        /**
         * Fecha o modal de impressao
         */
        function cancelar() {
            vm.rows = null;
            $uibModalInstance.dismiss('cancel');
        }
    }
    ImprimirModalController.$inject = ['$uibModalInstance', 'selectedRows', 'ModalUtil', 'ImprimirModalService'];
})();
