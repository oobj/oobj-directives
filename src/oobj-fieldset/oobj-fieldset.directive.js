/**
 * Created by ATILLA on 05/11/2015.
 */
(function () {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjFieldset', oobjFieldset);

    /** @ngInject */
    function oobjFieldset() {
        return {
            restrict: 'EA',
            transclude: true,
            templateUrl: 'oobj-fieldset/oobj-fieldset.html',
            scope: {
                id: '@',
                colspan: '@',
                title: '@'
            }
        };
    }
})();
