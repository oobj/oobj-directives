/**
 * Created by Diogo on 16/10/2015.
 */
(function () {
    'use strict';

    describe('Teste de Directiva: oobj-stats', function () {
        // variaveis globais
        var $rootScope,
            $compile,
            scope, // scope onde nossa directiva esta inserida
            element, // elemento jqlite
            isolatedScope;

        beforeEach(function () {
            module('oobj-directives');
            angular.mock.module('templates');
        });

        beforeEach(inject(function(_$compile_, _$rootScope_){
            $rootScope = _$rootScope_;
            scope = $rootScope.$new();
            $compile = _$compile_;

            scope.comments = "testecomments";
            scope.number = "testenumber";
            scope.name = "testename";
            scope.colour = "testecolour";
            scope.details = "testedetails";
            scope.type = "testetype";
            scope.goto = "testegoto";

            scope.model = {
                prop: 'model'
            };

            element = getCompiledElement();
            isolatedScope = element.isolateScope();
        }));

        function getCompiledElement(){

            var $element = angular.element('<oobj-stats model="model" comments="comments" number="number" name="name" colour="colour" details="details" type="type" goto="goto"></oobj-stats>');

            var compiledElement = $compile($element)(scope);
            scope.$digest();

            return compiledElement;
        }

        it('deve ter a classe oobj-input-text', function () {
            var elementTemp = angular.element("<p class='oobj-stats'></p>");
            $compile(elementTemp);
            scope.$digest();
            expect(elementTemp.hasClass('oobj-stats')).toBeTruthy();
        });

        it('Isolated scope deve ter atributos assigned', function () {
            expect(isolatedScope.model).toBeDefined();
            expect(isolatedScope.comments).toBeDefined();
            expect(isolatedScope.number).toBeDefined();
            expect(isolatedScope.name).toBeDefined();
            expect(isolatedScope.colour).toBeDefined();
            expect(isolatedScope.details).toBeDefined();
            expect(isolatedScope.name).toBeDefined();
            expect(isolatedScope.goto).toBeDefined();
        });

        it('Teste atributos com scope isolado - one way binding ("@").', function(){

            //mesmo modificando o isolateScope ainda permanece o valor atribuido
            expect(scope.comments).toEqual('testecomments');
            isolatedScope.comments = "isoladocomments";
            expect(scope.comments).toEqual('testecomments');

            expect(scope.number).toEqual('testenumber');
            isolatedScope.number = "isoladonumber";
            expect(scope.number).toEqual('testenumber');

            expect(scope.name).toEqual('testename');
            isolatedScope.name = "isoladoname";
            expect(scope.name).toEqual('testename');

            expect(scope.colour).toEqual('testecolour');
            isolatedScope.colour = "isoladocolour";
            expect(scope.colour).toEqual('testecolour');

            expect(scope.details).toEqual('testedetails');
            isolatedScope.details = "isoladodetailsl";
            expect(scope.details).toEqual('testedetails');

            expect(scope.type).toEqual('testetype');
            isolatedScope.type = "isoladotype";
            expect(scope.type).toEqual('testetype');

            expect(scope.goto).toEqual('testegoto');
            isolatedScope.goto = "isoladogoto";
            expect(scope.goto).toEqual('testegoto');
        });

        it('Teste atributos com scope isolado - two way binding ("=").', function(){
            isolatedScope.model.prop = "valorIsoladoScope";
            expect(scope.model.prop).toEqual('valorIsoladoScope');
        });

        it('Deve substituir elemento na directive - replace: true', function () {
            expect(element.find('oobj-stats').length).toEqual(0);
        });
    });
})();
