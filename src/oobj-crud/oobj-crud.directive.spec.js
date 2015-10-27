/**
 * Created by Diogo on 27/10/2015.
 */
(function () {
    'use strict';

    describe('Teste de Directiva: oobjCrud', function () {
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
            scope.footer = "testefooter";

            scope.vm = {
                prop: 'vm'
            };

            scope.showBtnSalvar = {
                prop: 'showBtnSalvar'
            };

            scope.showBtnLimpar = {
                prop: 'showBtnLimpar'
            };

            scope.showBtnExcluir = {
                prop: 'showBtnExcluir'
            };

            scope.showBtnOnBottom = {
                prop: 'showBtnOnBottom'
            };

            scope.showBtnOnTop = {
                prop: 'showBtnOnTop'
            };

            element = getCompiledElement();
            isolatedScope = element.isolateScope();
        }));

        function getCompiledElement(xml) {
            var $element;
            if (xml == null) {
                $element = angular.element('<oobj-crud vm="vm"></oobj-crud>');
            } else {
                $element = angular.element(xml);
            }
            var compiledElement = $compile($element)(scope);
            scope.$digest();

            return compiledElement;
        }

        it('deve ter a classe oobj-crud', function () {
            var elementTemp = angular.element("<p class='oobj-crud'></p>");
            $compile(elementTemp);
            scope.$digest();
            expect(elementTemp.hasClass('oobj-crud')).toBeTruthy();
        });

        it('Teste atributos com scope isolado - one way binding ("@").', function () {

            //mesmo modificando o isolateScope ainda permanece o valor atributitleo
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

            isolatedScope.showBtnSalvar.prop = "valorIsoladoScope";
            expect(scope.showBtnSalvar.prop).toEqual('showBtnSalvar');

            isolatedScope.showBtnLimpar.prop = "valorIsoladoScope";
            expect(scope.showBtnLimpar.prop).toEqual('showBtnLimpar');

            isolatedScope.showBtnExcluir.prop = "valorIsoladoScope";
            expect(scope.showBtnExcluir.prop).toEqual('showBtnExcluir');

            isolatedScope.showBtnOnBottom.prop = "valorIsoladoScope";
            expect(scope.showBtnOnBottom.prop).toEqual('showBtnOnBottom');

            isolatedScope.showBtnOnTop.prop = "valorIsoladoScope";
            expect(scope.showBtnOnTop.prop).toEqual('showBtnOnTop');

        });

        it('Teste com showBtnSalvar valor default - ativo.', function () {
            element = getCompiledElement('<oobj-crud></oobj-crud>');
            var button = element.find('oobj-button');
            expect(button[0].innerText).toContain('Salvar');
        });

        it('Teste com showBtnSalvar desativado.', function () {
            element = getCompiledElement('<oobj-crud show-btn-salvar="false"></oobj-crud>');
            var button = element.find('oobj-button');
            expect(button[0].innerText).not.toContain('Salvar');
        });

        it('Teste com showBtnLimpar valor default - ativo.', function () {
            element = getCompiledElement('<oobj-crud></oobj-crud>');
            var button = element.find('oobj-button');
            expect(button[1].innerText).toContain('Limpar');
        });

        it('Teste com showBtnLimpar desativado.', function () {
            element = getCompiledElement('<oobj-crud show-btn-limpar="false"></oobj-crud>');
            var button = element.find('oobj-button');
            expect(button[0].innerText).not.toContain('Limpar');
        });

        it('Teste com showBtnExcluir valor default desativado.', function () {
            element = getCompiledElement('<oobj-crud></oobj-crud>');
            var button = element.find('oobj-button');
            expect(button[1].innerText).not.toContain('Excluir');
        });

        it('Teste com showBtnExcluir ativado.', function () {
            element = getCompiledElement('<oobj-crud show-btn-excluir="true"></oobj-crud>');
            var button = element.find('oobj-button');
            expect(button[1].innerText).toContain('Excluir');
        });

        it('Teste com showBtnOnBottom default ativado e showBtnOnTop desativado.', function () {
            element = getCompiledElement('<oobj-crud></oobj-crud>');
            var button = element.find('ng-include');
            expect(button.length).toBe(1);
            expect(button[0].getAttribute('ng-if')).toBe('showBtnOnBottom');
        });

        it('Teste com showBtnOnBottom desativado e showBtnOnTop desativado.', function () {
            element = getCompiledElement('<oobj-crud show-btn-on-bottom="false"></oobj-crud>');
            var button = element.find('ng-include');
            expect(button.length).toBe(0);
        });

        it('Teste com showBtnOnBottom desativado e showBtnOnTop ativado.', function () {
            element = getCompiledElement('<oobj-crud show-btn-on-bottom="false" show-btn-on-top="true"></oobj-crud>');
            var button = element.find('ng-include');
            expect(button.length).toBe(1);
            expect(button[0].getAttribute('ng-if')).toBe('showBtnOnTop');
        });

        it('Teste com showBtnOnBottom ativado e showBtnOnTop ativado.', function () {
            element = getCompiledElement('<oobj-crud show-btn-on-bottom="true" show-btn-on-top="true"></oobj-crud>');
            var button = element.find('ng-include');
            expect(button[0].getAttribute('ng-if')).toBe('showBtnOnTop');
            expect(button[1].getAttribute('ng-if')).toBe('showBtnOnBottom');
        });


        it('Deve ter ng-transclude', function () {
            var transclude  = element.find('div[ng-transclude]');
            expect(transclude.length).toBe(3);
        });
    });

})();