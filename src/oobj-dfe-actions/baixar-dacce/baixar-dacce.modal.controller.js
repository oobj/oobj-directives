/**
 * Controlador do modal de Download de Documento Auxiliar de Carta de Correção Eletrônica.
 * Deve enviar a requisição para o backend e salvar os dados através do navegador na máquina do cliente.
 *
 * Created by Leonardo on 29/01/2016.
 */
(function() {
    'use strict';

    angular.module('oobj-directives')
        .controller('BaixarDACCeModalController', BaixarDACCeModalController);

    /** @ngInject */
    function BaixarDACCeModalController($uibModalInstance, BaixarDACCeModalService, selectedRows) {
        var vm = this;

        vm.quantidade = selectedRows.length;

        vm.invalid = false;
        vm.msgValidacao = null;

        vm.download = download;
        vm.cancel = cancelar;

        /**
         * Faz o download do DACCE
         */
        function download() {
            var idsArray = [];

            angular.forEach(selectedRows, function(item) {
                idsArray.push(item.id);
            });

            BaixarDACCeModalService.baixar(idsArray).then(function(result) {
                vm.invalid = false;
                vm.msgValidacao = result;

                $uibModalInstance.close();
            }).catch(function(err) {
                vm.invalid = true;
                vm.msgValidacao = err;
            });
        }

        /**
         * Fecha o modal
         */
        function cancelar() {
            $uibModalInstance.close();
        }
    }
    BaixarDACCeModalController.$inject = ['$uibModalInstance', 'BaixarDACCeModalService', 'selectedRows'];
})();