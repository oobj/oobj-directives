/**
 * Created by ATILLA on 06/10/2015.
 */
(function() {
    'use strict';

    angular.module('oobjDirectives')
        .directive('oobjAutocomplete', oobjAutocomplete);

    oobjAutocomplete.$inject = [];

    function oobjAutocomplete() {
        var directive = {
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

        return directive;

        function link(scope, element, attrs, ngModelCtrl) {
            scope.limpar = function() {
                scope.ngModel = null;
            }
        }

    }
})();