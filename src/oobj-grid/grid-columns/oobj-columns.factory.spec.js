/**
 * Teste unitário para factory que cria as colunas da oobj-grid.
 *
 * Created by Diogo on 04/02/2016.
 */
(function () {
    'use strict';

    describe('Teste Factory: oobj-column.factory', function () {
        var column,
            oobjColumnsFactory,
            $templateCache,
            $uibModal;

        beforeEach(function () {
            module('oobj-directives');
            angular.mock.module('templates');
        });

        beforeEach(inject(function(_OobjColumnsFactory_, $injector, $filter, _$templateCache_, _$uibModal_) {
            oobjColumnsFactory = _OobjColumnsFactory_;
            $templateCache = _$templateCache_;
            $uibModal = _$uibModal_;
        }));

        it('deve criar column via funcao newColumnCompany', function () {
            column = oobjColumnsFactory.newColumnCompany('nome', 'field', 10, 'sort-column', null, 'cellFilter', true);
            expect(column.name).toBe('nome');
            expect(column.field).toBe('field');
            expect(column.width).toBe(10);
            expect(column.sortColumn).toBe('sort-column');
            expect(column.headerCellClass).toBe('ui-grid-header-center');
            expect(column.cellTemplate).toBe('<div class="ui-grid-cell-contents">' +
                '{{ COL_FIELD.razaoSocial }}<br>{{ COL_FIELD.cnpj }}</div>');
            expect(column.cellClass).toBe('ui-grid-vleft');
            expect(column.cellFilter).toBe('cellFilter');
            expect(column.enableSorting).toBe(true);
            expect(column.mask('10', 'currency')).toBeDefined();
            expect(column.mask('10', 'currency')).toBe('$10.00');
        });

        it('deve criar column via funcao newColumnCompany gridMenuShowHideColumns nao definido', function () {
            column = oobjColumnsFactory.newColumnCompany('nome', 'field', 10, null,
                'cellFilter');

            expect(column.gridMenuShowHideColumns).toBe(true);
        });

        it('sortColumn deve ser null quando informado null', function() {
            column = oobjColumnsFactory.newColumnCompany('nome', 'field', 10, null, null, 'cellFilter', true);

            expect(column.sortColumn).toBeNull();
        });

        it('deve criar column via funcao newColumnCicloDeVida', function () {
            var template = $templateCache
                .get('js/directives/oobj-grid/grid-columns/ciclo-vida/oobj-column-ciclo-vida.html');
            column = oobjColumnsFactory.newColumnCicloDeVida('nome',
                'field', {'linha': 10}, 10, undefined, undefined, 'cellFilter', false);

            expect(column.name).toBe('nome');
            expect(column.field).toBe('field');

            expect(column.width).toBe(10);
            expect(column.headerCellClass).toBe('ui-grid-header-center');
            expect(column.cellTemplate).toBe(template);
            expect(column.cellClass).toBe('ui-grid-vstatus-doc');
            expect(column.cellFilter).toBe('cellFilter');
            expect(column.enableSorting).toBe(false);
            expect(column.gridMenuShowHideColumns).toBe(false);

            expect(typeof(column.gridScope.openModalIntegridadeArquivo)).toEqual('function');
            expect(typeof(column.gridScope.openModalSituacaoSefaz)).toEqual('function');
            expect(typeof(column.gridScope.openModalEventoDestinatario)).toEqual('function');
            expect(typeof(column.gridScope.openModalEventoEmitente)).toEqual('function');

            spyOn($uibModal, 'open');

            column.gridScope.openModalIntegridadeArquivo();
            column.gridScope.openModalSituacaoSefaz();
            column.gridScope.openModalEventoDestinatario();
            column.gridScope.openModalEventoEmitente();

            expect($uibModal.open).toHaveBeenCalledTimes(4);
        });

        it('deve criar o width de 14% quando não for definido', function() {
            column = oobjColumnsFactory.newColumnCicloDeVida(
                'nome', 'field', {'linha': 10}, null, undefined, null, 'cellFilter');

            expect(column.width).toBe(150);
        });

        it('não deve configurar gridScope (modais) quando não for definido', function() {
            column = oobjColumnsFactory.newColumnCicloDeVida(
                'nome', 'field', null, null, undefined, null, 'cellFilter');

            expect(column.gridScope).toBeNull();
        });

        it('deve criar column via funcao newColumnCicloDeVida gridMenuShowHideColumns nao definido', function () {
            column = oobjColumnsFactory.newColumnCicloDeVida(
                'nome', 'field', {'linha': 10}, 10, undefined, null, 'cellFilter');

            expect(column.gridMenuShowHideColumns).toBe(true);
        });

        it('deve criar column via funcao newColumnReal', function () {
            column = oobjColumnsFactory.newColumnReal('nome', 'field', 10, 'sort-column', null, 'cellTemplate',
                'cellClass', true, false);
            expect(column.name).toBe('nome');
            expect(column.field).toBe('field');
            expect(column.width).toBe(10);
            expect(column.sortColumn).toBe('sort-column');
            expect(column.headerCellClass).toBe('ui-grid-header-center');
            expect(column.cellTemplate).toBe('cellTemplate');
            expect(column.cellClass).toBe('cellClass');
            expect(column.cellFilter).toBe('currency:"R$ "');
            expect(column.enableSorting).toBe(true);
            expect(column.gridMenuShowHideColumns).toBe(false);
        });

        it('deve criar column via funcao newColumnReal valores default', function () {
            column = oobjColumnsFactory.newColumnReal('nome', 'field', 10, 'sort-column', null, null, null,
                'cellFilter', true);
            expect(column.sortColumn).toBe('sort-column');
            expect(column.cellTemplate).toBe('');
            expect(column.cellClass).toBe('ui-grid-vcenter');
            expect(column.gridMenuShowHideColumns).toBe(true);
        });

        it('deve configurar o gridMenuShowHideColumns da função newColumnReal como true quando não definido',
            function() {
                column = oobjColumnsFactory.newColumnReal('nome', 'field', 10, null, null, null,
                    'cellFilter');
                expect(column.gridMenuShowHideColumns).toBe(true);
        });

        it('deve criar column via funcao newColumnDate', function () {
            column = oobjColumnsFactory.newColumnDate('nome', 'field', 10, 'sort-column', 'cellFilter',
                'headerCellClass', '<div class="ui-grid-cell-contents">' +
                '{{ COL_FIELD | date:\'dd/MM/yyyy\' }}<br>{{ COL_FIELD | date:\'HH:mm\' }}</div>',
                'cellClass', true, 'gridMenuShowHideColumns');

            expect(column.name).toBe('nome');
            expect(column.field).toBe('field');
            expect(column.width).toBe(10);
            expect(column.sortColumn).toBe('sort-column');
            expect(column.headerCellClass).toBe('headerCellClass');
            expect(column.cellTemplate).toBe('<div class="ui-grid-cell-contents">' +
                '{{ COL_FIELD | date:\'dd/MM/yyyy\' }}<br>{{ COL_FIELD | date:\'HH:mm\' }}</div>');
            expect(column.cellClass).toBe('cellClass');
            expect(column.cellFilter).toBe('cellFilter');
            expect(column.enableSorting).toBe(true);
            expect(column.gridMenuShowHideColumns).toBe('gridMenuShowHideColumns');
        });

        it('deve criar column via funcao newColumnDate valores default', function () {
            column = oobjColumnsFactory.newColumnDate('nome', 'field', 10, 'sort-column', null,
                null, null, null, true);
            expect(column.sortColumn).toBe('sort-column');
            expect(column.cellTemplate).toBe('<div class="ui-grid-cell-contents">' +
                '{{ COL_FIELD | date:\'dd/MM/yyyy\' }}<br>{{ COL_FIELD | date:\'HH:mm\' }}</div>');
            expect(column.headerCellClass).toBe('ui-grid-header-center');
            expect(column.cellClass).toBe('ui-grid-vcenter-middle');
            expect(column.cellFilter).toBe('date:"dd/MM/yyyy"');
            expect(column.gridMenuShowHideColumns).toBe(true);
        });

        it('deve criar column via funcao newColumnOptions', function () {
            var template = $templateCache
                .get('js/directives/oobj-grid/grid-columns/options/oobj-column-options-nfe.html');
            column = oobjColumnsFactory.newColumnOptions({'linha': 10}, 'nome',
                10,'headerCellClass');

            expect(column.name).toBe('nome');
            expect(column.field).toBe('');

            expect(column.width).toBe(10);
            expect(column.headerCellClass).toBe('headerCellClass');
            expect(column.cellTemplate).toBe(template);
            expect(column.cellClass).toBe(null);
            expect(column.cellFilter).toBe(null);
            expect(column.enableSorting).toBe(false);
            expect(column.gridMenuShowHideColumns).toBe(false);

            expect(typeof(column.gridScope.openModalDetalhesNFe)).toEqual('function');
            expect(typeof(column.gridScope.openModalEventosVinculados)).toEqual('function');
            expect(typeof(column.gridScope.openModalHistoricoEntrega)).toEqual('function');
            expect(typeof(column.gridScope.openModalObservacoes)).toEqual('function');

            spyOn($uibModal, 'open');

            column.gridScope.openModalDetalhesNFe();
            column.gridScope.openModalEventosVinculados();
            column.gridScope.openModalHistoricoEntrega();
            column.gridScope.openModalObservacoes();

            expect($uibModal.open).toHaveBeenCalledTimes(4);

        });

        it('deve criar column via funcao newColumnOptions valores default', function () {
            column = oobjColumnsFactory.newColumnOptions({'linha': 10});

            expect(column.name).toBe('Opções');
            expect(column.width).toBe(89);
            expect(column.headerCellClass).toBe('ui-grid-header-center');
        });

        it('não deve definir gridScope qua não informado', function () {
            column = oobjColumnsFactory.newColumnOptions();
            expect(column.gridScope).toBeUndefined();
        });

        it('deve criar column via funcao newColumnNumeroSerie', function () {
            var template = $templateCache
                .get('js/directives/oobj-grid/grid-columns/oobj-num-serie-column.tpls.html');
            column = oobjColumnsFactory.newColumnNumeroSerie('nome', 'field', 10, 'sort-column', 'headerCellClass',
                'cellClass', 'cellFilter', true, 'gridMenuShowHideColumns');

            expect(column.name).toBe('nome');
            expect(column.field).toBe('field');
            expect(column.width).toBe(10);
            expect(column.sortColumn).toBe('sort-column');
            expect(column.headerCellClass).toBe('headerCellClass');
            expect(column.cellTemplate).toBe(template);
            expect(column.cellClass).toBe('cellClass');
            expect(column.cellFilter).toBe('cellFilter');
            expect(column.enableSorting).toBe(true);
            expect(column.gridMenuShowHideColumns).toBe('gridMenuShowHideColumns');
        });

        it('deve criar column via funcao newColumnNumeroSerie valores dfault', function () {
            column = oobjColumnsFactory.newColumnNumeroSerie('nome', 'field', 10, 'sort-column', null,
                null, 'cellFilter', true);
            expect(column.sortColumn).toBe('sort-column');
            expect(column.headerCellClass).toBe('ui-grid-header-center');
            expect(column.cellClass).toBe('ui-grid-vcenter');
            expect(column.gridMenuShowHideColumns).toBe(true);
        });

        it('deve definir a coluna newCFeColumnOptions com valores padrão', function() {
            column = oobjColumnsFactory.newCFeColumnOptions();

            expect(column.gridScope).toBeUndefined();
            expect(column.name).toBe('Opções');
            expect(column.width).toBe(70);
            expect(column.headerCellClass).toBe('ui-grid-header-center');
            expect(column.cellClass).toBeNull();
            expect(column.cellFilter).toBeNull();
            expect(column.enableSorting).toBeFalsy();
            expect(column.gridMenuShowHideColumns).toBeFalsy();
        });

        it('deve difinir a opção de gridScope quando informado para coluna newCFeColumnOption', function() {
            column = oobjColumnsFactory.newCFeColumnOptions({ gridScope: {} });

            expect(column.gridScope).toBeDefined();
            expect(column.gridScope.openModalDetalhes).toBeDefined();
            expect(column.gridScope.openModalEventosVinculados).toBeDefined();
            expect(column.gridScope.openModalHistoricoEntrega).toBeDefined();
            expect(column.gridScope.openModalObservacoes).toBeDefined();

            spyOn($uibModal, 'open');

            column.gridScope.openModalDetalhes();
            column.gridScope.openModalEventosVinculados();
            column.gridScope.openModalHistoricoEntrega();
            column.gridScope.openModalObservacoes();

            expect($uibModal.open).toHaveBeenCalledTimes(4);
        });
    });
})();