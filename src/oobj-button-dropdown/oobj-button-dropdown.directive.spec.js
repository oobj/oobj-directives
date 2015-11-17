/**
 * Created by Diogo on 17/11/2015.
 */
(function() {
    'use strict';

    describe('Teste de Directiva: oobjButtonDropdown', function() {

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

            scope.label = "testelabel";
            scope.btnClass = "testebtnClass";
            scope.icon = "testeicon";
            scope.colspan = "testecolspan";

            scope.provider = {
                prop: 'true'
            };

            element = getCompiledElement();
            isolatedScope = element.isolateScope();
        }));

        function getCompiledElement(xml){
            var $element;
            if(xml == null) {
                $element = angular.element('<oobj-button-dropdown provider="true"></oobj-button-dropdown>');
            } else {
                $element = angular.element(xml);
            }
            var compiledElement = $compile($element)(scope);
            scope.$digest();

            return compiledElement;
        }

        it('Teste atributos com scope isolado - two way binding ("=").', function() {
            isolatedScope.provider.prop = "valorIsoladoScope";
            expect(scope.provider.prop).toEqual('true');
        });

        it('deve ter a classe oobj-button', function () {
            var elementTemp = angular.element("<p class='oobj-button-dropdown'></p>");
            $compile(elementTemp);
            scope.$digest();
            expect(elementTemp.hasClass('oobj-button-dropdown')).toBeTruthy();
        });

        it('Teste atributos com scope isolado - one way binding ("@").', function(){

            expect(scope.btnClass).toEqual('testebtnClass');
            isolatedScope.btnClass = "isoladobtnClass";
            expect(scope.btnClass).toEqual('testebtnClass');

            expect(scope.icon).toEqual('testeicon');
            isolatedScope.icon = "isoladoicon";
            expect(scope.icon).toEqual('testeicon');

            expect(scope.colspan).toEqual('testecolspan');
            isolatedScope.colspan = "isoladocolspan";
            expect(scope.colspan).toEqual('testecolspan');

        });

        it('Teste btnClass nao definido', function() {
            var classng  = element.find('[ng-class]');
            expect(classng.length).toBe(2);
            expect(classng.hasClass('btn-default')).toBeTruthy();
        });

        it('Teste btnClass definido.', function() {
            scope.btnClass = null;
            element = getCompiledElement('<oobj-button-dropdown btn-class="teste"></oobj-button-dropdown>');
            var classng  = element.find('[ng-class]');
            expect(classng.length).toBe(2);
            expect(classng.hasClass('teste')).toBeTruthy();
        });
    });
})();