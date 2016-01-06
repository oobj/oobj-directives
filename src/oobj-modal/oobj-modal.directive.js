/**
 * Created by ATILLA on 14/10/2015.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjModal', oobjModal);

    /** @ngInject */
    function oobjModal() {
        return {
            restrict: 'EA',
            templateUrl: 'oobj-modal/oobj-modal.html',
            transclude: true,
            scope: {
                idModal: '@',
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

        function link(scope, element, attrs, ngModelCtrl) {

        }

        function compile() {
            return {
                pre: function preLink(scope) {
                    scope.idModal = scope.idModal || '#oobjModal';
                    scope.classBtnOpen = scope.classBtnOpen || 'btn-default';
                    scope.labelBtnOpen = scope.labelBtnOpen || 'Abrir Modal';
                    scope.labelBtnClose = scope.labelBtnClose || 'Fechar';
                    scope.showBtnOpen = scope.showBtnOpen || true;
                    scope.showBtnClose = scope.showBtnClose || true;
                    scope.size = scope.size || '';
                }
            };
        }
    }
})();
