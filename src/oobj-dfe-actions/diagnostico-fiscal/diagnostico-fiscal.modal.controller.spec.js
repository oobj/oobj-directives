/**
 *
 *
 * Created by Leonardo on 10/02/2016.
 */
(function() {
    'use strict';

    describe('Teste do controlador da directiva: diagnostico-fiscal.modal.controller.js', function() {
        var $controller,
            ModalUtil,
            uibModalInstanceMock = {},
            deferred,
            $scope,
            DiagnosticoFiscalModalService;

        beforeEach(module('oobj-directives'));
        beforeEach(inject(function(_$controller_, _ModalUtil_,  _DiagnosticoFiscalModalService_, _$q_, _$rootScope_) {
            deferred = _$q_.defer();
            $scope = _$rootScope_.$new();
            DiagnosticoFiscalModalService = _DiagnosticoFiscalModalService_;
            $controller = _$controller_;
            ModalUtil = _ModalUtil_;
            uibModalInstanceMock.close = function() {};

            spyOn(DiagnosticoFiscalModalService, 'diagnosticar').and.returnValue(deferred.promise);
        }));

        it('quantidade deve ser a mesma dos parâmetros passados', deveTerParametrosDefinidos);
        it('executar ação deve exibir modal de sucesso', deveDiagnosticarComSucesso);
        it('nao deve executar diagnosticar com sucesso', naoDeveDiagnosticar);
        it('executar ação de cancelar o modal ao desfazer entrada', deveFecharModal);

        function deveTerParametrosDefinidos() {
            var selectedRows = [];

            var ctrl = $controller('DiagnosticoFiscalModalController', {
                $uibModalInstance: uibModalInstanceMock,
                selectedRows: selectedRows,
                ModalUtil: ModalUtil,
                DiagnosticoFiscalModalService: DiagnosticoFiscalModalService
            });

            expect(ctrl.docs).toBe(selectedRows);
            expect(ctrl.quantidadeItens).toBe(0);
        }

        function deveDiagnosticarComSucesso() {
            var selectedRows = [];

            spyOn(ModalUtil, 'msgSuccess');
            spyOn(uibModalInstanceMock, 'close');

            var ctrl = $controller('DiagnosticoFiscalModalController', {
                $uibModalInstance: uibModalInstanceMock,
                selectedRows: selectedRows,
                ModalUtil: ModalUtil,
                DiagnosticoFiscalModalService: DiagnosticoFiscalModalService
            });

            ctrl.diagnosticar();
            deferred.resolve('all right!');
            $scope.$apply();

            expect(ModalUtil.msgSuccess).toHaveBeenCalledWith('all right!');
            expect(uibModalInstanceMock.close).toHaveBeenCalled();
        }

        function naoDeveDiagnosticar() {
            var selectedRows = [];

            spyOn(ModalUtil, 'msgError');
            spyOn(uibModalInstanceMock, 'close');

            var ctrl = $controller('DiagnosticoFiscalModalController', {
                $uibModalInstance: uibModalInstanceMock,
                selectedRows: selectedRows,
                ModalUtil: ModalUtil,
                DiagnosticoFiscalModalService: DiagnosticoFiscalModalService
            });

            ctrl.diagnosticar();
            deferred.reject('damn it!');
            $scope.$apply();

            expect(ModalUtil.msgError).toHaveBeenCalledWith('damn it!');
            expect(uibModalInstanceMock.close).toHaveBeenCalled();
        }

        function deveFecharModal() {
            var selectedRows = [];

            var ctrl = $controller('DiagnosticoFiscalModalController', {
                $uibModalInstance: uibModalInstanceMock,
                selectedRows: selectedRows,
                ModalUtil: ModalUtil,
                DiagnosticoFiscalModalService: DiagnosticoFiscalModalService
            });

            spyOn(uibModalInstanceMock, 'close');

            ctrl.cancelar();

            expect(ctrl.docs).toBeNull();
            expect(uibModalInstanceMock.close).toHaveBeenCalled();
        }
    });
})();