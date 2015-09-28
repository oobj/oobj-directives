(function() {
    'use strict';

    angular.module('oobjDirectives')
        .directive('oobjInputText', oobjInputText);

    oobjInputText.$inject = [];

    function oobjInputText() {

        var directive = {
            require: 'ngModel',
            restrict: 'EA',
            templateUrl: 'oobj-directives/oobjInputText/oobjInputText.html',
            transclude: false,
            scope: {
                id: '@',
                ngModel: '=?',
                colspan: '@',
                type: '@',
                label: '@',
                showLabel: '=?',
                ngRequired: '=?',
                ngChange: '&',
                ngKeyup: '&',
                ngKeydown: '&',
                ngBlur: '&',
                ngDisabled: '=?',
                ngReadonly: '=?',
                maxlength: '@',
                max: '@',
                min: '@',
                mask: '@',
                removeMask: '=?',
                placeholder: '@',
                autofocus: '=?',
                currency: '=?',
                toUpper: '=?',
                toLower: '=?'
            },
            link: link
        };

        return directive;

        function link(scope, element, attrs, ngModelCtrl) {

        }
    }
})();

