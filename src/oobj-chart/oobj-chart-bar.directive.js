/**
 * Created by Leonardo on 10/9/2015.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjChartBar', oobjChartBar);

    function oobjChartBar() {
        return {
            require: 'ngModel',
            templateUrl: 'js/directives/oobj-chart/oobj-chart-bar.html',
            scope: {
                id: '@?',
                ngModel: '=',
                chartId: '@?',
                colspan: '@?',
                title: '@?',
                type: '@?'
            }
        };
    }

})();