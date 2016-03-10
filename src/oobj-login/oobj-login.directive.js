/**
 * Created by ATILLA on 20/10/2015.
 */
(function () {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjLogin', oobjLogin);

    /** @ngInject */
    function oobjLogin() {
        return {
            restrict: 'EA',
            templateUrl: 'js/directives/oobj-login/oobj-login.html',
            scope: {
                logo: '@?',
                labelBtnLogin: '@?',
                login: '&',
                labelForgotPassword: '@?',
                labelNewUser: '@?',
                forgotPassword: '&',
                newUser: '&',
                username: '=?',
                password: '=?'
            }
        };

    }
})();
