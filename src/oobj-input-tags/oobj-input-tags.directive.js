/**
 * Directiva <oobj-input-tags></oobj-input-tags>
 *
 * Created by ATILLA on 04/03/2016.
 */
(function() {
    'use strict';

    angular.module('oobj-directives')
        .directive('oobjInputTags', oobjInputTags);

    /** @ngInject */
    function oobjInputTags() {
        return {
            require: 'ngModel',
            templateUrl: 'js/directives/oobj-input-tags/oobj-input-tags.html',
            scope: {
                ngModel: '=',
                colspan: '@?',
                provider: '=?',
                label: '@?',
                showLabel: '=?',
                addOnEnter: '=?',
                addOnSpace: '=?',
                addOnComma: '=?',
                addOnBlur: '=?',
                addOnPaste: '=?',
                tagsPattern: '@?',
                loadOnEmpty: '=?',
                loadOnFocus: '=?',
                ngBlur: '&?',
                ngChange: '&?',
                ngRequired: '=?',
                ngDisabled: '=?',
                ngReadonly: '=?',
                maxlength: '@?',
                minlength: '@?',
                placeholder: '@?'
            },
            compile: compile
        };

        function compile() {
            var STRING_DOES_NOT_MATCH = -1;
            var MIN_LENGHT = 1;

            return {
                pre: preLink,
                post: postLink
            };

            function preLink(scope) {
                scope.placeholder = scope.placeholder || 'Adicione tags separadas por vírgula';
                scope.inputSize = scope.inputSize || 'sm';
                scope.minlength = scope.minlength || MIN_LENGHT;

                if (angular.isUndefined(scope.addOnEnter)) {
                    scope.addOnEnter = scope.provider ? false : true;
                }

                definirAtributosTrueDefault(scope);
                definirAtributosFalseDefault(scope);
            }

            function postLink(scope, element) {
                /**
                 * Procura no provider por itens que contenham a query informada
                 *
                 * @param query
                 *          String a pesquisar dentro do provider
                 * @returns {Array}
                 *          Itens encontrados
                 */
                scope.getTags = function(query) {
                    var filtrados = [];

                    scope.provider.forEach(function(item) {
                        if (item.indexOf(query) > STRING_DOES_NOT_MATCH) {
                            filtrados.push(item);
                        }
                    });

                    return filtrados;
                };

                /**
                 * Limpa o ngModel e seta o focus no input
                 */
                scope.limpar = function() {
                    scope.ngModel = null;
                    element.find('input').focus();
                };
            }

            /**
             * Define as variáveis que são true por padrão
             *
             * @param scope
             *          Escopo da directiva
             */
            function definirAtributosTrueDefault(scope) {
                if (angular.isUndefined(scope.addOnSpace)) {
                    scope.addOnSpace = true;
                }

                if (angular.isUndefined(scope.addOnComma)) {
                    scope.addOnComma = true;
                }

                if (angular.isUndefined(scope.addOnBlur)) {
                    scope.addOnBlur = true;
                }

                if (angular.isUndefined(scope.addOnPaste)) {
                    scope.addOnPaste = true;
                }
            }

            /**
             * Define as variáveis que são false por padrão
             *
             * @param scope
             *          Escopo da directiva
             */
            function definirAtributosFalseDefault(scope) {
                if (angular.isUndefined(scope.loadOnEmpty)) {
                    scope.loadOnEmpty = false;
                }

                if (angular.isUndefined(scope.loadOnFocus)) {
                    scope.loadOnFocus = false;
                }
            }
        }
    }
})();