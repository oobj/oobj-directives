/**
 * Created by ATILLA on 14/10/2015.
 */
(function() {
    'use strict';

    angular.module('oobj-directives')
        .directive('oobjModal', oobjModal);

    /* @ngInject */
    function oobjModal() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'oobj-modal/oobj-modal.html',
            transclude: true,
            scope: {
                id: '@',
                colspan: '@',
                title: '@',
                showBtnOpen: '=',
                showBtnClose: '=',
                labelBtnOpen: '@',
                labelBtnClose: '@',
                classBtnOpen: '@',
                size: '@'
            },
            link: link,
            compile: compile
        };

        return directive;

        function link(scope, element, attrs, ngModelCtrl) {

        }

        function compile(tElement, tAttrs) {
            return {
                pre: function preLink(scope, element, attrs) {
                    if (angular.isUndefined(scope.id)) {
                        scope.id = '#oobjModal';
                    }

                    if (angular.isUndefined(scope.classBtnOpen)) {
                        scope.classBtnOpen = 'btn-default';
                    }

                    if (angular.isUndefined(scope.labelBtnOpen)) {
                        scope.labelBtnOpen = 'Abrir Modal';
                    }

                    if (angular.isUndefined(scope.labelBtnClose)) {
                        scope.labelBtnClose = 'Fechar';
                    }

                    if (angular.isUndefined(scope.showBtnOpen)) {
                        scope.showBtnOpen = true;
                    }

                    if (angular.isUndefined(scope.showBtnClose)) {
                        scope.showBtnClose = true;
                    }

                    if (angular.isUndefined(scope.size)) {
                        scope.size = '';
                    }
                }
            }
        }
    }
})();
