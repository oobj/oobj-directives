/**
 * Created by Diogo on 16/10/2015.
 */
(function () {
    'use strict';

    describe('Teste de Directiva: oobjModal', function () {
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
            scope.labelBtnOpen = "testelabelBtnOpen";
            scope.labelBtnClose = "testelabelBtnClose";
            scope.classBtnOpen = "testeclassBtnOpen";
            scope.colspan = "testecolspan";

            scope.showBtnOpen = {
                prop: 'showBtnOpen'
            };

            scope.showBtnClose = {
                prop: 'showBtnClose'
            };

            element = getCompiledElement();
            isolatedScope = element.isolateScope();
        }));

        function getCompiledElement(xml) {
            var $element;
            if (xml == null) {
                $element = angular.element('<oobj-modal></oobj-modal>');
            } else {
                $element = angular.element(xml);
            }
            var compiledElement = $compile($element)(scope);
            scope.$digest();

            return compiledElement;
        }

        it('deve ter a classe oobj-modal', function () {
            var elementTemp = angular.element("<p class='oobj-modal'></p>");
            $compile(elementTemp);
            scope.$digest();
            expect(elementTemp.hasClass('oobj-modal')).toBeTruthy();
        });

        it('Teste atributos com scope isolado - one way binding ("@").', function () {

            //mesmo modificando o isolateScope ainda permanece o valor atributitleo
            expect(scope.title).toEqual('testetitle');
            isolatedScope.title = "isoladotitle";
            expect(scope.title).toEqual('testetitle');

            expect(scope.labelBtnOpen).toEqual('testelabelBtnOpen');
            isolatedScope.labelBtnOpen = "isoladolabelBtnOpen";
            expect(scope.labelBtnOpen).toEqual('testelabelBtnOpen');

            expect(scope.colspan).toEqual('testecolspan');
            isolatedScope.colspan = "isoladocolspan";
            expect(scope.colspan).toEqual('testecolspan');

            expect(scope.labelBtnClose).toEqual('testelabelBtnClose');
            isolatedScope.labelBtnClose = "isoladolabelBtnClose";
            expect(scope.labelBtnClose).toEqual('testelabelBtnClose');

            expect(scope.classBtnOpen).toEqual('testeclassBtnOpen');
            isolatedScope.classBtnOpen = "isoladoclassBtnOpen";
            expect(scope.classBtnOpen).toEqual('testeclassBtnOpen');

        });

        it('Teste atributos com scope isolado - two way binding ("=").', function(){

            isolatedScope.showBtnOpen.prop = "valorIsoladoScope";
            expect(scope.showBtnOpen.prop).toEqual('showBtnOpen');

            isolatedScope.showBtnClose.prop = "valorIsoladoScope";
            expect(scope.showBtnClose.prop).toEqual('showBtnClose');

        });

        it('Teste com classBtnOpen nao definido.', function () {
            element = getCompiledElement('<oobj-modal></oobj-modal>');
            var classng = element.find('[btn-class]');
            expect(classng.length).toBe(1);
            expect(classng[0].getAttribute('btn-class')).toBe('btn-default');
        });

        it('Teste com classBtnOpen definido.', function () {
            element = getCompiledElement('<oobj-modal class-btn-open="teste"></oobj-modal>');
            var classng = element.find('[btn-class]');
            expect(classng.length).toBe(1);
            expect(classng[0].getAttribute('btn-class')).toBe('teste');
        });

        it('Teste com labelBtnOpen nao definido.', function () {
            element = getCompiledElement('<oobj-modal></oobj-modal>');
            var classng = element.find('[label]');
            expect(classng.length).toBe(2);
            expect(classng[0].getAttribute('label')).toBe('Abrir Modal');
        });

        it('Teste com labelBtnOpen definido.', function () {
            element = getCompiledElement('<oobj-modal label-btn-open="testeOpen"></oobj-modal>');
            var classng = element.find('[label]');
            expect(classng.length).toBe(2);
            expect(classng[0].getAttribute('label')).toBe('testeOpen');
        });

        it('Teste com labelBtnClose nao definido.', function () {
            element = getCompiledElement('<oobj-modal></oobj-modal>');
            var classng = element.find('[label]');
            expect(classng[1].getAttribute('label')).toBe('Fechar');
        });

        it('Teste com labelBtnClose definido.', function () {
            element = getCompiledElement('<oobj-modal label-btn-close="testeClose"></oobj-modal>');
            var classng = element.find('[label]');
            expect(classng[1].getAttribute('label')).toBe('testeClose');
        });

        it('Teste com showBtnOpen nao definido.', function () {
            element = getCompiledElement('<oobj-modal></oobj-modal>');
            var classng = element.find('[ng-show]');
            expect(classng[0].getAttribute('ng-show')).toBe('showBtnOpen');
        });

        it('Deve ter ng-transclude', function () {
            var transclude  = element.find('div[ng-transclude]');
            expect(transclude.length).toBe(1);
        });
    });

})();