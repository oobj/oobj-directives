/**
 * Created by ATILLA on 09/10/2015.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjCrud', oobjCrud);

    /** @ngInject */
    function oobjCrud() {
        return {
            templateUrl: 'js/directives/oobj-crud/oobj-crud.html',
            transclude: true,
            scope: {
                vm: '=?',
                title: '@?',
                footer: '@?',
                showBtnSalvar: '=?',
                showBtnLimpar: '=?',
                showBtnExcluir: '=?',
                showBtnOnTop: '=?',
                showBtnOnBottom: '=?'
            },
            link: link
        };

        function link(scope) {
            if (angular.isUndefined(scope.showBtnSalvar)) {
                scope.showBtnSalvar = true;
            }

            if (angular.isUndefined(scope.showBtnLimpar)) {
                scope.showBtnLimpar = true;
            }

            if (angular.isUndefined(scope.showBtnExcluir)) {
                scope.showBtnExcluir = false;
            }

            if (angular.isUndefined(scope.showBtnOnBottom)) {
                scope.showBtnOnBottom = true;
            }

            if (angular.isUndefined(scope.showBtnOnTop)) {
                scope.showBtnOnTop = false;
            }
        }
    }
})();
