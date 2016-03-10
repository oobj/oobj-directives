/**
 * Service responsável por consultar a API de download de DACCE
 *
 * Created by ATILLA on 09/03/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .service('BaixarDACCeModalService', BaixarDACCeModalService);

    /** @ngInject */
    function BaixarDACCeModalService($window, ENV, $q) {
        var ARRAY_VAZIO = 0;

        return {
            baixar: baixar
        };

        /**
         * Consulta a API para baixar o DACCE
         *
         * @param ids
         *          ID dos documentos
         * @param modelo
         *          NFe, CTe, etc
         * @returns {*}
         */
        function baixar(ids, modelo) {
            return $q(function(resolve, reject) {
                if (!ids || ids.length === ARRAY_VAZIO) {
                    reject('Nennhum id informado para download do documento');
                    return;
                }

                try {
                    modelo = modelo || 'nfe';

                    var url = ENV.API_ENDPOINT + '/api/' + modelo.toLowerCase() + '/download/dacce?ids=' + ids;
                    $window.open(url);

                    resolve('DACCe(s) baixado(s) com sucesso.');
                } catch(err) {
                    reject(err);
                }
            });
        }
    }
    BaixarDACCeModalService.$inject = ['$window', 'ENV', '$q'];
})();
