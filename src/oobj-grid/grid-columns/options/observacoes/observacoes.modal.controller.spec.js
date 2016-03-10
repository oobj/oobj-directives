/**
 * Teste unitário para observacoes.modal.controller.js.
 *
 * Created by Leonardo on 15/02/2016.
 */
(function() {
    'use strict';

    describe('Teste de Controller: ObservacoesModalController', function() {
        var $controller,
            ctrl,
            ModalUtil,
            ObservacoesModalService,
            uibModalInstanceMock,
            deferred,
            $scope,
            $q;

        beforeEach(module('oobj-directives'));
        beforeEach(inject(function(_$controller_, _ModalUtil_, _ObservacoesModalService_, _$q_, _$rootScope_) {
            $q = _$q_;
            $scope = _$rootScope_.$new();
            deferred = _$q_.defer();

            $controller = _$controller_;
            ModalUtil = _ModalUtil_;
            ObservacoesModalService = _ObservacoesModalService_;
            uibModalInstanceMock = {
                dismiss: function() {}
            };

            ctrl = $controller('ObservacoesModalController', {
                $uibModalInstance: uibModalInstanceMock,
                selectedRow: {},
                ModalUtil: ModalUtil,
                ObservacoesModalService: ObservacoesModalService
            });
        }));

        it('Deve salvar documento e exibir mensagem de sucesso', deveSalvarObservacoes);
        it('Deve habilitar edicao', deveHabilitarEdicao);
        it('Deve cancelar edicao', deveCancelarEdicao);
        it('deve fechar o modal ao clicar em cancelar', deveFecharModal);

        /**
         * Garante que as observacoes são salvas com sucesso
         */
        function deveSalvarObservacoes() {
            spyOn(ObservacoesModalService, 'salvar').and.returnValue(deferred.promise);

            ctrl.habilitarEdicao = true;

            ctrl.salvar();
            deferred.resolve('Tudo certo!');
            $scope.$apply();

            expect(ctrl.habilitarEdicao).toBe(false);
            expect(ctrl.observacao).toBeDefined();
            expect(ctrl.resultado).not.toBeNull();
            expect(ObservacoesModalService.salvar).toHaveBeenCalled();
        }

        /**
         * Garante que a edicao e habilitada quando necessario
         */
        function deveHabilitarEdicao() {
            expect(ctrl.habilitarEdicao).toBe(false);

            ctrl.editar();

            expect(ctrl.habilitarEdicao).toBe(true);
            expect(ctrl.resultado).toBeNull();
        }

        /**
         * Garante que seja possivel cancelar uma edicao
         */
        function deveCancelarEdicao() {
            spyOn(ObservacoesModalService, 'consultar').and.returnValue(deferred.promise);

            ctrl.observacao = null;

            ctrl.cancelarEdicao();
            deferred.resolve('Tudo certo!');
            $scope.$apply();

            expect(ctrl.habilitarEdicao).toBe(false);
            expect(ctrl.observacao).toBeDefined();
            expect(ctrl.resultado).toBeNull();
            expect(ObservacoesModalService.consultar).toHaveBeenCalled();
        }

        /**
         * Garante que o modal é fechado corretamente
         */
        function deveFecharModal() {
            spyOn(uibModalInstanceMock, 'dismiss');

            ctrl.cancelar();

            expect(ctrl.dfe).toBeNull();
            expect(uibModalInstanceMock.dismiss).toHaveBeenCalled();
        }
    });
})();