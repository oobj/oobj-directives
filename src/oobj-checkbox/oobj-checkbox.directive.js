/**
 * Created by Leonardo on 10/5/2015.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjCheckbox', oobjCheckbox);

    /** @ngInject */
    function oobjCheckbox() {
        return {
            restrict: 'EA',
            require: 'ngModel',
            templateUrl: 'js/directives/oobj-checkbox/oobj-checkbox.html',
            scope: {
                id: '@?',
                ngModel: '=',
                colspan: '@?',
                label: '@?',
                inline: '=?'
            },
            link: link
        };

        function link(scope) {
            if (scope.inline === true) {
                scope.checkboxClass = 'checkbox-inline';
            }

            if (scope.colspan) {
                var classes = scope.colspan;

                if (scope.checkboxClass) {
                    classes = classes + ' ' + scope.checkboxClass;
                }

                scope.checkboxClass = classes;
            }
        }
    }
})();