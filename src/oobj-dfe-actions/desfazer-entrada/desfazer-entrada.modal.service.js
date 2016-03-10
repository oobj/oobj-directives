/**
 * Service responsável por consultar a API para desfazer a entrada
 *
 * Created by ATILLA on 09/03/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .service('DesfazerEntradaModalService', DesfazerEntradaModalService);

    /** @ngInject */
    function DesfazerEntradaModalService($log, $q) {
        return {
            desfazerEntrada: desfazerEntrada
        };

        /**
         * Desfaz a entrada registrada para o documento
         *
         * @param dfe
         *          Documentos com a entrada registrada
         */
        function desfazerEntrada(dfe) {
            return $q(function(resolve, reject) {
                try {
                    $log.debug(dfe);
                    resolve('Registro de Entrada removido com sucesso.');
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
    DesfazerEntradaModalService.$inject = ['$log', '$q'];
})();
