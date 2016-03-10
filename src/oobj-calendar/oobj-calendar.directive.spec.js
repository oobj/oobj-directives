/**
 * Teste unitário da directiva oobj-calendar.directive.js.
 *
 * Created by Leonardo on 25/02/2016.
 */
(function() {
    'use strict';

    describe('Teste de directive: oobjCalendar', function() {
        var $compile, scope, is, element, oobjCalendar, now = new Date();

        beforeEach(module('oobj-directives'));
        beforeEach(inject(initialize));

        it('deve iniciar o calendário com o popup fechado', deveIniciarPopupFechado);
        it('deve abrir o popup do calendário ao clicar no botão', deveAbrirPopupAoClicarBotao);
        it('deve abrir o popup do calendário ao clicar no input', deveAbrirPopupAoClicarInput);
        it('deve ter o atributo "ngModel"', deveTerAttrNgModel);
        it('deve ter o atributo "pattern"', deveTerAttrPattern);
        it('deve atribuir type "text" como padrão', deveAtribuirTextTypeComoDefault);
        it('deve ter o atributo type alterado para "datetime-local"', deveTerAttrDatetimeLocal);
        it('pattern default deve ser dd/MM/yyyy', patternDefaultTest);
        it('deve alterar o pattern para "yyyy/MM/dd"', alterarPatternTest);
        //it('deve alterar a mascara para o padrão do ui-mask', deveAlterarMascaraParaFormatoUiMask);

        function initialize(_$compile_, _$rootScope_) {
            element = '<oobj-calendar ng-model="model" pattern="dd/MM/yyyy"></oobj-calendar>';
            $compile = _$compile_;
            scope = _$rootScope_.$new();

            scope.model = now;

            oobjCalendar = $compile(angular.element(element))(scope);

            scope.$digest();

            is = oobjCalendar.isolateScope();
        }

        function deveIniciarPopupFechado() {
            expect(is.opened).toBe(false);
        }

        function deveAbrirPopupAoClicarBotao() {
            var button = oobjCalendar.find('button');
            button.triggerHandler('click');
            expect(is.opened).toBeTruthy();
        }

        function deveAbrirPopupAoClicarInput() {
            var input = oobjCalendar.find('input');
            input.triggerHandler('click');
            expect(is.opened).toBeTruthy();
        }

        function deveTerAttrNgModel() {
            var optional = is.$$isolateBindings.ngModel.optional;
            expect(optional).toBeFalsy();
        }

        function deveTerAttrPattern() {
            var optional = is.$$isolateBindings.pattern.optional;
            expect(optional).toBeTruthy();
        }

        function deveAtribuirTextTypeComoDefault() {
            expect(is.type).toEqual('text');
        }

        function deveTerAttrDatetimeLocal() {
            oobjCalendar = $compile(
                '<oobj-calendar type="datetime-local" ng-model="model" pattern="dd/MM/yyyy HH:mm"></oobj-calendar>'
            )(scope);

            scope.$digest();

            is = oobjCalendar.isolateScope();

            expect(is.type).toEqual('datetime-local');
        }

        function patternDefaultTest() {
            expect(is.pattern).toEqual('dd/MM/yyyy');
        }

        function alterarPatternTest() {
            oobjCalendar = $compile(
                '<oobj-calendar ng-model="model" pattern="yyyy/MM/dd"></oobj-calendar>'
            )(scope);

            scope.$digest();

            is = oobjCalendar.isolateScope();
            expect(is.pattern).toEqual('yyyy/MM/dd');
        }

        function deveAlterarMascaraParaFormatoUiMask() {
            expect(is.mask).toEqual('99/99/9999');
        }

    });
})();