/**
 * Created by ATILLA on 09/10/2015.
 */
(function() {
    'use strict';

    angular.module('oobjDirectives')
        .directive('oobjCrud', oobjCrud);

    oobjCrud.$inject = [];

    function oobjCrud() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'scripts/directives/oobj-crud/oobj-crud.html',
            transclude: true,
            scope: {
                title: '@',
                vm: '=',
                footer: '@',
                showBtnSalvar: '=',
                showBtnLimpar: '=',
                showBtnExcluir: '=',
                showBtnOnBottom: '=',
                showBtnOnTop: '='
            },
            link: link
        };

        return directive;

        function link(scope, element, attrs, ngModelCtrl) {
            if (angular.isUndefined(scope.showBtnSalvar)) {
                scope.showBtnSalvar = true;
            }

            if (angular.isUndefined(scope.showBtnLimpar)) {
                scope.showBtnLimpar = true;
            }

            if (angular.isUndefined(scope.showBtnLimpar)) {
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