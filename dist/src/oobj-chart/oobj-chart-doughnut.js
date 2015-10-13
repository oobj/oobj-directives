/**
 * Created by Leonardo on 10/9/2015.
 */
(function() {
    'use strict';

    angular.module('oobjDirectives')
        .directive('oobjChartDoughnut', oobjChartDoughnut);

    oobjChartDoughnut.$inject = [];

    function oobjChartDoughnut() {

        return {
            require: 'ngModel',
            restrict: 'EA',
            templateUrl: 'oobj-chart/oobj-chart-doughnut.html',
            scope: {
                id: '@',
                ngModel: '=?',
                colspan: '@',
                title: '@',
                chartId: '@'
            }
        };

    }
})();