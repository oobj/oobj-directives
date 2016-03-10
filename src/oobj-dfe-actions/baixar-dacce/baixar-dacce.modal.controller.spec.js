/**
 * Teste do controlador baixar-dacce.modal.controller da directiva oobj-dfe-actions.
 *
 * Created by Leonardo on 05/02/2016.
 */
(function() {
    'use strict';

    describe('Teste do controlador da directiva: baixar-dacce.modal.controller.js', function() {
        var $controller,
            ModalUtilMock,
            BaixarDACCeModalService,
            uibModalInstanceMock = {},
            deferred,
            $scope;

        beforeEach(module('oobj-directives'));
        beforeEach(inject(function(_$controller_, ModalUtil, _BaixarDACCeModalService_, _$q_, _$rootScope_) {
            $scope = _$rootScope_.$new();
            deferred = _$q_.defer();
            $controller = _$controller_;
            ModalUtilMock = ModalUtil;
            BaixarDACCeModalService = _BaixarDACCeModalService_;
            uibModalInstanceMock.close = function() {};
        }));

        it('quantidade deve ser a mesma dos parâmetros passados', deveTerMesmosParamtros);
        it('download realizado com sucesso deve ser chamado', deveRealizarDownload);
        it('download não deve ser realizado quando nenhum item for selecionado', naoDeveFazerDownloadValidandoItem);
        it('teste do botão cancelar', deveFecharModal);

        /**
         * Garante que a quantidade de parametros seja o mesmo dos passados no teste
         */
        function deveTerMesmosParamtros() {
            var ModalUtil = {},
                selectedRows = [];

            var ctrl = $controller('BaixarDACCeModalController', {
                $uibModalInstance: uibModalInstanceMock,
                ModalUtil: ModalUtil,
                BaixarDACCeModalService: BaixarDACCeModalService,
                selectedRows: selectedRows
            });

            expect(ctrl).toBeDefined();
            expect(ctrl.quantidade).toBeDefined();
            expect(ctrl.quantidade).toEqual(0);
        }

        /**
         * Garante que o download é realizado com sucesso
         */
        function deveRealizarDownload() {
            var selectedRows = [{id: 0}, {id: 1}, {id: 2}];

            spyOn(BaixarDACCeModalService, 'baixar').and.returnValue(deferred.promise);
            spyOn(uibModalInstanceMock, 'close');

            var ctrl = $controller('BaixarDACCeModalController', {
                $uibModalInstance: uibModalInstanceMock,
                ModalUtil: ModalUtilMock,
                BaixarDACCeModalService: BaixarDACCeModalService,
                selectedRows: selectedRows
            });

            ctrl.download();
            deferred.resolve('sucesso no download');
            $scope.$apply();

            expect(BaixarDACCeModalService.baixar).toHaveBeenCalledWith([0, 1, 2]);
            expect(uibModalInstanceMock.close).toHaveBeenCalled();
        }

        /**
         * Garante que o download não é realizado se nenhum item for selecionado
         */
        function naoDeveFazerDownloadValidandoItem() {
            var selectedRows = [];

            spyOn(uibModalInstanceMock, 'close');
            spyOn(BaixarDACCeModalService, 'baixar').and.returnValue(deferred.promise);

            var ctrl = $controller('BaixarDACCeModalController', {
                $uibModalInstance: uibModalInstanceMock,
                ModalUtil: ModalUtilMock,
                BaixarDACCeModalService: BaixarDACCeModalService,
                selectedRows: selectedRows
            });

            ctrl.download();
            deferred.reject('damn it!');
            $scope.$apply();

            expect(ctrl.invalid).toBe(true);
            expect(ctrl.msgValidacao).toBe('damn it!');
            expect(uibModalInstanceMock.close).not.toHaveBeenCalled();
        }

        /**
         * Garante que o modal é fechado
         */
        function deveFecharModal() {
            var selectedRows = [];

            spyOn(uibModalInstanceMock, 'close');

            var ctrl = $controller('BaixarDACCeModalController', {
                $uibModalInstance: uibModalInstanceMock,
                ModalUtil: ModalUtilMock,
                BaixarDACCeModalService: BaixarDACCeModalService,
                selectedRows: selectedRows
            });

            ctrl.cancel();

            expect(uibModalInstanceMock.close).toHaveBeenCalled();
        }
    });
})();
