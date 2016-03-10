/**
 * Teste unitário para o controlador manifestar-confirmar.modal.controller.js.
 *
 * Created by Leonardo on 11/02/2016.
 */
(function() {
    'use strict';

    describe('Teste do controlador da directiva: manifestar-confirmar.modal.controller.js', function() {
        var $controller,
            ModalUtilMock,
            uibModalInstanceMock,
            ManifestarService,
            $q,
            $scope,
            deferred;

        beforeEach(module('oobj-directives'));
        beforeEach(inject(function(_$controller_, ModalUtil, _ManifestarService_, _$q_, _$rootScope_) {
            $scope = _$rootScope_.$new();
            $q = _$q_;
            deferred = _$q_.defer();
            $controller = _$controller_;
            ModalUtilMock = ModalUtil;
            ManifestarService = _ManifestarService_;
            uibModalInstanceMock = {};
            uibModalInstanceMock.close = function() {};

            spyOn(ManifestarService, 'getManifestacoesSelecionadas').and.returnValue(deferred.promise);
        }));

        it('ao executar ação deve retornar mensagem de erro caso numero de rows selecionadas seja zero', function() {
            var selectedRows = [];

            spyOn(ModalUtilMock, 'msgError');
            spyOn(uibModalInstanceMock, 'close');

            var ctrl = $controller('ManifestarConfirmarModalController', {
                $uibModalInstance: uibModalInstanceMock,
                ModalUtil: ModalUtilMock,
                ManifestarService: ManifestarService,
                selectedRows: selectedRows,
                justificativa: '',
                dataEvento: new Date()
            });

            ctrl.acao();

            expect(ModalUtilMock.msgError)
                .toHaveBeenCalledWith('Nenhum documento selecionado para manifestação');
            expect(ctrl.docs).toBeNull();
            expect(uibModalInstanceMock.close).toHaveBeenCalled();
        });

        it('ao executar ação deve chamar modal de sucesso', function() {
            var selectedRows = [
                {
                    numero: 123456,
                    serie: 1,
                    emitente: 'Solida Gasosa Líquida Transporte LTDA',
                    cnpj: '74.167.222/0002-10'
                }
            ];

            spyOn(ModalUtilMock, 'msgSuccess');
            spyOn(uibModalInstanceMock, 'close');

            var ctrl = $controller('ManifestarConfirmarModalController', {
                $uibModalInstance: uibModalInstanceMock,
                ModalUtil: ModalUtilMock,
                ManifestarService: ManifestarService,
                selectedRows: selectedRows,
                justificativa: '',
                dataEvento: new Date()
            });

            deferred.resolve([1, 2, 3]);
            $scope.$apply();

            ctrl.acao();

            expect(ModalUtilMock.msgSuccess).toHaveBeenCalledWith('Manifestação(ões) realizada(s) com sucesso.');
            expect(ctrl.docs).toBeNull();
            expect(uibModalInstanceMock.close).toHaveBeenCalled();
        });

        it('deve fechar o modal ao clicar em cancelar', function() {
            var selectedRows = [];

            spyOn(uibModalInstanceMock, 'close');

            var ctrl = $controller('ManifestarConfirmarModalController', {
                $uibModalInstance: uibModalInstanceMock,
                ModalUtil: ModalUtilMock,
                ManifestarService: ManifestarService,
                selectedRows: selectedRows,
                justificativa: '',
                dataEvento: new Date()
            });

            ctrl.cancel();

            expect(ctrl.docs).toBeNull();
            expect(uibModalInstanceMock.close).toHaveBeenCalled();
        });

        it('função de remover de retirar item selecionado do array de documentos', function() {
            var item = {
                numero: 123456,
                serie: 1,
                emitente: 'Solida Gasosa Líquida Transporte LTDA',
                cnpj: '74.167.222/0002-10'
            };

            var selectedRows = [item];

            var ctrl = $controller('ManifestarConfirmarModalController', {
                $uibModalInstance: uibModalInstanceMock,
                ModalUtil: ModalUtilMock,
                ManifestarService: ManifestarService,
                selectedRows: selectedRows,
                justificativa: '',
                dataEvento: new Date()
            });

            deferred.resolve([item]);
            $scope.$apply();

            ctrl.remover(item);

            expect(ctrl.docs).not.toContain(item);
            expect(ctrl.docs.length).toBe(0);
        });
    });
})();