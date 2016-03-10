/**
 * Service responsável por consultar a API para reprocessar documentos
 *
 * Created by ATILLA on 09/03/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .service('ReprocessarModalService', ReprocessarModalService);

    /** @ngInject */
    function ReprocessarModalService($log, $q) {
        return {
            reprocessar: reprocessar
        };

        /**
         * Reprocessa os documentos
         *
         * @param dfe
         *          Documentos a serem reprocessados
         */
        function reprocessar(dfe) {
            return $q(function(resolve, reject) {
                try {
                    $log.debug(dfe);
                    resolve('Arquivo(s) Reprocessado(s) com sucesso! ' +
                        'Faça uma nova consulta para visualizar o status atualizado. ' +
                        'Você pode também reconsultar o(s) status desse(s) documento(s) na Sefaz.');
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
    ReprocessarModalService.$inject = ['$log', '$q'];
})();
