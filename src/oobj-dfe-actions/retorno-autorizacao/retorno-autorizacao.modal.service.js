/**
 * Service responsável por consultar a API para gerar retorno de autorização
 *
 * Created by ATILLA on 09/03/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .service('RetornoAutorizacaoModalService', RetornoAutorizacaoModalService);

    /** @ngInject */
    function RetornoAutorizacaoModalService($log, $q) {
        return {
            gerarRetorno: gerarRetorno
        };

        /**
         * Gera retorno de autorização dos documentos
         *
         * @param dfe
         *          Documentos a gerar retorno de autorização
         */
        function gerarRetorno(dfe) {
            return $q(function(resolve, reject) {
                try {
                    $log.debug(dfe);
                    resolve('Retorno de Autorização do(s) Arquivo(s) Gerado(s) com sucesso! ' +
                        'Faça uma nova consulta para visualizar o status atualizado. ' +
                        'Você pode também reconsultar o(s) status desse(s) documento(s) na Sefaz.');
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
    RetornoAutorizacaoModalService.$inject = ['$log', '$q'];
})();
