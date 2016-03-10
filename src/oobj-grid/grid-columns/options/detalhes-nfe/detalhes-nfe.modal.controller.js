/**
 * Controller responsável por consultar e exibir os detalhes de uma determinada NF-e.
 *
 * Created by Danilo on 19/01/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .controller('DetalhesNfeController', DetalhesNfeController);

    /** @ngInject */
    function DetalhesNfeController($uibModalInstance, selectedRow,
                                   DetalhesNfeService, ModeloDocumento, OobjToastService) {
        var vm = this;

        vm.modeloDocumento = ModeloDocumento.NFE;

        vm.title = 'Detalhes da NF-e';
        vm.row = selectedRow;
        vm.dfe = {};
        vm.detalhesProduto = [];

        // Executa a consulta dos dados da NF-e no back-end.
        getNfe(vm.row.id);

        vm.cancel = function () {
            vm.dfe = null;
            $uibModalInstance.dismiss('cancel');
        };

        /**
         * Obtém os detalhes de um produto específico.
         *
         * @param index o indice do produto na NF-e (começa em 0)
         */
        vm.getDetalhesProduto = function (index) {
            if (vm.detalhesProduto[index] === undefined) {
                DetalhesNfeService.getDetalhesProduto(vm.dfe.id, index)
                    .then(successHandler).catch(errorHandler);
            }

            function successHandler(response) {
                vm.detalhesProduto[index] = response.data;
            }

            function errorHandler() {
                OobjToastService.msgError('Houve uma falha ao obter os detalhes do produto. ' +
                    'Tente novamente mais tarde.', 'Falha!');
            }
        };

        /**
         * Obtém os detalhes da NF-e.
         *
         * @param id o ID da NF-e na base de dados
         */
        function getNfe(id) {
            DetalhesNfeService.getDetalhesNfe(id).then(successHandler).catch(errorHandler);

            function successHandler(response) {
                vm.dfe = response.data;
            }

            function errorHandler() {
                OobjToastService.msgError('Houve uma falha ao obter os detalhes da NF-e. ' +
                    'Tente novamente mais tarde.', 'Falha!');
            }
        }
    }
    DetalhesNfeController.$inject = ['$uibModalInstance', 'selectedRow', 'DetalhesNfeService', 'ModeloDocumento', 'OobjToastService'];
})();
