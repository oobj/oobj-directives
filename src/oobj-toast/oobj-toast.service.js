/**
 * Popups toast para exibir mensagens/alertas para usuários.
 *
 * Created by Leonardo on 11/02/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .service('OobjToastService', OobjToastService);

    /** @ngInject */
    function OobjToastService(toastr, $log) {
        return {
            msg: msg,
            msgInfo: msgInfo,
            msgSuccess: msgSuccess,
            msgWarning: msgWarning,
            msgError: msgError
        };

        function msg(message) {
            msgInfo(message);
        }

        function msgInfo(message, title) {
            title = title || 'Info';
            toastr.info(message, title);
            $log.info(message);
        }

        function msgSuccess(message, title) {
            title = title || 'Sucesso';
            toastr.success(message, title);
            $log.log(title + ': ' + message);
        }

        function msgWarning(message, title) {
            title = title || 'Aviso';
            toastr.warning(message, title);
            $log.warn(message);
        }

        function msgError(message, title, exception) {
            title = title || 'Erro';
            toastr.error(message, title);
            $log.error(message + ' | ' + exception);
        }
    }
    OobjToastService.$inject = ['toastr', '$log'];
})();
