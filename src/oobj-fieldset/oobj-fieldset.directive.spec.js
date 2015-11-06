/**
 * Created by Diogo on 05/11/2015.
 */
(function () {
    'use strict';

    describe('Teste de Directiva: oobjFieldset', function () {

        // variaveis globais
        var $rootScope,
            $compile,
            scope, // scope onde nossa directiva esta inserida
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

            scope.id = "testeid";
            scope.title = "testetitle";
            scope.titleStyle = "testetitleStyle";
            scope.colspan = "testecolspan";

            element = getCompiledElement();
            isolatedScope = element.isolateScope();
        }));

        function getCompiledElement() {
            var $element = angular.element('<oobj-fieldset></oobj-fieldset>');
            var compiledElement = $compile($element)(scope);
            scope.$digest();

            return compiledElement;
        }

        it('deve ter a classe oobj-fieldset', function () {
            var elementTemp = angular.element("<p class='oobj-fieldset'></p>");
            $compile(elementTemp);
            scope.$digest();
            expect(elementTemp.hasClass('oobj-fieldset')).toBeTruthy();
        });

        it('Teste atributos com scope isolado - one way binding ("@").', function () {

            expect(scope.title).toEqual('testetitle');
            isolatedScope.title = "isoladotitle";
            expect(scope.title).toEqual('testetitle');

            expect(scope.titleStyle).toEqual('testetitleStyle');
            isolatedScope.titleStyle = "isoladotitleStyle";
            expect(scope.titleStyle).toEqual('testetitleStyle');

            expect(scope.colspan).toEqual('testecolspan');
            isolatedScope.colspan = "isoladocolspan";
            expect(scope.colspan).toEqual('testecolspan');

        });

        it('Deve ter ng-transclude', function () {
            var transclude  = element.find('div[ng-transclude]');
            expect(transclude.length).toBe(1);
        });

        it('Deve ter campo fieldset', function () {
            var transclude  = element.find('fieldset');
            expect(transclude.length).toBe(1);
        });

        it('Deve ter campo legend', function () {
            var transclude  = element.find('legend');
            expect(transclude.length).toBe(1);
        });

    });
})();
