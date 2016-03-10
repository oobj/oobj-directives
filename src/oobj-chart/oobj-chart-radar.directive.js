/**
 * Created by Leonardo on 10/9/2015.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjChartRadar', oobjChartRadar);

    /** @ngInject */
    function oobjChartRadar() {
        return {
            require: 'ngModel',
            restrict: 'EA',
            templateUrl: 'js/directives/oobj-chart/oobj-chart-radar.html',
            scope: {
                id: '@?',
                ngModel: '=',
                colspan: '@?',
                title: '@?',
                chartId: '@?'
            }
        };
    }
})();