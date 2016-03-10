/**
 * Service do modal de enviar NFe por email
 *
 * Created by ATILLA on 25/02/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .service('EnviarEmailModalService', EnviarEmailModalService);

    /** @ngInject */
    function EnviarEmailModalService($log, $q) {
        return {
            enviarPorEmail: enviarPorEmail
        };

        /**
         * Envia os documentos fiscais por email
         *
         * @param email
         *          Objeto com os detalhes do email, incluindo anexos
         */
        function enviarPorEmail(email) {
            return $q(function(resolve, reject) {
                try {
                    $log.debug(email);
                    resolve('Email enviado com sucesso!');
                } catch (err) {
                    reject('Houve um problema ao enviar o(s) documento(s) por e-mail:\n' + err);
                }
            });
        }
    }
    EnviarEmailModalService.$inject = ['$log', '$q'];
})();
