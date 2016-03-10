/**
 * Created by ATILLA on 28/01/2016
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .controller('ReentregarResumoModalController', ReentregarResumoModalController);

    /** @ngInject */
    function ReentregarResumoModalController($uibModalInstance, selectedRows, ModalUtil, ReentregarResumoModalService) {
        var vm = this;

        vm.docs = selectedRows;
        vm.quantidadeItens = vm.docs.length;

        vm.reentregar = reentregar;
        vm.cancelar = cancelar;

        /**
         * Reentregar resumo dos documentos
         */
        function reentregar() {
            ReentregarResumoModalService.reentregar(vm.docs).then(function (result) {
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
    ReentregarResumoModalController.$inject = ['$uibModalInstance', 'selectedRows', 'ModalUtil', 'ReentregarResumoModalService'];
})();
