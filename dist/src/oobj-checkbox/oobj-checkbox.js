/**
 * Created by Leonardo on 10/5/2015.
 */
(function() {
    'use strict';

    angular.module('oobjDirectives')
        .directive('oobjCheckbox', oobjCheckbox);

    oobjCheckbox.$inject = [];

    function oobjCheckbox() {
        var directive = {
            require: 'ngModel',
            restrict: 'EA',
            templateUrl: 'oobj-checkbox/oobj-checkbox.html',
            scope: {
                id: '@',
                ngModel: '=?',
                colspan: '@',
                label: '@',
                inline: '='
            },
            link: link
        };

        return directive;

        function link(scope, element, attrs, ngModelCtrl) {
            if (scope.inline == true) {
                scope.checkboxClass = 'checkbox-inline';
            }

            if (angular.isDefined(scope.colspan)) {
                var classes = scope.colspan;

                if (angular.isDefined(scope.checkboxClass)) {
                    classes = classes + ' ' + scope.checkboxClass;
                }

                scope.checkboxClass = classes;
            }
        }
    }
})();