/**
 * Grid customizada para ser utilizada no Painel.
 * Usa a ui-grid.
 *
 * Created by ATILLA on 02/10/2015.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjGrid', oobjGrid);

    /** @ngInject */
    function oobjGrid(uiGridConstants, $timeout, i18nService) {
        return {
            templateUrl: 'js/directives/oobj-grid/oobj-grid.html',
            scope: {
                colspan: '@?',
                loading: '@?',
                data: '=?',
                initGrid: '&',
                pesquisar: '&?',
                rowHeight: '@?'
            },
            compile: compile
        };

        function compile() {
            i18nService.setCurrentLang('pt-br');

            // constantes globais da directiva
            var PRIMEIRA_PAGINA_BACKEND = 0;
            var PRIMEIRA_PAGINA_GRID = 1;
            var PRIMEIRO_ITEM = 0;
            var ROW_HEIGHT = 44;
            var PIXEL_EXTRA_GRID = 73;
            var DIFERENCA_PAGE_GRID_BACKEND = 1;
            var TIMEOUT_RENDER_GRID = 100;

            return {
                pre: preLink,
                post: postLink
            };

            function preLink(scope, element) {
                // resolve a função recebida por parametro
                if (typeof scope.pesquisar === 'function') {
                    scope.pesquisar = scope.pesquisar();
                }

                scope.language = 'pt-br';
                scope.pageSizes = [10, 25, 50, 75, 100];

                definirGridOptions(scope, element);

                // função para adicionar colunas na grid externamente
                scope.addColumn = function(column) {
                    scope.gridOptions.columnDefs.push(column);
                };

                scope.initGrid()(scope);
            }

            function postLink(scope) {
                // obtem as linhas selecionadas na grid
                scope.getSelectedRows = function () {
                    return scope.gridApi.selection.getSelectedRows();
                };

                if (!scope.data) {
                    // executa uma pesquisa inicial para exibir dados ao entrar numa página com a oobj-grid
                    scope.loading = true;
                    scope.pesquisar(scope.callbackDefault, PRIMEIRA_PAGINA_BACKEND, scope.pageSizes[PRIMEIRO_ITEM]);
                } else {
                    // faz o resize de acordo com a qtd de itens, esperando um pequeno delay para fazer o render certo
                    $timeout(scope.autoResizeDataDefault, TIMEOUT_RENDER_GRID);
                }
            }

            /**
             * Configura todos os detalhes da table
             *
             * @param scope
             *          Scope da grid
             * @param element
             *          Element jquery da directiva
             */
            function definirGridOptions(scope, element) {
                scope.gridOptions = {
                    data: scope.data || [],
                    columnDefs: [],
                    rowHeight: scope.rowHeight || ROW_HEIGHT,
                    paginationPageSizes: scope.pageSizes,
                    paginationPageSize: scope.pageSizes[PRIMEIRO_ITEM],
                    enableHorizontalScrollbar: uiGridConstants.scrollbars.NEVER,
                    enableVerticalScrollbar: uiGridConstants.scrollbars.NEVER,
                    enableRowSelection: true,
                    enableRowHeaderSelection: true,
                    enableGridMenu: true,
                    useExternalPagination: true,
                    multiSelect: true,
                    onRegisterApi: onRegisterApi
                };

                /**
                 * Callback executado no retorno de cada consulta
                 *
                 * @param data
                 *          dados retornados do backend
                 */
                scope.callbackPesquisa = function(data) {
                    scope.gridOptions.totalItems = data.totalElements || 0;
                    scope.gridOptions.data = data.content;

                    scope.loading = false;
                    scope.autoResize(scope.gridOptions.data.length || scope.pageSizes[PRIMEIRO_ITEM]);
                };

                /**
                 * Callback executado no retorno de cada consulta, retornando para a primeira pagina por padrão
                 *
                 * @param data
                 *          dados retornados do backend
                 */
                scope.callbackDefault = function(data) {
                    if (data.status && data.status > 499) {
                        scope.loading = false;
                        scope.gridOptions.data = [];
                        scope.gridOptions.totalItems = scope.gridOptions.data.length;

                    } else {
                        scope.gridOptions.totalItems = data.totalElements || 0;
                        scope.gridOptions.data = data.content;

                        if (scope.gridApi) {
                            // go to first page
                            scope.gridApi.pagination.seek(PRIMEIRA_PAGINA_GRID);
                        }

                        scope.loading = false;
                        scope.autoResize(scope.gridOptions.data.length || scope.pageSizes[PRIMEIRO_ITEM]);
                    }
                };

                /**
                 * Redefine o height da table de acordo com a quantidade de itens exibidos
                 *
                 * @param totalItems
                 *          Quantidade total de itens listados na página atual
                 */
                scope.autoResize = function(totalItems) {
                    var pixels = totalItems * scope.gridOptions.rowHeight;
                    // Adiciona alguns pixels extra no tamanho da grid.
                    // Necessário para que os botões de paginação não sejam renderizados em cima da última row
                    element.find('.table').css('height', (pixels + PIXEL_EXTRA_GRID) + 'px');
                };

                /**
                 * Auto resize executado quando os dados da grid são recebidos estaticamente (scope.data)
                 *
                 * @param size
                 *          Quantidade de itens a ser exibido na página atual
                 */
                scope.autoResizeDataDefault = function(size) {
                    scope.loading = true;
                    size = size || scope.pageSizes[PRIMEIRO_ITEM];

                    // verifica se o size desejado é maior que a quantidade total de itens
                    // neste caso, o size máximo será o total de itens
                    if (size > scope.gridOptions.data.length) {
                        scope.autoResize(scope.gridOptions.data.length);
                    } else {
                        scope.autoResize(size);
                    }

                    scope.loading = false;
                };

                /**
                 * Define os listening da grid, como paginação, ordenação, etc
                 *
                 * @param gridApi
                 *          Objecto da API injetada pela ui-grid
                 */
                function onRegisterApi(gridApi) {
                    scope.gridApi = gridApi;

                    // Caso os dados sejam recebidos estáticamente
                    if (scope.data) {
                        definirGridApiDataStatic();
                    }
                    // Caso os dados tenham que ser buscados via API no Backend
                    else {
                        definirGridApiBackend();
                    }
                }

                /**
                 * Define o GridApi para casos em que os dados são pesquisados no backend (paginação, ordenação, etc)
                 */
                function definirGridApiBackend() {
                    var sortColumn;
                    var sortDirection;

                    scope.gridApi.pagination.on.paginationChanged(scope, function (pageGrid, size) {
                        scope.loading = true;
                        // a pagina do backend é um número a menos do que o componente de grid
                        // ex: primeira página no backend é 0, enquanto na ui-grid, a primeira pagina é 1
                        var pageBackend = pageGrid - DIFERENCA_PAGE_GRID_BACKEND;
                        scope.pesquisar(scope.callbackPesquisa, pageBackend, size, sortDirection, sortColumn);
                    });

                    scope.gridApi.core.on.sortChanged(scope, function (scopeApi, sortColumns) {
                        if (sortColumns && sortColumns[0]) {
                            scope.loading = true;

                            sortColumn = sortColumns[0].colDef.sortColumn || sortColumns[0].field;
                            sortDirection = sortColumns[0].sort.direction || 'asc';
                            // a pagina do backend é um número a menos do que o componente de grid
                            // ex: primeira página no backend é 0, enquanto na ui-grid, a primeira pagina é 1
                            var page = scopeApi.options.paginationCurrentPage - DIFERENCA_PAGE_GRID_BACKEND;
                            var size = scopeApi.options.paginationPageSize;

                            scope.pesquisar(scope.callbackPesquisa, page, size, sortDirection, sortColumn);
                        }
                    });
                }

                /**
                 * Define o GridApi para atender casos em que os dados são recebidos estáticamente (scope.data)
                 */
                function definirGridApiDataStatic() {
                    scope.gridOptions.totalItems = scope.data.length || 0;

                    scope.gridApi.pagination.on.paginationChanged(scope, function (pageGrid, size) {
                        // apenas redefine o tamanho da grid de acordo com a quantidade de itens
                        scope.autoResizeDataDefault(size);
                    });
                }
            }
        }
    }
    oobjGrid.$inject = ['uiGridConstants', '$timeout', 'i18nService'];
})();
