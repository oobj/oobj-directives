/**
 * Created by ATILLA on 05/11/2015.
 */
(function () {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjFieldset', oobjFieldset);

    /** @ngInject */
    function oobjFieldset() {
        var directive = {
            link: link,
            compile: compile,
            restrict: 'EA',
            transclude: true,
            templateUrl: 'oobj-fieldset/oobj-fieldset.html',
            scope: {
                id: '@',
                colspan: '@',
                title: '@',
                titleStyle: '@',
                fieldsetStyle: '@'
            }
        };

        return directive;

        function link(scope, element, attrs) {

        }

        function compile(tElement, tAttrs) {
            return {
                pre: function preLink(scope, element, attrs) {
                    if (angular.isUndefined(scope.titleStyle)) {
                        scope.titleStyle = 'font-size: 11px; font-style: italic; color: #999;';
                    }
                }
            }
        }
    }
})();
