/**
 * Created by ATILLA on 28/01/2016
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .controller('OobjNotificationModalController', OobjNotificationModalController);

    OobjNotificationModalController.$inject = ['$uibModalInstance', 'message', 'title', 'tooltip', 'type'];

    /** @ngInject */
    function OobjNotificationModalController($uibModalInstance, message, title, tooltip, type) {
        var vm = this;

        vm.message = message;
        vm.title = title;
        vm.tooltip = tooltip || null;
        vm.type = type;

        definirClasses();

        vm.close = function () {
            $uibModalInstance.close();
        };

        vm.ok = function () {
            $uibModalInstance.dismiss('ok');
        };

        /**
         * Define as classes CSS para serem usadas no modal, de acordo com o tipo (vm.type)
         */
        function definirClasses() {
            vm.btnClass = 'oobj-notification-modal-btn-ok ';

            if (vm.type === 'success') {
                vm.iconClass = 'fa-check oobj-notification-modal-header-success';
                vm.btnClass = vm.btnClass + 'btn-success';
            } else if (vm.type === 'error') {
                vm.iconClass = 'fa-times oobj-notification-modal-header-error';
                vm.btnClass = vm.btnClass + 'btn-danger';
            } else if (vm.type === 'warning') {
                vm.iconClass = 'fa-exclamation oobj-notification-modal-header-warning';
                vm.btnClass = vm.btnClass + 'btn-warning';
            } else {
                // default é info
                vm.iconClass = 'fa-info oobj-notification-modal-header-info';
                vm.btnClass = vm.btnClass + 'btn-primary';
            }
        }
    }
})();
