/**
 * Created by Diogo on 29/10/2015.
 */
(function () {
    'use strict';

    describe('Teste de Directiva: oobjFooter', function () {
        var $rootScope,
            $compile,
            scope,
            element,
            isolatedScope,
            $filter;

        beforeEach(function () {
            module('oobj-directives');
            angular.mock.module('templates');
        });

        beforeEach(inject(function (_$compile_, _$rootScope_, _$filter_) {
            $filter = _$filter_;
            $rootScope = _$rootScope_;
            scope = $rootScope.$new();
            $compile = _$compile_;

            scope.version = 'testeversion';
            scope.generatedData = 'testegeneratedData';
            scope.year = 'testeyear';

            element = getCompiledElement();
            isolatedScope = element.isolateScope();
        }));

        function getCompiledElement() {
            var $element = angular.element('<oobj-footer></oobj-footer>');
            var compiledElement = $compile($element)(scope);
            scope.$digest();

            return compiledElement;
        }

        it('deve ter a classe oobj-footer', function () {
            var elementTemp = angular.element('<p class=\'oobj-footer\'></p>');
            $compile(elementTemp);
            scope.$digest();
            expect(elementTemp.hasClass('oobj-footer')).toBeTruthy();
        });

        it('Teste atributos com scope isolado - one way binding ("@").', function () {
            expect(scope.version).toEqual('testeversion');
            isolatedScope.version = 'isoladoversion';
            expect(scope.version).toEqual('testeversion');

            expect(scope.generatedData).toEqual('testegeneratedData');
            isolatedScope.generatedData = 'isoladogeneratedData';
            expect(scope.generatedData).toEqual('testegeneratedData');

            expect(scope.year).toEqual('testeyear');
            isolatedScope.year = 'isoladoyear';
            expect(scope.year).toEqual('testeyear');
        });

        it('deve carregar versao e data atual no html', function () {
            var version = isolatedScope.version;
            var generatedData = $filter('date')(new Date(), 'dd-MM-yyyy');
            var year = $filter('date')(new Date(), 'yyyy');
            expect(element[0].innerText).toBe('\n    ' +'©' + year +
                ' Painel de Gestão\n    \n\n    Powered by Oobj - v' +
                version + ' [' + generatedData + ']' + '\n\n');
        });

    });

})();