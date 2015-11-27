/**
 * Created by ATILLA on 27/11/2015.
 */
(function () {
    'use strict';

    angular
        .module('oobj-filters')
        .filter('cnpj', cnpj);

    /** @ngInject */
    function cnpj() {

        var cnpj = function (value) {
            return angular.isUndefined(value) ? value : formattedCNPJ(value);
        };

        return cnpj;

        function formattedCNPJ(value) {
            var formatted = value + '';

            formatted = formatted.replace(/\D/g, '');
            formatted = formatted.replace(/^(\d{2})(\d)/, '$1.$2');
            formatted = formatted.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
            formatted = formatted.replace(/\.(\d{3})(\d)/, '.$1/$2');
            formatted = formatted.replace(/(\d{4})(\d)/, '$1-$2');

            return formatted;
        }
    }
})();
