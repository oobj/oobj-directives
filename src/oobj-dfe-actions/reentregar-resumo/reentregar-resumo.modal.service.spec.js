/**
 * Suíte de teste do Service ReentregarResumoModalService
 *
 * Created by ATILLA on 09/03/2016.
 */
(function() {
    'use strict';

    describe('Teste do Service: ReentregarResumoModalService', ReentregarResumoModalServiceSpec);

    function ReentregarResumoModalServiceSpec() {
        // use module
        beforeEach(module('oobj-directives'));

        // variáveis globais para esta suíte de teste
        var ReentregarResumoModalService,
            $log;

        // injeção de dependencia das variáveis globais
        beforeEach(inject(function(_ReentregarResumoModalService_, _$log_) {
            ReentregarResumoModalService = _ReentregarResumoModalService_;
            $log = _$log_;
        }));

        // definição dos testes unitários
        it('Deve ter parametro definido', deveTerParametroDefinido);

        function deveTerParametroDefinido() {
            spyOn($log, 'debug');

            ReentregarResumoModalService.reentregar('Whatever');

            expect($log.debug).toHaveBeenCalledWith('Whatever');
        }
    }
})();
