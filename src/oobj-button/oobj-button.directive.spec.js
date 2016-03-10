/**
 * Created by Diogo on 23/10/2015.
 */
(function() {
    'use strict';

    describe('Teste de Directiva: oobjButton', function() {
        var $rootScope,
            $compile,
            scope,
            element,
            isolatedScope;

        beforeEach(function() {
            module('oobj-directives');
            angular.mock.module('templates');
        });

        // cria um novo scope antes de cada teste
        beforeEach(inject(function(_$compile_, _$rootScope_){
            $rootScope = _$rootScope_;
            scope = $rootScope.$new();
            $compile = _$compile_;

            scope.id = 'testeid';
            scope.label = 'testelabel';
            scope.btnClass = 'testebtnClass';
            scope.icon = 'testeicon';
            scope.colspan = 'testecolspan';

            element = getCompiledElement();
            isolatedScope = element.isolateScope();
        }));

        function getCompiledElement(xml){
            var $element;
            if(xml == null) {
                $element = angular.element('<oobj-button></oobj-button>');
            } else {
                $element = angular.element(xml);
            }
            var compiledElement = $compile($element)(scope);
            scope.$digest();

            return compiledElement;
        }

        it('deve ter a classe oobj-button', function () {
            var elementTemp = angular.element('<p class=\'oobj-button\'></p>');
            $compile(elementTemp);
            scope.$digest();
            expect(elementTemp.hasClass('oobj-button')).toBeTruthy();
        });

        it('Teste atributos com scope isolado - one way binding ("@").', function(){
            expect(scope.btnClass).toEqual('testebtnClass');
            isolatedScope.btnClass = 'isoladobtnClass';
            expect(scope.btnClass).toEqual('testebtnClass');

            expect(scope.icon).toEqual('testeicon');
            isolatedScope.icon = 'isoladoicon';
            expect(scope.icon).toEqual('testeicon');

            expect(scope.colspan).toEqual('testecolspan');
            isolatedScope.colspan = 'isoladocolspan';
            expect(scope.colspan).toEqual('testecolspan');
        });

        it('Teste btnClass nao definido', function() {
            var classng  = element.find('[ng-class]');
            expect(classng.length).toBe(2);
            expect(classng.hasClass('btn-default')).toBeTruthy();
        });

        it('Teste btnClass definido.', function() {
            scope.btnClass = null;
            element = getCompiledElement('<oobj-button btn-class="teste"></oobj-button>');
            var classng  = element.find('[ng-class]');
            expect(classng.length).toBe(2);
            expect(classng.hasClass('teste')).toBeTruthy();
        });

        it('Teste paddingRight valor default.', function() {
            scope.btnClass = null;
            element = getCompiledElement('<oobj-button></oobj-button>');
            expect(element[0].style['padding-right']).toEqual('6px');
        });

        it('Teste paddingRight valor definido.', function() {
            scope.btnClass = null;
            element = getCompiledElement('<oobj-button padding-right="154px"></oobj-button>');
            expect(element[0].style['padding-right']).toEqual('154px');
        });

        it('Teste paddingLeft nao definido.', function() {
            scope.btnClass = null;
            element = getCompiledElement('<oobj-button></oobj-button>');
            expect(element[0].style['padding-left']).toEqual('');
        });

        it('Teste paddingLeft definido.', function() {
            scope.btnClass = null;
            element = getCompiledElement('<oobj-button padding-left="10px"></oobj-button>');
            expect(element[0].style['padding-left']).toEqual('10px');
        });
    });
})();