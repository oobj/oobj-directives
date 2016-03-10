/**
 * Service responsável por consultar a API de download de XML
 *
 * Created by ATILLA on 09/03/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .service('BaixarXMLModalService', BaixarXMLModalService);

    /** @ngInject */
    function BaixarXMLModalService($window, ENV, $q) {
        var ARRAY_VAZIO = 0;

        return {
            baixar: baixar
        };

        /**
         * Consulta a API para baixar o XML
         *
         * @param ids
         *          ID dos documentos
         * @param downloadProc
         *          Opção para baixar também o Proc
         * @param downloadEventos
         *          Opção para baixar também os eventos
         * @param modelo
         *          NFe, CTe, etc
         * @returns {*}
         */
        function baixar(ids, downloadProc, downloadEventos, modelo) {
            return $q(function(resolve, reject) {
                if (!ids || ids.length === ARRAY_VAZIO) {
                    reject('Nennhum id informado para download do documento');
                    return;
                }

                try {
                    var url = getURL(modelo, ids, downloadProc, downloadEventos);
                    $window.open(url);

                    resolve('XML(s) baixado(s) com sucesso.');
                } catch(err) {
                    reject(err);
                }
            });
        }

        /**
         * Monta a URL com os parametros para efetuar o download do XML consultando o backend
         *
         * @param modelo
         *          NFe, CTe, etc
         * @param ids
         *          ID dos documentos
         * @param downloadProc
         *          Opção para baixar também o Proc
         * @param downloadEventos
         *          Opção para baixar também os eventos
         * @returns {string}
         */
        function getURL(modelo, ids, downloadProc, downloadEventos) {
            return ENV.API_ENDPOINT + '/api/' + modelo.toLowerCase() + '/download/xml?ids=' + ids.toString() +
                '&downloadProc=' + downloadProc +
                '&downloadEventos=' + downloadEventos +
                '&modeloDocumento=' + modelo;
        }
    }
    BaixarXMLModalService.$inject = ['$window', 'ENV', '$q'];
})();
