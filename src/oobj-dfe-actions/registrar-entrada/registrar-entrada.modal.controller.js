/**
 * Created by ATILLA on 28/01/2016
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .controller('RegistrarEntradaModalController', RegistrarEntradaModalController);

    /** @ngInject */
    function RegistrarEntradaModalController($uibModalInstance, selectedRows, ModalUtil, RegistrarEntradaModalService) {
        var vm = this;

        vm.docs = selectedRows;
        vm.quantidadeItens = vm.docs.length;

        vm.registrarEntrada = registrarEntrada;
        vm.cancelar = cancelar;

        /**
         * Registra a entrada dos documentos
         */
        function registrarEntrada() {
            RegistrarEntradaModalService.registrarEntrada(vm.docs).then(function (result) {
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
    RegistrarEntradaModalController.$inject = ['$uibModalInstance', 'selectedRows', 'ModalUtil', 'RegistrarEntradaModalService'];
})();
