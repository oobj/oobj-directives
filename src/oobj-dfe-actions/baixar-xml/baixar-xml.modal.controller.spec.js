/**
 * Teste do controlador da directiva: baixar-xml.modal.controller.js.
 *
 * Created by Leonardo on 10/02/2016.
 */
(function() {
    'use strict';

    describe('Teste do controlador da directiva: baixar-xml.modal.controller.js', function () {
        var $controller,
            ModalUtilMock,
            BaixarXMLModalService,
            uibModalInstanceMock = {},
            deferred,
            $scope;

        beforeEach(module('oobj-directives'));
        beforeEach(inject(function(_$controller_, ModalUtil, _BaixarXMLModalService_, _$q_, _$rootScope_) {
            $scope = _$rootScope_.$new();
            deferred = _$q_.defer();
            $controller = _$controller_;
            ModalUtilMock = ModalUtil;
            BaixarXMLModalService = _BaixarXMLModalService_;
            uibModalInstanceMock.close = function() {};
        }));

        it('quantidade deve ser a mesma dos parâmetros passados', deveGarantirQuantidadeParametros);
        it('download realizado com sucesso deve ser chamado', deveRealizarDownload);
        it('download não deve ser realizado quando nenhum item for selecionado', naoDeveFazerDownloadValidandoItem);
        it('não deve baixar XML caso não esteja selecionado um dos checkbox', naoDeveFazerDownloadValidandoCheckbox);
        it('teste do botão cancelar', deveFecharModal);

        /**
         * Garante que a quantidade dos parametros seja o mesmo que o passado no teste
         */
        function deveGarantirQuantidadeParametros() {
            var selectedRows = [];

            var ctrl = $controller('BaixarXMLModalController', {
                $uibModalInstance: uibModalInstanceMock,
                ModalUtil: ModalUtilMock,
                BaixarXMLModalService: BaixarXMLModalService,
                selectedRows: selectedRows,
                modeloDocumento: 55
            });

            expect(ctrl).toBeDefined();
            expect(ctrl.quantidade).toBeDefined();
            expect(ctrl.quantidade).toEqual(0);
            expect(ctrl.proc).toBeDefined();
            expect(ctrl.proc).toBe(true);
            expect(ctrl.eventos).toBeDefined();
            expect(ctrl.eventos).toBe(false);
        }

        /**
         * Garante que o download é feito com sucesso
         */
        function deveRealizarDownload() {
            var selectedRows = [{id: 0, modelo: 'NF-e'}, {id: 1, modelo: 'NF-e'}, {id: 2, modelo: 'NF-e'}];

            spyOn(BaixarXMLModalService, 'baixar').and.returnValue(deferred.promise);
            spyOn(uibModalInstanceMock, 'close');

            var ctrl = $controller('BaixarXMLModalController', {
                $uibModalInstance: uibModalInstanceMock,
                ModalUtil: ModalUtilMock,
                BaixarXMLModalService: BaixarXMLModalService,
                selectedRows: selectedRows
            });

            ctrl.download();
            deferred.resolve('all right!');
            $scope.$apply();

            expect(ctrl.invalid).toBe(false);
            expect(BaixarXMLModalService.baixar).toHaveBeenCalledWith([0, 1, 2], true, false, 'NF-e');
            expect(uibModalInstanceMock.close).toHaveBeenCalled();
        }

        /**
         * Garante que o download não é feito quando nenhum item for selecionado
         */
        function naoDeveFazerDownloadValidandoItem() {
            var selectedRows = [];

            spyOn(uibModalInstanceMock, 'close');
            spyOn(BaixarXMLModalService, 'baixar').and.returnValue(deferred.promise);

            var ctrl = $controller('BaixarXMLModalController', {
                $uibModalInstance: uibModalInstanceMock,
                ModalUtil: ModalUtilMock,
                BaixarXMLModalService: BaixarXMLModalService,
                selectedRows: selectedRows,
                modeloDocumento: 55
            });

            ctrl.download();
            deferred.reject('damn it!');
            $scope.$apply();

            expect(ctrl.invalid).toBe(true);
            expect(ctrl.msgValidacao).toBe('damn it!');
            expect(uibModalInstanceMock.close).not.toHaveBeenCalled();
            expect(BaixarXMLModalService.baixar).toHaveBeenCalled();
        }

        /**
         * Garante que o download não é realizado validando seleção dos tipos de XML
         */
        function naoDeveFazerDownloadValidandoCheckbox() {
            var selectedRows = [{id: 0}, {id: 1}, {id: 2}];

            spyOn(uibModalInstanceMock, 'close');

            var ctrl = $controller('BaixarXMLModalController', {
                $uibModalInstance: uibModalInstanceMock,
                ModalUtil: ModalUtilMock,
                BaixarXMLModalService: BaixarXMLModalService,
                selectedRows: selectedRows,
                modeloDocumento: 55
            });

            ctrl.proc = false;
            ctrl.eventos = false;

            ctrl.download();

            expect(ctrl.invalid).toBe(true);
            expect(ctrl.msgValidacao).toBeDefined();
            expect(uibModalInstanceMock.close).not.toHaveBeenCalled();
        }

        /**
         * Garante que o modal é fechado e a ação cancelada
         */
        function deveFecharModal() {
            var selectedRows = [];

            spyOn(uibModalInstanceMock, 'close');

            var ctrl = $controller('BaixarXMLModalController', {
                $uibModalInstance: uibModalInstanceMock,
                ModalUtil: ModalUtilMock,
                BaixarXMLModalService: BaixarXMLModalService,
                selectedRows: selectedRows,
                modeloDocumento: 55
            });

            ctrl.cancel();

            expect(uibModalInstanceMock.close).toHaveBeenCalled();
        }
    });
})();
