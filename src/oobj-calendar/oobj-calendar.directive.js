/**
 * Diretiva de calendário que utiliza ui.bootstrap.datepicker.
 *
 * Created by Leonardo on 25/02/2016.
 */
(function() {
    'use strict';

    angular.module('oobj-directives')
        .directive('oobjCalendar', oobjCalendar);

    /** @ngInject */
    function oobjCalendar() {
        return {
            require: 'ngModel',
            templateUrl: 'js/directives/oobj-calendar/oobj-calendar.html',
            scope: {
                id: '@?',
                label: '@?',
                showLabel: '=?',
                colspan: '@?',
                tooltipMessage: '@?',
                // obrigatório ser um objeto do tipo Date do javascript
                ngModel: '=',
                ngClass: '=?',
                // padrão: dd/MM/yyyy
                pattern: '@?',
                type: '@?'
            },
            link: link
        };

        function link(scope) {
            scope.pattern = scope.pattern || 'dd/MM/yyyy hh:mm';

            // ui-mask utiliza o seguinte padrão:
            //  A Any letter.
            //  9 Any number.
            //  * Any letter or number.
            //  ? Make any part of the mask optional.
            // a regex a seguir muda as letras para o número 9 para seguir esse padrão de mascara
            //scope.mask = scope.pattern.replace(/\w/g, '9');
            scope.type = scope.type || 'text';
            scope.opened = false;

            scope.open = function() {
                scope.opened = !scope.opened;
            };

            scope.dateOptions = {
                showWeeks: false
            };
        }
    }
})();