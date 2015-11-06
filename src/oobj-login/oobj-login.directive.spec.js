/**
 * Created by Diogo on 06/11/2015.
 */
(function () {
    'use strict';

    describe('Teste de Directiva: oobjLogin', function () {

        // variaveis globais
        var $rootScope,
            $compile,
            scope, // scope onde nossa directiva esta inserida
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

            scope.logo = "testelogo";
            scope.labelBtnLogin = "testelabelBtnLogin";
            scope.msgForgotPassword = "testemsgForgotPassword";
            scope.msgNewUser = "testemsgNewUser";

            scope.login = jasmine.createSpy('login');
            scope.forgotPassword = jasmine.createSpy('forgotPassword');
            scope.newUser = jasmine.createSpy('newUser');

            scope.username = {
                prop: 'valorScope'
            };
            scope.password = {
                prop: 'password'
            };

            element = getCompiledElement();
            isolatedScope = element.isolateScope();
        }));

        function getCompiledElement(xml) {
            var $element;
            if (xml == null) {
                $element = angular.element('<oobj-login label-btn-login="labelLogin" username="usuario" password="senha"></oobj-login>');
            } else {
                $element = angular.element(xml);
            }
            var compiledElement = $compile($element)(scope);
            scope.$digest();

            return compiledElement;
        }

        it('deve ter a classe oobj-login', function () {
            var elementTemp = angular.element("<p class='oobj-login'></p>");
            $compile(elementTemp);
            scope.$digest();
            expect(elementTemp.hasClass('oobj-login')).toBeTruthy();
        });

        it('Teste atributos com scope isolado - one way binding ("@").', function () {

            expect(scope.labelBtnLogin).toEqual('testelabelBtnLogin');
            isolatedScope.labelBtnLogin = "isoladolabelBtnLogin";
            expect(scope.labelBtnLogin).toEqual('testelabelBtnLogin');

            expect(scope.msgForgotPassword).toEqual('testemsgForgotPassword');
            isolatedScope.msgForgotPassword = "isoladomsgForgotPassword";
            expect(scope.msgForgotPassword).toEqual('testemsgForgotPassword');

            expect(scope.msgNewUser).toEqual('testemsgNewUser');
            isolatedScope.msgNewUser = "isoladomsgNewUser";
            expect(scope.msgNewUser).toEqual('testemsgNewUser');

        });

        it('Teste atributos - function ("&").', function(){
            expect(typeof(isolatedScope.login)).toEqual('function');
            expect(typeof(isolatedScope.forgotPassword)).toEqual('function');
            expect(typeof(isolatedScope.newUser)).toEqual('function');
        });

        it('Deve ter 2 campo input', function () {
            var input  = element.find('input');
            expect(input.length).toBe(2);
        });

        it('Deve ter 3 campo button', function () {
            var button  = element.find('button');
            expect(button.length).toBe(3);
        });

        it('Deve ter botao de login com parametro label-btn-login="labelLogin"', function () {
            var button  = element.find('button');
            expect(button[0].innerText).toBe('labelLogin');
        });

        it('Deve ter botao de login sem parametro label-btn-login', function () {
            element = getCompiledElement('<oobj-login></oobj-login>');
            var button  = element.find('button');
            expect(button[0].innerText).toBe('Login');
        });

        it('Deve ter botao Esqueceu sua senha?', function () {
            element = getCompiledElement('<oobj-login></oobj-login>');
            var button  = element.find('button');
            expect(button[1].innerText).toBe('clique aqui');
        });

        it('Deve ter botao Não tem conta?', function () {
            element = getCompiledElement('<oobj-login></oobj-login>');
            var button  = element.find('button');
            expect(button[2].innerText).toBe('criar conta');
        });

        it('Deve ter msgForgotPassword Esqueceu sua senha?', function () {
            element = getCompiledElement('<oobj-login></oobj-login>');
            var span  = element.find('span');
            expect(span[0].innerText).toBe('Esqueceu sua senha?');
        });

        it('Deve ter msgNewUser Não tem conta?', function () {
            element = getCompiledElement('<oobj-login></oobj-login>');
            var span  = element.find('span');
            expect(span[1].innerText).toBe('Não tem conta?');
        });
    });
})();