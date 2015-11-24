/**
 * Created by Diogo on 29/10/2015.
 */
(function () {
    'use strict';

    describe('Teste de Directiva: oobjGrid', function () {
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

            scope.title = "testetitle";
            scope.colspan = "testecolspan";
            scope.footer = "testefooter";

            scope.title = "testetitle";
            scope.footer = "testefooter";

            scope.data = {
                prop: 'data'
            };

            scope.gridOptions = {
                prop: 'gridOptions'
            };

            element = getCompiledElement();
            isolatedScope = element.isolateScope();
        }));

        function getCompiledElement(xml) {
            var $element;
            if (xml == null) {
                $element = angular.element('<oobj-grid data="dat"></oobj-grid>');
            } else {
                $element = angular.element(xml);
            }
            var compiledElement = $compile($element)(scope);
            scope.$digest();

            return compiledElement;
        }

        it('deve ter a classe oobj-grid', function () {
            var elementTemp = angular.element("<p class='oobj-grid'></p>");
            $compile(elementTemp);
            scope.$digest();
            expect(elementTemp.hasClass('oobj-grid')).toBeTruthy();
        });

        it('Teste atributos com scope isolado - one way binding ("@").', function () {

            expect(scope.title).toEqual('testetitle');
            isolatedScope.title = "isoladotitle";
            expect(scope.title).toEqual('testetitle');

            expect(scope.colspan).toEqual('testecolspan');
            isolatedScope.colspan = "isoladocolspan";
            expect(scope.colspan).toEqual('testecolspan');

            expect(scope.footer).toEqual('testefooter');
            isolatedScope.footer = "isoladofooter";
            expect(scope.footer).toEqual('testefooter');

        });

        it('Teste atributos com scope isolado - two way binding ("=").', function(){

            expect(scope.data.prop).toEqual('data');
            isolatedScope.gridOptions.prop = "valorIsoladoScope";
            expect(scope.gridOptions).toBeDefined();
            expect(scope.gridOptions.prop).toEqual('gridOptions');

        });

        it('gridOptions nao definido.', function(){
            expect(scope.gridOptions).toBeDefined();
            scope.gridOptions = undefined;
            expect(scope.gridOptions).toBeUndefined();
            element = getCompiledElement('<oobj-grid data="dat"></oobj-grid>');
            isolatedScope = element.isolateScope();
            expect(isolatedScope.gridOptions).toBeDefined();

        });

        it('Deve configurar gridStyle width e height nao definido', function() {
            var style  = element.find('div[ng-style]');
            expect(style[0].style['width']).toBe('');
        });

        //it('Deve configurar gridStyle width e height definido', function() {
        //    element = getCompiledElement('<oobj-grid width="1px" height="1px"></oobj-grid>');
        //    var style  = element.find('div[ng-style]');
        //    expect(style[0].style['width']).toBe('1px');
        //    expect(style[0].style['height']).toBe('1px');
        //});
    });

})();