/**
 * Controlador para o modal de diagnóstico fiscal.
 * Este realiza a comunicação com o backend para validar se os documentos selecionados não possuem problemas fiscais que
 * a Sefaz não valida, mas acaba sendo incorreto.
 *
 * Created by Leonardo on 02/02/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .controller('DiagnosticoFiscalModalController', DiagnosticoFiscalModalController);

    /** @ngInject */
    function DiagnosticoFiscalModalController($uibModalInstance, selectedRows, ModalUtil,
                                              DiagnosticoFiscalModalService) {
        var vm = this;

        vm.docs = selectedRows;
        vm.quantidadeItens = vm.docs.length;

        vm.diagnosticar = diagnosticar;
        vm.cancelar = cancelar;

        /**
         * Faz o diagnostico fiscal dos documentos
         */
        function diagnosticar() {
            DiagnosticoFiscalModalService.diagnosticar(vm.docs).then(function(result) {
                ModalUtil.msgSuccess(result);
                $uibModalInstance.close();
            }).catch(function(reason) {
                ModalUtil.msgError(reason);
                $uibModalInstance.close();
            });
        }

        /**
         * Fecha o modal
         */
        function cancelar() {
            vm.docs = null;
            $uibModalInstance.close();
        }
    }
    DiagnosticoFiscalModalController.$inject = ['$uibModalInstance', 'selectedRows', 'ModalUtil', 'DiagnosticoFiscalModalService'];
})();
