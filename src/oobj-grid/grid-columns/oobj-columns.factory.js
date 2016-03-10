/**
 * Created by Ricardo on 04/02/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .factory('OobjColumnsFactory', OobjColumnsFactory);

    /** @ngInject */
    function OobjColumnsFactory($filter, $templateCache, $uibModal) {

        return {
            newColumnCompany : newColumnCompany,
            newColumnReal : newColumnReal,
            newColumn : newColumn,
            newColumnDate : newColumnDate,
            newColumnCicloDeVida : newColumnCicloDeVida,
            newColumnOptions : newColumnOptions,
            newColumnNumeroSerie : newColumnNumeroSerie,
            newCFeColumnOptions : newCFeColumnOptions,
            criarConfiguracaoCicloDeVida : criarConfiguracaoCicloDeVida
        };

        function newColumnCompany(name, field, width, sortColumn, headerCellClass,
                                  cellFilter, gridMenuShowHideColumns) {
            var column = {};
            column.name = name;
            column.sortColumn = sortColumn;
            column.field = field;
            column.width = width;
            column.headerCellClass = headerCellClass || 'ui-grid-header-center';
            column.cellTemplate =
                $templateCache.get('js/directives/oobj-grid/grid-columns/oobj-razao-social-cnpj-column.tpls.html');
            column.cellClass = 'ui-grid-vleft';
            column.cellFilter = cellFilter;
            column.enableSorting = true;
            column.sortCellFiltered = true;

            if (angular.isUndefined(gridMenuShowHideColumns)) {
                column.gridMenuShowHideColumns = true;
            } else {
                column.gridMenuShowHideColumns = gridMenuShowHideColumns;
            }

            column.mask = mask;

            return column;
        }

        /**
         * Cria o objeto responsável por configurar quais colunas aparecerão no ciclo de vida
         * Por padrão, um construtor vazio, mostar toda as colunas
         *
         * @param mostrarIntegridade
         * @param mostrarSituacaoSefaz
         * @param mostrarEventoEmitente
         * @param mostrarEventoDestinatario
         * @returns {{integridade: boolean, situacaoSefaz: boolean,
         *              eventoEmitente: boolean, eventoDestinatario: boolean}}
         */
        function criarConfiguracaoCicloDeVida(mostrarIntegridade, mostrarSituacaoSefaz,
                                   mostrarEventoEmitente, mostrarEventoDestinatario) {
            return {
                integridade : (mostrarIntegridade !== false),
                situacaoSefaz : (mostrarSituacaoSefaz !== false),
                eventoEmitente : (mostrarEventoEmitente !== false),
                eventoDestinatario : (mostrarEventoDestinatario !== false)
            };
        }

        function newColumnCicloDeVida(name, field, gridScope, width, cicloDeVidaConfig, headerCellClass,
                                         cellFilter, gridMenuShowHideColumns) {

            var column = {};

            column.gridScope = gridScope;
            column.name = name;
            column.field = field;
            column.width = width || 150;
            column.headerCellClass = headerCellClass || 'ui-grid-header-center';
            column.cellTemplate =
                $templateCache.get('js/directives/oobj-grid/grid-columns/ciclo-vida/oobj-column-ciclo-vida.html');
            column.cellClass = 'ui-grid-vstatus-doc';
            column.cellFilter = cellFilter;
            column.enableSorting = false;

            if (angular.isUndefined(gridMenuShowHideColumns)) {
                column.gridMenuShowHideColumns = true;
            } else {
                column.gridMenuShowHideColumns = gridMenuShowHideColumns;
            }

            if (column.gridScope) {
                column.gridScope.cicloVidaConfig = cicloDeVidaConfig ||
                    criarConfiguracaoCicloDeVida(true, true, true, true);

                column.gridScope.openModalIntegridadeArquivo = openModalIntegridadeArquivo;
                column.gridScope.openModalSituacaoSefaz = openModalSituacaoSefaz;
                column.gridScope.openModalEventoDestinatario = openModalEventoDestinatario;
                column.gridScope.openModalEventoEmitente = openModalEventoEmitente;
            }

            column.mask = mask;

            return column;
        }

        function newColumnReal(name, field, width, sortColumn, headerCellClass, cellTemplate, cellClass, enableSorting,
                 gridMenuShowHideColumns) {
            var column = {};
            column.name = name;
            column.field = field;
            column.width = width;
            column.sortColumn = sortColumn;
            column.headerCellClass = headerCellClass || 'ui-grid-header-center';
            column.cellTemplate = cellTemplate || '';
            column.cellClass = cellClass || 'ui-grid-vcenter';
            column.cellFilter = 'currency:"R$ "';
            column.enableSorting = enableSorting;

            if (angular.isUndefined(gridMenuShowHideColumns)) {
                column.gridMenuShowHideColumns = true;
            } else {
                column.gridMenuShowHideColumns = gridMenuShowHideColumns;
            }

            column.mask = mask;
            return column;
        }

        function newColumn(name, field, width, headerCellClass, cellTemplate, cellClass, enableSorting,
                               gridMenuShowHideColumns) {
            var column = {};
            column.name = name;
            column.field = field;
            column.width = width;
            column.headerCellClass = headerCellClass || 'ui-grid-header-center';
            column.cellTemplate = cellTemplate || '';
            column.cellClass = cellClass || 'ui-grid-vcenter';
            column.enableSorting = enableSorting;

            if (angular.isUndefined(gridMenuShowHideColumns)) {
                column.gridMenuShowHideColumns = true;
            } else {
                column.gridMenuShowHideColumns = gridMenuShowHideColumns;
            }

            column.mask = mask;
            return column;
        }

        function newColumnDate(name, field, width, sortColumn, cellFilter, headerCellClass, cellTemplate, cellClass,
                               enableSorting, gridMenuShowHideColumns) {
            var column = {};
            column.name = name;
            column.field = field;
            column.width = width;
            column.sortColumn = sortColumn;
            column.headerCellClass = headerCellClass || 'ui-grid-header-center';
            column.cellTemplate = cellTemplate || '';
            column.cellClass = cellClass || 'ui-grid-vcenter-middle';
            column.cellFilter = cellFilter || 'date:"dd/MM/yyyy"';
            column.enableSorting = enableSorting;
            column.cellTemplate = '<div class="ui-grid-cell-contents">' +
                '{{ COL_FIELD | date:\'dd/MM/yyyy\' }}<br>{{ COL_FIELD | date:\'HH:mm\' }}</div>';

            if (angular.isUndefined(gridMenuShowHideColumns)) {
                column.gridMenuShowHideColumns = true;
            } else {
                column.gridMenuShowHideColumns = gridMenuShowHideColumns;
            }

            column.mask = mask;
            return column;
        }

        function newColumnOptions(gridScope, name, width, headerCellClass) {
            var column = {};
            column.gridScope = gridScope;
            column.name = name || 'Opções';
            column.field = '';
            column.width = width || 89;
            column.headerCellClass = headerCellClass || 'ui-grid-header-center';
            column.cellTemplate =
                $templateCache.get('js/directives/oobj-grid/grid-columns/options/oobj-column-options-nfe.html');
            column.cellClass = null;
            column.cellFilter = null;
            column.enableSorting = false;
            column.gridMenuShowHideColumns = false;

            if (column.gridScope) {
                column.gridScope.openModalDetalhesNFe = openModalDetalhesNFe;
                column.gridScope.openModalEventosVinculados = openModalEventosVinculados;
                column.gridScope.openModalHistoricoEntrega = openModalHistoricoEntrega;
                column.gridScope.openModalObservacoes = openModalObservacoes;
            }
            return column;
        }

        function newCFeColumnOptions(gridScope, width, headerCellClass) {
            var column = {
                gridScope: gridScope,
                name: 'Opções',
                width: width || 70,
                headerCellClass: headerCellClass || 'ui-grid-header-center',
                cellClass: null,
                cellFilter: null,
                enableSorting: false,
                gridMenuShowHideColumns: false,
                cellTemplate:
                    $templateCache.get('js/directives/oobj-grid/grid-columns/options/oobj-column-options-cfe.html')
            };

            if (column.gridScope) {
                column.gridScope.openModalDetalhes = openModalDetalhesCFe;
                column.gridScope.openModalEventosVinculados = openModalEventosVinculados;
                column.gridScope.openModalHistoricoEntrega = openModalHistoricoEntrega;
                column.gridScope.openModalObservacoes = openModalObservacoes;
            }
            return column;
        }

        function newColumnNumeroSerie(name, field, width, sortColumn, headerCellClass, cellClass, cellFilter,
                                      enableSorting, gridMenuShowHideColumns) {
            var column = {};
            column.name = name;
            column.field = field;
            column.width = width;
            column.sortColumn = sortColumn;
            column.headerCellClass = headerCellClass || 'ui-grid-header-center';
            column.cellTemplate =
                $templateCache.get('js/directives/oobj-grid/grid-columns/oobj-num-serie-column.tpls.html');
            column.cellClass = cellClass || 'ui-grid-vcenter';
            column.cellFilter = cellFilter;
            column.enableSorting = enableSorting;

            if (angular.isUndefined(gridMenuShowHideColumns)) {
                column.gridMenuShowHideColumns = true;
            } else {
                column.gridMenuShowHideColumns = gridMenuShowHideColumns;
            }

            column.mask = mask;
            return column;
        }

        function openModalIntegridadeArquivo(row) {
            openModal(row, 'StatusIntegridadeArquivoModalController',
                'js/directives/oobj-grid/grid-columns/ciclo-vida/integridade-arquivo/' +
                'status-integridade-arquivo.modal.html');
        }

        function openModalSituacaoSefaz(row) {
            openModal(row, 'SituacaoSefazModalController',
                'js/directives/oobj-grid/grid-columns/ciclo-vida/situacao-sefaz/situacao-sefaz.modal.html');
        }

        function openModalEventoDestinatario(row) {
            openModal(row, 'EventoDestinatarioModalController',
                'js/directives/oobj-grid/grid-columns/ciclo-vida/evento-destinatario/evento-destinatario.modal.html');
        }

        function openModalEventoEmitente(row) {
            openModal(row, 'EventoEmitenteModalController',
                'js/directives/oobj-grid/grid-columns/ciclo-vida/evento-emitente/evento-emitente.modal.html');
        }

        function openModalDetalhesNFe(row) {
            openModal(row, 'DetalhesNfeController',
                'js/directives/oobj-grid/grid-columns/options/detalhes-nfe/detalhes-nfe.modal.html', 'lg');
        }

        function openModalDetalhesCFe(row) {
            openModal(row, 'DetalhesCFeController',
                'views/cfe-emissao/detalhes-cfe.modal.html', 'lg');
        }

        function openModalEventosVinculados(row) {
            openModal(row, 'EventosVinculadosModalController',
                'js/directives/oobj-grid/grid-columns/options/eventos-vinculados/eventos-vinculados.modal.html', 'lg');
        }

        function openModalObservacoes(row) {
            openModal(row, 'ObservacoesModalController',
                'js/directives/oobj-grid/grid-columns/options/observacoes/observacoes.modal.html', 'lg');
        }

        function openModalHistoricoEntrega(row) {
            openModal(row, 'HistoricoEntregaModalController',
                'js/directives/oobj-grid/grid-columns/options/historico-entrega/historico-entrega.modal.html', 'lg');
        }

        function openModal(row, controller, templateUrl, size) {
            $uibModal.open({
                controller: controller,
                controllerAs: 'vm',
                templateUrl: templateUrl,
                size: size,
                // usado para obter o item selecionado na grid
                resolve: {
                    selectedRow: function() { return row.entity; }
                }
            });
        }

        function mask(value, pattern) {
            return $filter(pattern)(value);
        }
    }
    OobjColumnsFactory.$inject = ['$filter', '$templateCache', '$uibModal'];
})();
