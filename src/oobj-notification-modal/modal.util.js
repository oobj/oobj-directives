/**
 * Created by ATILLA on 29/01/2016
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .service('ModalUtil', ModalUtil);

    ModalUtil.$inject = ['$uibModal'];

    /** @ngInject */
    function ModalUtil($uibModal) {
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

        function msgInfo(message, title, tooltip) {
            title = title || 'Mensagem importante!';
            openModal(message, title, tooltip, 'info');
        }

        function msgSuccess(message, title, tooltip) {
            title = title || 'Tudo certo!';
            openModal(message, title, tooltip, 'success');
        }

        function msgWarning(message, title, tooltip) {
            title = title || 'Atenção!';
            openModal(message, title, tooltip, 'warning');
        }

        function msgError(message, title, tooltip) {
            title = title || 'Ops, algo deu errado!';
            openModal(message, title, tooltip, 'error');
        }

        function openModal(message, title, tooltip, type) {
            $uibModal.open({
                backdropClass: 'oobj-notification-modal-background',
                controller: 'OobjNotificationModalController',
                controllerAs: 'vm',
                templateUrl: 'js/directives/oobj-notification-modal/oobj-notification.modal.html',
                resolve: {
                    message: function() { return message; },
                    title: function() { return title; },
                    tooltip: function() { return tooltip; },
                    type: function() { return type; }
                }
            });
        }
    }
})();
