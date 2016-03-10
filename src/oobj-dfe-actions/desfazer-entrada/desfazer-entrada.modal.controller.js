/**
 * Controlador do modal de desfazer entrada
 *
 * Created by Isaias on 29/01/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .controller('DesfazerEntradaModalController', DesfazerEntradaModalController);

    /** @ngInject */
    function DesfazerEntradaModalController($uibModalInstance, selectedRows, ModalUtil, DesfazerEntradaModalService) {
        var vm = this;

        vm.docs = selectedRows;
        vm.quantidadeItens = vm.docs.length;

        vm.desfazer = desfazer;
        vm.cancelar = cancelar;

        /**
         * Desfaz o registro de entrada
         */
        function desfazer() {
            DesfazerEntradaModalService.desfazerEntrada(vm.docs).then(function (result) {
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
    DesfazerEntradaModalController.$inject = ['$uibModalInstance', 'selectedRows', 'ModalUtil', 'DesfazerEntradaModalService'];
})();
