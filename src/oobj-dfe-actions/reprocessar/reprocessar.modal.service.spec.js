/**
 * Suíte de teste do Service ReprocessarModalService
 *
 * Created by ATILLA on 09/03/2016.
 */
(function() {
    'use strict';

    describe('Teste do Service: ReprocessarModalService', ReprocessarModalServiceSpec);

    function ReprocessarModalServiceSpec() {
        // use module
        beforeEach(module('oobj-directives'));

        // variáveis globais para esta suíte de teste
        var ReprocessarModalService,
            $log;

        // injeção de dependencia das variáveis globais
        beforeEach(inject(function(_ReprocessarModalService_, _$log_) {
            ReprocessarModalService = _ReprocessarModalService_;
            $log = _$log_;
        }));

        // definição dos testes unitários
        it('Deve ter parametro definido', deveTerParametroDefinido);

        function deveTerParametroDefinido() {
            spyOn($log, 'debug');

            ReprocessarModalService.reprocessar('Whatever');

            expect($log.debug).toHaveBeenCalledWith('Whatever');
        }
    }
})();
