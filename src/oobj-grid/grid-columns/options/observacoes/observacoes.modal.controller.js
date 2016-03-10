/**
 * Controller responsável por adicionar observações a um determinado documento.
 *
 * Created by ATILLA on 04/02/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .controller('ObservacoesModalController', ObservacoesModalController);

    /** @ngInject */
    function ObservacoesModalController($uibModalInstance, selectedRow, ObservacoesModalService){
        var vm = this;

        vm.dfe = selectedRow;
        vm.observacao = {};
        vm.habilitarEdicao = false;

        vm.editar = editar;
        vm.salvar = salvar;
        vm.cancelarEdicao = cancelarEdicao;
        vm.cancelar = cancelar;

        consultar();

        /**
         * Habilita ou desabilita a edição da observação
         */
        function editar() {
            vm.habilitarEdicao = !vm.habilitarEdicao;
            vm.resultado = null;
        }

        /**
         * Salva as observações do documento
         */
        function salvar() {
            vm.observacao.data = new Date();

            ObservacoesModalService.salvar(vm.observacao, vm.dfe).then(function(data) {
                // volta a observação para o modo readonly
                editar();
                vm.resultado = data;
            });
        }

        /**
         * Volta as observações ao estado original e readonly
         */
        function cancelarEdicao() {
            consultar();

            vm.habilitarEdicao = false;
            vm.resultado = null;
        }

        /**
         * Fecha o modal e cancela as alterações
         */
        function cancelar() {
            vm.dfe = null;
            $uibModalInstance.dismiss('cancel');
        }

        /**
         * Consulta as observações do documento
         */
        function consultar() {
            ObservacoesModalService.consultar(vm.dfe).then(function(data) {
                vm.observacao = data;
            });
        }
    }
    ObservacoesModalController.$inject = ['$uibModalInstance', 'selectedRow', 'ObservacoesModalService'];
})();
