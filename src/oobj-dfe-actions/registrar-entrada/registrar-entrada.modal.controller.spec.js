/**
 * Teste do controlador da directiva: registrar-entrada.modal.controller.js.
 *
 * Created by Leonardo on 10/02/2016.
 */
(function() {
    'use strict';

    describe('Teste do controlador da directiva: registrar-entrada.modal.controller.js', function() {
        var $controller,
            ModalUtil,
            uibModalInstanceMock = {},
            deferred,
            $scope,
            RegistrarEntradaModalService;

        beforeEach(module('oobj-directives'));
        beforeEach(inject(function(_$controller_, _ModalUtil_, _RegistrarEntradaModalService_, _$q_, _$rootScope_) {
            deferred = _$q_.defer();
            $scope = _$rootScope_.$new();
            $controller = _$controller_;
            ModalUtil = _ModalUtil_;
            uibModalInstanceMock.close = function() {};
            RegistrarEntradaModalService = _RegistrarEntradaModalService_;

            spyOn(RegistrarEntradaModalService, 'registrarEntrada').and.returnValue(deferred.promise);
        }));

        it('quantidade deve ser a mesma dos parâmetros passados', deveTerMesmosParametros);
        it('deve exibir modal de sucesso quando a entrada for registrada', deveRegistrarEntrada);
        it('não deve exibir modal de sucesso quando houver validação do backend', naoDeveRegistrarEntrada);
        it('executar ação de cancelar o modal ao registrar entrada', deveFecharModal);

        function deveTerMesmosParametros() {
            var selectedRows = [];

            var ctrl = $controller('RegistrarEntradaModalController', {
                $uibModalInstance: uibModalInstanceMock,
                selectedRows: selectedRows,
                ModalUtil: ModalUtil,
                RegistrarEntradaModalService: RegistrarEntradaModalService
            });

            expect(ctrl.docs).toBe(selectedRows);
            expect(ctrl.quantidadeItens).toBe(0);
        }

        function deveRegistrarEntrada() {
            var selectedRows = [{id: 1}, {id: 2}, {id: 3}];

            var ctrl = $controller('RegistrarEntradaModalController', {
                $uibModalInstance: uibModalInstanceMock,
                selectedRows: selectedRows,
                ModalUtil: ModalUtil,
                RegistrarEntradaModalService: RegistrarEntradaModalService
            });

            spyOn(ModalUtil, 'msgSuccess');
            spyOn(uibModalInstanceMock, 'close');

            ctrl.registrarEntrada();
            deferred.resolve('all right!');
            $scope.$apply();

            expect(ModalUtil.msgSuccess).toHaveBeenCalledWith('all right!');
            expect(uibModalInstanceMock.close).toHaveBeenCalled();
        }

        function naoDeveRegistrarEntrada() {
            var selectedRows = [{id: 1}, {id: 2}, {id: 3}];

            var ctrl = $controller('RegistrarEntradaModalController', {
                $uibModalInstance: uibModalInstanceMock,
                selectedRows: selectedRows,
                ModalUtil: ModalUtil,
                RegistrarEntradaModalService: RegistrarEntradaModalService
            });

            spyOn(ModalUtil, 'msgError');
            spyOn(uibModalInstanceMock, 'close');

            ctrl.registrarEntrada();
            deferred.reject('damn it!');
            $scope.$apply();

            expect(ModalUtil.msgError).toHaveBeenCalledWith('damn it!');
            expect(uibModalInstanceMock.close).toHaveBeenCalled();
        }

        function deveFecharModal() {
            var selectedRows = [];

            var ctrl = $controller('RegistrarEntradaModalController', {
                $uibModalInstance: uibModalInstanceMock,
                selectedRows: selectedRows,
                ModalUtil: ModalUtil,
                RegistrarEntradaModalService: RegistrarEntradaModalService
            });

            spyOn(uibModalInstanceMock, 'close');

            ctrl.cancelar();

            expect(ctrl.rows).toBeNull();
            expect(uibModalInstanceMock.close).toHaveBeenCalled();
        }
    });
})();