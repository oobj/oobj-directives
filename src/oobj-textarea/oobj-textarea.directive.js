/**
 * Diretiva Oobj para o componente textarea do HTML.
 * Estiliza e atribui valores padrões para que a aplicação fique uniforme ao utilizar esse tipo de atributo.
 * Created by Leonardo on 02/02/2016.
 */
(function () {
    'use strict';

    angular.module('oobj-directives')
        .directive('oobjTextarea', oobjTextarea);

    /** @ngInject */
    function oobjTextarea() {
        return {
            restrict: 'AE',
            replace: true,
            templateUrl: 'js/directives/oobj-textarea/oobj-textarea.html',
            scope: {
                id: '@?',
                rows: '@?',
                label: '@?',
                title: '@?',
                showLabel: '=?',
                colspan: '@?',
                ngModel: '=?',
                tooltipMessage: '@?',
                ngRequired: '=?',
                ngReadonly: '=?',
                textareaClass: '@?',
                ngMaxlength: '@?',
                ngMinlength: '@?',
                placeholder: '@?',
                inputSize: '@?',
                showFilledChars: '=?'
            },
            link: link
        };

        function link(scope) {
            scope.title = scope.title || 'Oobj Textarea';

            if (angular.isUndefined(scope.showFilledChars)) {
                scope.showFilledChars = false;
            }
        }
    }
})();