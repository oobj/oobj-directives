/**
 * Created by Leonardo on 9/29/2015.
 */
(function() {
    'use strict';

    angular.module('oobjDirectives')
        .directive('oobjSidenav', oobjSidenav);

    oobjSidenav.$inject = [];

    function oobjSidenav() {
        var directive = {
            restrict: 'EA',
            template: $templateCache.get('oobjSidenav.html'),
            transclude: false,
            scope: {
                imgHeader: '@',
                txtHeader: '@',
                provider: '='
            },
            link: link
        };

        return directive;

        function link(scope, element, attrs, ngModelCtrl) {

        }

    }
})();
