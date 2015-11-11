/**
 * Created by ATILLA on 30/09/2015.
 */
(function() {
    'use strict';

    angular.module('oobj-directives')
            .directive('oobjPanel', oobjPanel);

    /* @ngInject */
    function oobjPanel() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'oobj-panel/oobj-panel.html',
            transclude: true,
            scope: {
                title: '@',
                footer: '@',
                colspan: '@',
                panelStyle: '@'
            },
            link: link
        };

        return directive;

        function link(scope, element, attrs, ngModelCtrl) {
            scope.panelClass = 'panel-default';

            if (angular.isDefined(scope.panelClass)) {
                scope.panelClass = 'panel-' + scope.panelClass;
            }

            if (angular.isUndefined(scope.panelStyle)) {
                scope.panelStyle = 'border: 1px solid #778485; border-radius: 0;';
            }
        }
    }
})();

