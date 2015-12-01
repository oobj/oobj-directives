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
                type: '=filterBy',
            },
            link: link
        };

        return directive;
        
        function link(scope, element, attrs) {
        	if (angular.isUndefined(scope.type) || scope.type == 'todos') {
        		scope.type = '';
        	}
        }
    }

})();