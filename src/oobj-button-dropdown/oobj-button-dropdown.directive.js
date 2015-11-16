/**
 * Created by ATILLA on 02/10/2015.
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
                provider: '='
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
                }
            }
        }
    }
})();

