/**
 * Created by Diogo on 10/02/2016.
 */
(function () {
    'use strict';

    describe('Teste de Controlador: detalhes-nfe-modal', function() {
        var uibModalInstanceMock = {},
            modalCtrl,
            $scope,
            selectedRow,
            MsgUtil,
            modeloDoc;

        beforeEach(module('oobj-directives'));
        beforeEach(inject(function ($controller, $rootScope) {
            $scope = $rootScope.$new();
            uibModalInstanceMock.dismiss = function() {};
            selectedRow = [{id: 0}, {id: 1}, {id: 2}];
            modeloDoc = jasmine.createSpyObj('ModeloDocumento', ['55']);
            MsgUtil = jasmine.createSpyObj('MsgUtil', ['MsgUtil']);

            modalCtrl = $controller('DetalhesNfeController', {
                $scope: $scope,
                $uibModalInstance: uibModalInstanceMock,
                selectedRow: selectedRow,
                ModeloDocumento: modeloDoc,
                MsgUtil: MsgUtil
            });
        }));

        it('Deve ter validar valores default', function() {
            expect(modalCtrl.title).toBe('Detalhes da NF-e');
            expect(modalCtrl.row).toEqual(selectedRow);
            expect(modalCtrl.detalhesProduto).toEqual([]);
        });

        it('Deve funcionar botao cancelar', function() {
            spyOn(uibModalInstanceMock, 'dismiss');
            modalCtrl.cancel();
            expect(uibModalInstanceMock.dismiss).toHaveBeenCalled();
            expect(modalCtrl.dfe).toBe(null);
        });

    });

})();