/**
 * Directiva de Modal, usando UI Bootstrap
 *
 * Created by ATILLA on 14/10/2015
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
            templateUrl: 'js/directives/oobj-modal/oobj-modal.html',
            transclude: true,
            scope: {
                idModal: '@?',
                colspan: '@?',
                title: '@?',
                showBtnOpen: '=?',
                showBtnClose: '=?',
                showBtnAction: '=?',
                labelBtnOpen: '@?',
                labelBtnClose: '@?',
                labelBtnAction: '@?',
                classBtnOpen: '@?',
                classBtnClose: '@?',
                classBtnAction: '@?',
                onClickBtnAction: '&?',
                size: '@?'
            },
            compile: compile
        };

        function compile() {
            return {
                pre: preLink
            };

            function preLink(scope) {
                getDefaults(scope);

                scope.size = scope.size || '';

                if (angular.isUndefined(scope.showBtnOpen)) {
                    scope.showBtnOpen = true;
                }

                if (angular.isUndefined(scope.showBtnClose)) {
                    scope.showBtnClose = true;
                }

                if (angular.isUndefined(scope.showBtnAction)) {
                    scope.showBtnAction = false;
                }
            }

            function getDefaults(scope) {
                scope.idModal = scope.idModal || '#oobjModal';
                scope.classBtnOpen = scope.classBtnOpen || 'btn-default';
                scope.classBtnClose = scope.classBtnClose || 'btn-default';
                scope.classBtnAction = scope.classBtnAction || 'btn-default';
                scope.labelBtnOpen = scope.labelBtnOpen || 'Abrir Modal';
                scope.labelBtnClose = scope.labelBtnClose || 'Fechar';
                scope.labelBtnAction = scope.labelBtnAction || 'Ação';
            }
        }
    }
})();
