/**
 * Teste do controlador da directiva: reentregar-documentos.modal.controller.js.
 *
 * Created by Leonardo on 10/02/2016.
 */
(function() {
    'use strict';

    describe('Teste do controlador da directiva: reentregar-documentos.modal.controller.js', function() {
        var $controller,
            ModalUtil,
            uibModalInstanceMock = {},
            deferred,
            $scope,
            ReentregarDocumentosModalService;

        beforeEach(module('oobj-directives'));
        beforeEach(inject(function(_$controller_, _ModalUtil_, _ReentregarDocumentosModalService_, _$q_, _$rootScope_) {
            deferred = _$q_.defer();
            $scope = _$rootScope_.$new();
            $controller = _$controller_;
            ModalUtil = _ModalUtil_;
            uibModalInstanceMock.close = function() {};
            ReentregarDocumentosModalService = _ReentregarDocumentosModalService_;

            spyOn(ReentregarDocumentosModalService, 'reentregar').and.returnValue(deferred.promise);
        }));

        it('quantidade deve ser a mesma dos parâmetros passados', deveTerMesmosParametros);
        it('deve exibir modal de sucesso quando docs forem reentregues', deveReentregarDocumentos);
        it('não deve exibir modal de sucesso quando houver validação do backend', naoDeveReentregarDocumentos);
        it('executar ação de cancelar o modal ao reentregar entrada', deveFecharModal);

        function deveTerMesmosParametros() {
            var selectedRows = [];

            var ctrl = $controller('ReentregarDocumentosModalController', {
                $uibModalInstance: uibModalInstanceMock,
                selectedRows: selectedRows,
                ModalUtil: ModalUtil,
                ReentregarDocumentosModalService: ReentregarDocumentosModalService
            });

            expect(ctrl.docs).toBe(selectedRows);
            expect(ctrl.quantidadeItens).toBe(0);
        }

        function deveReentregarDocumentos() {
            var selectedRows = [{id: 1}, {id: 2}, {id: 3}];

            var ctrl = $controller('ReentregarDocumentosModalController', {
                $uibModalInstance: uibModalInstanceMock,
                selectedRows: selectedRows,
                ModalUtil: ModalUtil,
                ReentregarDocumentosModalService: ReentregarDocumentosModalService
            });

            spyOn(ModalUtil, 'msgSuccess');
            spyOn(uibModalInstanceMock, 'close');

            ctrl.reentregar();
            deferred.resolve('all right!');
            $scope.$apply();

            expect(ModalUtil.msgSuccess).toHaveBeenCalledWith('all right!');
            expect(uibModalInstanceMock.close).toHaveBeenCalled();
        }

        function naoDeveReentregarDocumentos() {
            var selectedRows = [{id: 1}, {id: 2}, {id: 3}];

            var ctrl = $controller('ReentregarDocumentosModalController', {
                $uibModalInstance: uibModalInstanceMock,
                selectedRows: selectedRows,
                ModalUtil: ModalUtil,
                ReentregarDocumentosModalService: ReentregarDocumentosModalService
            });

            spyOn(ModalUtil, 'msgError');
            spyOn(uibModalInstanceMock, 'close');

            ctrl.reentregar();
            deferred.reject('damn it!');
            $scope.$apply();

            expect(ModalUtil.msgError).toHaveBeenCalledWith('damn it!');
            expect(uibModalInstanceMock.close).toHaveBeenCalled();
        }

        function deveFecharModal() {
            var selectedRows = [];

            var ctrl = $controller('ReentregarDocumentosModalController', {
                $uibModalInstance: uibModalInstanceMock,
                selectedRows: selectedRows,
                ModalUtil: ModalUtil,
                ReentregarDocumentosModalService: ReentregarDocumentosModalService
            });

            spyOn(uibModalInstanceMock, 'close');

            ctrl.cancelar();

            expect(ctrl.rows).toBeNull();
            expect(uibModalInstanceMock.close).toHaveBeenCalled();
        }
    });
})();