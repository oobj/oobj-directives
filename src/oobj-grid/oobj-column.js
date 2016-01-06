/**
 * Created by ATILLA on 27/11/2015.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .factory('oobjColumn', oobjColumn);

    oobjColumn.$inject = ['$filter'];

    /** @ngInject */
    function oobjColumn($filter) {
        return function(columnName, field, width) {
            this.columnName = columnName || '';
            this.field = field || '';
            this.width = width || '45';
            this.mask = mask;
        };

        function mask(value, pattern) {
            return $filter(pattern)(value);
        }
    }
})();
