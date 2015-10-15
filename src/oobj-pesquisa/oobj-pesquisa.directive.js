/**
 * Created by ATILLA on 08/10/2015.
 */
(function() {
    'use strict';

    angular.module('oobj-directives')
        .directive('oobjPesquisa', oobjPesquisa);

    /* @ngInject */
    function oobjPesquisa() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'oobj-pesquisa/oobj-pesquisa.html',
            transclude: true,
            scope: {
                title: '@',
                vm: '=',
                footer: '@',
                showBtnPesquisaAvancada: '=',
                showBtnLimpar: '=',
                showBtnPesquisar: '=',
                gridOptions: '='
            },
            link: link
        };

        return directive;

        function link(scope, element, attrs, ngModelCtrl) {

            if (angular.isUndefined(scope.showBtnPesquisaAvancada)) {
                scope.showBtnPesquisaAvancada = true;
            }

            if (angular.isUndefined(scope.showBtnPesquisar)) {
                scope.showBtnPesquisar = true;
            }

            if (angular.isUndefined(scope.showBtnLimpar)) {
                scope.showBtnLimpar = false;
            }
        }
    }
})();

