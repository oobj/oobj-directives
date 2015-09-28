(function() {
    'use strict';

    angular.module('oobjDirectives')
            .directive('oobjInputText', oobjInputText);

    oobjInputText.$inject = ['$templateCache'];

    function oobjInputText($templateCache) {
        var directive = {
            require: 'ngModel',
            restrict: 'EA',
            templateUrl: $templateCache.get('oobjInputText.html'),
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

