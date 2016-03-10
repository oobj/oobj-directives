/**
 * Created by Leonardo on 10/5/2015.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjRadio', oobjRadio);

    /** @ngInject */
    function oobjRadio() {
         return {
            require: 'ngModel',
            restrict: 'EA',
            templateUrl: 'js/directives/oobj-radio/oobj-radio.html',
            scope: {
                id: '@?',
                label: '@?',
                ngModel: '=',
                inline: '=?',
                optionName: '@?',
                optionValue: '@?',
                colspan: '@?',
                labelBold: '=?'
            },
            link: link
        };

        function link(scope) {
            if (scope.inline === true) {
                scope.radioClass = 'radio-inline';
            }

            if (scope.colspan) {
                var classes = scope.colspan;

                if (scope.radioClass) {
                    classes = classes + ' ' + scope.radioClass;
                }

                scope.radioClass = classes;
            }
        }
    }
})();
