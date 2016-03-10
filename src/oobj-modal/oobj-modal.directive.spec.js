/**
 * Created by Diogo on 16/10/2015.
 */
(function () {
    'use strict';

    describe('Teste de Directiva: oobjModal', function () {
        var $rootScope,
            $compile,
            scope,
            element,
            isolatedScope;

        beforeEach(function () {
            module('oobj-directives');
            angular.mock.module('templates');
        });

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $rootScope = _$rootScope_;
            scope = $rootScope.$new();
            $compile = _$compile_;

            scope.title = 'testetitle';
            scope.labelBtnOpen = 'testelabelBtnOpen';
            scope.labelBtnClose = 'testelabelBtnClose';
            scope.classBtnOpen = 'testeclassBtnOpen';
            scope.colspan = 'testecolspan';
            scope.showBtnOpen = {
                prop: 'teste'
            };
            scope.showBtnClose = {
                prop: 'teste'
            };
            scope.showBtnAction = {
                prop: 'teste'
            };

            element = getCompiledElement();
            isolatedScope = element.isolateScope();
        }));

        function getCompiledElement(xml) {
            var $element;
            if (xml == null) {
                $element = angular.element('<oobj-modal ' +
                    'show-btn-open="showBtnOpen" ' +
                    'show-btn-close="showBtnClose" ' +
                    'show-btn-action="showBtnAction"></oobj-modal>');
            } else {
                $element = angular.element(xml);
            }
            var compiledElement = $compile($element)(scope);
            scope.$digest();

            return compiledElement;
        }

        it('deve ter a classe oobj-modal', function () {
            var elementTemp = angular.element('<p class=\'oobj-modal\'></p>');
            $compile(elementTemp);
            scope.$digest();
            expect(elementTemp.hasClass('oobj-modal')).toBeTruthy();
        });

        it('Teste atributos com scope isolado - one way binding ("@").', function () {
            // mesmo modificando o isolateScope ainda permanece o valor atributo
            expect(scope.title).toEqual('testetitle');
            isolatedScope.title = 'isoladotitle';
            expect(scope.title).toEqual('testetitle');

            expect(scope.labelBtnOpen).toEqual('testelabelBtnOpen');
            isolatedScope.labelBtnOpen = 'isoladolabelBtnOpen';
            expect(scope.labelBtnOpen).toEqual('testelabelBtnOpen');

            expect(scope.colspan).toEqual('testecolspan');
            isolatedScope.colspan = 'isoladocolspan';
            expect(scope.colspan).toEqual('testecolspan');

            expect(scope.labelBtnClose).toEqual('testelabelBtnClose');
            isolatedScope.labelBtnClose = 'isoladolabelBtnClose';
            expect(scope.labelBtnClose).toEqual('testelabelBtnClose');

            expect(scope.classBtnOpen).toEqual('testeclassBtnOpen');
            isolatedScope.classBtnOpen = 'isoladoclassBtnOpen';
            expect(scope.classBtnOpen).toEqual('testeclassBtnOpen');
        });

        it('Teste atributos com scope isolado - two way binding ("=").', function(){
            expect(scope.showBtnOpen.prop).toEqual('teste');
            isolatedScope.showBtnOpen.prop = 'newValue';
            expect(scope.showBtnOpen.prop).toEqual('newValue');

            expect(scope.showBtnClose.prop).toEqual('teste');
            isolatedScope.showBtnClose.prop = 'newValue';
            expect(scope.showBtnClose.prop).toEqual('newValue');

            expect(scope.showBtnAction.prop).toEqual('teste');
            isolatedScope.showBtnAction.prop = 'newValue';
            expect(scope.showBtnAction.prop).toEqual('newValue');
        });

        it('Teste com classBtnOpen nao definido.', function () {
            element = getCompiledElement('<oobj-modal></oobj-modal>');
            var classng = element.find('[btn-class]');
            // class do botão de abrir e class do botão de fechar
            expect(classng.length).toBe(3);
            expect(classng[0].getAttribute('btn-class')).toBe('btn-default');
        });

        it('Teste com classBtnOpen definido.', function () {
            element = getCompiledElement('<oobj-modal class-btn-open="teste"></oobj-modal>');
            var classng = element.find('[btn-class]');
            // class do botão de abrir e class do botão de fechar
            expect(classng.length).toBe(3);
            expect(classng[0].getAttribute('btn-class')).toBe('teste');
        });

        it('Teste com labelBtnOpen nao definido.', function () {
            element = getCompiledElement('<oobj-modal></oobj-modal>');
            var classng = element.find('[label]');
            expect(classng.length).toBe(3);
            expect(classng[0].getAttribute('label')).toBe('Abrir Modal');
        });

        it('Teste com labelBtnOpen definido.', function () {
            element = getCompiledElement('<oobj-modal label-btn-open="testeOpen"></oobj-modal>');
            var classng = element.find('[label]');
            expect(classng.length).toBe(3);
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