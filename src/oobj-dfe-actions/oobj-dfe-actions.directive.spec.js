/**
 * Teste unitário para directiva oobj-dfe-actions.directive.js.
 *
 * Created by Leonardo on 12/02/2016.
 */
(function() {
    'use strict';

    describe('Teste de Directiva: oobjDfeActions', function() {
        var $compile, $log, $uibModal, scope, element, compiledElement, is;

        beforeEach(module('oobj-directives'));
        beforeEach(inject(function(_$rootScope_, _$compile_, _$log_, _$uibModal_) {
            scope = _$rootScope_.$new();
            $compile = _$compile_;
            $log = _$log_;
            $uibModal = _$uibModal_;

            element = '<oobj-dfe-actions ' +
                'modelo-documento="modeloDocumento" ' +
                'grid-scope="gridScope"></oobj-dfe-actions>';

            scope.modeloDocumento = 55;
            scope.gridScope = {
                getSelectedRows: function() { return [{id: 1}]; }
            };

            compiledElement = $compile(element)(scope);

            scope.$digest();

            is = compiledElement.isolateScope();
        }));

        it('modeloDocumento definido deve compartar-se padrão', function() {
            expect(is.modeloDocumento).toEqual(55);
        });

        it('quando modeloDocumento não for definido deve ser exibido um log', function() {
            spyOn($log, 'warn');

            element = '<oobj-dfe-actions></oobj-dfe-actions>';

            $compile(element)(scope);

            scope.$digest();

            expect($log.warn).toHaveBeenCalledWith('O Modelo de Documento deve ser especificado <oobj-dfe-actions>');
        });

        it('deve abrir modal de upload de XML ao clicar no botão', function() {
            spyOn($uibModal, 'open');

            var oobjButtons = compiledElement.find('oobj-button');

            var btnOpenModalUploadXML = angular.element(oobjButtons[0]);

            expect(btnOpenModalUploadXML).toBeDefined();

            btnOpenModalUploadXML.triggerHandler('click');

            expect($uibModal.open).toHaveBeenCalledTimes(1);
        });

        it('deve abrir modal de baixar XML ao clicar no botão', function() {
            spyOn($uibModal, 'open');

            var oobjButtons = compiledElement.find('oobj-button');

            var btnOpenModalBaixarXML = angular.element(oobjButtons[1]);

            expect(btnOpenModalBaixarXML).toBeDefined();

            btnOpenModalBaixarXML.triggerHandler('click');

            expect($uibModal.open).toHaveBeenCalledTimes(1);
        });

        it('deve abrir modal de baixar DANFe ao clicar no botão', function() {
            spyOn($uibModal, 'open');

            var oobjButtons = compiledElement.find('oobj-button');

            var btnOpenModalBaixarDANFe = angular.element(oobjButtons[2]);

            expect(btnOpenModalBaixarDANFe).toBeDefined();

            btnOpenModalBaixarDANFe.triggerHandler('click');

            expect($uibModal.open).toHaveBeenCalledTimes(1);
        });

        it('deve abrir modal de reconsultar Sefaz ao clicar no botão', function() {
            spyOn($uibModal, 'open');

            var oobjButtons = compiledElement.find('oobj-button');

            var btnOpenModalReconsultar = angular.element(oobjButtons[4]);

            expect(btnOpenModalReconsultar).toBeDefined();

            btnOpenModalReconsultar.triggerHandler('click');

            expect($uibModal.open).toHaveBeenCalledTimes(1);
        });

    });
})();