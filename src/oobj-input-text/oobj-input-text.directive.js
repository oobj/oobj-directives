/**
 * Created by ATILLA on 25/09/2015.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjInputText', oobjInputText);

    /** @ngInject */
    function oobjInputText() {
        return {
            require: 'ngModel',
            restrict: 'EA',
            templateUrl: 'js/directives/oobj-input-text/oobj-input-text.html',
            scope: {
                id: '@?',
                ngModel: '=',
                colspan: '@?',
                type: '@?',
                label: '@?',
                showLabel: '=?',
                ngRequired: '=?',
                ngChange: '&?',
                ngKeyup: '&?',
                ngKeydown: '&?',
                ngBlur: '&?',
                ngDisabled: '=?',
                ngReadonly: '=?',
                maxlength: '@?',
                max: '@?',
                min: '@?',
                mask: '@?',
                removeMask: '=?',
                placeholder: '@?',
                autofocus: '=?',
                currency: '=?',
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
