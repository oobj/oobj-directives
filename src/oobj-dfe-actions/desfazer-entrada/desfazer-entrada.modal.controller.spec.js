/**
 * Suíte de testes do controlador do modal Desfazer Entrada
 *
 * Created by Leonardo on 10/02/2016.
 */
(function() {
    'use strict';

    describe('Teste do controlador da directiva: desfazer-entrada.modal.controller.js', function() {

        var $controller,
            ModalUtil,
            uibModalInstanceMock = {},
            deferred,
            $scope,
            DesfazerEntradaModalService;

        beforeEach(module('oobj-directives'));
        beforeEach(inject(function(_$controller_, _ModalUtil_, _DesfazerEntradaModalService_, _$q_, _$rootScope_) {
            deferred = _$q_.defer();
            $scope = _$rootScope_.$new();
            $controller = _$controller_;
            ModalUtil = _ModalUtil_;
            uibModalInstanceMock.close = function() {};
            DesfazerEntradaModalService = _DesfazerEntradaModalService_;

            spyOn(DesfazerEntradaModalService, 'desfazerEntrada').and.returnValue(deferred.promise);
        }));

        it('quantidade deve ser a mesma dos parâmetros passados', deveTerMesmosParametros);
        it('deve exibir modal de sucesso quando desfazer entrada for executado sem problemas', deveDesfazerEntrada);
        it('não deve exibir modal de sucesso quando houver validação do backend', naoDeveDesfazerEntrada);
        it('executar ação de cancelar o modal ao desfazer entrada', deveFecharModal);

        function deveTerMesmosParametros() {
            var selectedRows = [];

            var ctrl = $controller('DesfazerEntradaModalController', {
                $uibModalInstance: uibModalInstanceMock,
                selectedRows: selectedRows,
                ModalUtil: ModalUtil,
                DesfazerEntradaModalService: DesfazerEntradaModalService
            });

            expect(ctrl.docs).toBe(selectedRows);
            expect(ctrl.quantidadeItens).toBe(0);
        }

        function deveDesfazerEntrada() {
            var selectedRows = [{id: 1}, {id: 2}, {id: 3}];

            var ctrl = $controller('DesfazerEntradaModalController', {
                $uibModalInstance: uibModalInstanceMock,
                selectedRows: selectedRows,
                ModalUtil: ModalUtil,
                DesfazerEntradaModalService: DesfazerEntradaModalService
            });

            spyOn(ModalUtil, 'msgSuccess');
            spyOn(uibModalInstanceMock, 'close');

            ctrl.desfazer();
            deferred.resolve('all right!');
            $scope.$apply();

            expect(ModalUtil.msgSuccess).toHaveBeenCalledWith('all right!');
            expect(uibModalInstanceMock.close).toHaveBeenCalled();
        }

        function naoDeveDesfazerEntrada() {
            var selectedRows = [{id: 1}, {id: 2}, {id: 3}];

            var ctrl = $controller('DesfazerEntradaModalController', {
                $uibModalInstance: uibModalInstanceMock,
                selectedRows: selectedRows,
                ModalUtil: ModalUtil,
                DesfazerEntradaModalService: DesfazerEntradaModalService
            });

            spyOn(ModalUtil, 'msgError');
            spyOn(uibModalInstanceMock, 'close');

            ctrl.desfazer();
            deferred.reject('damn it!');
            $scope.$apply();

            expect(ModalUtil.msgError).toHaveBeenCalledWith('damn it!');
            expect(uibModalInstanceMock.close).toHaveBeenCalled();
        }

        function deveFecharModal() {
            var selectedRows = [];

            var ctrl = $controller('DesfazerEntradaModalController', {
                $uibModalInstance: uibModalInstanceMock,
                selectedRows: selectedRows,
                ModalUtil: ModalUtil,
                DesfazerEntradaModalService: DesfazerEntradaModalService
            });

            spyOn(uibModalInstanceMock, 'close');

            ctrl.cancelar();

            expect(ctrl.rows).toBeNull();
            expect(uibModalInstanceMock.close).toHaveBeenCalled();
        }
    });
})();
