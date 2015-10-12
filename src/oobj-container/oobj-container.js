/**
 * Created by ATILLA on 30/09/2015.
 */
(function() {
    'use strict';

    angular.module('oobjDirectives')
            .directive('oobjContainer', oobjContainer);

    oobjContainer.$inject = [];

    function oobjContainer() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'scripts/directives/oobj-container/oobj-container.html',
            transclude: true,
            scope: {
                title: '@'
            },
            link: link
        };

        return directive;

        function link(scope, element, attrs, ngModelCtrl) {

        }
    }
})();

