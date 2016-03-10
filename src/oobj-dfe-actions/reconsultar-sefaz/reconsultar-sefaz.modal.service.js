/**
 * Service responsável por consultar a API para reconsultar na sefaz
 *
 * Created by ATILLA on 09/03/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .service('ReconsultarSefazModalService', ReconsultarSefazModalService);

    /** @ngInject */
    function ReconsultarSefazModalService($log, $q) {
        return {
            reconsultar: reconsultar
        };

        /**
         * Reconhece dos documentos na alicação
         *
         * @param dfe
         *          Documentos a serem reconhecidos
         */
        function reconsultar(dfe) {
            return $q(function(resolve, reject) {
                try {
                    $log.debug(dfe);
                    resolve('Documento(s) reconsultados(s) com cucesso!.');
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
    ReconsultarSefazModalService.$inject = ['$log', '$q'];
})();
