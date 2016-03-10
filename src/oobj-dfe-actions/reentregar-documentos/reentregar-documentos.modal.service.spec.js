/**
 * Suíte de teste do Service ReentregarDocumentosModalService
 *
 * Created by ATILLA on 09/03/2016.
 */
(function() {
    'use strict';

    describe('Teste do Service: ReentregarDocumentosModalService', ReentregarDocumentosModalServiceSpec);

    function ReentregarDocumentosModalServiceSpec() {
        // use module
        beforeEach(module('oobj-directives'));

        // variáveis globais para esta suíte de teste
        var ReentregarDocumentosModalService,
            $log;

        // injeção de dependencia das variáveis globais
        beforeEach(inject(function(_ReentregarDocumentosModalService_, _$log_) {
            ReentregarDocumentosModalService = _ReentregarDocumentosModalService_;
            $log = _$log_;
        }));

        // definição dos testes unitários
        it('Deve ter parametro definido', deveTerParametroDefinido);

        function deveTerParametroDefinido() {
            spyOn($log, 'debug');

            ReentregarDocumentosModalService.reentregar('Whatever');

            expect($log.debug).toHaveBeenCalledWith('Whatever');
        }
    }
})();
