/**
 * Teste do Service do Modal Imprimir: ImprimirModalService
 *
 * Created by ATILLA on 19/02/2016.
 */
(function() {
    'use strict';

    describe('Teste do Service: ImprimirModalService', ImprimirModalServiceSpec);

    function ImprimirModalServiceSpec() {
        // use module
        beforeEach(module('oobj-directives'));

        // variáveis globais para esta suíte de teste
        var ImprimirModalService,
            $scope,
            $log;

        // injeção de dependencia das variáveis globais
        beforeEach(inject(function(_ImprimirModalService_, _$rootScope_, _$log_) {
            $log = _$log_;
            $scope = _$rootScope_.$new();
            ImprimirModalService = _ImprimirModalService_;
        }));

        // definição dos testes unitários
        it('Deve buscar impressoras no servidor', deveBuscarImpressorasServidor);
        it('Deve imprimir documentos', deveImprimirDocs);

        /**
         * Certifica que é feito uma busca por impressoras no servidor
         */
        function deveBuscarImpressorasServidor() {
            ImprimirModalService.buscarImpressoras().then(function(impressoras) {
                expect(impressoras).toBeDefined();

                impressoras.forEach(function (printer) {
                    expect(printer).toBeDefined();
                    expect(printer.name).toBeDefined();
                });
            });

            $scope.$apply();
        }

        /**
         * Garante que os documentos são impressos
         */
        function deveImprimirDocs() {
            spyOn($log, 'debug');

            ImprimirModalService.imprimir();
            $scope.$apply();

            expect($log.debug).toHaveBeenCalled();
        }
    }
})();
