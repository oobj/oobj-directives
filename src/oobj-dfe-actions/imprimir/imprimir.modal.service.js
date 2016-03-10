/**
 * Service do Modal Imprimir
 *
 * Created by ATILLA on 19/02/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .service('ImprimirModalService', ImprimirModalService);

    /** @ngInject */
    function ImprimirModalService($q, $log) {
        return {
            buscarImpressoras: buscarImpressoras,
            imprimir: imprimir
        };

        /**
         * Envia os documentos para serem impressos nas impressoras selecionadas
         *
         * @param docs
         *      Documentos a serem impressos
         * @param toPrint
         *      Impressoras selecionadas
         */
        function imprimir(docs, toPrint) {
            return $q(function(resolve, reject) {
                try {
                    $log.debug('Imprimindo...');
                    resolve('Documento(s) impresso(s) com sucesso!');
                } catch (err) {
                    reject(err);
                }
            });
        }

        /**
         * Faz uma busca por impressoras no servidor
         *
         * @returns {*}
         */
        function buscarImpressoras() {
            return $q(function(resolve, reject) {
                try {
                    resolve([new Printer('Printer 01'),
                        new Printer('Impressora 02'),
                        new Printer('Impressora 03'),
                        new Printer('Impressora 04'),
                        new Printer('Microsoft XPS Document Printer')
                    ]);
                } catch (err) {
                    reject(err);
                }
            });
        }

        /**
         * @constructor
         */
        function Printer(name, selected) {
            this.name = name;
            this.selected = selected || false;
        }
    }
    ImprimirModalService.$inject = ['$q', '$log'];
})();
