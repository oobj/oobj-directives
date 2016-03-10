/**
 * Suíte de teste do Service DiagnosticoFiscalModalService
 *
 * Created by ATILLA on 09/03/2016.
 */
(function() {
    'use strict';

    describe('Teste do Service: DiagnosticoFiscalModalService', DiagnosticoFiscalModalServiceSpec);

    function DiagnosticoFiscalModalServiceSpec() {
        // use module
        beforeEach(module('oobj-directives'));

        // variáveis globais para esta suíte de teste
        var DiagnosticoFiscalModalService,
            $log;

        // injeção de dependencia das variáveis globais
        beforeEach(inject(function(_DiagnosticoFiscalModalService_, _$log_) {
            DiagnosticoFiscalModalService = _DiagnosticoFiscalModalService_;
            $log = _$log_;
        }));

        // definição dos testes unitários
        it('Deve ter parametro definido', deveTerParametroDefinido);

        function deveTerParametroDefinido() {
            spyOn($log, 'debug');

            DiagnosticoFiscalModalService.diagnosticar('Whatever');

            expect($log.debug).toHaveBeenCalledWith('Whatever');
        }
    }
})();
