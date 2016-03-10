/**
 * Controller responsável por consultar e exibir eventos vinculados a um determinado documento.
 *
 * Created by ATILLA on 01/02/2016
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .controller('EventosVinculadosModalController', EventosVinculadosModalController);

    EventosVinculadosModalController.$inject = ['$scope', '$uibModalInstance', 'selectedRow', 'ModalUtil',
        'EventosVinculadosModalService'];

    /** @ngInject */
    function EventosVinculadosModalController($scope, $uibModalInstance, selectedRow, ModalUtil,
                                              EventosVinculadosModalService){
        var vm = this;

        vm.dfe = selectedRow;
        vm.deveExibirEventosEmitente = true;
        vm.deveExibirEventosDestinatario = true;
        vm.deveExibirEventosSefaz = true;

        addOnChangeExibirEventos();
        buscarEventos();

        vm.downloadPDF = downloadPDF;
        vm.downloadXML = downloadXML;
        vm.cancel = cancel;

        function downloadPDF() {
            ModalUtil.msgSuccess('PDF adicionado na fila de <b>Arquivos para Downloads</b>.');
            $uibModalInstance.close();
        }

        function downloadXML() {
            ModalUtil.msgSuccess('XML adicionado na fila de <b>Arquivos para Downloads</b>.');
            $uibModalInstance.close();
        }

        function cancel() {
            vm.dfe = null;
            $uibModalInstance.dismiss('cancel');
        }

        /**
         * Inicializa os eventos
         */
        function buscarEventos() {
            EventosVinculadosModalService.consultarEventosEmitente(vm.dfe).then(function (eventos) {
                vm.eventosEmitente = eventos;
            });

            EventosVinculadosModalService.consultarEventosDestinatario(vm.dfe).then(function (eventos) {
                vm.eventosDestinatario = eventos;
            });

            EventosVinculadosModalService.consultarEventosSefaz(vm.dfe).then(function (eventos) {
                vm.eventosSefaz = eventos;
            });
        }

        /**
         * Adiciona observers para consultar eventos vinculados (uma espécie de onChange)
         */
        function addOnChangeExibirEventos() {
            // Adiciona watch nos eventos do emitente
            $scope.$watch('vm.deveExibirEventosEmitente', function (newVal) {
                if (newVal === true) {
                    EventosVinculadosModalService.consultarEventosEmitente(vm.dfe).then(function (eventos) {
                        vm.eventosEmitente = eventos;
                    });
                }
            });

            // Adiciona watch nos eventos do destinatário
            $scope.$watch('vm.deveExibirEventosDestinatario', function (newVal) {
                if (newVal === true) {
                    EventosVinculadosModalService.consultarEventosDestinatario(vm.dfe).then(function (eventos) {
                        vm.eventosDestinatario = eventos;
                    });
                }
            });

            // Adiciona watch nos eventos da sefaz
            $scope.$watch('vm.deveExibirEventosSefaz', function (newVal) {
                if (newVal === true) {
                    EventosVinculadosModalService.consultarEventosSefaz(vm.dfe).then(function (eventos) {
                        vm.eventosSefaz = eventos;
                    });
                }
            });
        }
    }
})();
