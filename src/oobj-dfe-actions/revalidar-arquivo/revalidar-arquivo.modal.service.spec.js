/**
 * Suíte de teste do Service RevalidarArquivoModalService
 *
 * Created by ATILLA on 09/03/2016.
 */
(function() {
    'use strict';

    describe('Teste do Service: RevalidarArquivoModalService', RevalidarArquivoModalServiceSpec);

    function RevalidarArquivoModalServiceSpec() {
        // use module
        beforeEach(module('oobj-directives'));

        // variáveis globais para esta suíte de teste
        var RevalidarArquivoModalService,
            $log;

        // injeção de dependencia das variáveis globais
        beforeEach(inject(function(_RevalidarArquivoModalService_, _$log_) {
            RevalidarArquivoModalService = _RevalidarArquivoModalService_;
            $log = _$log_;
        }));

        // definição dos testes unitários
        it('Deve ter parametro definido', deveTerParametroDefinido);

        function deveTerParametroDefinido() {
            spyOn($log, 'debug');

            RevalidarArquivoModalService.revalidar('Whatever');

            expect($log.debug).toHaveBeenCalledWith('Whatever');
        }
    }
})();
