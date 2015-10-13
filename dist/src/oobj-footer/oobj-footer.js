/**
 * Created by Leonardo on 10/5/2015.
 */
(function() {
    'use strict';

    angular.module('oobjDirectives')
        .directive('oobjFooter', oobjFooter);

    oobjFooter.$inject = [];

    function oobjFooter() {
        return {
            restrict: 'EA',
            templateUrl: 'oobj-footer/oobj-footer.html',
            scope: {
                version: '@?',
                generatedData: '@?',
                year: '@'
            },
            link: link
        };

        function link(scope, elements, attr, ngModelCtrl) {
            scope.version = '0.0.1';
            scope.generatedData = new Date();
            scope.year = new Date();
        }
    }

})();