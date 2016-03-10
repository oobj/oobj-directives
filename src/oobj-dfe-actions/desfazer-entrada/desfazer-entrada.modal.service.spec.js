/**
 * Suíte de teste do Service DesfazerEntradaModalService
 *
 * Created by ATILLA on 09/03/2016.
 */
(function() {
    'use strict';

    describe('Teste do Service: DesfazerEntradaModalService', DesfazerEntradaModalServiceSpec);

    function DesfazerEntradaModalServiceSpec() {
        // use module
        beforeEach(module('oobj-directives'));

        // variáveis globais para esta suíte de teste
        var DesfazerEntradaModalService,
            $log;

        // injeção de dependencia das variáveis globais
        beforeEach(inject(function(_DesfazerEntradaModalService_, _$log_) {
            DesfazerEntradaModalService = _DesfazerEntradaModalService_;
            $log = _$log_;
        }));

        // definição dos testes unitários
        it('Deve ter parametro definido', deveTerParametroDefinido);

        function deveTerParametroDefinido() {
            spyOn($log, 'debug');

            DesfazerEntradaModalService.desfazerEntrada('Whatever');

            expect($log.debug).toHaveBeenCalledWith('Whatever');
        }
    }
})();
