/**
 * Constrolador do modal de reconsultar na sefaz
 *
 * Created by Isaias on 29/01/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .controller('ReconsultarSefazModalController', ReconsultarSefazModalController);

    /** @ngInject */
    function ReconsultarSefazModalController($uibModalInstance, selectedRows, ModalUtil, ReconsultarSefazModalService) {
        var vm = this;

        vm.docs = selectedRows;
        vm.quantidadeItens = vm.docs.length;

        vm.reconsultar = reconsultar;
        vm.cancelar = cancelar;

        /**
         * Reconsulta os documentos
         */
        function reconsultar() {
            ReconsultarSefazModalService.reconsultar(vm.docs).then(function (result) {
                ModalUtil.msgSuccess(result);
                $uibModalInstance.close();
            }).catch(function (reason) {
                ModalUtil.msgError(reason);
                $uibModalInstance.close();
            });
        }

        /**
         * Fecha o modal
         */
        function cancelar() {
            vm.rows = null;
            $uibModalInstance.close();
        }
    }
    ReconsultarSefazModalController.$inject = ['$uibModalInstance', 'selectedRows', 'ModalUtil', 'ReconsultarSefazModalService'];
})();
