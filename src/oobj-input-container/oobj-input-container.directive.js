/**
 * Created by ATILLA on 05/10/2015.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjInputContainer', oobjInputContainer);

    /** @ngInject */
    function oobjInputContainer() {
        return {
            restrict: 'EA',
            templateUrl: 'js/directives/oobj-input-container/oobj-input-container.html',
            transclude: true,
            scope: {
                colspan: '@?',
                label: '@?',
                showLabel: '=?'
            }
        };
    }
})();
