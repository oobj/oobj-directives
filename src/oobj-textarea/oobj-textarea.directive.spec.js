/**
 * Teste para directiva oobjTextarea.
 *
 * Created by Diogo on 12/02/2016.
 */
(function () {
    'use strict';

    describe('Teste de Directiva: oobj-textarea', function () {
        var $rootScope,
            $compile,
            scope,
            element,
            isolatedScope;

        beforeEach(function () {
            module('oobj-directives');
            angular.mock.module('templates');
        });

        beforeEach(inject(function(_$compile_, _$rootScope_){
            $rootScope = _$rootScope_;
            scope = $rootScope.$new();
            $compile = _$compile_;

            scope.id = 'testeid';
            scope.rows = 'testerows';
            scope.label = 'testelabel';
            scope.title = 'testetitle';
            scope.colspan = 'testecolspan';
            scope.placeholder = 'testeplaceholder';
            scope.inputSize = 'testeinputSize';

            scope.showLabel = {
                prop: 'showLabel'
            };
            scope.ngModel = {
                prop: 'ngModel'
            };
            scope.ngRequired = {
                prop: 'ngRequired'
            };

            element = getCompiledElement();
            isolatedScope = element.isolateScope();
        }));

        function getCompiledElement(){

            var $element = angular.element('<oobj-textarea ' +
                'id="id" ' +
                'rows="rows" ' +
                'label="label" ' +
                'title="title" ' +
                'colspan="colspan" ' +
                'placeholder="placeholder" ' +
                'input-size="input-size" ' +
                'show-label="showLabel" ' +
                'ng-model="ngModel" ' +
                'ng-required="ngRequired" ></oobj-textarea>');

            var compiledElement = $compile($element)(scope);
            scope.$digest();

            return compiledElement;
        }

        it('deve ter a classe oobj-textarea', function () {
            var elementTemp = angular.element('<p class=\'oobj-textarea\'></p>');
            $compile(elementTemp);
            scope.$digest();
            expect(elementTemp.hasClass('oobj-textarea')).toBeTruthy();
        });

        it('Isolated scope deve ter atributos assigned', function () {
            expect(isolatedScope.id).toBeDefined();
            expect(isolatedScope.rows).toBeDefined();
            expect(isolatedScope.label).toBeDefined();
            expect(isolatedScope.title).toBeDefined();
            expect(isolatedScope.colspan).toBeDefined();
            expect(isolatedScope.label).toBeDefined();
            expect(isolatedScope.inputSize).toBeDefined();
        });

        it('Teste atributos com scope isolado - one way binding ("@").', function(){

            //mesmo modificando o isolateScope ainda permanece o valor atribuido
            expect(scope.id).toEqual('testeid');
            isolatedScope.id = 'isoladoid';
            expect(scope.id).toEqual('testeid');

            expect(scope.rows).toEqual('testerows');
            isolatedScope.rows = 'isoladorows';
            expect(scope.rows).toEqual('testerows');

            expect(scope.label).toEqual('testelabel');
            isolatedScope.label = 'isoladolabel';
            expect(scope.label).toEqual('testelabel');

            expect(scope.title).toEqual('testetitle');
            isolatedScope.title = 'isoladotitle';
            expect(scope.title).toEqual('testetitle');

            expect(scope.colspan).toEqual('testecolspan');
            isolatedScope.colspan = 'isoladocolspanl';
            expect(scope.colspan).toEqual('testecolspan');

            expect(scope.placeholder).toEqual('testeplaceholder');
            isolatedScope.placeholder = 'isoladoplaceholder';
            expect(scope.placeholder).toEqual('testeplaceholder');

            expect(scope.inputSize).toEqual('testeinputSize');
            isolatedScope.inputSize = 'isoladoinputSize';
            expect(scope.inputSize).toEqual('testeinputSize');
        });

        it('Teste atributos com scope isolado - two way binding ("=").', function(){
            expect(scope.showLabel.prop).toEqual('showLabel');
            isolatedScope.showLabel.prop = 'valorIsoladoScope';
            expect(scope.showLabel.prop).toEqual('valorIsoladoScope');

            expect(scope.ngModel.prop).toEqual('ngModel');
            isolatedScope.ngModel.prop = 'valorIsoladoScope';
            expect(scope.ngModel.prop).toEqual('valorIsoladoScope');

            expect(scope.ngRequired.prop).toEqual('ngRequired');
            isolatedScope.ngRequired.prop = 'valorIsoladoScope';
            expect(scope.ngRequired.prop).toEqual('valorIsoladoScope');

        });

        it('Deve substituir elemento na directive - replace: true', function () {
            expect(element.find('oobj-textarea').length).toEqual(0);
        });

        it('Deve mostrar  *', function() {
            var span  = element.find('span');
            expect(span.hasClass('text-danger')).toBe(true);
        });

        it('Nao deve mostrar  *', function() {
            var textarea  = element.find('textarea');
            expect(textarea.length).toBe(1);
        });
    });
})();
