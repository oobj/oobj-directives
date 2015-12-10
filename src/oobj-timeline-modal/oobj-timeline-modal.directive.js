/**
 * Created by Renato Borges on 27/11/2015.
 */
(function() {
    'use strict';

    angular
    	.module('oobj-directives')
        .directive('oobjTimelineModal', oobjTimelineModal);

    /* @ngInject */
    function oobjTimelineModal() {
        var directive = {
            restrict: 'EA',
            transclude: true,
            templateUrl: 'oobj-timeline-modal/oobj-timeline-modal.html',
            scope: {
                dfe: '=',
                items: '='
            },
            link: link
        };

        return directive;
        
        function link(scope, element, attrs) {
        	scope.type = 'todos';
        }
        
    }
    
})();