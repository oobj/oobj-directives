/**
 * Created by Diogo on 23/10/2015.
 */
(function () {
    'use strict';

    describe('Teste de Directiva: oobjChartBar', function () {
        var $rootScope,
            $compile,
            scope,
            element,
            isolatedScope;

        beforeEach(function () {
            module('oobj-directives');
            angular.mock.module('templates');
        });

        // cria um novo scope antes de cada teste
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $rootScope = _$rootScope_;
            scope = $rootScope.$new();
            $compile = _$compile_;

            scope.id = 'testeid';
            scope.chartId = 'testechartId';
            scope.title = 'testetitle';
            scope.type = 'testetype';
            scope.colspan = 'testecolspan';

            scope.ngModel = {
                prop: 'ngModel'
            };

            element = getCompiledElement();
            isolatedScope = element.isolateScope();
        }));

        function getCompiledElement(xml) {
            var $element;
            if (xml == null) {
                $element = angular.element('<oobj-chart-bar ng-model="ngModel"></oobj-chart-bar>');
            } else {
                $element = angular.element(xml);
            }
            var compiledElement = $compile($element)(scope);
            scope.$digest();

            return compiledElement;
        }

        it('deve ter a classe oobj-chart-bar', function () {
            var elementTemp = angular.element('<p class=\'oobj-chart-bar\'></p>');
            $compile(elementTemp);
            scope.$digest();
            expect(elementTemp.hasClass('oobj-chart-bar')).toBeTruthy();
        });

        it('deve ter ngmodel', function(){
            expect(isolatedScope.ngModel).toBeDefined();
        });

        it('deve falhar se ngModel nao especificado', function () {
            var isolated =  getCompiledElement('<oobj-chart-bar></oobj-chart-bar>').isolateScope();
            var requireNgmodel = isolated.$$isolateBindings.ngModel.optional;
            expect(requireNgmodel).toBeFalsy();
        });

        it('Teste atributos com scope isolado - one way binding ("@").', function () {
            expect(scope.title).toEqual('testetitle');
            isolatedScope.title = 'isoladotitle';
            expect(scope.title).toEqual('testetitle');

            expect(scope.type).toEqual('testetype');
            isolatedScope.type = 'isoladotype';
            expect(scope.type).toEqual('testetype');

            expect(scope.colspan).toEqual('testecolspan');
            isolatedScope.colspan = 'isoladocolspan';
            expect(scope.colspan).toEqual('testecolspan');
        });

    });
})();
