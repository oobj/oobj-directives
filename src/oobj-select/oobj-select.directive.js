/**
 * Created by ATILLA on 05/10/2015.
 */
(function() {
    'use strict';

    angular.module('oobj-directives')
        .directive('oobjSelect', oobjSelect);

    /** @ngInject */
    function oobjSelect() {
        var directive = {
            require: 'ngModel',
            restrict: 'EA',
            templateUrl: 'oobj-select/oobj-select.html',
            scope: {
                id: '@',
                ngModel: '=',
                colspan: '@',
                label: '@',
                showLabel: '=?',
                ngRequired: '=',
                placeholder: '@',
                onOpen: '&',
                provider: '=',
                itemLabel: '@',
                itemValue: '@',
                showEmptyOption: '=',
                inputSize: '@'
            },
            compile: compile
        };

        return directive;

        function compile(tElement, tAttrs) {
            return {
                pre: function preLink(scope, element, attrs) {
                    scope.selectStyle = {};

                    if (angular.isUndefined(scope.inputSize)) {
                        scope.inputSize = 'sm';
                    }

                    if (angular.isUndefined(scope.showEmptyOption)) {
                        scope.emptyOption = false;
                    }

                    if (angular.isDefined(attrs.width)) {
                        scope.selectStyle.width = attrs.width;
                    }

                    if (angular.isDefined(attrs.height)) {
                        scope.selectStyle.height = attrs.height;
                    }
                }
            }
        }
    }
})();