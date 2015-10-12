/**
 * Created by Leonardo on 10/9/2015.
 */
(function() {
    'use strict';

    angular.module('oobjDirectives')
        .directive('oobjChartRadar', oobjChartRadar);

    oobjChartRadar.$inject = [];

    function oobjChartRadar() {

        return {
            require: 'ngModel',
            restrict: 'EA',
            templateUrl: 'scripts/directives/oobj-chart/oobj-chart-radar.html',
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