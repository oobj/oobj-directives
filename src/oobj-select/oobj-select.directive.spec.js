/**
 * Created by Diogo on 23/11/2015.
 */
(function () {

    describe('Teste de directiva: oobjSelect', function () {
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

            scope.id = 'testeid';
            scope.label = 'testelabel';
            scope.itemLabel = 'testeitemLabel';
            scope.colspan = 'testecolspan';

            scope.ngModel = {
                prop: 'ngModel'
            };
            scope.showLabel = {
                prop: 'showLabel'
            };
            scope.ngRequired = {
                prop: 'ngRequired'
            };
            scope.onOpen = {
                prop: 'onOpen'
            };
            scope.provider = ['teste1', 'teste2'];

            element = getCompiledElement();
            isolatedScope = element.isolateScope();
        }));

        function getCompiledElement(xml) {
            var $element;
            if (xml == null) {
                $element = angular.element('<oobj-select ' +
                    'id="id" ' +
                    'show-label="showLabel" ' +
                    'ng-model="ngModel" ' +
                    'ng-required="true" ' +
                    'colspan="true" ' +
                    'label="label" ' +
                    'on-open="open" ' +
                    'provider="provider" ' +
                    'item-label="itemlabel"></oobj-select>');
            } else {
                $element = angular.element(xml);
            }
            var compiledElement = $compile($element)(scope);
            scope.$digest();

            return compiledElement;
        }

        it('Isolated scope deve ter atributos assigned', function () {
            expect(isolatedScope.id).toBeDefined();
            expect(isolatedScope.showLabel).toBeDefined();
            expect(isolatedScope.ngModel).toBeDefined();
            expect(isolatedScope.ngRequired).toBeDefined();
            expect(isolatedScope.colspan).toBeDefined();
            expect(isolatedScope.label).toBeDefined();
            expect(isolatedScope.onOpen).toBeDefined();
            expect(isolatedScope.provider).toBeDefined();
            expect(isolatedScope.itemLabel).toBeDefined();
        });

        it('deve ter a classe oobj-select', function () {
            var elementTemp = angular.element('<p class=\'oobj-select\'></p>');
            $compile(elementTemp);
            scope.$digest();
            expect(elementTemp.hasClass('oobj-select')).toBeTruthy();
        });

        it('deve ter ngmodel', function(){
            expect(isolatedScope.ngModel).toBeDefined();
        });

        it('deve falhar se ngModel nao especificado', function () {
            expect(function(){
                getCompiledElement('<input type="text" oobj-select="" />');
            }).toThrow();
        });

        it('Teste atributos com scope isolado - one way binding ("@").', function(){
            //mesmo modificando o isolateScope ainda permanece o valor atribuido
            expect(scope.id).toEqual('testeid');
            isolatedScope.id = 'isoladoid';
            expect(scope.id).toEqual('testeid');

            expect(scope.itemLabel).toEqual('testeitemLabel');
            isolatedScope.itemLabel = 'isoladoitemLabel';
            expect(scope.itemLabel).toEqual('testeitemLabel');

            expect(scope.colspan).toEqual('testecolspan');
            isolatedScope.colspan = 'isoladocolspan';
            expect(scope.colspan).toEqual('testecolspan');
        });

        it('Teste atributos com scope isolado - two way binding ("=").', function() {
            isolatedScope.showLabel.prop = 'valorIsoladoScope';
            expect(scope.showLabel.prop).toEqual('valorIsoladoScope');

            isolatedScope.ngRequired.prop = 'valorIsoladoScope';
            expect(scope.ngRequired.prop).toEqual('ngRequired');

            isolatedScope.onOpen.prop = 'valorIsoladoScope';
            expect(scope.onOpen.prop).toEqual('onOpen');

            isolatedScope.provider.prop = 'valorIsoladoScope';
            expect(scope.provider.prop).toEqual('valorIsoladoScope');
        });

        it('Deve mostrar itemLabel - (descricao) por default', function() {
            element = getCompiledElement('<oobj-select ng-model="ngModel"></oobj-selectv>');
            isolatedScope = element.isolateScope();
            expect(isolatedScope.itemLabel).toBe('descricao');
        });

        it('Deve configurar inputSize - (sm) por default', function() {
            element = getCompiledElement('<oobj-select ng-model="ngModel"></oobj-selectv>');
            isolatedScope = element.isolateScope();
            expect(isolatedScope.inputSize).toBe('sm');
        });

        it('Nao deve mostrar label', function() {
            scope.label = undefined;
            element = getCompiledElement('<oobj-select ' +
                'ng-model="ngModel" ' +
                'show-label="false" ' +
                'ng-required="false"></oobj-selectv>');
            var label  = element.find('label');
            expect(label.hasClass('control-label ng-hide')).toBe(true);
        });

        it('Deve mostrar label', function() {
            element = getCompiledElement('<oobj-select ' +
                'ng-model="ngModel" ' +
                'show-label="true" ' +
                'ng-required="true" ' +
                'label="label"></oobj-selectv>');
            var label  = element.find('label');
            expect(label.hasClass('control-label')).toBe(true);
        });

        it('Deve mostrar  *', function() {
            element = getCompiledElement('<oobj-select ng-model="ngModel" ng-required="true"></oobj-select>');
            var span  = element.find('span');
            expect(span.hasClass('text-danger')).toBe(true);
        });

        it('Nao deve mostrar  *', function() {
            element = getCompiledElement('<oobj-select ng-model="ngModel" ng-required="false"></oobj-select>');
            var span  = element.find('span');
            expect(span.hasClass('text-danger ng-hide')).toBe(true);
        });

        it('Nao deve mostrar search quando o atributo search for false', function() {
            element = getCompiledElement('<oobj-select ng-model="ngModel" search="false"></oobj-select>');
            expect(element.find('select').attr('data-live-search')).toBe(undefined);
        });

        it('Deve mostrar search por padrão', function() {
            element = getCompiledElement('<oobj-select ng-model="ngModel"></oobj-select>');
            expect(element.find('select').attr('data-live-search')).toBeTruthy();
        });
    });
})();