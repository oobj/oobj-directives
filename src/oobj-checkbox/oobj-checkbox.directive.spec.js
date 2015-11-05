/**
 * Created by Diogo on 26/10/2015.
 */
(function() {
    'use strict';

    describe('Teste de Directiva: oobjCheckbox', function() {

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

            scope.id = "testeid";
            scope.label = "testelabel";
            scope.colspan = "testecolspan";

            scope.ngModel = {
                prop: 'ngModel'
            };
            scope.inline = {
                prop: 'true'
            };

            element = getCompiledElement();
            isolatedScope = element.isolateScope();
        }));

        function getCompiledElement(xml){
            var $element;
            if(xml == null) {
                $element = angular.element('<oobj-checkbox ng-model="ngModel" inline="true"></oobj-checkbox>');
            } else {
                $element = angular.element(xml);
            }
            var compiledElement = $compile($element)(scope);
            scope.$digest();

            return compiledElement;
        }

        it('deve ter a classe oobj-checkbox', function () {
            var elementTemp = angular.element("<p class='oobj-checkbox'></p>");
            $compile(elementTemp);
            scope.$digest();
            expect(elementTemp.hasClass('oobj-checkbox')).toBeTruthy();
        });

        it('deve ter ngmodel', function(){
            expect(isolatedScope.ngModel).toBeDefined();
            expect(isolatedScope.inline).toBeDefined();
        });

        it('deve ter ngmodel', function(){
            expect(isolatedScope.ngModel).toBeDefined();
        });

        it('deve falhar se ngModel nao especificado', function () {
            expect(function(){
                getCompiledElement('<input type="text" oobj-checkbox="" />');
            }).toThrow();
        });

        it('Teste atributos com scope isolado - one way binding ("@").', function(){

            //mesmo modificando o isolateScope ainda permanece o valor atribuido
            expect(scope.id).toEqual('testeid');
            isolatedScope.id = "isoladoid";
            expect(scope.id).toEqual('testeid');

            expect(scope.colspan).toEqual('testecolspan');
            isolatedScope.colspan = "isoladocolspan";
            expect(scope.colspan).toEqual('testecolspan');

        });

        it('Teste atributos com scope isolado - two way binding ("=").', function() {

            isolatedScope.inline.prop = "valorIsoladoScope";
            expect(scope.inline.prop).toEqual('true');


        });
        it('Teste funcao ng-class. in-line.', function() {
            var classng  = element.find('div[ng-class]');
            expect(classng.length).toBe(1);
            expect(classng.hasClass('checkbox-inline')).toBeTruthy();
        });

        it('Teste funcao ng-class - checkboxclass indefinido com inLine ativo.', function() {
            element = getCompiledElement('<oobj-checkbox ng-model="ngModel" inline="false" colspan="col"></oobj-checkbox>');
            var classng  = element.find('div[ng-class]');
            expect(classng.length).toBe(1);
            expect(classng.hasClass('col')).toBeTruthy();
        });

        it('Deve concatenar  classes scope.checkboxClass - Teste funcao ng-class - checkboxclass definido com inLine ativo.', function() {
            element = getCompiledElement('<oobj-checkbox ng-model="ngModel" inline="true" colspan="col"></oobj-checkbox>');
            isolatedScope = element.isolateScope();
            expect(isolatedScope.checkboxClass).toBe('col checkbox-inline');
        });
    });
})();