/**
 * Service responsável por consultar a API para reconhecer os documentos
 *
 * Created by ATILLA on 09/03/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .service('ReconhecerDocumentosModalService', ReconhecerDocumentosModalService);

    /** @ngInject */
    function ReconhecerDocumentosModalService($log, $q) {
        return {
            reconhecer: reconhecer
        };

        /**
         * Reconhece dos documentos na alicação
         *
         * @param dfe
         *          Documentos a serem reconhecidos
         */
        function reconhecer(dfe) {
            return $q(function(resolve, reject) {
                try {
                    $log.debug(dfe);
                    resolve('Documento(s) reconhecido(s) com cucesso!.');
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
    ReconhecerDocumentosModalService.$inject = ['$log', '$q'];
})();
