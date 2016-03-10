/**
 * Suíte de teste do Service ReconhecerDocumentosModalService
 *
 * Created by ATILLA on 09/03/2016.
 */
(function() {
    'use strict';

    describe('Teste do Service: ReconhecerDocumentosModalService', ReconhecerDocumentosModalServiceSpec);

    function ReconhecerDocumentosModalServiceSpec() {
        // use module
        beforeEach(module('oobj-directives'));

        // variáveis globais para esta suíte de teste
        var ReconhecerDocumentosModalService,
            $log;

        // injeção de dependencia das variáveis globais
        beforeEach(inject(function(_ReconhecerDocumentosModalService_, _$log_) {
            ReconhecerDocumentosModalService = _ReconhecerDocumentosModalService_;
            $log = _$log_;
        }));

        // definição dos testes unitários
        it('Deve ter parametro definido', deveTerParametroDefinido);

        function deveTerParametroDefinido() {
            spyOn($log, 'debug');

            ReconhecerDocumentosModalService.reconhecer('Whatever');

            expect($log.debug).toHaveBeenCalledWith('Whatever');
        }
    }
})();
