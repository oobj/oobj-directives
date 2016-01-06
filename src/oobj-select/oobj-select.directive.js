/**
 * Created by ATILLA on 19/11/2015.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjSelect', oobjSelect);

    /** @ngInject */
    function oobjSelect() {
        return {
            require: 'ngModel',
            restrict: 'EA',
            templateUrl: 'oobj-select/oobj-select.html',
            scope: {
                id: '@',
                ngModel: '=',
                colspan: '@',
                label: '@',
                showLabel: '=?',
                ngRequired: '=',
                onOpen: '&',
                provider: '=',
                itemLabel: '@',
                inputSize: '@'
            },
            compile: compile
        };

        function compile() {
            return {
                pre: function preLink(scope) {
                    scope.itemLabel = scope.itemLabel || 'descricao';
                    scope.inputSize = scope.inputSize || 'sm';
                }
            };
        }
    }
})();