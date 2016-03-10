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
            templateUrl: 'js/directives/oobj-autocomplete/oobj-autocomplete.html',
            scope: {
                id: '@?',
                ngModel: '=',
                colspan: '@?',
                ngBlur: '&',
                getItems: '&',
                ngChange: '&',
                itemLabel: '@?',
                itemValue: '@?',
                label: '@?',
                showLabel: '=?',
                ngRequired: '=?',
                ngDisabled: '=?',
                ngReadonly: '=?',
                maxlength: '@?',
                placeholder: '@?',
                toUpper: '=?',
                toLower: '=?',
                // options: lg (large), md (medium), sm (small)
                inputSize: '@?'
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