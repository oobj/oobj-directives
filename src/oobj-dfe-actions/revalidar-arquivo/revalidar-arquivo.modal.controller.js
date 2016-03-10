/**
 * Controlador do modal de revalidar arquivos
 *
 * Created by ATILLA on 28/01/2016
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .controller('RevalidarArquivoModalController', RevalidarArquivoModalController);

    /** @ngInject */
    function RevalidarArquivoModalController($uibModalInstance, selectedRows, ModalUtil, RevalidarArquivoModalService) {
        var vm = this;

        vm.docs = selectedRows;
        vm.quantidadeItens = vm.docs.length;

        vm.revalidar = revalidar;
        vm.cancelar = cancelar;

        /**
         * Revalida os arquivos selecionados
         */
        function revalidar() {
            RevalidarArquivoModalService.revalidar(vm.docs).then(function (result) {
                ModalUtil.msgSuccess(result);
                $uibModalInstance.close();
            }).catch(function (reason) {
                ModalUtil.msgError(reason);
                $uibModalInstance.close();
            });
        }

        /**
         * Fecha o modal de gerar retorno
         */
        function cancelar() {
            vm.docs = null;
            $uibModalInstance.dismiss('cancel');
        }
    }
    RevalidarArquivoModalController.$inject = ['$uibModalInstance', 'selectedRows', 'ModalUtil', 'RevalidarArquivoModalService'];
})();
