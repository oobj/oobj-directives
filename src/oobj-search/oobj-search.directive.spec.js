/**
 * Created by Diogo on 14/10/2015.
 */
(function() {
    'use strict';

    describe('Teste de Directiva: oobjSearch', function(){
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

        function getCompiledElement(xml){

            var $element;
            if (xml == null) {
                $element = angular.element('<oobj-search vm="vm" grid-options="true"></oobj-search>');
            } else {
                $element = angular.element(xml);
            }
            var compiledElement = $compile($element)(scope);
            scope.$digest();

            return compiledElement;
        }

        it('deve ter a classe oobj-search', function () {
            var elementTemp = angular.element("<p class='oobj-search'></p>");
            $compile(elementTemp);
            scope.$digest();
            expect(elementTemp.hasClass('oobj-search')).toBeTruthy();
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
            expect(transclude.length).toBe(4);
        });


        it('Deve ter showBtnPesquisaAvancada e showBtnPesquisar true por default e showBtnLimpar false', function () {
            element = getCompiledElement();
            isolatedScope = element.isolateScope();
            expect(isolatedScope.showBtnPesquisaAvancada).toBe(true);
            expect(isolatedScope.showBtnPesquisar).toBe(true);
            expect(isolatedScope.showBtnLimpar).toBe(false);
            var button = element.find('oobj-button');
            expect(button.length).toBe(2);
            expect(button[0].innerText).toBe(' Pesq. Avançada');
            expect(button[1].innerText).toBe(' Pesquisar');
        });

        it('Deve mostrar todos botoes pesquisa - pesquisa avancada - limpar', function () {
            element = getCompiledElement('<oobj-search vm="vm" grid-options="true" show-btn-limpar="true"></oobj-search>');
            isolatedScope = element.isolateScope();
            expect(isolatedScope.showBtnPesquisaAvancada).toBe(true);
            expect(isolatedScope.showBtnPesquisar).toBe(true);
            expect(isolatedScope.showBtnLimpar).toBe(true);
            var button = element.find('oobj-button');
            expect(button.length).toBe(3);
            expect(button[0].innerText).toBe(' Limpar');
            expect(button[1].innerText).toBe(' Pesq. Avançada');
            expect(button[2].innerText).toBe(' Pesquisar');
        });

        it('Deve carregar apenas botao limpar', function () {
            element = getCompiledElement('<oobj-search vm="vm" grid-options="true" show-btn-limpar="true" show-btn-pesquisar="false"  show-btn-pesquisa-avancada="false"></oobj-search>');
            isolatedScope = element.isolateScope();
            expect(isolatedScope.showBtnPesquisaAvancada).toBe(false);
            expect(isolatedScope.showBtnPesquisar).toBe(false);
            expect(isolatedScope.showBtnLimpar).toBe(true);
            var button = element.find('oobj-button');
            expect(button.length).toBe(1);
            expect(button[0].innerText).toBe(' Limpar');
        });



    });
})();