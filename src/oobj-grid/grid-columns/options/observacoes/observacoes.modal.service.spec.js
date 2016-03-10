/**
 * Suíte de teste do Service ObservacoesModalService
 *
 * Created by ATILLA on 08/03/2016.
 */
(function() {
    'use strict';

    describe('Teste do Service: ObservacoesModalService', ObservacoesModalServiceSpec);

    function ObservacoesModalServiceSpec() {
        // use module
        beforeEach(module('oobj-directives'));

        // variáveis globais para esta suíte de teste
        var ObservacoesModalService,
            $log;

        // injeção de dependencia das variáveis globais
        beforeEach(inject(function(_ObservacoesModalService_, _$log_) {
            ObservacoesModalService = _ObservacoesModalService_;
            $log = _$log_;

            spyOn($log, 'debug');
        }));

        // definição dos testes unitários
        it('Deve salvar observacoes', deveSalvarObservacoes);
        it('Deve excluir observacoes', deveExcluirObservacoes);
        it('Deve consultar observacoes', deveConsultarObservacoes);

        function deveSalvarObservacoes() {
            ObservacoesModalService.salvar();
            expect($log.debug).toHaveBeenCalled();
        }

        function deveExcluirObservacoes() {
            ObservacoesModalService.excluir();
            expect($log.debug).toHaveBeenCalled();
        }

        function deveConsultarObservacoes() {
            ObservacoesModalService.consultar();
            expect($log.debug).toHaveBeenCalled();
        }
    }
})();
