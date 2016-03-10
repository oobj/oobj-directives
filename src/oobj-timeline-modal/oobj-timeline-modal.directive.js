/**
 * Created by Renato Borges on 27/11/2015.
 */
(function () {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjTimelineModal', oobjTimelineModal);

    /** @ngInject */
    function oobjTimelineModal() {
        return {
            transclude: true,
            templateUrl: 'js/directives/oobj-timeline-modal/oobj-timeline-modal.html',
            scope: {
                dfe: '=?',
                items: '=?'
            },
            link: link
        };

        function link(scope) {
            scope.type = 'todos';
        }
    }
})();
