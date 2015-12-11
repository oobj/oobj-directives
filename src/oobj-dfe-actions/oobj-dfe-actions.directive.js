/**
 * Created by Renato Borges on 11/12/2015.
 */
(function() {
	'use strict';
	
	angular
		.module('oobj-directives')
		.directive('oobjDfeActions', OobjDfeActions);
	
	OobjDfeActions.$inject = ['MsgUtil'];
	
	function OobjDfeActions(MsgUtil) {
		
		var directive = {
			restrict: 'AE',
			templateUrl: 'oobj-dfe-actions/oobj-dfe-actions.html',
			scope: {
				dfe: '=',
				
				// allow to override default functions
				downloadXml: '&',
				downloadDanfe: '&',
				manifestar: '&',
				reconsultar: '&',
				downloadDacce: '&',
				revalidarXml: '&',
				diagnosticoFiscal: '&',
				reconhecerDocumentos: '&',
				reentregarDocumentos: '&',
				registrarEntrada: '&',
				desfazerEntrada: '&',
				
				// choose which buttons to display
				hideDownloadXml: '@',
				hideDownloadDanfe: '@',
				hideManifestar: '@',
				hideReconsultar: '@',
				hideMaisAcoes: '@',
				hideEntrada: '@'
			},
			link: link
		}
		
		return directive;
		
		function link($scope, $elem, $attr) {
			
	        if (angular.isUndefined($attr.downloadXml)) {
	        	$scope.downloadXml = function() {
		            MsgUtil.msg('Download de XML');
		        };
	        }
	        
	        if (angular.isUndefined($attr.downloadDanfe)) {
		        $scope.downloadDanfe = function() {
		            MsgUtil.msg('Download de DANFe');
		        };
	        }
	        
	        if (angular.isUndefined($attr.manifestar)) {
		        $scope.manifestar = function() {
		            MsgUtil.msg('Manifesto do Destinatário');
		        };
	        }
	        
	        if (angular.isUndefined($attr.reconsultar)) {
		        $scope.reconsultar = function() {
		            MsgUtil.msg('Reconsultar NFe');
		        };
	        }
	        
	        function downloadDacceDefault() {
	            MsgUtil.msg('Download de DACCe');
	        }
			
			if (angular.isUndefined($attr.downloadDacce)) {
		        $scope.downloadDacce = downloadDacceDefault;
	        }

			function revalidarXmlDefault() {
				MsgUtil.msg('Revalidar Arquivo XML');
			}
			
	        if (angular.isUndefined($attr.revalidarXml)) {
		        $scope.revalidarXml = revalidarXmlDefault;
	        }

	        function diagnosticoFiscalDefault() {
	        	MsgUtil.msg('Diagnóstico Fiscal');
	        }
	        
	        if (angular.isUndefined($attr.diagnosticoFiscal)) {
		        $scope.diagnosticoFiscal = diagnosticoFiscalDefault;
	        }

	        function reconhecerDocumentosDefault() {
	        	MsgUtil.msg('Reconhecer Documento(s)');
	        }
	        
	        if (angular.isUndefined($attr.reconhecerDocumentos)) {
		        $scope.reconhecerDocumentos = reconhecerDocumentosDefault;
	        }

	        function reentregarDocumentosDefault() {
	        	MsgUtil.msg('Reentregar Documento(s)');
	        }
	        
	        if (angular.isUndefined($attr.reentregarDocumentos)) {
		        $scope.reentregarDocumentos = reentregarDocumentosDefault;
	        }

	        function registrarEntradaDefault() {
	        	MsgUtil.msg('Registrar Entrada');
	        }
	        
	        if (angular.isUndefined($attr.registrarEntrada)) {
		        $scope.registrarEntrada = registrarEntradaDefault;
	        }

	        function desfazerEntradaDefault() {
	        	MsgUtil.msg('Defazer Entrada');
	        }
	        
	        if (angular.isUndefined($attr.desfazerEntrada)) {
		        $scope.desfazerEntrada = desfazerEntradaDefault;
	        }
	        
	        $scope.dropdownItems = {
				downloadDACCe: {
					label: 'Download de DACCe',
	                action: $scope.downloadDacce
	            },
	            revalidarXML: {
	                label: 'Revalidar Arquivo XML',
	                action: $scope.revalidarXml
	            },
	            diagnosticoFiscal: {
	                label: 'Diagnóstico Fiscal',
	                action: $scope.diagnosticoFiscal
	            },
	            reconhecerDocumentos: {
	                label: 'Reconhecer Documento(s)',
	                action: $scope.reconhecerDocumentos
	            },
	            reentregarDocumentos: {
	                label: 'Reentregar Documento(s)',
	                action: $scope.reentregarDocumentos
	            }
	        };

	        $scope.itensEntrada = {
	            registrarEntrada: {
	                label: 'Registrar Entrada',
	                action: $scope.registrarEntrada
	            },
	            desfazerEntrada: {
	                label: 'Desfazer Entrada',
	                action: $scope.desfazerEntrada
	            }
	        };
	        
		}
	}
	
})();