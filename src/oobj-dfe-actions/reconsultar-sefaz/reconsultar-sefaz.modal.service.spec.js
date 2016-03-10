/**
 * Suíte de teste do Service ReconsultarSefazModalService
 *
 * Created by ATILLA on 09/03/2016.
 */
(function() {
    'use strict';

    describe('Teste do Service: ReconsultarSefazModalService', ReconsultarSefazModalServiceSpec);

    function ReconsultarSefazModalServiceSpec() {
        // use module
        beforeEach(module('oobj-directives'));

        // variáveis globais para esta suíte de teste
        var ReconsultarSefazModalService,
            $log;

        // injeção de dependencia das variáveis globais
        beforeEach(inject(function(_ReconsultarSefazModalService_, _$log_) {
            ReconsultarSefazModalService = _ReconsultarSefazModalService_;
            $log = _$log_;
        }));

        // definição dos testes unitários
        it('Deve ter parametro definido', deveTerParametroDefinido);

        function deveTerParametroDefinido() {
            spyOn($log, 'debug');

            ReconsultarSefazModalService.reconsultar('Whatever');

            expect($log.debug).toHaveBeenCalledWith('Whatever');
        }
    }
})();
