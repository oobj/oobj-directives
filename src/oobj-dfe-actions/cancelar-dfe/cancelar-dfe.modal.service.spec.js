/**
 * Suíte de teste do Service CancelarDFeModalService
 *
 * Created by ATILLA on 25/02/2016.
 */
(function() {
    'use strict';

    describe('Teste do Service: CancelarDFeModalService', CancelarDFeModalServiceSpec);

    function CancelarDFeModalServiceSpec() {
        // use module
        beforeEach(module('oobj-directives'));

        // variáveis globais para esta suíte de teste
        var CancelarDFeModalService,
            $log;

        // injeção de dependencia das variáveis globais
        beforeEach(inject(function(_CancelarDFeModalService_, _$log_) {
            CancelarDFeModalService = _CancelarDFeModalService_;
            $log = _$log_;
        }));

        // definição dos testes unitários
        it('Deve ter parametro definido', deveTerParametroDefinido);

        function deveTerParametroDefinido() {
            spyOn($log, 'debug');

            CancelarDFeModalService.registrarEvento('Whatever');

            expect($log.debug).toHaveBeenCalledWith('Whatever');
        }
    }
})();
