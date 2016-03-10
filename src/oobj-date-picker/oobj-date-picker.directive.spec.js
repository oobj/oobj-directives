/**
 * Created by Diogo on 28/10/2015.
 */
(function () {
    'use strict';

    describe('Teste de Directiva: oobjDatePicker', function () {
        var $rootScope,
            $compile,
            scope,
            element,
            isolatedScope;

        beforeEach(function () {
            module('oobj-directives');
            angular.mock.module('templates');
        });

        // cria um novo scope antes de cada teste
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $rootScope = _$rootScope_;
            scope = $rootScope.$new();
            $compile = _$compile_;

            scope.id = 'testeId';
            scope.name = 'testename';
            scope.value = 'testevalue';
            scope.label = 'testelabel';
            scope.showLabel = 'testeshowLabel';
            scope.colspan = 'testecolspan';
            scope.timeIncrement = 'testetimeIncrement';
            scope.format = 'testeformat';
            scope.inputSize = 'testeinputSize';

            scope.ngModel = {
                prop: 'ngModel'
            };

            scope.ngValue = {
                prop: 'ngValue'
            };

            scope.opts = {
                prop: 'opts'
            };

            scope.range = {
                prop: 'range'
            };

            scope.time = {
                prop: 'time'
            };

            element = getCompiledElement();
            isolatedScope = element.isolateScope();
        }));

        function getCompiledElement(xml) {
            var $element;
            if (xml == null) {
                $element = angular.element('<oobj-date-picker ' +
                    'ng-model="ngModel" ' +
                    'ng-value="ngValue" ' +
                    'range="range" ' +
                    'opts="opts" ' +
                    'time="time"></oobj-date-picker>');
            } else {
                $element = angular.element(xml);
            }
            var compiledElement = $compile($element)(scope);
            scope.$digest();

            return compiledElement;
        }

        it('deve ter ngmodel', function(){
            expect(isolatedScope.ngModel).toBeDefined();
        });

        it('deve falhar se ngModel nao especificado', function () {
            expect(function(){
                getCompiledElement('<input type="text" oobj-date-picker="" />');
            }).toThrow();
        });

        it('deve ter a classe oobj-date-picker', function () {
            var elementTemp = angular.element('<p class=\'oobj-date-picker\'></p>');
            $compile(elementTemp);
            scope.$digest();
            expect(elementTemp.hasClass('oobj-date-picker')).toBeTruthy();
        });

        it('Teste atributos com scope isolado - one way binding ("@").', function () {

            expect(scope.id).toEqual('testeId');
            isolatedScope.id = 'isoladoId';
            expect(scope.id).toEqual('testeId');

            expect(scope.name).toEqual('testename');
            isolatedScope.name = 'isoladoname';
            expect(scope.name).toEqual('testename');

            expect(scope.value).toEqual('testevalue');
            isolatedScope.value = 'isoladolabel';
            expect(scope.value).toEqual('testevalue');

            expect(scope.label).toEqual('testelabel');
            isolatedScope.label = 'isoladolabel';
            expect(scope.label).toEqual('testelabel');

            expect(scope.showLabel).toEqual('testeshowLabel');
            isolatedScope.showLabel = 'isoladoshowLabel';
            expect(scope.showLabel).toEqual('testeshowLabel');

            expect(scope.colspan).toEqual('testecolspan');
            isolatedScope.colspan = 'isoladocolspan';
            expect(scope.colspan).toEqual('testecolspan');

            expect(scope.timeIncrement).toEqual('testetimeIncrement');
            isolatedScope.timeIncrement = 'isoladoinputSize';
            expect(scope.timeIncrement).toEqual('testetimeIncrement');

            expect(scope.format).toEqual('testeformat');
            isolatedScope.format = 'isoladoinputSize';
            expect(scope.format).toEqual('testeformat');

            expect(scope.inputSize).toEqual('testeinputSize');
            isolatedScope.inputSize = 'isoladoinputSize';
            expect(scope.inputSize).toEqual('testeinputSize');

        });

        it('Teste atributos com scope isolado - two way binding ("=").', function(){
            expect(scope.ngModel.prop).toEqual('ngModel');
            isolatedScope.ngModel.prop = 'valorIsoladoScope';
            expect(scope.ngModel.prop).toEqual('valorIsoladoScope');

            expect(scope.ngValue.prop).toEqual('ngValue');
            isolatedScope.ngValue.prop = 'valorIsoladoScope';
            expect(scope.ngValue.prop).toEqual('valorIsoladoScope');

            expect(scope.range.prop).toEqual('range');
            isolatedScope.range.prop = 'valorIsoladoScope';
            expect(scope.range.prop).toEqual('valorIsoladoScope');

            expect(scope.time.prop).toEqual('time');
            isolatedScope.time.prop = 'valorIsoladoScope';
            expect(scope.time.prop).toEqual('valorIsoladoScope');
        });

        it('Deve respeitar os valores default de opts' , function(){
            expect(isolatedScope.opts.timePicker.prop).toBe('time');
            expect(isolatedScope.opts.timePickerIncrement).toBe(1);
            expect(isolatedScope.opts.timePicker24Hour).toBe(true);
            expect(isolatedScope.opts.showDropdowns).toBe(true);
            expect(isolatedScope.opts.linkedCalendars).toBe(false);
            expect(isolatedScope.opts.opens).toBe('left');
            expect(isolatedScope.opts.cancelClass).toBe('btn-danger');
        });

        it('Deve scope.opts.singleDatePicker false para range definido.', function(){
            element = getCompiledElement('<oobj-date-picker ng-model="ngModel" range="true"></oobj-date-picker>');
            isolatedScope = element.isolateScope();
            expect(isolatedScope.opts.singleDatePicker).toBe(false);
        });

        it('Deve scope.opts.singleDatePicker true para range indefinido.', function(){
            element = getCompiledElement('<oobj-date-picker ng-model="ngModel"></oobj-date-picker>');
            isolatedScope = element.isolateScope();
            expect(isolatedScope.opts.singleDatePicker).toBeTruthy();
        });

        it('Deve respeitar valores padroes de locale.', function() {
            expect(isolatedScope.opts.locale.format).toBe('DD/MM/YYYY');
            expect(isolatedScope.opts.locale.cancelLabel).toBe('Limpar');
            expect(isolatedScope.opts.locale.applyLabel).toBe('OK');
            expect(isolatedScope.opts.locale.fromLabel).toBe('Entre');
            expect(isolatedScope.opts.locale.toLabel).toBe('E');
            expect(isolatedScope.opts.locale.customRangeLabel).toBe('Personalizar');
            expect(isolatedScope.opts.locale.daysOfWeek).toEqual([ 'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb' ]);
            expect(isolatedScope.opts.locale.monthNames).toEqual([ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio',
                'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ]);
            expect(isolatedScope.opts.locale.firstDay).toBe(1);
        });

    });

})();