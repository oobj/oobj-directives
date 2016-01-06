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
            scope.showBtnPesquisaAvancada = scope.showBtnPesquisaAvancada || true;
            scope.showBtnPesquisar = scope.showBtnPesquisar || true;
            scope.showBtnLimpar = scope.showBtnLimpar || false;
            scope.showBtnOnBottom = scope.showBtnOnBottom || true;
            scope.showBtnOnTop = scope.showBtnOnTop || false;
        }
    }
})();
