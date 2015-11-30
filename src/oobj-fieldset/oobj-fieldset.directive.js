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
        var directive = {
            restrict: 'EA',
            transclude: true,
            templateUrl: 'oobj-fieldset/oobj-fieldset.html',
            scope: {
                id: '@',
                colspan: '@',
                title: '@'
            }
        };

        return directive;
    }
})();
