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
            templateUrl: 'js/directives/oobj-confirm-button/oobj-confirm-button.html',
            scope: {
                idModal: '@',
                colspan: '@?',
                label: '@?',
                icon: '@?',
                onClickBtnYes: '&?',
                classBtnConfirm: '@'
            }
        };

    }
})();
