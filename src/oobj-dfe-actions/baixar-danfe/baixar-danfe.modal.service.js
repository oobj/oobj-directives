/**
 * Service responsável por consultar a API de download de DANFE
 *
 * Created by ATILLA on 09/03/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .service('BaixarDANFeModalService', BaixarDANFeModalService);

    /** @ngInject */
    function BaixarDANFeModalService($window, ENV, $q) {
        var ARRAY_VAZIO = 0;

        return {
            baixar: baixar
        };

        /**
         * Consulta a API para baixar o DANFE
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

                    var url = ENV.API_ENDPOINT + '/api/' + modelo.toLowerCase() + '/download/danfe?ids=' + ids;
                    $window.open(url);

                    resolve('DANFe(s) baixado(s) com sucesso.');
                } catch(err) {
                    reject(err);
                }
            });
        }
    }
    BaixarDANFeModalService.$inject = ['$window', 'ENV', '$q'];
})();
