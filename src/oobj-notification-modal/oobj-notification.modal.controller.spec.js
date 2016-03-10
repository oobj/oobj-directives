/**
 * Teste unitário para o controlador de notificações do modal.
 *
 * Created by Leonardo on 11/02/2016.
 */
(function() {
    'use strict';

    describe('Teste de Controlador: oobj-notification.modal.controller.js', function() {
        var $controller,
            uibModalInstanceMock;

        beforeEach(module('oobj-directives'));
        beforeEach(inject(function(_$controller_) {
            $controller = _$controller_;
            uibModalInstanceMock = {};
            uibModalInstanceMock.close = function() {};
            uibModalInstanceMock.dismiss = function(value) { return value; };
        }));

        it('ao clicar em close deve fechar o modal', function() {
            spyOn(uibModalInstanceMock, 'close');

            var ctrl = $controller('OobjNotificationModalController', {
                $uibModalInstance: uibModalInstanceMock,
                message: '',
                title: '',
                tooltip: '',
                type: ''
            });

            ctrl.close();

            expect(uibModalInstanceMock.close).toHaveBeenCalled();
        });

        it('ao clicar em "ok" deve fechar o modal com sucesso', function() {
            spyOn(uibModalInstanceMock, 'dismiss');

            var ctrl = $controller('OobjNotificationModalController', {
                $uibModalInstance: uibModalInstanceMock,
                message: '',
                title: '',
                tooltip: '',
                type: ''
            });

            ctrl.ok();

            expect(uibModalInstanceMock.dismiss).toHaveBeenCalledWith('ok');
        });

        it('validação das classes default quando tipo é informado para type "success"', function() {
            var ctrl = $controller('OobjNotificationModalController', {
                $uibModalInstance: uibModalInstanceMock,
                message: '',
                title: '',
                tooltip: '',
                type: 'success'
            });

            expect(ctrl.type).toEqual('success');
            expect(ctrl.btnClass).toEqual('oobj-notification-modal-btn-ok btn-success');
            expect(ctrl.iconClass).toEqual('fa-check oobj-notification-modal-header-success');
        });

        it('validação das classes default quando tipo é informado para type "info"', function() {
            var ctrl = $controller('OobjNotificationModalController', {
                $uibModalInstance: uibModalInstanceMock,
                message: '',
                title: '',
                tooltip: '',
                type: 'info'
            });

            expect(ctrl.type).toEqual('info');
            expect(ctrl.btnClass).toEqual('oobj-notification-modal-btn-ok btn-primary');
            expect(ctrl.iconClass).toEqual('fa-info oobj-notification-modal-header-info');
        });

        it('validação das classes default quando tipo é informado para type "warning"', function() {
            var ctrl = $controller('OobjNotificationModalController', {
                $uibModalInstance: uibModalInstanceMock,
                message: '',
                title: '',
                tooltip: '',
                type: 'warning'
            });

            expect(ctrl.type).toEqual('warning');
            expect(ctrl.btnClass).toEqual('oobj-notification-modal-btn-ok btn-warning');
            expect(ctrl.iconClass).toEqual('fa-exclamation oobj-notification-modal-header-warning');
        });

        it('validação das classes default quando tipo é informado para type "error"', function() {
            var ctrl = $controller('OobjNotificationModalController', {
                $uibModalInstance: uibModalInstanceMock,
                message: '',
                title: '',
                tooltip: '',
                type: 'error'
            });

            expect(ctrl.type).toEqual('error');
            expect(ctrl.btnClass).toEqual('oobj-notification-modal-btn-ok btn-danger');
            expect(ctrl.iconClass).toEqual('fa-times oobj-notification-modal-header-error');
        });

    });
})();