/**
 * Created by ATILLA on 20/10/2015.
 */
(function () {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjLogin', oobjLogin);

    /* @ngInject */
    function oobjLogin() {
        var directive = {
            link: link,
            restrict: 'EA',
            scope: {
                logo: '@',
                labelBtnLogin: '@',
                login: '&',
                msgForgotPassword: '@',
                msgNewUser: '@',
                forgotPassword: '&',
                newUser: '&'
            }
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }
})();
