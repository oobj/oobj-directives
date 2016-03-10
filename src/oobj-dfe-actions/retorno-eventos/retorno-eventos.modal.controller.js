/**
 * Controlador do Modal de Gerar Retorno de Eventos.
 *
 * Created by ATILLA on 28/01/2016
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .controller('RetornoEventosModalController', RetornoEventosModalController);

    /** @ngInject */
    function RetornoEventosModalController($uibModalInstance, selectedRows, ModalUtil, RetornoEventosModalService) {
        var vm = this;

        vm.docs = selectedRows;
        vm.quantidadeItens = vm.docs.length;

        vm.gerarRetorno = gerarRetorno;
        vm.cancelar = cancelar;

        /**
         * Gera retorno de eventos dos arquivos selecionados
         */
        function gerarRetorno() {
            RetornoEventosModalService.gerarRetorno(vm.docs).then(function (result) {
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
    RetornoEventosModalController.$inject = ['$uibModalInstance', 'selectedRows', 'ModalUtil', 'RetornoEventosModalService'];
})();
