/**
 * Created by ATILLA on 02/10/2015.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjGrid', oobjGrid);

    /** @ngInject */
    function oobjGrid() {
        return {
            restrict: 'EA',
            templateUrl: 'oobj-grid/oobj-grid.html',
            scope: {
                title: '@',
                data: '=',
                colspan: '@',
                footer: '@',
                gridOptions: '=',
                getHeight: '&'
            },
            compile: compile
        };

        function compile() {
            return {
                pre: function preLink(scope, element, attrs) {
                    scope.language = 'pt-br';

                    if (!scope.gridOptions) {
                        scope.gridOptions = {};
                    }

                    scope.gridStyle = {};

                    if (attrs.width) {
                        scope.gridStyle.width = attrs.width;
                    }

                    if (attrs.height) {
                        scope.gridStyle.height = attrs.height;
                    }

                    if (scope.data) {
                        scope.gridOptions.data = scope.data;
                    }

                    scope.getHeight = function() {
                        var rowHeight = 45;
                        return {
                            height: (scope.gridOptions.data.length * rowHeight) + 'px'
                        };
                    };
                }
            };
        }
    }
})();
