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
        var directive = {
            require: ['^ngModel', '^id'],
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

        return directive;

        function compile(tElement, tAttrs) {
            return {
                pre: function preLink(scope, element, attrs) {
                    if (angular.isUndefined(scope.itemLabel)) {
                        scope.itemLabel = 'descricao';
                    }

                    if (angular.isUndefined(scope.itemId)) {
                        scope.itemId = 'id';
                    }

                    if (angular.isUndefined(scope.inputSize)) {
                        scope.inputSize = 'sm';
                    }

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
        }
    }
})();
