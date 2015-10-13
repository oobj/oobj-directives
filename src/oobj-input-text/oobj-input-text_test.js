/**
 * Created by Diogo on 06/10/2015.
 */
(function() {
    'use strict';

    describe('Teste de Directiva: oobjInputText - ', function() {

        // variaveis globais
        var $rootScope,
            $compile,
            scope, // scope onde nossa directiva esta inserida
            element, // elemento jqlite
            isolatedScope;


        beforeEach(function() {
            // carregando modulo q ira ser testado
            module('oobj-directives');
            // carregando templates
            angular.mock.module('templates');
        });

        // cria um novo scope antes de cada teste
        beforeEach(inject(function(_$compile_, _$rootScope_){
            $rootScope = _$rootScope_;
            scope = $rootScope.$new();
            $compile = _$compile_;

            scope.id = "testeId";
            scope.colspan = "testecolspan";
            scope.type = "testetype";
            scope.label = "testelabel";
            scope.maxlength = "testemaxlength";
            scope.max = "testemax";
            scope.min = "testemin";
            scope.mask = "testemask";
            scope.placeholder = "testeplaceholder";
            scope.inputSize = "testeinputSize";

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
            scope.removeMask = {
                prop: 'removeMask'
            };
            scope.autofocus = {
                prop: 'autofocus'
            };
            scope.currency = {
                prop: 'currency'
            };
            scope.toUpper = {
                prop: 'toUpper'
            };
            scope.toLower = {
                prop: 'toLower'
            };

            scope.ngChange = jasmine.createSpy('ngChange');
            scope.ngKeyup = jasmine.createSpy('ngKeyup');
            scope.ngKeydown = jasmine.createSpy('ngKeydown');
            scope.ngBlur = jasmine.createSpy('ngBlur');

            element = getCompiledElement();
            isolatedScope = element.isolateScope();
        }));

        function getCompiledElement(){

            var $element = angular.element('<oobj-input-text show-label="showLabel" ng-model="ngModel" ng-required="ngRequired" ng-disabled="ngDisabled" ng-readonly="ngReadonly" remove-mask="removeMask" autofocus="autofocus" currency="currency" to-upper="toUpper" to-lower="toLower" input-size="inputSize" ng-change="ngChange()" ng-keyup="ngKeyup()" ng-keydown="ngKeydown()" ng-blur="ngBlur()"></oobj-input-text>');

            var compiledElement = $compile($element)(scope);
            scope.$digest();

            return compiledElement;
        }

        it('Teste input text. Divs presentes', function(){
            expect(element.find('div').length).toEqual(3);
            expect(element.find('div')).toBeDefined();
            expect(element.find('div')).toBeTruthy();
        });

        it('Isolated scope deve ter atributos assigned', function () {
            expect(isolatedScope.showLabel).toBeDefined();
            expect(isolatedScope.ngChange).toBeDefined();
            expect(isolatedScope.ngModel).toBeDefined();
            expect(isolatedScope.ngRequired).toBeDefined();
            expect(isolatedScope.ngKeyup).toBeDefined();
            expect(isolatedScope.ngKeydown).toBeDefined();
            expect(isolatedScope.ngBlur).toBeDefined();
            expect(isolatedScope.ngDisabled).toBeDefined();
            expect(isolatedScope.ngReadonly).toBeDefined();
            expect(isolatedScope.removeMask).toBeDefined();
            expect(isolatedScope.autofocus).toBeDefined();
            expect(isolatedScope.currency).toBeDefined();
            expect(isolatedScope.toUpper).toBeDefined();
            expect(isolatedScope.toLower).toBeDefined();
            expect(isolatedScope.inputSize).toBeDefined();
        });

        it('Teste atributos com scope isolado - one way binding ("@").', function(){

            //mesmo modificando o isolateScope ainda permanece o valor atribuido
            expect(scope.id).toEqual('testeId');
            isolatedScope.id = "isoladoId";
            expect(scope.id).toEqual('testeId');

            expect(scope.colspan).toEqual('testecolspan');
            isolatedScope.colspan = "isoladocolspan";
            expect(scope.colspan).toEqual('testecolspan');

            expect(scope.type).toEqual('testetype');
            isolatedScope.type = "isoladotype";
            expect(scope.type).toEqual('testetype');

            expect(scope.label).toEqual('testelabel');
            isolatedScope.label = "isoladolabel";
            expect(scope.label).toEqual('testelabel');

            expect(scope.maxlength).toEqual('testemaxlength');
            isolatedScope.maxlength = "isoladomaxlengthl";
            expect(scope.maxlength).toEqual('testemaxlength');

            expect(scope.max).toEqual('testemax');
            isolatedScope.max = "isoladomax";
            expect(scope.max).toEqual('testemax');

            expect(scope.min).toEqual('testemin');
            isolatedScope.min = "isoladomax";
            expect(scope.min).toEqual('testemin');

            expect(scope.mask).toEqual('testemask');
            isolatedScope.mask = "isoladomask";
            expect(scope.mask).toEqual('testemask');

            expect(scope.placeholder).toEqual('testeplaceholder');
            isolatedScope.placeholder = "isoladoplaceholder";
            expect(scope.placeholder).toEqual('testeplaceholder');

            expect(scope.inputSize).toEqual('testeinputSize');
            isolatedScope.inputSize = "isoladoinputSize";
            expect(scope.inputSize).toEqual('testeinputSize');
        });

        it('Teste atributos com scope isolado - two way binding ("=").', function(){

            isolatedScope.showLabel.prop = "valorIsoladoScope";
            expect(scope.showLabel.prop).toEqual('valorIsoladoScope');

            isolatedScope.ngModel.prop = "valorIsoladoScope";
            expect(scope.ngModel.prop).toEqual('valorIsoladoScope');

            isolatedScope.ngRequired.prop = "valorIsoladoScope";
            expect(scope.ngRequired.prop).toEqual('valorIsoladoScope');

            isolatedScope.ngDisabled.prop = "valorIsoladoScope";
            expect(scope.ngDisabled.prop).toEqual('valorIsoladoScope');

            isolatedScope.ngReadonly.prop = "valorIsoladoScope";
            expect(scope.ngReadonly.prop).toEqual('valorIsoladoScope');

            isolatedScope.removeMask.prop = "valorIsoladoScope";
            expect(scope.removeMask.prop).toEqual('valorIsoladoScope');

            isolatedScope.autofocus.prop = "valorIsoladoScope";
            expect(scope.autofocus.prop).toEqual('valorIsoladoScope');

            isolatedScope.currency.prop = "valorIsoladoScope";
            expect(scope.currency.prop).toEqual('valorIsoladoScope');

            isolatedScope.toUpper.prop = "valorIsoladoScope";
            expect(scope.toUpper.prop).toEqual('valorIsoladoScope');

            isolatedScope.toLower.prop = "valorIsoladoScope";
            expect(scope.toLower.prop).toEqual('valorIsoladoScope');


        });

        it('Teste atributos - function ("&").', function(){
            expect(typeof(isolatedScope.ngChange)).toEqual('function');
            expect(typeof(isolatedScope.ngKeyup)).toEqual('function');
            expect(typeof(isolatedScope.ngKeydown)).toEqual('function');
            expect(typeof(isolatedScope.ngBlur)).toEqual('function');


        });
        it('Teste atributos com scope isolado - function ("&").', function(){
            isolatedScope.ngChange();
            expect(scope.ngChange).toHaveBeenCalled();

            isolatedScope.ngKeyup();
            expect(scope.ngKeyup).toHaveBeenCalled();

            isolatedScope.ngKeydown();
            expect(scope.ngKeydown).toHaveBeenCalled();

            isolatedScope.ngBlur();
            expect(scope.ngBlur).toHaveBeenCalled();

        });

        it('Deve limpar o conteudo ngModel - Teste funcao limpar', function () {
            isolatedScope.ngModel.prop = "valorIsoladoScope";
            expect(scope.ngModel.prop).toEqual('valorIsoladoScope');
            var button = element.find('button');
            button.triggerHandler('click');
            scope.$digest();
            expect(scope.ngModel).toBeNull;
        });
    });
})();