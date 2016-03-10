/**
 * Service responsável por consultar a API para reetregar os documentos
 *
 * Created by ATILLA on 09/03/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .service('ReentregarDocumentosModalService', ReentregarDocumentosModalService);

    /** @ngInject */
    function ReentregarDocumentosModalService($log, $q) {
        return {
            reentregar: reentregar
        };

        /**
         * Reconhece dos documentos na alicação
         *
         * @param dfe
         *          Documentos a serem reentregados
         */
        function reentregar(dfe) {
            return $q(function(resolve, reject) {
                try {
                    $log.debug(dfe);
                    resolve('Os documentos foram enfileirados para serem reentregues. ' +
                        'Caso eles(s) não se encaixem na(s) regra(s) configurada(s), não ' +
                        'serão entregue(s). Para validar a reentrega, clique na opção ' +
                        '"Histórico de Entrega" na tela de Documentos Recebidos.');
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
    ReentregarDocumentosModalService.$inject = ['$log', '$q'];
})();
