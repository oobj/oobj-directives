/**
 * Suíte de teste do controlador EventosVinculadosModalController
 *
 * Created by Leonardo on 13/02/2016.
 */
(function() {
    'use strict';

    describe('Teste de Controller: EventosVinculadosModalController', function() {
        var $controller,
            ctrl,
            $scope,
            ModalUtilMock,
            uibModalInstanceMock,
            EventosVinculadosModalService,
            deferred;

        beforeEach(module('oobj-directives'));
        beforeEach(inject(function(_$rootScope_, _$controller_, ModalUtil, _EventosVinculadosModalService_, _$q_) {
            deferred = _$q_.defer();
            $scope = _$rootScope_.$new();
            $controller = _$controller_;
            ModalUtilMock = ModalUtil;
            EventosVinculadosModalService = _EventosVinculadosModalService_;
            uibModalInstanceMock = {};
            uibModalInstanceMock.close = function() {};
            uibModalInstanceMock.dismiss = function(value) { return value; };

            ctrl = $controller('EventosVinculadosModalController', {
                $scope: $scope,
                $uibModalInstance: uibModalInstanceMock,
                selectedRow: [],
                ModalUtil: ModalUtilMock,
                EventosVinculadosModalService: EventosVinculadosModalService
            });
        }));

        it('deve exibir mensagem de sucesso ao baixar PDF', deveBaixarPDF);
        it('deve exibir o modal de sucesso ao baixar XML', deveBaixarXML);
        it('deve adicionar novo valor no watch de "deveExibirEventosDestinatario"', deveBuscarEventosDestinatario);
        it('não deve adicionar novo valor no watch de "deveExibirEventosDestinatario"',
            naoDeveBuscarEventosDestinatario);
        it('deve adicionar novo valor no watch de "deveExibirEventosSefaz"', deveBuscarEventosSefaz);
        it('não deve adicionar novo valor no watch de "deveExibirEventosSefaz"', naoDeveBuscarEventosSefaz);
        it('deve fechar o modal com sucesso', deveFecharModal);
        it('deve adicionar novo valor no watch de "deveExibirEventosEmitente"', deveBuscarEventosEmitente);
        it('não deve adicionar novo valor no watch de "deveExibirEventosEmitente"', naoDeveBuscarEventosEmitente);

        /**
         * Garante que é mockado o download do PDF
         */
        function deveBaixarPDF() {
            spyOn(uibModalInstanceMock, 'close');
            spyOn(ModalUtilMock, 'msgSuccess');

            ctrl.downloadPDF();

            expect(uibModalInstanceMock.close).toHaveBeenCalled();
            expect(ModalUtilMock.msgSuccess)
                .toHaveBeenCalledWith('PDF adicionado na fila de <b>Arquivos para Downloads</b>.');
        }

        /**
         * Garante que é mockado o download do XML
         */
        function deveBaixarXML() {
            spyOn(uibModalInstanceMock, 'close');
            spyOn(ModalUtilMock, 'msgSuccess');

            ctrl.downloadXML();

            expect(uibModalInstanceMock.close).toHaveBeenCalled();
            expect(ModalUtilMock.msgSuccess)
                .toHaveBeenCalledWith('XML adicionado na fila de <b>Arquivos para Downloads</b>.');
        }

        /**
         * Garante que o modal é fechado corretamente
         */
        function deveFecharModal() {
            spyOn(uibModalInstanceMock, 'dismiss');

            ctrl.cancel();

            expect(ctrl.dfe).toBeNull();
            expect(uibModalInstanceMock.dismiss).toHaveBeenCalledWith('cancel');
        }

        /**
         * Garante que é feito a busca por eventos do emitente com watch
         */
        function deveBuscarEventosEmitente() {
            spyOn(EventosVinculadosModalService, 'consultarEventosEmitente').and.returnValue(deferred.promise);

            deferred.resolve(['ok']);
            $scope.$apply('vm.deveExibirEventosEmitente = true');

            expect(EventosVinculadosModalService.consultarEventosEmitente).toHaveBeenCalledTimes(1);
        }

        /**
         * Garante que não é feito a busca por eventos do emitente com watch
         */
        function naoDeveBuscarEventosEmitente() {
            spyOn(EventosVinculadosModalService, 'consultarEventosEmitente');

            $scope.$apply('vm.deveExibirEventosEmitente = false');

            expect(EventosVinculadosModalService.consultarEventosEmitente).not.toHaveBeenCalled();
        }

        /**
         * Garante que é feito a busca por eventos do destinatário com watch
         */
        function deveBuscarEventosDestinatario() {
            spyOn(EventosVinculadosModalService, 'consultarEventosDestinatario').and.returnValue(deferred.promise);
            deferred.resolve(['ok']);

            $scope.$apply('vm.deveExibirEventosDestinatario = true');
            expect(EventosVinculadosModalService.consultarEventosDestinatario).toHaveBeenCalledTimes(1);
        }

        /**
         * Garante que não é feito a busca por eventos do destinatário com watch
         */
        function naoDeveBuscarEventosDestinatario() {
            spyOn(EventosVinculadosModalService, 'consultarEventosDestinatario');

            $scope.$apply('vm.deveExibirEventosDestinatario = false');
            expect(EventosVinculadosModalService.consultarEventosDestinatario).not.toHaveBeenCalled();
        }

        /**
         * Garante que é feito a busca por eventos da sefaz com watch
         */
        function deveBuscarEventosSefaz() {
            spyOn(EventosVinculadosModalService, 'consultarEventosSefaz').and.returnValue(deferred.promise);
            deferred.resolve(['ok']);

            $scope.$apply('vm.deveExibirEventosSefaz = true');
            expect(EventosVinculadosModalService.consultarEventosSefaz).toHaveBeenCalledTimes(1);
        }

        /**
         * Garante que não é feito a busca por eventos da sefaz com watch
         */
        function naoDeveBuscarEventosSefaz() {
            spyOn(EventosVinculadosModalService, 'consultarEventosSefaz');

            $scope.$apply('vm.deveExibirEventosSefaz = false');

            expect(EventosVinculadosModalService.consultarEventosSefaz).not.toHaveBeenCalled();
        }
    });
})();