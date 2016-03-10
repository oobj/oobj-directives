/**
 * Teste unitário para evento do destinatário modal.
 *
 * Created by Leonardo on 13/02/2016.
 */
(function() {
    'use strict';

    describe('Teste de Controller: EventoDestinatarioModalController', function() {
        var $controller,
            $filter,
            $window,
            scope,
            uibModalInstanceMock;

        beforeEach(module('oobj-directives'));
        beforeEach(inject(function(_$rootScope_, _$controller_, _$filter_, _$window_) {
            scope = _$rootScope_.$new();
            $controller = _$controller_;
            $filter = _$filter_;
            $window = _$window_;
            uibModalInstanceMock = {};
            uibModalInstanceMock.close = function() {};
            uibModalInstanceMock.dismiss = function(value) { return value; };
        }));

        it('ao clicar no botão saiba mais deve abrir em um nova janela', function() {
            spyOn($window, 'open');
            spyOn(uibModalInstanceMock, 'close');

            var ctrl = $controller('EventoDestinatarioModalController', {
                $uibModalInstance: uibModalInstanceMock,
                $filter: $filter,
                $window: $window,
                selectedRow: []
            });

            scope.$digest();

            ctrl.saibaMais();

            expect($window.open).toHaveBeenCalled();
            expect(ctrl.dfe).toBeNull();
            expect(uibModalInstanceMock.close).toHaveBeenCalled();
        });

        it('ao clicar no botão ação deve abrir em um nova janela', function() {
            spyOn($window, 'open');
            spyOn(uibModalInstanceMock, 'close');

            var ctrl = $controller('EventoDestinatarioModalController', {
                $uibModalInstance: uibModalInstanceMock,
                $filter: $filter,
                $window: $window,
                selectedRow: []
            });

            scope.$digest();

            ctrl.acao();

            expect($window.open).toHaveBeenCalled();
            expect(ctrl.dfe).toBeNull();
            expect(uibModalInstanceMock.close).toHaveBeenCalled();
        });

        it('ao clicar no botão cancelar deve fechar o modal', function() {
            spyOn(uibModalInstanceMock, 'dismiss');

            var ctrl = $controller('EventoDestinatarioModalController', {
                $uibModalInstance: uibModalInstanceMock,
                $filter: $filter,
                $window: $window,
                selectedRow: []
            });

            scope.$digest();

            ctrl.cancel();

            expect(ctrl.dfe).toBeNull();
            expect(uibModalInstanceMock.dismiss).toHaveBeenCalledWith('cancel');
        });

    });
})();