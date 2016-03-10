/**
 * Suíte de teste do Service RetornoAutorizacaoModalService
 *
 * Created by ATILLA on 09/03/2016.
 */
(function() {
    'use strict';

    describe('Teste do Service: RetornoAutorizacaoModalService', RetornoAutorizacaoModalServiceSpec);

    function RetornoAutorizacaoModalServiceSpec() {
        // use module
        beforeEach(module('oobj-directives'));

        // variáveis globais para esta suíte de teste
        var RetornoAutorizacaoModalService,
            $log;

        // injeção de dependencia das variáveis globais
        beforeEach(inject(function(_RetornoAutorizacaoModalService_, _$log_) {
            RetornoAutorizacaoModalService = _RetornoAutorizacaoModalService_;
            $log = _$log_;
        }));

        // definição dos testes unitários
        it('Deve ter parametro definido', deveTerParametroDefinido);

        function deveTerParametroDefinido() {
            spyOn($log, 'debug');

            RetornoAutorizacaoModalService.gerarRetorno('Whatever');

            expect($log.debug).toHaveBeenCalledWith('Whatever');
        }
    }
})();
