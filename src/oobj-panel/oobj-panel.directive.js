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
        return {
            restrict: 'EA',
            templateUrl: 'js/directives/oobj-panel/oobj-panel.html',
            transclude: true,
            scope: {
                title: '@?',
                footer: '@?',
                colspan: '@?',
                panelClass: '@?'
            },
            link: link
        };

        function link(scope) {
            scope.panelClass = scope.panelClass || 'panel-default';
        }
    }
})();
