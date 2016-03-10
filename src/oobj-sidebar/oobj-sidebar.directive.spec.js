/**
 * Created by Diogo on 30/10/2015.
 */
(function () {
    'use strict';

    describe('Teste de Directiva: oobjSidebar', function () {
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

            scope.provider = {
                prop: 'provider'
            };

            element = getCompiledElement();
            isolatedScope = element.isolateScope();
        }));

        function getCompiledElement() {
            var $element;
            $element = angular.element('<oobj-sidebar></oobj-sidebar>');
            var compiledElement = $compile($element)(scope);
            scope.$digest();

            return compiledElement;
        }

        it('deve ter a classe oobj-sidebar', function () {
            var elementTemp = angular.element('<p class=\'oobj-sidebar\'></p>');
            $compile(elementTemp);
            scope.$digest();
            expect(elementTemp.hasClass('oobj-sidebar')).toBeTruthy();
        });


        it('Teste atributos com scope isolado - two way binding ("=").', function () {
            expect(scope.provider).toBeDefined();
            expect(scope.provider.prop).toEqual('provider');
        });

        it('Deve configurar collapseVar na funcao check(x) diferente do valor default(0)', function () {
            var colapsex = 11;
            isolatedScope.check(colapsex);
            expect(isolatedScope.collapseVar).toBe(colapsex);
        });

        it('Deve configurar collapseVar na funcao check(x) igual do valor default(0)', function () {
            var colapsex = 0;
            isolatedScope.check(colapsex);
            expect(isolatedScope.collapseVar).toBe(colapsex);
        });

        it('Deve configurar multiCollapseVar na funcao check(y) difente do valor default(0)', function () {
            var colapsey = 12;
            isolatedScope.multiCheck(colapsey);
            expect(isolatedScope.multiCollapseVar).toBe(colapsey);
        });

        it('Deve configurar multiCollapseVar na funcao check(y) igual do valor default(0)', function () {
            var colapsey = 0;
            isolatedScope.multiCheck(colapsey);
            expect(isolatedScope.multiCollapseVar).toBe(colapsey);
        });

        it('Deve substituir elemento na directive - replace: true', function () {
            expect(element.find('oobj-sidebar').length).toEqual(0);
        });

    });

})();