(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjStats', oobjStats);

    /** @ngInject */
    function oobjStats () {
        return {
            templateUrl: 'js/directives/oobj-stats/oobj-stats.html',
            restrict: 'AE',
            replace: true,
            scope: {
                'model': '=?',
                'comments': '@?',
                'number': '@?',
                'name': '@?',
                'colour': '@?',
                'details': '@?',
                'type': '@?',
                'goto': '@?'
            }
        };
    }
})();
