(function() {
    'use strict';

    angular.module('oobj-directives')
        .directive('oobjStats', oobjStats);

    /* @ngInject */
    function oobjStats () {
        var directive = {
            templateUrl: 'oobj-stats/oobj-stats.html',
            restrict: 'E',
            replace: true,
            scope: {
                'model': '=',
                'comments': '@',
                'number': '@',
                'name': '@',
                'colour': '@',
                'details': '@',
                'type': '@',
                'goto': '@'
            }
        };

        return directive;
    }
})();
