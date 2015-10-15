/**
 * Created by Leonardo on 10/9/2015.
 */
(function() {
    'use strict';

    angular.module('oobj-directives')
        .directive('oobjChartPie', oobjChartPie);

    /* @ngInject */
    function oobjChartPie() {
        var directive = {
            require: 'ngModel',
            restrict: 'EA',
            templateUrl: 'oobj-chart/oobj-chart-pie.html',
            scope: {
                id: '@',
                ngModel: '=?',
                colspan: '@',
                title: '@'
            },
            link: link
        };

        return directive;

        function link(scope, element, attrs, ngModelCtrl) {

        }
    }
})();