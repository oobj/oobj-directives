/**
 * Created by ATILLA on 08/10/2015.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjSearch', oobjSearch);

    /** @ngInject */
    function oobjSearch() {
        return {
            restrict: 'EA',
            templateUrl: 'oobj-search/oobj-search.html',
            transclude: true,
            scope: {
                title: '@',
                vm: '=',
                footer: '@',
                showBtnPesquisaAvancada: '=',
                showBtnLimpar: '=',
                showBtnPesquisar: '=',
                gridOptions: '=',
                showBtnOnBottom: '=',
                showBtnOnTop: '='
            },
            link: link
        };

        function link(scope) {
            if (angular.isUndefined(scope.showBtnPesquisaAvancada)) {
                scope.showBtnPesquisaAvancada = true;
            }

            if (angular.isUndefined(scope.showBtnPesquisar)) {
                scope.showBtnPesquisar = true;
            }

            if (angular.isUndefined(scope.showBtnLimpar)) {
                scope.showBtnLimpar = false;
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
