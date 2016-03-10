/**
 * Created by Diogo on 23/10/2015.
 */
(function () {
    'use strict';

    describe('Teste de Directiva: oobjChartPie', function () {
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
            $element = angular.element('<oobj-chart-pie ng-model="ngModel"></oobj-chart-pie>');
            var compiledElement = $compile($element)(scope);
            scope.$digest();

            return compiledElement;
        }

        it('deve ter a classe oobj-chart-pie', function () {
            var elementTemp = angular.element('<p class=\'oobj-chart-pie\'></p>');
            $compile(elementTemp);
            scope.$digest();
            expect(elementTemp.hasClass('oobj-chart-pie')).toBeTruthy();
        });

        it('deve ter ngmodel', function () {
            expect(isolatedScope.ngModel).toBeDefined();
        });

        it('Teste atributos com scope isolado - one way binding ("@").', function () {
            expect(scope.id).toEqual('testeid');
            isolatedScope.id = 'isoladoid';
            expect(scope.id).toEqual('testeid');

            expect(scope.title).toEqual('testetitle');
            isolatedScope.title = 'isoladotitle';
            expect(scope.title).toEqual('testetitle');

            expect(scope.colspan).toEqual('testecolspan');
            isolatedScope.colspan = 'isoladocolspan';
            expect(scope.colspan).toEqual('testecolspan');
        });

    });
})();
