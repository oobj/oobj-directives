/**
 * Created by Leonardo on 10/1/2015.
 */
(function () {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjDatePicker', oobjDatePicker);

    /** @ngInject */
    function oobjDatePicker() {
        var INCREMENT_TIME = 1;

        return {
            require: 'ngModel',
            restrict: 'EA',
            templateUrl: 'js/directives/oobj-date-picker/oobj-date-picker.html',
            scope: {
                id: '@?',
                name: '@?',
                value: '@?',
                ngModel: '=?',
                ngValue: '=?',
                label: '@?',
                showLabel: '@?',
                colspan: '@?',
                opts: '=?',
                range: '=?',
                time: '=?',
                timeIncrement: '@?',
                format: '@?',
                inputSize: '@?'
            },
            link: link
        };

        function link(scope, element) {
            scope.focusInput = function() {
                element.find('input').focus();
            };

            scope.format = scope.format || 'DD/MM/YYYY';

            if (!scope.time) {
                scope.time = false;
            }

            if (!scope.timeIncrement) {
                scope.timeIncrement = INCREMENT_TIME;
            }

            scope.opts = {
                timePicker: scope.time,
                timePickerIncrement: scope.timeIncrement,
                timePicker24Hour: true,
                showDropdowns: true,
                locale: getLocale(scope.format),
                linkedCalendars: false,
                opens: 'left',
                cancelClass: 'btn-danger'
            };

            if (scope.range === true) {
                scope.opts.singleDatePicker = false;
                scope.opts.ranges = getRanges();
            } else {
                scope.opts.singleDatePicker = true;
            }

            if (!scope.inputSize) {
                scope.inputSize = 'sm';
            }
        }

        function getDaysOfWeek() {
            return ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
        }

        function getMonthNames() {
            return ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro',
                    'Outubro', 'Novembro', 'Dezembro'];
        }

        function getRanges() {
            return {
                'Hoje': [moment(), moment()],
                'Ontem': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Últimos 7 Dias': [moment().subtract(6, 'days'), moment()],
                'Últimos 30 Dias': [moment().subtract(29, 'days'), moment()],
                'Este Mês': [moment().startOf('month'), moment().endOf('month')],
                'Mês Passado': [
                    moment().subtract(1, 'month').startOf('month'),
                    moment().subtract(1, 'month').endOf('month')
                ]
            };
        }

        function getLocale(format) {
            return {
                format: format,
                separator: ' - ',
                cancelLabel: 'Limpar',
                applyLabel: 'OK',
                fromLabel: 'Entre',
                toLabel: 'E',
                customRangeLabel: 'Personalizar',
                daysOfWeek: getDaysOfWeek(),
                monthNames: getMonthNames(),
                firstDay: 1
            };
        }
    }
})();
