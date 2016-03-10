/**
 * Service responsável por comunicar com o backend e trazer os dados para serem exibidos para o usuário.
 *
 * Created by Leonardo on 05/02/2016.
 */
(function() {
    'use strict';

    angular.module('oobj-directives').service('ManifestarService', ManifestarService);

    /** @ngInject */
    function ManifestarService($q) {
        return {
            getManifestacoes: getManifestacoes,
            getManifestacoesSelecionadas: getManifestacoesSelecionadas,
            getDestinatarios: getDestinatarios,
            hasJustificativa: hasJustificativa
        };

        /**
         * Obtém as manifestações para serem exibidas no select-box.
         *
         * @returns {*[]} array com as possíveis manifestações
         */
        function getManifestacoes() {
            return $q(function(resolve, reject) {
                try {
                    resolve([
                        { valor: 'CIENCIA_OPERACAO', descricao: 'Ciência da Operação' },
                        { valor: 'DESCONHECIMENTO_OPERACAO' , descricao: 'Desconhecimento da Operação' },
                        { valor: 'OPERACAO_NAO_REALIZADA', descricao: 'Operação não Realizada' },
                        { valor: 'CONFIRMACAO_OPERACAO', descricao: 'Confirmação da Operação' }
                    ]);
                } catch (err) {
                    reject(err);
                }
            });
        }

        /**
         * Normaliza as linhas selecionadas na row da grid para exibir com as propriedades esperadas no HTML.
         *
         * @param rows
         *          linhas selecionadas na grid que serão realizadas a manifestação
         * @returns {Array} array normalizado
         */
        function getManifestacoesSelecionadas(rows) {
            return $q(function(resolve, reject) {
                try {
                    var rowsCopy = angular.copy(rows),
                        docArray = [];

                    angular.forEach(rowsCopy, function(item) {
                        var doc = {
                            numero: item.numero,
                            serie: item.serie,
                            emitente: item.emitente,
                            cnpj: item.cnpj
                        };
                        docArray.push(doc);
                    });

                    resolve(docArray);
                } catch (err) {
                    reject(err);
                }
            });
        }

        /**
         * Busca no banco de dados os possíveis destinatários para que seja realizada a manifestação dessa empresa.
         *
         * @returns {*[]} um array com as empresas que o usuário pode manifestar
         */
        function getDestinatarios() {
            return $q(function(resolve, reject) {
                try {
                    resolve([
                        { id: 1, nome: '[07.385.111/000-2] E-Sales Soluções Oobj'}
                    ]);
                } catch (err) {
                    reject(err);
                }
            });
        }

        /**
         * Verifica se o valor passado por parâmetro é de DESCONHECIMENTO_OPERACAO ou OPERACAO_NAO_REALIZADA pois
         * esses são obrigatórios
         *
         * @param value
         * @returns {boolean}
         */
        function hasJustificativa(value) {
            return $q(function(resolve, reject) {
                try {
                    resolve(value === 'DESCONHECIMENTO_OPERACAO' || value === 'OPERACAO_NAO_REALIZADA');
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
    ManifestarService.$inject = ['$q'];
})();
