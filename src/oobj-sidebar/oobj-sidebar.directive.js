(function () {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjSidebar', oobjSidebar);

    /** @ngInject */
    function oobjSidebar() {
        return {
            templateUrl: 'oobj-sidebar/oobj-sidebar.html',
            restrict: 'E',
            replace: true,
            scope: {
                provider: '='
            },
            link: link
        };

        function link(scope) {
            scope.selectedMenu = 'dashboard';
            scope.collapseVar = 0;
            scope.multiCollapseVar = 0;

            scope.check = function (x) {
                if (x === scope.collapseVar) {
                    scope.collapseVar = 0;
                } else {
                    scope.collapseVar = x;
                }
            };

            scope.multiCheck = function (y) {
                if (y === scope.multiCollapseVar) {
                    scope.multiCollapseVar = 0;
                } else {
                    scope.multiCollapseVar = y;
                }
            };
        }
    }
})();
