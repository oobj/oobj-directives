/**
 * Created by Leonardo on 10/1/2015.
 */
(function () {
    'use strict';

    angular.module('oobjDirectives')
        .directive('oobjDatePicker', oobjDatePicker);

    oobjDatePicker.$inject = [];

    function oobjDatePicker() {

        var directive = {
            require: 'ngModel',
            restrict: 'EA',
            templateUrl: 'scripts/directives/oobj-date-picker/oobj-date-picker.html',
            scope: {
                id: '@',
                name: '@',
                ngModel: '=?',
                label: '@',
                showLabel: '@',
                colspan: '@',
                opts: '=',
                range: '=?',
                inputSize: '@'
            },
            link: link
        };

        function link(scope, elements, attr, ngModelCtrl) {
            scope.opts = {
                locale: {
                    format: "DD/MM/YYYY",
                    separator: " - ",
                    applyLabel: "OK",
                    cancelLabel: "Limpar",
                    fromLabel: "Entre",
                    toLabel: "E",
                    customRangeLabel: "Customizar",
                    daysOfWeek: [
                        "Dom",
                        "Seg",
                        "Ter",
                        "Qua",
                        "Qui",
                        "Sex",
                        "Sáb"
                    ],
                    monthNames: [
                        "Janeiro",
                        "Fevereiro",
                        "Março",
                        "Abril",
                        "Maio",
                        "Junho",
                        "Julho",
                        "Agosto",
                        "Setembro",
                        "Outubro",
                        "Novembro",
                        "Dezembro"
                    ],
                    firstDay: 1
                },
                ranges: {
                    'Hoje': [moment(), moment()],
                    'Ontem': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                    'Últimos 7 Dias': [moment().subtract(6, 'days'), moment()],
                    'Últimos 30 Dias': [moment().subtract(29, 'days'), moment()],
                    'Este Mês': [moment().startOf('month'), moment().endOf('month')],
                    'Mês Passado': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                },
                linkedCalendars: false,
                opens: "left",
                cancelClass: "btn-danger"
            };

            if (angular.isDefined(scope.range)) {
                scope.opts.singleDatePicker = false;
            } else {
                scope.opts.singleDatePicker = true;
            }
        }

        return directive;
    }
})();