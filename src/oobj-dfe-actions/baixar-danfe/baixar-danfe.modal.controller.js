/**
 * Controlador do modal de baixar DANFE
 *
 * Created by Leonardo on 29/01/2016.
 */
(function() {
    'use strict';

    angular.module('oobj-directives')
        .controller('BaixarDANFeModalController', BaixarDANFeModalController);

    /** @ngInject */
    function BaixarDANFeModalController($uibModalInstance, BaixarDANFeModalService, selectedRows) {
        var vm = this;

        vm.quantidade = selectedRows.length;

        vm.invalid = false;
        vm.msgValidacao = null;

        vm.download = download;
        vm.cancel = cancelar;

        /**
         * Faz o download do DANFE
         */
        function download() {
            var idsArray = [];

            angular.forEach(selectedRows, function(item) {
                idsArray.push(item.id);
            });

            BaixarDANFeModalService.baixar(idsArray).then(function(result) {
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
    BaixarDANFeModalController.$inject = ['$uibModalInstance', 'BaixarDANFeModalService', 'selectedRows'];
})();