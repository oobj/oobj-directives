/**
 * Created by Leonardo on 08/10/2015.
 */
(function () {
    'use strict';

    angular
    	.module('oobj-directives')
        .directive('oobjTimeline', oobjTimeline);

    oobjTimeline.$inject = ['filterFilter'];
    
    /* @ngInject */
    function oobjTimeline(filterFilter) {

        var directive = {
            templateUrl: 'oobj-timeline/oobj-timeline.html',
            restrict: 'E',
            replace: true,
            scope: {
                provider: '=',
                colspan: '@',
                filter: '=filterBy'
            },
            link: link
        };

        return directive;
        
        function link(scope, element, attr) {
        	
        	// filter elements of the timeline by type whenever it changes
        	scope.$watch('filter', function(newType) {
        		
        		scope.items = filterFilter(scope.provider, function(item) {
            		if (newType === 'todos') {
            			return true;
            		} else {
            			return newType === item.type;
            		}
            	});
        		
        	});
        	
        }
    }

})();