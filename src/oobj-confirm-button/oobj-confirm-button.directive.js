/**
 * Created by ATILLA on 15/10/2015.
 */
(function() {
    'use strict';

    angular.module('oobj-directives')
        .directive('oobjConfirmButton', oobjConfirmButton);

    /* @ngInject */
    function oobjConfirmButton() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'oobj-confirm-button/oobj-confirm-button.html',
            scope: {
                colspan: '@',
                title: '@',
                labelBtnYes: '@',
                labelBtnNo: '@',
                labelBtnConfirm: '@',
                classBtnYes: '@',
                classBtnNo: '@',
                classBtnConfirm: '@',
                onClickBtnYes: '&',
                onClickBtnNo: '&',
                icon: '@',
                msg: '@',
                msgStyle: '@'
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
                    if (angular.isUndefined(scope.classBtnConfirm)) {
                        scope.classBtnConfirm = 'btn-default';
                    }
                }
            }
        }
    }
})();
