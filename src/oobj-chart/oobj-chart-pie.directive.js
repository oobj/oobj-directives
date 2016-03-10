/**
 * Created by Leonardo on 10/9/2015.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjChartPie', oobjChartPie);

    /** @ngInject */
    function oobjChartPie() {
        return {
            require: 'ngModel',
            restrict: 'EA',
            templateUrl: 'js/directives/oobj-chart/oobj-chart-pie.html',
            scope: {
                id: '@?',
                ngModel: '=',
                colspan: '@?',
                title: '@?'
            }
        };
    }
})();