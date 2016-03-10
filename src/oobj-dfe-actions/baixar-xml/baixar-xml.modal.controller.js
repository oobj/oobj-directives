/**
 * Controlador do modal de baixar XML
 *
 * Created by Leonardo on 28/01/2016.
 */
(function() {
    'use strict';

    angular.module('oobj-directives')
        .controller('BaixarXMLModalController', BaixarXMLModalController);

    /** @ngInject */
    function BaixarXMLModalController($uibModalInstance, BaixarXMLModalService, selectedRows) {
        var vm = this;

        // constantes
        var PRIMEIRO_ITEM = 0;

        // variaveis do controlador
        vm.quantidade = selectedRows.length;
        vm.dfe = selectedRows[PRIMEIRO_ITEM];
        vm.modelo = vm.dfe ? vm.dfe.modelo : 'NF-e';

        vm.proc = true;
        vm.eventos = false;

        // variaveis de validao
        vm.invalid = false;
        vm.msgValidacao = null;

        // funcoes
        vm.download = download;

        function download() {
            var idsArray = [];

            angular.forEach(selectedRows, function(item) {
                idsArray.push(item.id);
            });

            // verifica se o formulário foi preenchido corretamente e faz exibe a validacao
            if (!isInvalid()) {
                BaixarXMLModalService.baixar(idsArray, vm.proc, vm.eventos, vm.modelo).then(function(result) {
                    vm.invalid = false;
                    vm.msgValidacao = result;

                    $uibModalInstance.close();
                }).catch(function(err) {
                    vm.invalid = true;
                    vm.msgValidacao = err;
                });
            }
        }

        /**
         * Verifica se o formulário não foi preenchido corretamente
         *
         * @returns {boolean}
         */
        function isInvalid() {
            vm.invalid = false;

            if (!vm.proc && !vm.eventos) {
                vm.invalid = true;
                vm.msgValidacao = 'Ops! Você deve selecionar <b>Proc ' + vm.modelo +
                    '</b> ou <b>Proc Eventos</b> antes de fazer download.';
            }

            return vm.invalid;
        }

        /**
         * Fecha o modal
         */
        vm.cancel = function() {
            $uibModalInstance.close();
        };
    }
    BaixarXMLModalController.$inject = ['$uibModalInstance', 'BaixarXMLModalService', 'selectedRows'];
})();
