/**
 * Suíte de teste do Service: EnviarEmailModalService
 *
 * Created by ATILLA on 25/02/2016.
 */
(function() {
    'use strict';

    describe('Teste do Service: EnviarEmailModalService', EnviarEmailModalServiceSpec);

    function EnviarEmailModalServiceSpec() {
        // use module
        beforeEach(module('oobj-directives'));

        // variáveis globais para esta suíte de teste
        var EnviarEmailModalService,
            $log;

        // injeção de dependencia das variáveis globais
        beforeEach(inject(function(_EnviarEmailModalService_, _$log_) {
            EnviarEmailModalService = _EnviarEmailModalService_;
            $log = _$log_;
        }));

        // definição dos testes unitários
        it('Deve enviar documento por email', deveEnviarPorEmail);

        function deveEnviarPorEmail() {
            spyOn($log, 'debug');

            EnviarEmailModalService.enviarPorEmail();

            expect($log.debug).toHaveBeenCalled();
        }
    }
})();
