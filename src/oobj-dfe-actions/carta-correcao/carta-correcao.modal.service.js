/**
 * Service do modal de carta de correção
 *
 * Created by ATILLA on 25/02/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .service('CartaCorrecaoModalService', CartaCorrecaoModalService);

    /** @ngInject */
    function CartaCorrecaoModalService($log, $q) {
        return {
            registrarEvento: registrarEvento
        };

        /**
         * Registra um evento de cartao de correção
         *
         * @param evento
         */
        function registrarEvento(evento) {
            return $q(function(resolve, reject) {
                try {
                    $log.debug(evento);
                    resolve('Evento registrado com sucesso!');
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
    CartaCorrecaoModalService.$inject = ['$log', '$q'];
})();
