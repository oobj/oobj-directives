(function() {
	'use strict';
	
	angular
		.module('oobj-directives')
		.directive('oobjHistEntregaModal', oobjHistEntregaModal);

	/** @ngInject */
	function oobjHistEntregaModal() {
		return {
			restrice: 'AE',
			transclude: true,
			templateUrl: 'oobj-hist-entrega-modal/oobj-hist-entrega-modal.html',
			scope: {
				dfe: '=',
				data: '='
			},
			link: link
		};
		
		function link(scope) {
			scope.gridOptions = {};
			scope.gridOptions.enableFiltering = false;
			scope.gridOptions.enableSorting = false;
			scope.gridOptions.enablePaginationControls = false;
			scope.gridOptions.enableRowHeaderSelection = false;
			scope.gridOptions.enableHorizontalScrollbar = 0;
			scope.gridOptions.enableVerticalScrollbar = 0;
			scope.gridOptions.columnDefs = [
			    { name: 'dataHora', displayName: 'Data/Hora', enableColumnMenu: false },
			    { name: 'entregador', enableColumnMenu: false },
			    { name: 'usuario', displayName: 'Usuário', enableColumnMenu: false },
			    { name: 'origem', enableColumnMenu: false },
			    { name: 'status', enableColumnMenu: false,
			      cellClass: function(grid, row, col) {
			          if (grid.getCellValue(row, col) === 'Sucesso') {
			        	  return 'green';
			          } else {
			        	  return 'red';
			          }
			      }
			    }
			];
			
			scope.gridOptions.data = scope.data;
		}
	}
})();