/**
 * Controlador do reconhecimento de documentos.
 * Realiza a comunicação com o backend para para reconhecer os documentos selecionados na aplicação.
 *
 * Created by Leonardo on 01/02/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .controller('ReconhecerDocumentosModalController', ReconhecerDocumentosModalController);

    /** @ngInject */
    function ReconhecerDocumentosModalController($uibModalInstance, selectedRows, ModalUtil,
                                                 ReconhecerDocumentosModalService) {
        var vm = this;

        vm.docs = selectedRows;
        vm.quantidadeItens = vm.docs.length;

        vm.reconhecer = reconhecer;
        vm.cancelar = cancelar;

        /**
         * Reconhece os documentos
         */
        function reconhecer() {
            ReconhecerDocumentosModalService.reconhecer(vm.docs).then(function (result) {
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
    ReconhecerDocumentosModalController.$inject = ['$uibModalInstance', 'selectedRows', 'ModalUtil', 'ReconhecerDocumentosModalService'];
})();
