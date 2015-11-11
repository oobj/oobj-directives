/**
 * Created by ATILLA on 30/09/2015.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjPanel', oobjPanel);

    /** @ngInject */
    function oobjPanel() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'oobj-panel/oobj-panel.html',
            transclude: true,
            scope: {
                title: '@',
                footer: '@',
                colspan: '@',
                panelClass: '@',
                panelStyle: '@'
            },
            link: link
        };

        return directive;

        function link(scope, element, attrs, ngModelCtrl) {
            if (angular.isUndefined(scope.panelClass)) {
                scope.panelClass = 'panel-default';
            }
        }
    }
})();
