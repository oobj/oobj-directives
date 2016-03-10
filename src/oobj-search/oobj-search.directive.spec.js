/**
 * Created by Diogo on 14/10/2015.
 */
(function() {
    'use strict';

    describe('Teste de Directiva: oobjSearch', function(){
        var $rootScope,
            $compile,
            $httpBackend,
            scope,
            element,
            isolatedScope;

        beforeEach(module('oobj-directives'));
        beforeEach(inject(function(_$compile_, _$rootScope_, _$httpBackend_){
            $compile = _$compile_;
            $rootScope = _$rootScope_;
            $httpBackend = _$httpBackend_;

            scope = $rootScope.$new();

            scope.initGrid = function(gridScope) {
                gridScope.addColumn({field: 'test', name: 'Test', width: '100%'});
            };

            scope.title = 'testetitle';
            scope.footer = 'testefooter';

            scope.vm = {
                prop: 'valorScope',
                initGrid: {}
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

            var oobjGridScope = $rootScope.$new();
            // atributos mínimos para compilar a grid
            oobjGridScope.initGrid = function(gridScope) {
                gridScope.addColumn({field: 'test', name: 'Test', width: '100%'});
            };
            oobjGridScope.pesquisar = function() {};

            scope.vm = oobjGridScope;

            $httpBackend.whenGET('additionalContent').respond({ src: 'additionalContent' });

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

        it('Teste atributos com scope isolado - one way binding ("@").', function(){
            //mesmo modificando o isolateScope ainda permanece o valor atribuido
            expect(scope.title).toEqual('testetitle');
            isolatedScope.title = 'isoladotitle';
            expect(scope.title).toEqual('testetitle');

            expect(scope.footer).toEqual('testefooter');
            isolatedScope.footer = 'isoladofooter';
            expect(scope.footer).toEqual('testefooter');

        });

        it('Teste atributos com scope isolado - two way binding ("=").', function(){
            isolatedScope.vm.prop = 'valorIsoladoScope';
            expect(scope.vm.prop).toEqual('valorIsoladoScope');
            expect(scope.showBtnPesquisaAvancada.prop).toEqual('true');
            expect(scope.showBtnLimpar.prop).toEqual('true');
            expect(scope.showBtnPesquisar.prop).toEqual('true');
            expect(scope.gridOptions.prop).toEqual('true');
        });

        it('Deve ter 5 ng-transclude', function () {
            var transclude  = element.find('div[ng-transclude]');
            expect(transclude.length).toBe(5);
        });

        it('Deve ter showBtnPesquisaAvancada e showBtnPesquisar true por default e showBtnLimpar false', function () {
            element = getCompiledElement();
            isolatedScope = element.isolateScope();
            expect(isolatedScope.showBtnPesquisaAvancada).toBe(true);
            expect(isolatedScope.showBtnPesquisar).toBe(true);
            expect(isolatedScope.showBtnLimpar).toBe(false);
            var button = element.find('oobj-button');
            expect(button.length).toBe(2);
            expect(button[0].innerText).toBe(' Pesquisa Avançada');
            expect(button[1].innerText).toBe(' Pesquisar');
        });

        it('Deve mostrar todos botoes pesquisa - pesquisa avancada - limpar', function () {
            element = getCompiledElement('<oobj-search vm="vm" ' +
                'grid-options="true" show-btn-limpar="true"></oobj-search>');
            isolatedScope = element.isolateScope();
            expect(isolatedScope.showBtnPesquisaAvancada).toBe(true);
            expect(isolatedScope.showBtnPesquisar).toBe(true);
            expect(isolatedScope.showBtnLimpar).toBe(true);
            var button = element.find('oobj-button');
            expect(button.length).toBe(3);
            expect(button[0].innerText).toBe(' Limpar');
            expect(button[1].innerText).toBe(' Pesquisa Avançada');
            expect(button[2].innerText).toBe(' Pesquisar');
        });

        it('Deve carregar apenas botao limpar', function () {
            element = getCompiledElement('<oobj-search vm="vm" ' +
                'grid-options="true" ' +
                'show-btn-limpar="true" ' +
                'show-btn-pesquisar="false"  ' +
                'show-btn-pesquisa-avancada="false"></oobj-search>');
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