/**
 * Created by ATILLA on 27/11/2015.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .factory('oobjColumn', oobjColumn);

    /** @ngInject */
    function oobjColumn($filter) {

        var oobjColumn = function (columnName, field, width) {
            this.columnName = angular.isDefined(columnName) ? columnName : '';
            this.mask = mask;
        };

        return oobjColumn;

        function mask(value, pattern) {
            return $filter(pattern)(value);
        }
    }
    oobjColumn.$inject = ['$filter'];
})();
