/**
 * Created by Ricardo on 22/02/2016.
 */
(function () {
    'use strict';

    describe('Teste de Directiva: OobjNewSelect', function () {

        // variaveis globais
        var $rootScope,
            $compile,
            scope,
            element,
            isolatedScope;


        beforeEach(function () {
            // carregando modulo q ira ser testado
            module('oobj-directives');
            // carregando templates
            angular.mock.module('templates');
        });

        function getCompiledElement(multi, resultProperty) {
            var xml = '<oobj-new-select ng-model="ambiente" options="ambientes" ';
            if (multi) {
                xml += ' multi="true"';
            }
            if (resultProperty) {
                xml += ' result-property="' + resultProperty + '"';
            }
            xml += ' track-by-prop="id" value-prop="descricao" search="true"></oobj-new-select>';
            var $element = angular.element(xml);

            var compiledElement = $compile($element)(scope);
            scope.$digest();

            return compiledElement;
        }

        describe('single', function () {

            beforeEach(inject(function (_$compile_, _$rootScope_) {
                $rootScope = _$rootScope_;
                scope = $rootScope.$new();
                $compile = _$compile_;

                scope.ambientes = [{id: 1, descricao : 'Produção'} , {id: 2, descricao : 'Homologação'}];
                scope.ambiente = {id: 2, descricao : 'Homologação'};

                element = getCompiledElement(false);
                isolatedScope = element.isolateScope();
            }));

            it('deve iniciar com "Homologação" selecionado', function () {
                expect(isolatedScope.itemSelecionado.id).toBe(scope.ambiente.id);
            });
            
            it('deve iniciar com "Homologação" sendo mostrado no label', function () {
                expect($(element.find('.filter-option')).html().trim()).toBe('Homologação');
            });

            it('deve conter 2 itens na lista', function () {
                expect(element.find('li').length).toEqual(2);
            });

            it('deve iniciar com a search vazia', function () {
                var input = element.find('input')[0];
                expect($(input).val()).toEqual('');
            });

            it('deve filtrar os elementos após executar uma pesquisa', function () {
                var input = element.find('input')[0];
                angular.element(input).val('Homo').trigger('input');
                expect(element.find('li').length).toEqual(1);
            });

            it('deve sumir com as opções quando a pesquisa não fizer sentido', function () {
                var input = element.find('input')[0];
                angular.element(input).val('HomoTESTEBLÁBLÁ').trigger('input');
                expect(element.find('li').length).toEqual(0);
            });

            it('deve retornar as opções quando o input for limpo', function () {
                var input = element.find('input')[0];
                angular.element(input).val('HomoTESTEBLÁBLÁ').trigger('input');
                angular.element(input).val('').trigger('input');
                expect(element.find('li').length).toEqual(2);
            });

            it('deve iniciar com as opções não vizíveis', function () {
                expect($(element.find('.oobj-select')[0]).hasClass('open')).toBeFalsy();
            });

            it('deve mostrar as opções quando o botão for pressionado', function () {
                var button = element.find('button')[0];
                $(button).focus();
                $(button).click();

            });

            it('opções devem conter o label descrição dos objetos', function () {
                var opcaoUm = $(element.find('li')[0]).find('span')[0];
                expect($(opcaoUm).text()).toBe('Produção');
                var opcaoDois = $(element.find('li')[1]).find('span')[0];
                expect($(opcaoDois).text()).toBe('Homologação');
            });

            it('deve trocar o objeto quando a outra opcao for clicada', function () {
                var opcaoUm = $(element.find('li')[0]).find('span')[0];
                $(opcaoUm).click();
                expect(isolatedScope.itemSelecionado.descricao).toBe('Produção');
            });
        });

        describe('multi', function () {

            beforeEach(inject(function (_$compile_, _$rootScope_) {
                $rootScope = _$rootScope_;
                scope = $rootScope.$new();
                $compile = _$compile_;

                scope.ambientes = [{id: 1, descricao : 'Produção'} , {id: 2, descricao : 'Homologação'}];
                scope.ambiente = [{id: 2, descricao : 'Homologação'}];

                element = getCompiledElement(true);
                isolatedScope = element.isolateScope();
            }));

            it('deve iniciar com "Homologação" selecionado', function () {
                expect(isolatedScope.itensSelecionados[0].id).toBe(scope.ambiente[0].id);
            });
            
            it('deve iniciar com "Homologação" sendo mostrado no label', function () {
                expect($(element.find('.filter-option')).html().trim()).toBe('Homologação');
            });

            it('deve conter 2 itens na lista', function () {
                expect(element.find('li').length).toEqual(2);
            });

            it('deve iniciar com as opções não vizíveis', function () {

            });

            it('deve mostrar as opções quando o foco estiver no input', function () {

            });

            it('deve ter os dois objetos quando a outra opcao for clicada', function () {
                var opcaoUm = $(element.find('li')[0]).find('span')[0];
                $(opcaoUm).click();
                expect(isolatedScope.itensSelecionados[0].descricao).toBe('Homologação');
                expect(isolatedScope.itensSelecionados[1].descricao).toBe('Produção');
            });

        });

        describe('multi utilizando resultValue', function () {

            beforeEach(inject(function (_$compile_, _$rootScope_) {
                $rootScope = _$rootScope_;
                scope = $rootScope.$new();
                $compile = _$compile_;

                scope.ambientes = [{id: 1, descricao : 'Produção'} , {id: 2, descricao : 'Homologação'}];
                scope.ambiente = [2];

                element = getCompiledElement(true, 'id');
                isolatedScope = element.isolateScope();
            }));

            it('deve iniciar com "Homologação" selecionado', function () {
                expect(isolatedScope.itensSelecionados[0].id).toBe(scope.ambiente[0]);
            });
            
            it('deve iniciar com "Homologação" sendo mostrado no label', function () {
                expect($(element.find('.filter-option')).html().trim()).toBe('Homologação');
            });
            
            it('deve ter os dois objetos quando a outra opcao for clicada', function () {
                var opcaoUm = $(element.find('li')[0]).find('span')[0];
                $(opcaoUm).click();
                expect(isolatedScope.itensSelecionados[0].descricao).toBe('Homologação');
                expect(isolatedScope.itensSelecionados[1].descricao).toBe('Produção');
                
                expect(scope.ambiente[0]).toBe(2);
                expect(scope.ambiente[1]).toBe(1);
            });
        });
        
        describe('single utilizando resultValue', function () {

            beforeEach(inject(function (_$compile_, _$rootScope_) {
                $rootScope = _$rootScope_;
                scope = $rootScope.$new();
                $compile = _$compile_;

                scope.ambientes = [{id: 1, descricao : 'Produção'} , {id: 2, descricao : 'Homologação'}];
                scope.ambiente = 2;

                element = getCompiledElement(false, 'id');
                isolatedScope = element.isolateScope();
            }));

            it('deve iniciar com "Homologação" selecionado', function () {
                expect(isolatedScope.itemSelecionado.id).toBe(scope.ambiente);
            });
            
            it('deve iniciar com "Homologação" sendo mostrado no label', function () {
                expect($(element.find('.filter-option')).html().trim()).toBe('Homologação');
            });
            
            it('deve trocar o objeto quando a outra opcao for clicada', function () {
                var opcaoUm = $(element.find('li')[0]).find('span')[0];
                $(opcaoUm).click();
                expect(isolatedScope.itemSelecionado.descricao).toBe('Produção');
                expect(scope.ambiente).toBe(1);
            });
            
        });
    });
})();