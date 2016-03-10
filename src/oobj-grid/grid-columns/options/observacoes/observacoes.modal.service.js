/**
 * Service responsável por consumir a API de consulta por observações vinculados a um documento.
 *
 * Created by ATILLA on 04/02/2016.
 */
(function () {
    'use strict';

    angular
        .module('oobj-directives')
        .service('ObservacoesModalService', ObservacoesModalService);

    /** @ngInject */
    function ObservacoesModalService($q, $log) {
        return {
            consultar: consultar,
            salvar: salvar,
            excluir: excluir
        };

        /**
         * Consulta observações vinculadas a um documento
         *
         * @param dfe
         * @returns {{comentario: string, data: Date, usuario: string}}
         */
        function consultar(dfe) {
            return $q(function(resolve, reject) {
                try {
                    $log.debug('Consultando observacoes do documento');
                    resolve({
                        comentario: 'Esta NFe é muito legal!',
                        data: new Date(),
                        usuario: 'Fulano89'
                    });
                } catch(err) {
                    reject(err);
                }
            });
        }

        /**
         * Salva ou atualiza as observações de um documento
         *
         * @param observacao
         * @param dfe
         */
        function salvar(observacao, dfe) {
            return $q(function(resolve, reject) {
                try {
                    $log.debug('Salvando observacoes do documento');
                    resolve('Observação salva com sucesso!');
                } catch(err) {
                    reject(err);
                }
            });
        }

        /**
         * Exclui as observações vinculadas a um documento
         *
         * @param dfe
         */
        function excluir(dfe) {
            return $q(function(resolve, reject) {
                try {
                    $log.debug('Excluindo observacoes do documento');
                    resolve('Observação excluída com sucesso!');
                } catch(err) {
                    reject(err);
                }
            });
        }
    }
    ObservacoesModalService.$inject = ['$q', '$log'];
})();
