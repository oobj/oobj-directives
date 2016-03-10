/**
 * Suíte de teste do controller CartaCorrecaoModalController
 *
 * Created by ATILLA on 25/02/2016.
 */
(function() {
    'use strict';

    describe('Teste do Service: CartaCorrecaoModalController', CartaCorrecaoModalControllerSpec);

    function CartaCorrecaoModalControllerSpec() {
        // use module
        beforeEach(module('oobj-directives'));

        // variáveis globais para esta suíte de teste
        var CartaCorrecaoModalController,
            CartaCorrecaoModalService,
            $controller,
            uibModalInstanceMock,
            ModalUtil,
            ctrl,
            deferred,
            $scope;

        // injeção de dependencia das variáveis globais
        beforeEach(inject(function(_$controller_, _ModalUtil_, _CartaCorrecaoModalService_, _$q_, _$rootScope_) {
            deferred = _$q_.defer();
            $scope = _$rootScope_.$new();
            CartaCorrecaoModalService = _CartaCorrecaoModalService_;
            $controller = _$controller_;
            uibModalInstanceMock = {
                close: function() {},
                dismiss: function(message) {}
            };
            ModalUtil = _ModalUtil_;
            ctrl = $controller('CartaCorrecaoModalController', {
                $uibModalInstance: uibModalInstanceMock,
                selectedRows: [],
                ModalUtil: _ModalUtil_,
                CartaCorrecaoModalService: CartaCorrecaoModalService
            });

            spyOn(CartaCorrecaoModalService, 'registrarEvento').and.returnValue(deferred.promise);
        }));

        // definição dos testes unitários
        it('Deve fechar o modal', deveFecharModal);
        it('Deve desfazer a ação de registrar evento', deveDesfazerCartaCorrecao);
        it('Deve registrar o evento de carta de correcao com sucesso', deveRegistrarEventoCartaCorrecao);
        it('Não deve registrar o evento / validação no backend', naoDeveRegistrarEventoValidandoJustificativaBackend);
        it('Não deve registrar o evento / justificativa invalida', naoDeveRegistrarEventoValidandoJustificativa);
        it('Não deve registrar o evento / data invalida', naoDeveRegistrarEventoValidandoData);
        it('Não deve registrar o evento / DFe invalido', naoDeveRegistrarEventoValidandoDFe);
        it('Deve alterar variavel de controle para confirmar o evento', deveAlterarVariavelParaConfirmacao);

        function deveFecharModal() {
            spyOn(uibModalInstanceMock, 'dismiss');

            ctrl.cancelar();

            expect(ctrl.dfe).toBeNull();
            expect(uibModalInstanceMock.dismiss).toHaveBeenCalled();
        }

        function deveDesfazerCartaCorrecao() {
            ctrl.desfazerEvento();

            expect(ctrl.confirmar).toBe(false);
        }

        function deveRegistrarEventoCartaCorrecao() {
            spyOn(ModalUtil, 'msgSuccess');
            spyOn(uibModalInstanceMock, 'close');

            ctrl.dfe = {ave: 'Maria'};
            ctrl.evento.data = new Date();
            ctrl.evento.justificativa = 'Lula preso, Lula preso, Lula preso, Lula preso, Lula preso, Lula preso, ' +
                'Lula preso, Lula preso, Lula preso, Lula preso, Lula preso, Lula preso, Lula preso, Lula preso';

            ctrl.registrar();
            deferred.resolve('all right!');
            $scope.$apply();

            expect(ctrl.invalid).toBe(false);
            expect(ctrl.msgValidacao).toBe('all right!');
            expect(CartaCorrecaoModalService.registrarEvento).toHaveBeenCalled();
            expect(ModalUtil.msgSuccess).toHaveBeenCalled();
            expect(uibModalInstanceMock.close).toHaveBeenCalled();
        }

        function naoDeveRegistrarEventoValidandoJustificativaBackend() {
            spyOn(ModalUtil, 'msgSuccess');
            spyOn(uibModalInstanceMock, 'close');

            ctrl.dfe = {ave: 'Maria'};
            ctrl.evento.data = new Date();
            ctrl.evento.justificativa = 'Lula preso, Lula preso, Lula preso, Lula preso, Lula preso, Lula preso, ' +
                'Lula preso, Lula preso, Lula preso, Lula preso, Lula preso, Lula preso, Lula preso, Lula preso';

            ctrl.registrar();
            deferred.reject('damn it!');
            $scope.$apply();

            expect(ctrl.invalid).toBe(true);
            expect(ctrl.msgValidacao).toBe('damn it!');
            expect(CartaCorrecaoModalService.registrarEvento).toHaveBeenCalled();
            expect(ModalUtil.msgSuccess).not.toHaveBeenCalled();
            expect(uibModalInstanceMock.close).not.toHaveBeenCalled();
        }

        function naoDeveRegistrarEventoValidandoJustificativa() {
            spyOn(ModalUtil, 'msgSuccess');
            spyOn(uibModalInstanceMock, 'close');

            ctrl.dfe = {ave: 'Maria'};
            ctrl.evento.data = new Date();
            // menos de 15 caracteres
            ctrl.evento.justificativa = 'Lula preso.';

            ctrl.registrar();

            expect(ctrl.invalid).toBe(true);
            expect(ctrl.msgValidacao).not.toBeNull();
            expect(CartaCorrecaoModalService.registrarEvento).not.toHaveBeenCalled();
            expect(ModalUtil.msgSuccess).not.toHaveBeenCalled();
            expect(uibModalInstanceMock.close).not.toHaveBeenCalled();
        }

        function naoDeveRegistrarEventoValidandoData() {
            spyOn(ModalUtil, 'msgSuccess');
            spyOn(uibModalInstanceMock, 'close');

            ctrl.dfe = {ave: 'Maria'};
            ctrl.evento.data = null;
            ctrl.evento.justificativa = 'Lula preso, Lula preso, Lula preso, Lula preso, Lula preso.';

            ctrl.registrar();

            expect(ctrl.invalid).toBe(true);
            expect(ctrl.msgValidacao).not.toBeNull();
            expect(CartaCorrecaoModalService.registrarEvento).not.toHaveBeenCalled();
            expect(ModalUtil.msgSuccess).not.toHaveBeenCalled();
            expect(uibModalInstanceMock.close).not.toHaveBeenCalled();
        }

        function naoDeveRegistrarEventoValidandoDFe() {
            spyOn(ModalUtil, 'msgSuccess');
            spyOn(uibModalInstanceMock, 'close');

            ctrl.dfe = null;
            ctrl.evento.data = new Date();
            ctrl.evento.justificativa = 'Lula preso, Lula preso, Lula preso, Lula preso, Lula preso.';

            ctrl.registrar();

            expect(ctrl.invalid).toBe(true);
            expect(ctrl.msgValidacao).not.toBeNull();
            expect(CartaCorrecaoModalService.registrarEvento).not.toHaveBeenCalled();
            expect(ModalUtil.msgSuccess).not.toHaveBeenCalled();
            expect(uibModalInstanceMock.close).not.toHaveBeenCalled();
        }

        function deveAlterarVariavelParaConfirmacao() {
            ctrl.confirmar = false;

            ctrl.exibirConfirmacao();

            expect(ctrl.confirmar).toBe(true);
        }
    }
})();
