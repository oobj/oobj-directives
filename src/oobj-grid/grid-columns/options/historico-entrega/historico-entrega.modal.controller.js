/**
 * Created by Renato Borges on 28/01/2016
 */
(function () {
    'use strict';

    angular
        .module('oobj-directives')
        .controller('HistoricoEntregaModalController', HistoricoEntregaModalController);

    HistoricoEntregaModalController.$inject = ['$uibModalInstance', 'selectedRow'];

    /** @ngInject */
    function HistoricoEntregaModalController($uibModalInstance, selectedRow) {
        var vm = this;

        vm.title = 'Histórico de Entrega da NF-e';
        vm.dfe = selectedRow;

        vm.cancel = function () {
            vm.dfe = null;
            $uibModalInstance.dismiss('cancel');
        };
    }
})();