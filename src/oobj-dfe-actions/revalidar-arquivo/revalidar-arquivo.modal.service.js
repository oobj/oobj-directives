/**
 * Service responsável por consultar a API para revalidar arquivos
 *
 * Created by ATILLA on 09/03/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .service('RevalidarArquivoModalService', RevalidarArquivoModalService);

    /** @ngInject */
    function RevalidarArquivoModalService($log, $q) {
        return {
            revalidar: revalidar
        };

        /**
         * Revalida os arquivos recebidos
         *
         * @param dfe
         *          Documentos a serem revalidados
         */
        function revalidar(dfe) {
            return $q(function(resolve, reject) {
                try {
                    $log.debug(dfe);
                    resolve('Arquivo(s) Revalidado(s) com sucesso! Faça uma nova consulta para visualizar o ' +
                        'status atualizado. Você pode também reconsultar o(s) status desse(s) documento(s) na Sefaz.');
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
    RevalidarArquivoModalService.$inject = ['$log', '$q'];
})();
