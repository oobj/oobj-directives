/**
 * Service responsável por consultar a API para registrar entrada
 *
 * Created by ATILLA on 09/03/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .service('RegistrarEntradaModalService', RegistrarEntradaModalService);

    /** @ngInject */
    function RegistrarEntradaModalService($log, $q) {
        return {
            registrarEntrada: registrarEntrada
        };

        /**
         * Registra a entrada dos documentos
         *
         * @param dfe
         *          Documentos a serem registrados
         */
        function registrarEntrada(dfe) {
            return $q(function(resolve, reject) {
                try {
                    $log.debug(dfe);
                    resolve('Entrada registrada com sucesso!');
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
    RegistrarEntradaModalService.$inject = ['$log', '$q'];
})();
