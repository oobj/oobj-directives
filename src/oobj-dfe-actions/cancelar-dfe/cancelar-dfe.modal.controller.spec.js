/**
 * Suíte de teste do controller CancelarDFeModalController
 *
 * Created by ATILLA on 25/02/2016.
 */
(function() {
    'use strict';

    describe('Teste do Service: CancelarDFeModalController', CancelarDFeModalControllerSpec);

    function CancelarDFeModalControllerSpec() {
        // use module
        beforeEach(module('oobj-directives'));

        // variáveis globais para esta suíte de teste
        var CancelarDFeModalController,
            CancelarDFeModalService,
            $controller,
            uibModalInstanceMock,
            ModalUtil,
            ctrl,
            deferred,
            $scope;

        // injeção de dependencia das variáveis globais
        beforeEach(inject(function(_$controller_, _ModalUtil_, _CancelarDFeModalService_, _$q_, _$rootScope_) {
            deferred = _$q_.defer();
            $scope = _$rootScope_.$new();
            CancelarDFeModalService = _CancelarDFeModalService_;
            $controller = _$controller_;
            uibModalInstanceMock = {
                close: function() {},
                dismiss: function(message) {}
            };
            ModalUtil = _ModalUtil_;
            ctrl = $controller('CancelarDFeModalController', {
                $uibModalInstance: uibModalInstanceMock,
                selectedRows: [],
                ModalUtil: _ModalUtil_,
                CancelarDFeModalService: CancelarDFeModalService
            });

            spyOn(CancelarDFeModalService, 'registrarEvento').and.returnValue(deferred.promise);
        }));

        // definição dos testes unitários
        it('Deve fechar o modal', deveFecharModal);
        it('Deve desfazer a ação de registrar evento', deveDesfazerCancelamento);
        it('Deve registrar o evento de cancelamento com sucesso', deveRegistrarEventoCancelamento);
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

        function deveDesfazerCancelamento() {
            ctrl.desfazerEvento();

            expect(ctrl.confirmar).toBe(false);
        }

        function deveRegistrarEventoCancelamento() {
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
            expect(CancelarDFeModalService.registrarEvento).toHaveBeenCalled();
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
            expect(CancelarDFeModalService.registrarEvento).toHaveBeenCalled();
            expect(ModalUtil.msgSuccess).not.toHaveBeenCalled();
            expect(uibModalInstanceMock.close).not.toHaveBeenCalled();
        }

        function naoDeveRegistrarEventoValidandoJustificativa() {
            spyOn(ModalUtil, 'msgSuccess');
            spyOn(uibModalInstanceMock, 'close');

            ctrl.dfe = {ave: 'Maria'};
            ctrl.evento.data = new Date();
            // menos de 30 caracteres
            ctrl.evento.justificativa = 'Lula preso.';

            ctrl.registrar();

            expect(ctrl.invalid).toBe(true);
            expect(ctrl.msgValidacao).not.toBeNull();
            expect(CancelarDFeModalService.registrarEvento).not.toHaveBeenCalled();
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
            expect(CancelarDFeModalService.registrarEvento).not.toHaveBeenCalled();
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
            expect(CancelarDFeModalService.registrarEvento).not.toHaveBeenCalled();
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
