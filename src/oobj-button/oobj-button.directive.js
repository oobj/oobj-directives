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
        var directive = {
            restrict: 'EA',
            templateUrl: 'oobj-button/oobj-button.html',
            scope: {
                label: '@',
                btnClass: '@',
                icon: '@',
                colspan: '@',
                paddingLeft: '@',
                paddingRight: '@'
            },
            compile: compile
        };

        return directive;

        function compile(tElement, tAttrs) {
            return {
                pre: function preLink(scope, element, attrs) {
                    if (angular.isUndefined(scope.btnClass)) {
                        scope.btnClass = 'btn-default';
                    }

                    if (angular.isUndefined(scope.paddingRight)) {
                        element.css('padding-right', '6px');
                    } else {
                        element.css('padding-right', scope.paddingRight);
                    }

                    if (angular.isDefined(scope.paddingLeft)) {
                        element.css('padding-left', scope.paddingLeft);
                    }
                }
            }
        }
    }
})();
