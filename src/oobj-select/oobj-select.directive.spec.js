/**
 * Created by Diogo on 15/10/2015.
 */
(function () {

    describe('Teste de directiva: oobjSelect', function () {
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

            scope.id = "testeid";
            scope.label = "testelabel";
            scope.itemLabel = "testeitemLabel";
            scope.itemValue = "testeitemValue";
            scope.colspan = "testecolspan";
            scope.placeholder = "testeplace";

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
            scope.provider = {
                prop: 'provider'
            };

            element = getCompiledElement();
            isolatedScope = element.isolateScope();
        }));

        function getCompiledElement(xml) {
            var $element;
            if (xml == null) {
                $element = angular.element('<oobj-select id="id" show-label="showLabel" ng-model="ngModel" ng-required="true" colspan="true" label="label" placeholder="place" on-open="open" provider="provider" item-label="itemlabel" item-value="itemvalue"></oobj-select>');
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
            expect(isolatedScope.placeholder).toBeDefined();
            expect(isolatedScope.onOpen).toBeDefined();
            expect(isolatedScope.provider).toBeDefined();
            expect(isolatedScope.itemLabel).toBeDefined();
            expect(isolatedScope.itemValue).toBeDefined();
        });

        it('deve ter a classe oobj-select', function () {
            var elementTemp = angular.element("<p class='oobj-select'></p>");
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
            isolatedScope.id = "isoladoid";
            expect(scope.id).toEqual('testeid');

            expect(scope.itemLabel).toEqual('testeitemLabel');
            isolatedScope.itemLabel = "isoladoitemLabel";
            expect(scope.itemLabel).toEqual('testeitemLabel');

            expect(scope.itemValue).toEqual('testeitemValue');
            isolatedScope.itemValue = "isoladoitemValue";
            expect(scope.itemValue).toEqual('testeitemValue');

            expect(scope.colspan).toEqual('testecolspan');
            isolatedScope.colspan = "isoladocolspan";
            expect(scope.colspan).toEqual('testecolspan');

            expect(scope.placeholder).toEqual('testeplace');
            isolatedScope.placeholder = "isoladoplace";
            expect(scope.placeholder).toEqual('testeplace');


        });

        it('Teste atributos com scope isolado - two way binding ("=").', function() {

            isolatedScope.showLabel.prop = "valorIsoladoScope";
            expect(scope.showLabel.prop).toEqual('valorIsoladoScope');

            isolatedScope.ngRequired.prop = "valorIsoladoScope";
            expect(scope.ngRequired.prop).toEqual('ngRequired');

            isolatedScope.onOpen.prop = "valorIsoladoScope";
            expect(scope.onOpen.prop).toEqual('onOpen');

            isolatedScope.provider.prop = "valorIsoladoScope";
            expect(scope.provider.prop).toEqual('valorIsoladoScope');
        });

        it('Deve possuir selectStyle', function() {
            element = getCompiledElement('<oobj-select ng-model="ngModel"></oobj-select>');
            var div  = element.find('select[style]');
            expect(div.length).toBe(1);
        });

        it('Deve configurar selectStyle width e height conforme atributo', function() {
            element = getCompiledElement('<oobj-select ng-model="ngModel" width="10" height="5"></oobj-select>');
            var div  = element.find('select[ng-style]');
            expect(div[0].style['width']).toEqual('10px');
            expect(div[0].style['height']).toEqual('5px');
        });

        it('Nao deve mostrar emptyOption - false por default', function() {
            expect(isolatedScope.emptyOption).toBe(false);
            var option  = element.find('option');
            expect(option.length).toBe(2);
            expect(option[0].innerText).toBe('undefined');
        });

        it('Deve mostrar emptyOption configurar false por default', function() {
            element = getCompiledElement('<oobj-select ng-model="ngModel" show-empty-option="true"></oobj-select>');
            isolatedScope = element.isolateScope();
            expect(isolatedScope.emptyOption).not.toBeDefined();
            var option  = element.find('option');
            expect(option[0].innerText).toBe('Selecione uma opção...');
            expect(option.length).toBe(1);
        });
    });
})();