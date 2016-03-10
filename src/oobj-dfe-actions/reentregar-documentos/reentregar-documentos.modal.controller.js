/**
 * Created by ATILLA on 29/01/2016
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .controller('ReentregarDocumentosModalController', ReentregarDocumentosModalController);

    /** @ngInject */
    function ReentregarDocumentosModalController($uibModalInstance, selectedRows, ModalUtil,
                                                 ReentregarDocumentosModalService) {
        var vm = this;

        vm.docs = selectedRows;
        vm.quantidadeItens = vm.docs.length;

        vm.reentregar = reentregar;
        vm.cancelar = cancelar;

        /**
         * Reentregar os documentos
         */
        function reentregar() {
            ReentregarDocumentosModalService.reentregar(vm.docs).then(function (result) {
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
    ReentregarDocumentosModalController.$inject = ['$uibModalInstance', 'selectedRows', 'ModalUtil', 'ReentregarDocumentosModalService'];
})();
