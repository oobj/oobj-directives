/**
 * Teste do controlador da directiva: reconsultar-sefaz.modal.controller.js.
 *
 * Created by Leonardo on 10/02/2016.
 */
(function() {
    'use strict';

    describe('Teste do controlador da directiva: reconsultar-sefaz.modal.controller.js', function() {
        var $controller,
            ModalUtil,
            uibModalInstanceMock = {},
            deferred,
            $scope,
            ReconsultarSefazModalService;

        beforeEach(module('oobj-directives'));
        beforeEach(inject(function(_$controller_, _ModalUtil_, _ReconsultarSefazModalService_, _$q_, _$rootScope_) {
            deferred = _$q_.defer();
            $scope = _$rootScope_.$new();
            $controller = _$controller_;
            ModalUtil = _ModalUtil_;
            uibModalInstanceMock.close = function() {};
            ReconsultarSefazModalService = _ReconsultarSefazModalService_;

            spyOn(ReconsultarSefazModalService, 'reconsultar').and.returnValue(deferred.promise);
        }));

        it('quantidade deve ser a mesma dos parâmetros passados', deveTerMesmosParametros);
        it('deve exibir modal de sucesso quando docs forem reconsultados', deveReconsultarSefaz);
        it('não deve exibir modal de sucesso quando houver validação do backend', naoDeveReconsultarSefaz);
        it('executar ação de cancelar o modal ao reconsultar entrada', deveFecharModal);

        function deveTerMesmosParametros() {
            var selectedRows = [];

            var ctrl = $controller('ReconsultarSefazModalController', {
                $uibModalInstance: uibModalInstanceMock,
                selectedRows: selectedRows,
                ModalUtil: ModalUtil,
                ReconsultarSefazModalService: ReconsultarSefazModalService
            });

            expect(ctrl.docs).toBe(selectedRows);
            expect(ctrl.quantidadeItens).toBe(0);
        }

        function deveReconsultarSefaz() {
            var selectedRows = [{id: 1}, {id: 2}, {id: 3}];

            var ctrl = $controller('ReconsultarSefazModalController', {
                $uibModalInstance: uibModalInstanceMock,
                selectedRows: selectedRows,
                ModalUtil: ModalUtil,
                ReconsultarSefazModalService: ReconsultarSefazModalService
            });

            spyOn(ModalUtil, 'msgSuccess');
            spyOn(uibModalInstanceMock, 'close');

            ctrl.reconsultar();
            deferred.resolve('all right!');
            $scope.$apply();

            expect(ModalUtil.msgSuccess).toHaveBeenCalledWith('all right!');
            expect(uibModalInstanceMock.close).toHaveBeenCalled();
        }

        function naoDeveReconsultarSefaz() {
            var selectedRows = [{id: 1}, {id: 2}, {id: 3}];

            var ctrl = $controller('ReconsultarSefazModalController', {
                $uibModalInstance: uibModalInstanceMock,
                selectedRows: selectedRows,
                ModalUtil: ModalUtil,
                ReconsultarSefazModalService: ReconsultarSefazModalService
            });

            spyOn(ModalUtil, 'msgError');
            spyOn(uibModalInstanceMock, 'close');

            ctrl.reconsultar();
            deferred.reject('damn it!');
            $scope.$apply();

            expect(ModalUtil.msgError).toHaveBeenCalledWith('damn it!');
            expect(uibModalInstanceMock.close).toHaveBeenCalled();
        }

        function deveFecharModal() {
            var selectedRows = [];

            var ctrl = $controller('ReconsultarSefazModalController', {
                $uibModalInstance: uibModalInstanceMock,
                selectedRows: selectedRows,
                ModalUtil: ModalUtil,
                ReconsultarSefazModalService: ReconsultarSefazModalService
            });

            spyOn(uibModalInstanceMock, 'close');

            ctrl.cancelar();

            expect(ctrl.rows).toBeNull();
            expect(uibModalInstanceMock.close).toHaveBeenCalled();
        }
    });
})();