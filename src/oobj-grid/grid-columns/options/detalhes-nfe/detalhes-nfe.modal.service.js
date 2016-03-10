/**
 * Service responsável por consultar os detalhes da NF-e e dos produtos da NF-e no back-end.
 *
 * Created by Danilo on 25/01/2016.
 */
(function () {
    'use strict';

    angular.module('oobj-directives').service('DetalhesNfeService', DetalhesNfeService);

    /** @ngInject */
    function DetalhesNfeService($http, ENV) {
        return {
            getDetalhesNfe: getDetalhesNfe,
            getDetalhesProduto: getDetalhesProduto
        };

        /**
         * Obtém os detalhes da NF-e.
         *
         * @param idNfe o ID da NF-e na base de dados.
         * @returns o JSON do DFe
         */
        function getDetalhesNfe(idNfe) {
            return $http.get(ENV.API_ENDPOINT + '/details-nfe/detalhes-nfe', { params: { idNfe: idNfe }});
        }

        /**
         * Obtém os detalhes de um produto específico da NF-e.
         *
         * @param idNfe o ID da NF-e na base de dados
         * @param idProduto o ID do produto na NF-e (começa em 0)
         * @returns o JSON com os detalhes do produto
         */
        function getDetalhesProduto(idNfe, idProduto) {
            return $http.get(ENV.API_ENDPOINT + '/details-nfe/detalhes-produto',
                {params: {
                    idNfe: idNfe,
                    idProduto: idProduto
                }});
        }
    }
    DetalhesNfeService.$inject = ['$http', 'ENV'];
})();
