/**
 * Service responsável por consultar a API para reetregar os resumo
 *
 * Created by ATILLA on 09/03/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .service('ReentregarResumoModalService', ReentregarResumoModalService);

    /** @ngInject */
    function ReentregarResumoModalService($log, $q) {
        return {
            reentregar: reentregar
        };

        /**
         * Reconhece dos resumo na alicação
         *
         * @param dfe
         *          Documentos a serem reentregados
         */
        function reentregar(dfe) {
            return $q(function(resolve, reject) {
                try {
                    $log.debug(dfe);
                    resolve('Os resumos foram enfileirados para serem reentregues. ' +
                        'Caso eles(s) não se encaixem na(s) regra(s) configurada(s), não ' +
                        'serão entregue(s). Para validar a reentrega, clique na opção ' +
                        '"Histórico de Entrega" na tela de Não Recebidas.');
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
    ReentregarResumoModalService.$inject = ['$log', '$q'];
})();
