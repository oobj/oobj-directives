/**
 * Teste unitário para historico-entrega.modal.controller.js.
 *
 * Created by Leonardo on 15/02/2016.
 */
(function() {
    'use strict';

    describe('Teste de Controller: HistoricoEntregaModalController', function() {
        var $controller,
            ctrl,
            uibModalInstanceMock;

        beforeEach(module('oobj-directives'));
        beforeEach(inject(function(_$controller_) {
            $controller = _$controller_;
            uibModalInstanceMock = {};
            uibModalInstanceMock.dismiss = function(value) { return value; };

            ctrl = $controller('HistoricoEntregaModalController', {
                $uibModalInstance: uibModalInstanceMock,
                selectedRow: {}
            });
        }));

        it('deve fechar o modal com sucesso ao clicar em cancelar', function() {
            spyOn(uibModalInstanceMock, 'dismiss');
            ctrl.cancel();
            expect(ctrl.dfe).toBeNull();
            expect(uibModalInstanceMock.dismiss).toHaveBeenCalledTimes(1);
        });
    });
})();