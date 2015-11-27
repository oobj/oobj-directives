/**
 * Created by ATILLA on 27/11/2015.
 */
(function () {
    'use strict';

    angular
        .module('oobj-filters')
        .filter('telefone', telefone);

    /** @ngInject */
    function telefone() {

        var telefone = function (value) {
            return angular.isUndefined(value) ? value : formattedTelephone(value);
        };

        return telefone;

        function formattedTelephone(value) {
            var formatted = value + '';

            formatted = formatted.replace(/\D/g, '');
            if (formatted.length === 11) {
                formatted = formatted.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
            } else {
                formatted = formatted.replace(/^(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
            }

            return formatted;
        }
    }
})();
