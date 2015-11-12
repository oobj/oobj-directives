/**
 * Created by Leonardo on 08/10/2015.
 */
(function () {
    'use strict';

    angular.module('oobj-directives')
        .directive('oobjTimeline', oobjTimeline);

    /* @ngInject */
    function oobjTimeline() {

        var directive = {
            templateUrl: 'oobj-timeline/oobj-timeline.html',
            restrict: 'E',
            replace: true,
            scope: {
                provider: '=',
                colspan: '@',
            },
            
        };

        return directive;
    }

})();