/**
 * Created by ATILLA on 05/10/2015.
 */
(function() {
    'use strict';

    angular.module('oobjDirectives')
        .directive('oobjInputContainer', oobjInputContainer);

    oobjInputContainer.$inject = [];

    function oobjInputContainer() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'scripts/directives/oobj-input-container/oobj-input-container.html',
            transclude: true,
            scope: {
                colspan: '@',
                label: '@',
                showLabel: '=?'
            },
            link: link
        };

        return directive;

        function link(scope, element, attrs, ngModelCtrl) {

        }
    }
})();
