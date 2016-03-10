/**
 * Created by ATILLA on 02/10/2015.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjButton', oobjButton);

    /** @ngInject */
    function oobjButton() {
        return {
            restrict: 'EA',
            templateUrl: 'js/directives/oobj-button/oobj-button.html',
            scope: {
                label: '@?',
                btnClass: '@?',
                icon: '@?',
                colspan: '@?',
                paddingLeft: '@?',
                paddingRight: '@?'
            },
            compile: compile
        };

        function compile() {
            return {
                pre: function(scope, element) {
                    scope.btnClass = scope.btnClass || 'btn-default';

                    if (!scope.paddingRight) {
                        element.css('padding-right', '6px');
                    } else {
                        element.css('padding-right', scope.paddingRight);
                    }

                    if (scope.paddingLeft) {
                        element.css('padding-left', scope.paddingLeft);
                    }
                }
            };
        }
    }
})();
