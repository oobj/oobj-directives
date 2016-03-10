/**
 * Created by Diogo on 26/10/2015.
 */
(function () {
    'use strict';

    describe('Teste de Directiva: oobjConfirmButton', function () {
        var $rootScope,
            $compile,
            scope,
            element,
            isolatedScope;

        beforeEach(module('oobj-directives'));
        beforeEach(inject(function(_$compile_, _$rootScope_) {
            $rootScope = _$rootScope_;
            scope = $rootScope.$new();
            $compile = _$compile_;

            scope.colspan = 'testecolspan';
            scope.title = 'testetitle';
            scope.labelBtnYes = 'testelabelBtnYes';
            scope.labelBtnNo = 'testelabelBtnNo';
            scope.label = 'testelabel';
            scope.classBtnYes = 'testeclassBtnYes';
            scope.classBtnNo = 'testeclassBtnNo';
            scope.btnClass = 'testebtnClass';
            scope.icon = 'testeicon';
            scope.msg = 'testemsg';
            scope.msgStyle = 'testemsgStyle';

            element = getCompiledElement();
            isolatedScope = element.isolateScope();
        }));

        function getCompiledElement() {
            var $element;
            $element = angular.element('<oobj-confirm-button ' +
                'on-click-btn-yes="onClickBtnYes()"></oobj-confirm-button>');
            var compiledElement = $compile($element)(scope);
            scope.$digest();

            return compiledElement;
        }

        it('deve ter a classe oobj-checkbox', function () {
            var elementTemp = angular.element('<p class=\'oobj-confirm-button\'></p>');
            $compile(elementTemp);
            scope.$digest();
            expect(elementTemp.hasClass('oobj-confirm-button')).toBeTruthy();
        });

        it('Teste atributos com scope isolado - one way binding ("@").', function () {
            //mesmo modificando o isolateScope ainda permanece o valor atribuido
            expect(scope.colspan).toEqual('testecolspan');
            isolatedScope.colspan = 'isoladocolspan';
            expect(scope.colspan).toEqual('testecolspan');

            expect(scope.title).toEqual('testetitle');
            isolatedScope.title = 'isoladotitle';
            expect(scope.title).toEqual('testetitle');

            expect(scope.labelBtnYes).toEqual('testelabelBtnYes');
            isolatedScope.labelBtnYes = 'isoladolabelBtnYes';
            expect(scope.labelBtnYes).toEqual('testelabelBtnYes');

            expect(scope.labelBtnNo).toEqual('testelabelBtnNo');
            isolatedScope.labelBtnNo = 'isoladolabelBtnNo';
            expect(scope.labelBtnNo).toEqual('testelabelBtnNo');

            expect(scope.label).toEqual('testelabel');
            isolatedScope.label = 'isoladolabel';
            expect(scope.label).toEqual('testelabel');

            expect(scope.classBtnYes).toEqual('testeclassBtnYes');
            isolatedScope.classBtnYes = 'isoladoclassBtnYes';
            expect(scope.classBtnYes).toEqual('testeclassBtnYes');

            expect(scope.classBtnNo).toEqual('testeclassBtnNo');
            isolatedScope.classBtnNo = 'isoladoclassBtnNo';
            expect(scope.classBtnNo).toEqual('testeclassBtnNo');

            expect(scope.btnClass).toEqual('testebtnClass');
            isolatedScope.btnClass = 'isoladobtnClass';
            expect(scope.btnClass).toEqual('testebtnClass');

            expect(scope.icon).toEqual('testeicon');
            isolatedScope.icon = 'isoladoicon';
            expect(scope.icon).toEqual('testeicon');

            expect(scope.msg).toEqual('testemsg');
            isolatedScope.msg = 'isoladomsg';
            expect(scope.msg).toEqual('testemsg');

            expect(scope.msgStyle).toEqual('testemsgStyle');
            isolatedScope.msgStyle = 'isoladomsgStyle';
            expect(scope.msgStyle).toEqual('testemsgStyle');
        });

        it('Teste atributos - function ("&").', function () {
            expect(typeof(isolatedScope.onClickBtnYes)).toEqual('function');
        });

        it('Deve carregar 4 oobj-button', function () {
            var classng = element.find('oobj-button');
            expect(classng.length).toBe(4);
        });

        it('Deve carregar 5 button', function () {
            var classng = element.find('button');
            expect(classng.length).toBe(5);
        });

        it('Deve carregar botao "Abrir Modal"', function () {
            var classng = element.find('button');
            expect(classng[1].innerText).toContain('Abrir Modal');
        });

        it('Deve carregar botao "×"', function () {
            var classng = element.find('button');
            expect(classng[2].innerText).toContain('×');
        });

        it('Deve carregar botao "Cancelar"', function () {
            var classng = element.find('button');
            expect(classng[3].innerText).toContain('Cancelar');
        });

        it('Deve carregar modal de "Você tem certeza?"', function () {
            var span = element.find('span');
            expect(span[1].innerText).toContain('Você tem certeza?');
        });

    });
})();