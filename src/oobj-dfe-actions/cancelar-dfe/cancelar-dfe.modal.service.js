/**
 * Service do modal de cancelamento de DFe
 *
 * Created by ATILLA on 25/02/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .service('CancelarDFeModalService', CancelarDFeModalService);

    /** @ngInject */
    function CancelarDFeModalService($log, $q) {
        return {
            registrarEvento: registrarEvento
        };

        /**
         * Registra um evento de cancelamento
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
    CancelarDFeModalService.$inject = ['$log', '$q'];
})();
