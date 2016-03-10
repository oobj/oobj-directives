/**
 * Suíte de teste do Service EventosVinculadosModalService
 *
 * Created by ATILLA on 08/03/2016.
 */
(function() {
    'use strict';

    describe('Teste do Service: EventosVinculadosModalService', EventosVinculadosModalServiceSpec);

    function EventosVinculadosModalServiceSpec() {
        // use module
        beforeEach(module('oobj-directives'));

        // variáveis globais para esta suíte de teste
        var EventosVinculadosModalService,
            $log,
            $scope;

        // injeção de dependencia das variáveis globais
        beforeEach(inject(function(_EventosVinculadosModalService_, _$log_, _$rootScope_) {
            $scope = _$rootScope_.$new();
            EventosVinculadosModalService = _EventosVinculadosModalService_;
            $log = _$log_;

            spyOn($log, 'debug');
        }));

        // definição dos testes unitários
        it('Deve consultar Eventos Emitente', deveConsultarEventosEmitente);
        it('Deve consultar Eventos Destinatario', deveConsultarEventosDestinatario);
        it('Deve consultar Eventos Sefaz', deveConsultarEventosSefaz);

        /**
         * Garante que é feito a busca por eventos do emitente
         */
        function deveConsultarEventosEmitente() {
            EventosVinculadosModalService.consultarEventosEmitente({ id: 1 }).then(function(eventos) {
                expect(eventos).toBeDefined();
            });

            $scope.$apply();
        }

        /**
         * Garante que é feito a busca por eventos do destinatário
         */
        function deveConsultarEventosDestinatario() {
            EventosVinculadosModalService.consultarEventosDestinatario({ id: 1 }).then(function(eventos) {
                expect(eventos).toBeDefined();
            });

            $scope.$apply();
        }

        /**
         * Garante que é feito a busca por eventos da sefaz
         */
        function deveConsultarEventosSefaz() {
            EventosVinculadosModalService.consultarEventosSefaz({ id: 1 }).then(function(eventos) {
                expect(eventos).toBeDefined();
            });

            $scope.$apply();
        }
    }
})();
