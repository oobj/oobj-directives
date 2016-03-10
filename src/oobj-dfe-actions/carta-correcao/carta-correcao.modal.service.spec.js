/**
 * Suíte de teste do Service CartaCorrecaoModalService
 *
 * Created by ATILLA on 25/02/2016.
 */
(function() {
    'use strict';

    describe('Teste do Service: CartaCorrecaoModalService', CartaCorrecaoModalServiceSpec);

    function CartaCorrecaoModalServiceSpec() {
        // use module
        beforeEach(module('oobj-directives'));

        // variáveis globais para esta suíte de teste
        var CartaCorrecaoModalService,
            $log;

        // injeção de dependencia das variáveis globais
        beforeEach(inject(function(_CartaCorrecaoModalService_, _$log_) {
            CartaCorrecaoModalService = _CartaCorrecaoModalService_;
            $log = _$log_;
        }));

        // definição dos testes unitários
        it('Deve ter parametro definido', deveTerParametroDefinido);

        function deveTerParametroDefinido() {
            spyOn($log, 'debug');

            CartaCorrecaoModalService.registrarEvento('Whatever');

            expect($log.debug).toHaveBeenCalledWith('Whatever');
        }
    }
})();
