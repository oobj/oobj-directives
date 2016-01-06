/**
 * Created by ATILLA on 24/11/2015.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjMultiselect', oobjMultiselect);

    /** @ngInject */
    function oobjMultiselect() {
        return {
            require: 'ngModel',
            restrict: 'EA',
            templateUrl: 'oobj-multiselect/oobj-multiselect.html',
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
                itemId: '@',
                inputSize: '@'
            },
            compile: compile
        };

        function compile() {
            return {
                pre: function preLink(scope, element) {
                    scope.itemLabel = scope.itemLabel || 'descricao';
                    scope.itemId = scope.itemId || 'id';
                    scope.inputSize = scope.inputSize || 'sm';

                    bindSelect(scope, element);
                }
            };
        }

        function bindSelect(scope, element) {
            var select = element.find('select');

            angular.forEach(scope.provider, function(value) {
                select.append(
                    angular.element('<option></option>')
                        .attr('value', value[scope.itemId])
                        .text(value[scope.itemLabel])
                );
            });

            select.selectpicker();
        }
    }
})();
