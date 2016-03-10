/**
 * Created by Leonardo on 10/5/2015.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjFooter', oobjFooter);

    /** @ngInject */
    function oobjFooter() {
        return {
            restrict: 'EA',
            templateUrl: 'js/directives/oobj-footer/oobj-footer.html',
            scope: {
                version: '@?',
                generatedData: '@?',
                year: '@?'
            },
            link: link
        };

        function link(scope) {
            scope.version = '0.0.1';
            scope.generatedData = new Date();
            scope.year = new Date();
        }
    }
})();