/**
 * Suíte de teste do Service RegistrarEntradaModalService
 *
 * Created by ATILLA on 09/03/2016.
 */
(function() {
    'use strict';

    describe('Teste do Service: RegistrarEntradaModalService', RegistrarEntradaModalServiceSpec);

    function RegistrarEntradaModalServiceSpec() {
        // use module
        beforeEach(module('oobj-directives'));

        // variáveis globais para esta suíte de teste
        var RegistrarEntradaModalService,
            $log;

        // injeção de dependencia das variáveis globais
        beforeEach(inject(function(_RegistrarEntradaModalService_, _$log_) {
            RegistrarEntradaModalService = _RegistrarEntradaModalService_;
            $log = _$log_;
        }));

        // definição dos testes unitários
        it('Deve ter parametro definido', deveTerParametroDefinido);

        function deveTerParametroDefinido() {
            spyOn($log, 'debug');

            RegistrarEntradaModalService.registrarEntrada('Whatever');

            expect($log.debug).toHaveBeenCalledWith('Whatever');
        }
    }
})();
