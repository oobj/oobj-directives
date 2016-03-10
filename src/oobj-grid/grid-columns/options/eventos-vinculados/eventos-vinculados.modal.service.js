/**
 * Service responsável por consumir a API de consulta por eventos vinculados a um documento.
 *
 * Created by ATILLA on 04/02/2016.
 */
(function () {
    'use strict';

    angular
        .module('oobj-directives')
        .service('EventosVinculadosModalService', EventosVinculadosModalService);

    /** @ngInject */
    function EventosVinculadosModalService($q) {
        return {
            consultarEventosEmitente: consultarEventosEmitente,
            consultarEventosDestinatario: consultarEventosDestinatario,
            consultarEventosSefaz: consultarEventosSefaz
        };

        /**
         * Consulta eventos do emitente
         *
         * @param dfe
         * @returns {Array}
         */
        function consultarEventosEmitente(dfe) {
            return $q(function(resolve, reject) {
                try {
                    var eventos = [];

                    /** mock temporário */
                    eventos.push(new Evento('btn-warning', 'fa-comments', 'Emitente', 'Carta de Correção (110110)',
                        { 'Sequencial': '4', 'Correção': 'Descrição correta do item 1 é REGRIGERANTE BARÉ' }, true, true
                    ));
                    eventos.push(new Evento('btn-warning', 'fa-comments', 'Emitente', 'Carta de Correção (110110)',
                        { 'Sequencial': '3', 'Correção': 'Descrição correta do item 1 é REGRIGERANTE BARÉ' }, false,
                        false
                    ));
                    eventos.push(new Evento('btn-danger', 'fa-times', 'Emitente', 'Cancelamento (110110)',
                        { 'Justificativa': 'Cancelamento de NFe - Erro de digitação' }, true, false
                    ));

                    resolve(eventos);
                } catch (err) {
                    reject(err);
                }
            });
        }

        /**
         * Consulta eventos do Destinatário
         *
         * @param dfe
         * @returns {Array}
         */
        function consultarEventosDestinatario(dfe) {
            return $q(function(resolve, reject) {
                try {
                    var eventos = [];

                    resolve(eventos);
                } catch (err) {
                    reject(err);
                }
            });
        }

        /**
         * Consulta eventos da SEFAZ
         *
         * @param dfe
         * @returns {Array}
         */
        function consultarEventosSefaz(dfe) {
            return $q(function(resolve, reject) {
                try {
                    var eventos = [];

                    /** mock temporário */
                    eventos.push(
                        new Evento('oobj-options-column-btn-gray', 'fa-bullhorn', 'SEFAZ', 'CT-e Autorizado (610600)',
                            {
                                'Modelo': '01 - Rodoviário',
                                'Chave Acesso CT-e': '43151107385111000102555010211602201400048150',
                                'Emitente': 'SOLIDA TRANSPORTE LTDA (CNPJ: 74.167.222/0002-10 / IE: 796011983115)'
                            }, true, false
                        ));

                    resolve(eventos);
                } catch (err) {
                    reject(err);
                }
            });
        }

        /**
         * @constructor
         */
        function Evento(type, icon, autor, tipo, det, vigente, pdf) {
            this.type = type;
            this.icon = icon;
            this.autor = autor;
            this.tipo = tipo;
            this.dataHoraEvento = new Date();
            this.dataHoraRegistro = new Date();
            this.protocolo = '123434131442341';
            this.det = det;
            this.vigente = vigente;
            this.pdf = pdf;
        }
    }
    EventosVinculadosModalService.$inject = ['$q'];
})();
