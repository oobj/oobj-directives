/**
 * Created by ATILLA on 02/10/2015.
 */
(function() {
    'use strict';

    angular.module('oobj-directives')
        .directive('oobjGrid', oobjGrid);

    /* @ngInject */
    function oobjGrid() {

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
            compile: compile
        };

        return directive;

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

                    if (angular.isDefined(scope.data)) {
                        scope.gridOptions.data = scope.data;
                    }
                }
            }
        }
    }
})();

