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

        it('Deve ter 3 campo input', function () {
            var input  = element.find('input');
            expect(input.length).toBe(3);
        });

        it('Deve ter 2 links', function () {
            var button  = element.find('a');
            expect(button.length).toBe(2);
        });

        it('Deve ter botao de login sem parametro label-btn-login', function () {
            element = getCompiledElement('<oobj-login></oobj-login>');
            var button  = element.find('input');
            expect(button[2].getAttribute('value')).toBe('Entrar');
        });

        it('Deve ter link Esqueci minha Senha!', function () {
            element = getCompiledElement('<oobj-login></oobj-login>');
            var link  = element.find('a');
            expect(link[0].innerText).toBe('Esqueci minha Senha!');
        });

        it('Deve ter link Cadastre-se', function () {
            element = getCompiledElement('<oobj-login></oobj-login>');
            var link  = element.find('a');
            expect(link[1].innerText).toBe('Cadastre-se');
        });

        it('Deve ter msgForgotPassword Esqueceu sua senha?', function () {
            element = getCompiledElement('<oobj-login label-forgot-password="teste"></oobj-login>');
            var span  = element.find('a');
            expect(span[0].innerText).toBe('teste');
        });

        it('Deve ter msgNewUser Cadastre-se', function () {
            element = getCompiledElement('<oobj-login label-new-user="teste"></oobj-login>');
            var span  = element.find('a');
            expect(span[1].innerText).toBe('teste');
        });
    });
})();