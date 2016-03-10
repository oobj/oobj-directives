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
        return {
            templateUrl: 'js/directives/oobj-button-dropdown/oobj-button-dropdown.html',
            scope: {
                icon: '@?',
                label: '@',
                provider: '=',
                colspan: '@?',
                btnClass: '@?',
                paddingLeft: '@?',
                paddingRight: '@?'
            },
            compile: compile
        };

        function compile() {
            return {
                pre: function(scope, element) {

                    scope.btnClass = scope.btnClass || 'btn-default';

                    if (scope.paddingRight) {
                        element.css('padding-right', scope.paddingRight);
                    } else {
                        element.css('padding-right', '6px');
                    }

                    if (scope.paddingLeft) {
                        element.css('padding-left', scope.paddingLeft);
                    }
                }
            };
        }
    }
})();

