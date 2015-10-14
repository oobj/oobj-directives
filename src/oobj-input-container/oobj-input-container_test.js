/**
 * Created by Diogo on 14/10/2015.
 */
(function() {
    'use strict';

    describe('Teste de Directiva: oobjInputContainer', function() {

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

            scope.colspan = "testecolspan";
            scope.label = "testelabel";

            scope.showLabel = {
                prop: 'valorScope'
            };

            element = getCompiledElement();
            isolatedScope = element.isolateScope();
        }));

        function getCompiledElement(){

            var $element = angular.element('<oobj-input-container show-label="showLabel"></oobj-input-container>');

            var compiledElement = $compile($element)(scope);
            scope.$digest();

            return compiledElement;
        };

        it('deve ter a classe oobj-input-container', function () {
            var elementTemp = angular.element("<p class='oobj-input-container'></p>");
            $compile(elementTemp);
            scope.$digest();
            expect(elementTemp.hasClass('oobj-input-container')).toBeTruthy();
        });

        it('Teste input text. Divs presentes', function(){
            expect(element.find('div').length).toEqual(2);
            expect(element.find('div')).toBeDefined();
            expect(element.find('div')).toBeTruthy();
        });

        it('Isolated scope deve ter atributos assigned', function () {
            expect(isolatedScope.showLabel).toBeDefined();
        });

        it('Teste atributos com scope isolado - one way binding ("@").', function(){

            //mesmo modificando o isolateScope ainda permanece o valor atribuido
            expect(scope.colspan).toEqual('testecolspan');
            isolatedScope.colspan = "isoladocolspan";
            expect(scope.colspan).toEqual('testecolspan');

            expect(scope.label).toEqual('testelabel');
            isolatedScope.label = "isoladolabel";
            expect(scope.label).toEqual('testelabel');

        });

        it('Teste atributos com scope isolado - two way binding ("=").', function(){

            isolatedScope.showLabel.prop = "valorIsoladoScope";
            expect(scope.showLabel.prop).toEqual('valorIsoladoScope');

        });

    });
})();