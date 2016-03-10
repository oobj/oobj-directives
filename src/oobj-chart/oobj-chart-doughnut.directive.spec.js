/**
 * Created by Diogo on 23/10/2015.
 */
(function () {
    'use strict';

    describe('Teste de Directiva: oobjChartDoughnut', function () {
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
            scope.colspan = 'testecolspan';

            scope.ngModel = {
                prop: 'ngModel'
            };

            element = getCompiledElement();
            isolatedScope = element.isolateScope();
        }));

        function getCompiledElement() {
            var $element;
            $element = angular.element('<oobj-chart-doughnut ng-model="ngModel"></oobj-chart-doughnut>');
            var compiledElement = $compile($element)(scope);
            scope.$digest();

            return compiledElement;
        }

        it('deve ter a classe oobj-chart-doughnut', function () {
            var elementTemp = angular.element('<p class=\'oobj-chart-doughnut\'></p>');
            $compile(elementTemp);
            scope.$digest();
            expect(elementTemp.hasClass('oobj-chart-doughnut')).toBeTruthy();
        });

        it('deve ter ngmodel', function () {
            expect(isolatedScope.ngModel).toBeDefined();
        });

        it('Teste atributos com scope isolado - one way binding ("@").', function () {
            expect(scope.chartId).toEqual('testechartId');
            isolatedScope.chartId = 'isoladochartId';
            expect(scope.chartId).toEqual('testechartId');

            expect(scope.title).toEqual('testetitle');
            isolatedScope.title = 'isoladotitle';
            expect(scope.title).toEqual('testetitle');

            expect(scope.colspan).toEqual('testecolspan');
            isolatedScope.colspan = 'isoladocolspan';
            expect(scope.colspan).toEqual('testecolspan');
        });

    });
})();
