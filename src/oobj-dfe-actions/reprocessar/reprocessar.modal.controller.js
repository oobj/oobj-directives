/**
 * Modal para Reprocessar Documentos
 *
 * Created by ATILLA on 19/02/2016
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .controller('ReprocessarModalController', ReprocessarModalController);

    /** @ngInject */
    function ReprocessarModalController($uibModalInstance, selectedRows, ModalUtil, ReprocessarModalService) {
        var vm = this;

        vm.docs = selectedRows;
        vm.quantidadeItens = vm.docs.length;

        vm.reprocessar = reprocessar;
        vm.cancelar = cancelar;

        function reprocessar() {
            ReprocessarModalService.reprocessar(vm.docs).then(function (result) {
                ModalUtil.msgSuccess(result);
                $uibModalInstance.close();
            }).catch(function (reason) {
                ModalUtil.msgError(reason);
                $uibModalInstance.close();
            });
        }

        function cancelar () {
            vm.docs = null;
            $uibModalInstance.dismiss('cancel');
        }
    }
    ReprocessarModalController.$inject = ['$uibModalInstance', 'selectedRows', 'ModalUtil', 'ReprocessarModalService'];
})();
