/**
 * Created by ATILLA on 06/10/2015.
 */
(function() {
    'use strict';

    angular.module('oobj-directives')
        .directive('oobjAutocomplete', oobjAutocomplete);

    /** @ngInject */
    function oobjAutocomplete() {
        return {
            require: 'ngModel',
            restrict: 'EA',
            templateUrl: 'oobj-autocomplete/oobj-autocomplete.html',
            scope: {
                id: '@',
                ngModel: '=?',
                colspan: '@',
                getItems: '&',
                itemLabel: '@',
                itemValue: '@',
                label: '@',
                showLabel: '=?',
                ngRequired: '=?',
                ngChange: '&',
                ngBlur: '&',
                ngDisabled: '=?',
                ngReadonly: '=?',
                maxlength: '@',
                placeholder: '@',
                toUpper: '=?',
                toLower: '=?',
                inputSize: '@' // options: lg (large), md (medium), sm (small)
            },
            link: link
        };

        function link(scope) {
            if (!scope.inputSize) {
                scope.inputSize = 'sm';
            }

            scope.limpar = function() {
                scope.ngModel = null;
            };
        }
    }
})();