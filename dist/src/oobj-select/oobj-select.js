/**
 * Created by ATILLA on 05/10/2015.
 */
(function() {
    'use strict';

    angular.module('oobjDirectives')
        .directive('oobjSelect', oobjSelect);

    oobjSelect.$inject = [];

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
                itemValue: '@'
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
                    scope.selectStyle = {};

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