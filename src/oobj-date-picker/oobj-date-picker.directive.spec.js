/**
 * Created by Diogo on 28/10/2015.
 */
(function () {
    'use strict';

    describe('Teste de Directiva: oobjDatePicker', function () {
        // variaveis globais
        var $rootScope,
            $compile,
            scope, // scope onde nossa directiva esta insertitlea
            element, // elemento jqlite
            isolatedScope;

        beforeEach(function () {
            // carregando modulo q ira ser testado
            module('oobj-directives');
            // carregando templates
            angular.mock.module('templates');
        });

        // cria um novo scope antes de cada teste
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $rootScope = _$rootScope_;
            scope = $rootScope.$new();
            $compile = _$compile_;

            scope.id = "testeId";
            scope.name = "testename";
            scope.label = "testelabel";
            scope.showLabel = "testeshowLabel";
            scope.colspan = "testecolspan";
            scope.inputSize = "testeinputSize";

            scope.title = "testetitle";
            scope.footer = "testefooter";

            scope.ngModel = {
                prop: 'ngModel'
            };

            scope.opts = {
                prop: 'opts'
            };

            scope.range = {
                prop: 'range'
            };

            element = getCompiledElement();
            isolatedScope = element.isolateScope();
        }));

        function getCompiledElement(xml) {
            var $element;
            if (xml == null) {
                $element = angular.element('<oobj-date-picker ng-model="ngModel" range="range"></oobj-date-picker>');
            } else {
                $element = angular.element(xml);
            }
            var compiledElement = $compile($element)(scope);
            scope.$digest();

            return compiledElement;
        }

        it('deve ter ngmodel', function(){
            expect(isolatedScope.ngModel).toBeDefined();
        });

        it('deve falhar se ngModel nao especificado', function () {
            expect(function(){
                getCompiledElement('<input type="text" oobj-date-picker="" />');
            }).toThrow();
        });

        it('deve ter a classe oobj-date-picker', function () {
            var elementTemp = angular.element("<p class='oobj-date-picker'></p>");
            $compile(elementTemp);
            scope.$digest();
            expect(elementTemp.hasClass('oobj-date-picker')).toBeTruthy();
        });

        it('Teste atributos com scope isolado - one way binding ("@").', function () {

            expect(scope.id).toEqual('testeId');
            isolatedScope.id = "isoladoId";
            expect(scope.id).toEqual('testeId');

            expect(scope.name).toEqual('testename');
            isolatedScope.name = "isoladoname";
            expect(scope.name).toEqual('testename');

            expect(scope.label).toEqual('testelabel');
            isolatedScope.label = "isoladolabel";
            expect(scope.label).toEqual('testelabel');

            expect(scope.showLabel).toEqual('testeshowLabel');
            isolatedScope.showLabel = "isoladoshowLabel";
            expect(scope.showLabel).toEqual('testeshowLabel');

            expect(scope.colspan).toEqual('testecolspan');
            isolatedScope.colspan = "isoladocolspan";
            expect(scope.colspan).toEqual('testecolspan');

            expect(scope.inputSize).toEqual('testeinputSize');
            isolatedScope.inputSize = "isoladoinputSize";
            expect(scope.inputSize).toEqual('testeinputSize');

        });

        it('Teste atributos com scope isolado - two way binding ("=").', function(){

            isolatedScope.ngModel.prop = "valorIsoladoScope";
            expect(scope.ngModel.prop).toEqual('valorIsoladoScope');

            isolatedScope.opts.prop = "valorIsoladoScope";
            expect(scope.opts.prop).toEqual('opts');

            isolatedScope.range.prop = "valorIsoladoScope";
            expect(scope.range.prop).toEqual('valorIsoladoScope');

        });
    });

})();