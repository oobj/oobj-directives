/**
 * Created by ATILLA on 27/11/2015.
 */
(function () {
    'use strict';

    angular
        .module('oobj-filters')
        .filter('cpfCnpj', cpfCnpj);

    /** @ngInject */
    function cpfCnpj() {

        var cpfCnpj = function (value) {
            return angular.isUndefined(value) ? value : formattedCPFCNPJ(value);
        };

        return cpfCnpj;

        function formattedCPFCNPJ(value) {
            var formatted = value + '';
            formatted = formatted.replace(/\D/g, '');

            if (formatted.length == 11) {
                formatted = formatted.replace(/(\d{3})(\d)/, '$1.$2');
                formatted = formatted.replace(/(\d{3})(\d)/, '$1.$2');
                formatted = formatted.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
            } else {
                formatted = formatted.replace(/^(\d{2})(\d)/, '$1.$2');
                formatted = formatted.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
                formatted = formatted.replace(/\.(\d{3})(\d)/, '.$1/$2');
                formatted = formatted.replace(/(\d{4})(\d)/, '$1-$2');
            }

            return formatted;
        }
    }
})();
