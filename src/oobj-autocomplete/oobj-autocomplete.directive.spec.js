/**
 * Created by Diogo on 20/10/2015.
 */
(function() {
    'use strict';

    describe('Teste de Directiva: oobjAutocomplete', function() {
        var $rootScope,
            $compile,
            scope,
            element,
            isolatedScope;

        beforeEach(function() {
            module('oobj-directives');
            angular.mock.module('templates');
        });

        // cria um novo scope antes de cada teste
        beforeEach(inject(function(_$compile_, _$rootScope_){
            $rootScope = _$rootScope_;
            scope = $rootScope.$new();
            $compile = _$compile_;

            scope.id = 'testeId';
            scope.colspan = 'testecolspan';
            scope.itemLabel = 'testeitemLabel';
            scope.label = 'testelabel';
            scope.itemValue = 'testeitemValue';
            scope.maxlength = 'testemaxlength';
            scope.placeholder = 'testeplaceholder';
            scope.mask = 'testemask';
            scope.placeholder = 'testeplaceholder';
            scope.inputSize = 'testeinputSize';

            scope.showLabel = {
                prop: 'valorScope'
            };
            scope.ngModel = {
                prop: 'ngModel'
            };
            scope.ngRequired = {
                prop: 'ngRequired'
            };
            scope.ngDisabled = {
                prop: 'ngDisabled'
            };
            scope.ngReadonly = {
                prop: 'ngReadonly'
            };
            scope.toUpper = {
                prop: 'toUpper'
            };
            scope.toLower = {
                prop: 'toLower'
            };

            scope.ngChange = jasmine.createSpy('ngChange');
            scope.getItems = jasmine.createSpy('getItems');
            scope.ngBlur = jasmine.createSpy('ngBlur');

            element = getCompiledElement();
            isolatedScope = element.isolateScope();
        }));

        function getCompiledElement(xml){
            var $element;
            if (xml == null) {
                $element = angular.element('<oobj-autocomplete ' +
                    'ng-model="ngModel" ' +
                    'show-label="showLabel" ' +
                    'ng-required="ngRequired"  ' +
                    'ng-disabled="ngDisabled" ' +
                    'ng-readonly="ngReadOnly" ' +
                    'to-upper="toUpper" ' +
                    'to-lower="toLower" ' +
                    'ng-change="ngChange()" ' +
                    'get-items="getItems()" ' +
                    'ng-blur="ngBlur()"></oobj-autocomplete>');
            } else {
                $element = angular.element(xml);
            }

            var compiledElement = $compile($element)(scope);
            scope.$digest();

            return compiledElement;
        }

        it('deve ter a classe oobj-autocomplete', function () {
            var elementTemp = angular.element('<p class=\'oobj-autocomplete\'></p>');
            $compile(elementTemp);
            scope.$digest();
            expect(elementTemp.hasClass('oobj-autocomplete')).toBeTruthy();
        });

        it('deve ter ngmodel', function(){
            expect(isolatedScope.ngModel).toBeDefined();
        });

        it('deve falhar se ngModel nao especificado', function () {
            expect(function(){
                getCompiledElement('<oobj-autocomplete></oobj-autocomplete>');
            }).toThrow();
        });

        it('Deve ter 5 Divs presentes', function(){
            expect(element.find('div').length).toEqual(5);
            expect(element.find('div')).toBeDefined();
        });

        it('Deve ter input presente', function(){
            expect(element.find('input').length).toEqual(1);
            expect(element.find('input')).toBeDefined();
        });

        it('Isolated scope deve ter atributos assigned', function () {
            expect(isolatedScope.showLabel).toBeDefined();
            expect(isolatedScope.ngChange).toBeDefined();
            expect(isolatedScope.ngModel).toBeDefined();
            expect(isolatedScope.ngRequired).toBeDefined();
            expect(isolatedScope.getItems).toBeDefined();
            expect(isolatedScope.ngBlur).toBeDefined();
        });

        it('Teste atributos com scope isolado - one way binding ("@").', function(){
            //mesmo modificando o isolateScope ainda permanece o valor atribuido
            expect(scope.id).toEqual('testeId');
            isolatedScope.id = 'isoladoId';
            expect(scope.id).toEqual('testeId');

            expect(scope.colspan).toEqual('testecolspan');
            isolatedScope.colspan = 'isoladocolspan';
            expect(scope.colspan).toEqual('testecolspan');

            expect(scope.itemLabel).toEqual('testeitemLabel');
            isolatedScope.itemLabel = 'isoladoitemLabel';
            expect(scope.itemLabel).toEqual('testeitemLabel');

            expect(scope.label).toEqual('testelabel');
            isolatedScope.label = 'isoladolabel';
            expect(scope.label).toEqual('testelabel');

            expect(scope.itemValue).toEqual('testeitemValue');
            isolatedScope.itemValue = 'isoladoitemValuel';
            expect(scope.itemValue).toEqual('testeitemValue');

            expect(scope.maxlength).toEqual('testemaxlength');
            isolatedScope.maxlength = 'isoladomaxlength';
            expect(scope.maxlength).toEqual('testemaxlength');

            expect(scope.placeholder).toEqual('testeplaceholder');
            isolatedScope.placeholder = 'isoladomaxlength';
            expect(scope.placeholder).toEqual('testeplaceholder');

            expect(scope.inputSize).toEqual('testeinputSize');
            isolatedScope.inputSize = 'isoladoinputSize';
            expect(scope.inputSize).toEqual('testeinputSize');
        });

        it('Teste atributos com scope isolado - two way binding ("=").', function(){
            expect(scope.showLabel.prop).toEqual('valorScope');
            isolatedScope.showLabel.prop = 'valorIsoladoScope';
            expect(scope.showLabel.prop).toEqual('valorIsoladoScope');

            expect(scope.ngModel.prop).toEqual('ngModel');
            isolatedScope.ngModel.prop = 'valorIsoladoScope';
            expect(scope.ngModel.prop).toEqual('valorIsoladoScope');

            expect(scope.ngRequired.prop).toEqual('ngRequired');
            isolatedScope.ngRequired.prop = 'valorIsoladoScope';
            expect(scope.ngRequired.prop).toEqual('valorIsoladoScope');

            expect(scope.ngDisabled.prop).toEqual('ngDisabled');
            isolatedScope.ngDisabled.prop = 'valorIsoladoScope';
            expect(scope.ngDisabled.prop).toEqual('valorIsoladoScope');

            expect(scope.toUpper.prop).toEqual('toUpper');
            isolatedScope.toUpper.prop = 'valorIsoladoScope';
            expect(scope.toUpper.prop).toEqual('valorIsoladoScope');

            expect(scope.toLower.prop).toEqual('toLower');
            isolatedScope.toLower.prop = 'valorIsoladoScope';
            expect(scope.toLower.prop).toEqual('valorIsoladoScope');
        });

        it('Teste atributos - function ("&").', function(){
            expect(typeof(isolatedScope.ngChange)).toEqual('function');
            expect(typeof(isolatedScope.getItems)).toEqual('function');
            expect(typeof(isolatedScope.ngBlur)).toEqual('function');
        });

        it('Teste atributos com scope isolado - function ("&").', function(){
            isolatedScope.ngChange();
            expect(scope.ngChange).toHaveBeenCalled();

            isolatedScope.getItems();
            expect(scope.getItems).toHaveBeenCalled();

            isolatedScope.ngBlur();
            expect(scope.ngBlur).toHaveBeenCalled();
        });

        it('Deve limpar o conteudo ngModel - Teste funcao limpar', function () {
            isolatedScope.ngModel.prop = 'valorIsoladoScope';
            expect(scope.ngModel.prop).toEqual('valorIsoladoScope');
            var button = element.find('button');
            button.triggerHandler('click');
            scope.$digest();
            expect(scope.ngModel).toBeNull();
        });

    });
})();