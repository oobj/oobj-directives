/**
 * Created by ATILLA on 02/10/2015.
 */
(function() {
    'use strict';

    angular.module('oobj-directives')
        .directive('oobjButton', oobjButton);

    /* @ngInject */
    function oobjButton() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'oobj-button/oobj-button.html',
            scope: {
                label: '@',
                btnClass: '@',
                btnStyle: '@',
                icon: '@',
                colspan: '@',
                paddingLeft: '='
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

                    if (angular.isUndefined(scope.btnStyle)) {
                        scope.btnStyle = 'padding-right: 6px;';
                    }

                    if (scope.paddingLeft === true) {
                        scope.btnStyle = 'padding-left: 6px;';
                    }
                }
            }
        }
    }
})();

