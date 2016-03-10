/**
 * Unit test for utility Modal Service.
 *
 * Created by Leonardo on 10/02/2016.
 */
(function() {
    'use strict';

    describe('Teste de Serviço: ModalUtil', function() {
        var ModalUtilObj,
            uibModalMock,
            message = 'Test Message';

        beforeEach(module('oobj-directives'));
        beforeEach(inject(function(ModalUtil, $uibModal) {
            ModalUtilObj = ModalUtil;
            uibModalMock = $uibModal;

            spyOn(uibModalMock, 'open');
        }));

        it('Default message modal', function() {
            ModalUtilObj.msg(message);
            expect(uibModalMock.open).toHaveBeenCalled();
        });

        it('Info message with custom title', function() {
            var title = 'Info Title';
            ModalUtilObj.msgInfo(message, title);
            expect(uibModalMock.open).toHaveBeenCalled();
        });

        it('Info message with custom title and tooltip', function() {
            var title = 'Info Title',
                tooltip = 'Custom info tooltip';
            ModalUtilObj.msgInfo(message, title, tooltip);
            expect(uibModalMock.open).toHaveBeenCalled();
        });

        it('Default success message', function() {
            ModalUtilObj.msgSuccess(message);
            expect(uibModalMock.open).toHaveBeenCalled();
        });

        it('Success message with custom title', function() {
            var title = 'Custom Success Title';
            ModalUtilObj.msgSuccess(message, title);
            expect(uibModalMock.open).toHaveBeenCalled();
        });

        it('Success message with custom title and tooltip', function() {
            var title = 'Custom Success Title',
                tooltip = 'Custom success tooltip';
            ModalUtilObj.msgSuccess(message, title, tooltip);
            expect(uibModalMock.open).toHaveBeenCalled();
        });

        it('Default msgWarning', function() {
            ModalUtilObj.msgWarning(message);
            expect(uibModalMock.open).toHaveBeenCalled();
        });

        it('Warning message with custom title', function() {
            var title = 'Beware!';
            ModalUtilObj.msgWarning(message, title);
            expect(uibModalMock.open).toHaveBeenCalled();
        });

        it('Warning message with custom title and tooltip', function() {
            var title = 'Beware!',
                tooltip = 'Custom tooltip message';
            ModalUtilObj.msgWarning(message, title, tooltip);
            expect(uibModalMock.open).toHaveBeenCalled();
        });

        it('Default error message', function() {
            ModalUtilObj.msgError(message);
            expect(uibModalMock.open).toHaveBeenCalled();
        });

        it('Error message with custom title', function() {
            var title = 'Custom Error Title';
            ModalUtilObj.msgError(message, title);
            expect(uibModalMock.open).toHaveBeenCalled();
        });

        it('Error message with custom title', function() {
            var title = 'Custom Error Title',
                tooltip = 'Custom error tooltip';
            ModalUtilObj.msgError(message, title, tooltip);
            expect(uibModalMock.open).toHaveBeenCalled();
        });

    });

})();