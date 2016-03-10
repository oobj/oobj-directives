/**
 * Created by Diogo on 16/10/2015.
 */
(function () {
    'use strict';

    describe('Teste de Directiva: oobj-timeline', function () {
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

            scope.colspan = 'testecolspan';

            scope.provider = [{
                prop: 'provider'
            }];

            element = getCompiledElement();
            isolatedScope = element.isolateScope();
        }));

        function getCompiledElement() {
            var $element = angular.element('<oobj-timeline provider="provider" colspan="colspan"></oobj-timeline>');

            var compiledElement = $compile($element)(scope);
            scope.$digest();

            return compiledElement;
        }

        it('deve ter a classe oobj-input-text', function () {
            var elementTemp = angular.element('<p class=\'oobj-timeline\'></p>');
            $compile(elementTemp);
            scope.$digest();
            expect(elementTemp.hasClass('oobj-timeline')).toBeTruthy();
        });

        it('Isolated scope deve ter atributos assigned', function () {
            expect(isolatedScope.provider).toBeDefined();
            expect(isolatedScope.colspan).toBeDefined();
        });

        it('Teste atributos com scope isolado - one way binding ("@").', function () {
            //mesmo modificando o isolateScope ainda permanece o valor atribuido
            expect(scope.colspan).toEqual('testecolspan');
            isolatedScope.colspan = 'isoladocolspan';
            expect(scope.colspan).toEqual('testecolspan');
        });

        it('Teste atributos com scope isolado - two way binding ("=").', function () {
            isolatedScope.provider.prop = 'valorIsoladoScope';
            expect(scope.provider.prop).toEqual('valorIsoladoScope');
        });

        it('Deve substituir elemento na directive - replace: true', function () {
            expect(element.find('oobj-timeline').length).toEqual(0);
        });

    });
})();
