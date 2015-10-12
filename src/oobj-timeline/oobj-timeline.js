/**
 * Created by Leonardo on 08/10/2015.
 */
(function () {
    'use strict';

    angular.module('oobjDirectives')
        .directive('oobjTimeline', oobjTimeline);

    oobjTimeline.$inject = [];

    function oobjTimeline() {

        var directive = {
            templateUrl: 'scripts/directives/oobj-timeline/oobj-timeline.html',
            restrict: 'E',
            replace: true,
            scope: {
                provider: '=',
                colspan: '@'
            }
        };

        return directive;

    }

})();