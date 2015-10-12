/**
 * Created by ATILLA on 02/10/2015.
 */
(function() {
    'use strict';

    angular.module('oobjDirectives')
        .directive('oobjButton', oobjButton);

    oobjButton.$inject = [];

    function oobjButton() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'scripts/directives/oobj-button/oobj-button.html',
            scope: {
                label: '@',
                btnClass: '@',
                icon: '@',
                colspan: '@'
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
                    if (angular.isUndefined(attrs.width)) {
                        attrs.width = '150px';
                    }

                    if (angular.isUndefined(scope.btnClass)) {
                        scope.btnClass = 'btn-default';
                    }

                    scope.btnStyle = {};
                    scope.btnStyle.height = attrs.height;
                    scope.btnStyle.width = attrs.width;
                }
            }
        }
    }
})();

