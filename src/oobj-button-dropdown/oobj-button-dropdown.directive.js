/**
 * Created by ATILLA on 16/11/2015.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjButtonDropdown', oobjButtonDropdown);

    /** @ngInject */
    function oobjButtonDropdown() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'oobj-button-dropdown/oobj-button-dropdown.html',
            scope: {
                label: '@',
                btnClass: '@',
                icon: '@',
                colspan: '@',
                provider: '=',
                paddingRight: '@',
                paddingLeft: '@'
            },
            link: link,
            compile: compile
        };

        return directive;

        function link(scope, element, attrs, ngModelCtrl) {

        }

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

