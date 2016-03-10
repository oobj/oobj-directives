/**
 * Modal para geração de Retorno de Autorização
 *
 * Created by ATILLA on 28/01/2016
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .controller('RetornoAutorizacaoModalController', RetornoAutorizacaoModalController);

    /** @ngInject */
    function RetornoAutorizacaoModalController($uibModalInstance, selectedRows, ModalUtil,
                                               RetornoAutorizacaoModalService) {
        var vm = this;

        vm.docs = selectedRows;
        vm.quantidadeItens = vm.docs.length;

        vm.gerarRetorno = gerarRetorno;
        vm.cancelar = cancelar;

        /**
         * Gera retorno de autorização dos arquivos selecionados
         */
        function gerarRetorno() {
            RetornoAutorizacaoModalService.gerarRetorno(vm.docs).then(function (result) {
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
    RetornoAutorizacaoModalController.$inject = ['$uibModalInstance', 'selectedRows', 'ModalUtil', 'RetornoAutorizacaoModalService'];
})();
