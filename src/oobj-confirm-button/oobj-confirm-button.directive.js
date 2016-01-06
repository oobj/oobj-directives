/**
 * Created by ATILLA on 15/10/2015.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjConfirmButton', oobjConfirmButton);

    /** @ngInject */
    function oobjConfirmButton() {
        return {
            restrict: 'EA',
            templateUrl: 'oobj-confirm-button/oobj-confirm-button.html',
            scope: {
                colspan: '@',
                title: '@',
                labelBtnYes: '@',
                labelBtnNo: '@',
                label: '@',
                classBtnYes: '@',
                classBtnNo: '@',
                btnClass: '@',
                onClickBtnYes: '&',
                onClickBtnNo: '&',
                icon: '@',
                msg: '@',
                msgStyle: '@'
            },
            compile: compile
        };

        function compile() {
            return {
                pre: function preLink(scope) {
                    if (!scope.classBtnConfirm) {
                        scope.classBtnConfirm = 'btn-default';
                    }
                }
            };
        }
    }
})();
