/**
 * Teste unitário para oobj-grid.
 *
 * Created by Leonardo on 12/02/2016.
 */
(function () {
    'use strict';

    describe('Teste de Directiva: oobjGrid', function () {
        var $rootScope,
            $compile,
            scope,
            is;

        beforeEach(module('oobj-directives'));
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $compile = _$compile_;
            $rootScope = _$rootScope_;

            scope = $rootScope.$new();

            scope.gridOptions = {};

            // atributos mínimos para compilar a grid
            scope.initGrid = function(gridScope) {
                gridScope.addColumn({field: 'test', name: 'Test', width: '100%'});
            };

            scope.pesquisar = function() {};

            var element = '<oobj-grid init-grid="initGrid" pesquisar="pesquisar"></oobj-grid>';

            var compiledElement = $compile(element)(scope);

            scope.$digest();

            is = compiledElement.isolateScope();
        }));

        it('deve adicionar uma nova coluna no gridOptions.columnDefs', function() {
            expect(is.gridOptions).toBeDefined();
            expect(is.gridOptions.columnDefs.length).toEqual(1);
        });

        it('callbackPesquisa deve preencher informações do retorno corretamente', function() {
            expect(is.gridOptions).toBeDefined();
            expect(is.gridOptions.totalItems).toBeDefined();

            var items = [{id: 1, value: 'abc'}, {id: 2, value: 'def'}];
            var data = {
                totalElements : items.length,
                content : items
            };
            is.callbackPesquisa(data);

            is.pesquisar(is.callbackPesquisa, 1, 10);

            expect(is.gridOptions.totalItems).toBe(2);
        });

        it('totalItems da grid tem o valor default de 0', function() {
            expect(is.gridOptions).toBeDefined();
            expect(is.gridOptions.totalItems).toBeDefined();

            var items = [{id: 1, value: 'abc'}, {id: 2, value: 'def'}];
            var data = {content : items};
            is.callbackPesquisa(data);

            is.pesquisar(is.callbackPesquisa, 1, 10);

            expect(is.gridOptions.totalItems).toBe(0);
        });

        it('autoResize deve ter o tamanho da quantidade de items presentes na página quando nenhum ' +
            'item vier do banco', function() {
            scope.autoResize = function(totalItems) { return totalItems; };

            expect(is.gridOptions).toBeDefined();
            expect(is.gridOptions.totalItems).toBeDefined();

            var data = {content : []};

            is.pesquisar(is.callbackPesquisa, 1, 10);
            is.callbackPesquisa(data);
        });

        it('getSelectedRows deve retornar zero quando nenhuma linha for selecionada', function() {
            scope.getSelectedRows = function () { };

            spyOn(scope, 'getSelectedRows');

            is.getSelectedRows();

            expect(scope.getSelectedRows.length).toBe(0);
        });

        xit('TODO: deve executar a paginação dos resultados corretamente', function() {
            var data = {
                content: [
                    {id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}, {id: 9}, {id: 10},
                    {id: 11}, {id: 12}, {id: 13}, {id: 14}, {id: 15}, {id: 16}, {id: 17}, {id: 18}, {id: 19}, {id: 20},
                    {id: 21}, {id: 22}, {id: 23}, {id: 24}, {id: 25}, {id: 26}, {id: 27}, {id: 28}, {id: 29}, {id: 30},
                    {id: 1}, {id: 1}, {id: 1}, {id: 1}, {id: 1}, {id: 1}, {id: 1}, {id: 1}, {id: 1}, {id: 1}, {id: 1},
                    {id: 1}, {id: 1}, {id: 1}, {id: 1}, {id: 1}, {id: 1}, {id: 1}, {id: 1}, {id: 1}, {id: 1}, {id: 1},
                    {id: 1}, {id: 1}, {id: 1}, {id: 1}, {id: 1}, {id: 1}, {id: 1}, {id: 1}, {id: 1}, {id: 1}, {id: 1},
                    {id: 1}, {id: 1}, {id: 1}, {id: 1}, {id: 1}, {id: 1}, {id: 1}, {id: 1}, {id: 1}, {id: 1}, {id: 1},
                    {id: 1}, {id: 1}, {id: 1}, {id: 1}, {id: 1}, {id: 1}, {id: 1}, {id: 1}, {id: 1}, {id: 1}, {id: 1},
                    {id: 1}, {id: 1}, {id: 1}, {id: 1}, {id: 1}, {id: 1}, {id: 1}, {id: 1}, {id: 1}, {id: 1}, {id: 1}
                ],
                totalElements: 90
            };

            scope.getSelectedRows = function () { };

            spyOn(scope, 'getSelectedRows');
            spyOn(is, 'pesquisar');

            is.callbackPesquisa(data);
            is.getSelectedRows();

            expect(scope.getSelectedRows.length).toBe(0);

            // não funciona como esperado... os callbacks não sortChanged e paginationChanged não são chamados
            //noinspection JSUnresolvedVariable,JSUnresolvedFunction
            is.gridApi.pagination.seek(2);
            //noinspection JSUnresolvedVariable,JSUnresolvedFunction
            is.gridApi.pagination.nextPage();
        });

    });

})();