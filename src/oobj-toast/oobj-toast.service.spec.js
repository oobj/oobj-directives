/**
 * Testes unitários para toast messages.
 *
 * Created by Leonardo on 11/02/2016.
 */
(function() {
    'use strict';

    describe('Teste de Serviço: OobjToastService', function() {
        var OobjToastServiceMock,
            toastrMock;

        beforeEach(module('oobj-directives'));
        beforeEach(inject(function(OobjToastService, toastr) {
            OobjToastServiceMock = OobjToastService;
            toastrMock = toastr;
        }));

        it('deve chamar a opção de info do toastr com titulo default', function() {
            spyOn(toastrMock, 'info');

            OobjToastServiceMock.msg('Toast Message Test');

            expect(toastrMock.info).toHaveBeenCalledWith('Toast Message Test', 'Info');
        });

        it('deve chamar a opção de info do toastr com titulo customizado', function() {
            spyOn(toastrMock, 'info');

            OobjToastServiceMock.msgInfo('Toast Message Test', 'Custom Info Title');

            expect(toastrMock.info).toHaveBeenCalledWith('Toast Message Test', 'Custom Info Title');
        });

        it('deve chamar a opção de success do toastr com titulo default', function() {
            spyOn(toastrMock, 'success');

            OobjToastServiceMock.msgSuccess('Toast Message Test');

            expect(toastrMock.success).toHaveBeenCalledWith('Toast Message Test', 'Sucesso');
        });

        it('deve chamar a opção de success do toastr com titulo customizado', function() {
            spyOn(toastrMock, 'success');

            OobjToastServiceMock.msgSuccess('Toast Message Test', 'Custom Success Title');

            expect(toastrMock.success).toHaveBeenCalledWith('Toast Message Test', 'Custom Success Title');
        });

        it('deve chamar a opção de warning do toastr com titulo default', function() {
            spyOn(toastrMock, 'warning');

            OobjToastServiceMock.msgWarning('Toast Message Test');

            expect(toastrMock.warning).toHaveBeenCalledWith('Toast Message Test', 'Aviso');
        });

        it('deve chamar a opção de warning do toastr com titulo customizado', function() {
            spyOn(toastrMock, 'warning');

            OobjToastServiceMock.msgWarning('Toast Message Test', 'Custom Warning Title');

            expect(toastrMock.warning).toHaveBeenCalledWith('Toast Message Test', 'Custom Warning Title');
        });

        it('deve chamar a opção de error do toastr com titulo default', function() {
            spyOn(toastrMock, 'error');

            OobjToastServiceMock.msgError('Toast Message Test');

            expect(toastrMock.error).toHaveBeenCalledWith('Toast Message Test', 'Erro');
        });

        it('deve chamar a opção de error do toastr com titulo customizado', function() {
            spyOn(toastrMock, 'error');

            OobjToastServiceMock.msgError('Toast Message Test', 'Custom Error Title');

            expect(toastrMock.error).toHaveBeenCalledWith('Toast Message Test', 'Custom Error Title');
        });
    });
})();