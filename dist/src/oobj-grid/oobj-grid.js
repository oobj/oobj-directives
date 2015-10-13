/**
 * Created by ATILLA on 02/10/2015.
 */
(function() {
    'use strict';

    angular.module('oobjDirectives')
        .directive('oobjGrid', oobjGrid);

    oobjGrid.$inject = ['$interval', 'uiGridConstants'];

    function oobjGrid($interval, uiGridConstants) {

        var directive = {
            restrict: 'EA',
            templateUrl: 'oobj-grid/oobj-grid.html',
            scope: {
                title: '@',
                data: '=',
                colspan: '@',
                footer: '@',
                gridOptions: '='
            },
            link: link,
            compile: compile
        };

        return directive;

        function link(scope, element, attrs, ngModelCtrl) {

        }

        function compile(tElement, tAttrs) {
            return {
                pre: function preLink(scope, element, attrs) {
                    if (angular.isUndefined(scope.gridOptions)) {
                        scope.gridOptions = {};
                    }

                    scope.gridStyle = {};

                    if (angular.isDefined(attrs.width)) {
                        scope.gridStyle.width = attrs.width;
                    }

                    if (angular.isDefined(attrs.height)) {
                        scope.gridStyle.height = attrs.height;
                    }

                    if (!scope.data.length) {
                        scope.gridStyle.height = '60px';
                    }

                    if (angular.isDefined(scope.data)) {
                        scope.gridOptions.data = scope.data;
                    }
                }
            }
        }
    }
})();

