/**
 * Service responsável por consultar a API para diagnostico fiscal
 *
 * Created by ATILLA on 09/03/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .service('DiagnosticoFiscalModalService', DiagnosticoFiscalModalService);

    /** @ngInject */
    function DiagnosticoFiscalModalService($log, $q) {
        return {
            diagnosticar: diagnosticar
        };

        /**
         * Consulta o diagnóstico fiscal do documento no backend
         *
         * @param dfe
         *          Documentos para consultar o diagnostico
         */
        function diagnosticar(dfe) {
            return $q(function(resolve, reject) {
                try {
                    $log.debug(dfe);
                    resolve('Documento(s) diagnosticado(s) com sucesso!');
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
    DiagnosticoFiscalModalService.$inject = ['$log', '$q'];
})();
