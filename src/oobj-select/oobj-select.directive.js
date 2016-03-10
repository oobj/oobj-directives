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
            templateUrl: 'js/directives/oobj-select/oobj-select.html',
            scope: {
                id: '@?',
                ngModel: '=',
                colspan: '@?',
                label: '@?',
                showLabel: '=?',
                ngRequired: '=?',
                onOpen: '&',
                provider: '=?',
                itemLabel: '@?',
                inputSize: '@?',
                itemId: '@?',
                maxSelected: '@?',
                search: '=?'
            },
            compile: compile
        };

        function compile() {
            return {
                pre: function preLink(scope, element) {
                    scope.itemId = scope.itemId || 'id';
                    scope.itemLabel = scope.itemLabel || 'descricao';
                    scope.inputSize = scope.inputSize || 'sm';

                    bindSelect(scope, element);
                },
                post: function postLink(scope, element) {
                    var button = element.find('button');

                    button.addClass('btn-' + scope.inputSize);
                    button.addClass('oobj-group-input-btn');
                    button.addClass('oobj-select');
                }
            };
        }

        function bindSelect(scope, element) {
            var select = element.find('select');

            // Verifica se o valor atribuido para o maxSelected é um número
            // Caso não seja um número, não terá restrições de quantidade máxima de seleção permitido
            // Essa flexibilidade permite o uso do componente para select single, select multiple limitado e ilimitado
            // Exemplos:
            //     <oobj-select max-selected="3" /> // permitira a seleção de no máximo 3 itens
            //     <oobj-select max-selected="*" /> // permitira a seleção de itens sem limitação
            //     <oobj-select />                  // permitira a seleção de apenas um item
            if (!isNaN(scope.maxSelected)) {
                select.attr('data-max-options', scope.maxSelected);
            }
            // O valor padrão para o máximo de seleção permitido é 1 (UM)
            // Para casos em que a seleção permitida é de apenas UM item, o select deixa de ser Multiple
            else {
                select.removeAttr('multiple');
            }

            if (scope.search !== false) {
                select.attr('data-live-search', true);
            }

            // watch the provider in case the array changes then updates the view
            scope.$watch('provider', function(newValue, oldValue) {
                angular.forEach(newValue, function(value) {
                    var content = value[scope.itemLabel] ? value[scope.itemLabel] : value;
                    select.append(
                        angular.element('<option></option>')
                            .attr('value', value[scope.itemId])
                            .text(content)
                    );
                });

                select.selectpicker('refresh');
            });

        }
    }
})();
