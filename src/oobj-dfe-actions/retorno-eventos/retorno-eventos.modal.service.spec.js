/**
 * Suíte de teste do Service RetornoEventosModalService
 *
 * Created by ATILLA on 09/03/2016.
 */
(function() {
    'use strict';

    describe('Teste do Service: RetornoEventosModalService', RetornoEventosModalServiceSpec);

    function RetornoEventosModalServiceSpec() {
        // use module
        beforeEach(module('oobj-directives'));

        // variáveis globais para esta suíte de teste
        var RetornoEventosModalService,
            $log;

        // injeção de dependencia das variáveis globais
        beforeEach(inject(function(_RetornoEventosModalService_, _$log_) {
            RetornoEventosModalService = _RetornoEventosModalService_;
            $log = _$log_;
        }));

        // definição dos testes unitários
        it('Deve ter parametro definido', deveTerParametroDefinido);

        function deveTerParametroDefinido() {
            spyOn($log, 'debug');

            RetornoEventosModalService.gerarRetorno('Whatever');

            expect($log.debug).toHaveBeenCalledWith('Whatever');
        }
    }
})();
