/**
 * Created by Diogo on 27/10/2015.
 */
(function() {
    'use strict';

    describe('Teste de Directiva: oobjContainer', function(){
        var $rootScope,
            $compile,
            scope,
            element,
            isolatedScope;

        beforeEach(module('oobj-directives'));
        beforeEach(inject(function(_$compile_, _$rootScope_){
            $rootScope = _$rootScope_;
            scope = $rootScope.$new();
            $compile = _$compile_;

            scope.title = 'testetitle';

            element = getCompiledElement();
            isolatedScope = element.isolateScope();
        }));

        function getCompiledElement(){
            var $element = angular.element('<oobj-container></oobj-container>');

            var compiledElement = $compile($element)(scope);
            scope.$digest();

            return compiledElement;
        }

        it('deve ter a classe oobj-container', function () {
            var elementTemp = angular.element('<p class=\'oobj-container\'></p>');
            $compile(elementTemp);
            scope.$digest();
            expect(elementTemp.hasClass('oobj-container')).toBeTruthy();
        });

        it('Teste atributos com scope isolado - one way binding ("@").', function(){
            //mesmo modificando o isolateScope ainda permanece o valor atribuido
            expect(scope.title).toEqual('testetitle');
            isolatedScope.title = 'isoladotitle';
            expect(scope.title).toEqual('testetitle');
        });

        it('Deve ter ng-transclude', function () {
            var transclude  = element.find('div[ng-transclude]');
            expect(transclude.length).toBe(1);
        });

    });
})();