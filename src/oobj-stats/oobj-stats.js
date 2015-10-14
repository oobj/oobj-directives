(function() {
    'use strict';

    angular.module('oobj-directives')
        .directive('oobjStats', function () {
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
        });
})();
