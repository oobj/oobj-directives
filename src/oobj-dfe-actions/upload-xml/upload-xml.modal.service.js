/**
 * Service responsável por fazer upload de arquivos no backend
 *
 * Created by ATILLA on 10/02/2016.
 */
(function () {
    'use strict';

    angular
        .module('oobj-directives')
        .service('UploadXMLModalService', UploadXMLModalService);

    /** @ngInject */
    function UploadXMLModalService(Upload, $log) {
        // progresso inicial = 0, final = 100
        var PROGRESS_INICIAL = 0;
        var PROGRESS_FINAL = 100;

        return {
            uploadMultiple: uploadMultiple,
            upload: upload
        };

        /**
         * Funcao para efetuar o upload de multiplos arquivos
         *
         * @param filesWrapper
         *          Array com os files em Wrappers (@link FileWrapper)
         * @param success
         *          Callback a ser executado quando cada upload for finalizado
         * @param error
         *          Callback a ser executado quando algum erro ocorrer durante o upload
         */
        function uploadMultiple(filesWrapper, success, error) {
            if (filesWrapper) {
                filesWrapper.forEach(function(fileWrapper) {
                    upload(fileWrapper, success, error);
                });
            }
        }

        /**
         * Funcao para efetuar o upload de um arquivo
         *
         * @param fileWrapper
         *          File a ser enviado para upload encapsulado em um Wrapper (@link FileWrapper)
         * @param success
         *          Callback a ser executado quando cada upload for finalizado
         * @param error
         *          Callback a ser executado quando algum erro ocorrer durante o upload
         */
        function upload(fileWrapper, success, error) {
            // define funções default para lidar com o upload do arquivo
            success = success || successDefault;
            error = error || errorDefault;

            // verifica se já foi feito upload do mesmo
            if (angular.isUndefined(fileWrapper.file.progress) || fileWrapper.file.progress < PROGRESS_FINAL) {
                fileWrapper.file.progress = PROGRESS_INICIAL;

                // sets the upload service definition into the FileWrapper
                fileWrapper.upload = defineUpload(fileWrapper.file);

                // faz o upload do arquivo na API do Backend
                fileWrapper.upload.then(success, error, progress);
            }
            // dispara o callback de error caso o arquivo tenha sido uploaded
            else if (error) {
                error('Já foi feito o upload do arquivo ' + fileWrapper.file.name);
            }
        }

        /**
         * Define as propriedades para fazer upload de um arquivo numa API
         *
         * @param file
         *          Arquivo a ser enviado para upload na API
         * @returns {*}
         */
        function defineUpload(file) {
            return Upload.upload({
                // url: ENV.API_ENDPOINT + '/upload',
                // API temporária
                url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
                data: {
                    username: 'Painel 2.0',
                    file: file
                }
            });
        }

        /**
         * Default success handler
         *
         * @param resp
         *          HTTPResponse retornado quando o upload de um arquivo é concluído
         */
        function successDefault(resp) {
            $log.debug(resp);
        }

        /**
         * Default progress handler
         *
         * @param event
         *          Evento retornado quando cada chunk é enviado
         */
        function progress(event) {
            event.config.data.file.progress = parseInt(PROGRESS_FINAL * event.loaded / event.total);
        }

        /**
         * Default error handler
         *
         * @param erro
         *          String/Objecto com detalhes do erro
         */
        function errorDefault(erro) {
            $log.error(erro);
        }
    }
    UploadXMLModalService.$inject = ['Upload', '$log'];
})();
