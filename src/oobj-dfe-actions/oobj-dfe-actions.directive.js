/**
 * Created by Renato Borges on 11/12/2015.
 */
(function() {
	'use strict';
	
	angular
		.module('oobj-directives')
		.directive('oobjDfeActions', oobjDfeActions);
	
	oobjDfeActions.$inject = ['MsgUtil'];

	/** @ngInject */
	function oobjDfeActions(MsgUtil) {
		return {
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
		};
		
		function link(scope, elem, attr) {
			getDefaults(scope, attr);

	        scope.dropdownItems = {
				downloadDACCe: {
					label: 'Download de DACCe',
	                action: scope.downloadDacce
	            },
	            revalidarXML: {
	                label: 'Revalidar Arquivo XML',
	                action: scope.revalidarXml
	            },
	            diagnosticoFiscal: {
	                label: 'Diagnóstico Fiscal',
	                action: scope.diagnosticoFiscal
	            },
	            reconhecerDocumentos: {
	                label: 'Reconhecer Documento(s)',
	                action: scope.reconhecerDocumentos
	            },
	            reentregarDocumentos: {
	                label: 'Reentregar Documento(s)',
	                action: scope.reentregarDocumentos
	            }
	        };

	        scope.itensEntrada = {
	            registrarEntrada: {
	                label: 'Registrar Entrada',
	                action: scope.registrarEntrada
	            },
	            desfazerEntrada: {
	                label: 'Desfazer Entrada',
	                action: scope.desfazerEntrada
	            }
	        };
		}

		function getDefaults(scope, attr) {
			scope.downloadXml = getFunctionMsg(attr.downloadXml, 'Download de XML');
			scope.downloadDanfe = getFunctionMsg(attr.downloadDanfe, 'Download de DANFe');
			scope.manifestar = getFunctionMsg(attr.manifestar, 'Manifesto do Destinatário');
			scope.reconsultar = getFunctionMsg(attr.reconsultar, 'Reconsultar NFe');
			scope.downloadDacce = getFunctionMsg(attr.downloadDacce, 'Download de DACCe');
			scope.revalidarXml = getFunctionMsg(attr.revalidarXml, 'Revalidar Arquivo XML');
			scope.diagnosticoFiscal = getFunctionMsg(attr.diagnosticoFiscal, 'Diagnóstico Fiscal');
			scope.reconhecerDocumentos = getFunctionMsg(attr.reconhecerDocumentos, 'Reconhecer Documento(s)');
			scope.reentregarDocumentos = getFunctionMsg(attr.reentregarDocumentos, 'Reentregar Documento(s)');
			scope.registrarEntrada = getFunctionMsg(attr.registrarEntrada, 'Registrar Entrada');
			scope.desfazerEntrada = getFunctionMsg(attr.desfazerEntrada, 'Defazer Entrada');
		}

		function getFunctionMsg(value, msg) {
			return value || function() {
				MsgUtil.msg(msg);
			};
		}
	}
})();
