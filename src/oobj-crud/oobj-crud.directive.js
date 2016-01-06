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
            restrict: 'EA',
            templateUrl: 'oobj-crud/oobj-crud.html',
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

        function link(scope) {
            if (!scope.showBtnSalvar) {
                scope.showBtnSalvar = true;
            }

            if (!scope.showBtnLimpar) {
                scope.showBtnLimpar = true;
            }

            if (!scope.showBtnExcluir) {
                scope.showBtnExcluir = false;
            }

            if (!scope.showBtnOnBottom) {
                scope.showBtnOnBottom = true;
            }

            if (!scope.showBtnOnTop) {
                scope.showBtnOnTop = false;
            }
        }
    }
})();