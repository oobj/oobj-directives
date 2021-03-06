/**
 * Created by Diogo on 16/10/2015.
 */
(function () {
    'use strict';

    describe('Teste de Directiva: oobjPanel', function () {
        var $rootScope,
            $compile,
            scope,
            element,
            isolatedScope;

        beforeEach(function () {
            module('oobj-directives');
            angular.mock.module('templates');
        });

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $rootScope = _$rootScope_;
            scope = $rootScope.$new();
            $compile = _$compile_;

            scope.title = 'testetitle';
            scope.footer = 'testefooter';
            scope.panelStyle = 'testepanelStyle';
            scope.colspan = 'testecolspan';

            element = getCompiledElement();
            isolatedScope = element.isolateScope();
        }));

        function getCompiledElement(xml) {
            var $element;
            if (xml == null) {
                $element = angular.element('<oobj-panel></oobj-panel>');
            } else {
                $element = angular.element(xml);
            }
            var compiledElement = $compile($element)(scope);
            scope.$digest();

            return compiledElement;
        }

        it('deve ter a classe oobj-panel', function () {
            var elementTemp = angular.element('<p class=\'oobj-panel\'></p>');
            $compile(elementTemp);
            scope.$digest();
            expect(elementTemp.hasClass('oobj-panel')).toBeTruthy();
        });

        it('Teste atributos com scope isolado - one way binding ("@").', function () {
            //mesmo modificando o isolateScope ainda permanece o valor atributitleo
            expect(scope.title).toEqual('testetitle');
            isolatedScope.title = 'isoladotitle';
            expect(scope.title).toEqual('testetitle');

            expect(scope.footer).toEqual('testefooter');
            isolatedScope.footer = 'isoladofooter';
            expect(scope.footer).toEqual('testefooter');

            expect(scope.colspan).toEqual('testecolspan');
            isolatedScope.colspan = 'isoladocolspan';
            expect(scope.colspan).toEqual('testecolspan');

            expect(scope.panelStyle).toEqual('testepanelStyle');
            isolatedScope.panelStyle = 'isoladopanelStyle';
            expect(scope.panelStyle).toEqual('testepanelStyle');
        });

        it('Teste style sem panelClass definido.', function () {
            var classng = element.find('div[ng-class]');
            expect(classng.length).toBe(2);
            expect(classng.hasClass('panel-default')).toBeTruthy();
        });

        it('Teste style com panelClass definido.', function () {
            element = getCompiledElement('<oobj-panel panel-class="panel-teste"></oobj-panel>');
            var classng = element.find('div[ng-class]');
            expect(classng.length).toBe(2);
            expect(classng.hasClass('panel-teste')).toBeTruthy();
        });

        it('Deve ter ng-transclude', function () {
            var transclude  = element.find('div[ng-transclude]');
            expect(transclude.length).toBe(1);
        });
    });

})();