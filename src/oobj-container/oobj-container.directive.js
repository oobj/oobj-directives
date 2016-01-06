/**
 * Created by ATILLA on 30/09/2015.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjContainer', oobjContainer);

    /** @ngInject */
    function oobjContainer() {
        return {
            restrict: 'EA',
            templateUrl: 'oobj-container/oobj-container.html',
            transclude: true,
            scope: {
                title: '@'
            },
            link: link
        };

        function link(scope, element, attrs, ngModelCtrl) {

        }
    }
})();
