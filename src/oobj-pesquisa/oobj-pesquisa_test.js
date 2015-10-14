/**
 * Created by Diogo on 14/10/2015.
 */
(function() {
    'use strict';

    describe('Teste de Directiva: oobjPesquisa', function(){
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

            scope.title = "testetitle";
            scope.footer = "testefooter";

            scope.vm = {
                prop: 'valorScope'
            };

            scope.showBtnPesquisaAvancada = {
                prop: 'true'
            };

            scope.showBtnLimpar = {
                prop: 'true'
            };

            scope.showBtnPesquisar = {
                prop: 'true'
            };

            scope.gridOptions = {
                prop: 'true'
            };

            element = getCompiledElement();
            isolatedScope = element.isolateScope();
        }));

        function getCompiledElement(){

            var $element = angular.element('<oobj-pesquisa vm="vm" grid-options="true"></oobj-pesquisa>');

            var compiledElement = $compile($element)(scope);
            scope.$digest();

            return compiledElement;
        }

        it('deve ter a classe oobj-pesquisa', function () {
            var elementTemp = angular.element("<p class='oobj-pesquisa'></p>");
            $compile(elementTemp);
            scope.$digest();
            expect(elementTemp.hasClass('oobj-pesquisa')).toBeTruthy();
        });


        it('Teste atributos com scope isolado - one way binding ("@").', function(){

            //mesmo modificando o isolateScope ainda permanece o valor atribuido
            expect(scope.title).toEqual('testetitle');
            isolatedScope.title = "isoladotitle";
            expect(scope.title).toEqual('testetitle');

            expect(scope.footer).toEqual('testefooter');
            isolatedScope.footer = "isoladofooter";
            expect(scope.footer).toEqual('testefooter');

        });

        it('Teste atributos com scope isolado - two way binding ("=").', function(){

            isolatedScope.vm.prop = "valorIsoladoScope";
            expect(scope.vm.prop).toEqual('valorIsoladoScope');
            expect(scope.showBtnPesquisaAvancada.prop).toEqual('true');
            expect(scope.showBtnLimpar.prop).toEqual('true');
            expect(scope.showBtnPesquisar.prop).toEqual('true');
            expect(scope.gridOptions.prop).toEqual('true');

        });

        it('Deve ter ng-transclude', function () {
            var transclude  = element.find('div[ng-transclude]');
            expect(transclude.length).toBe(3);
        });

    });
})();