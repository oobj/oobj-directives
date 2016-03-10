/**
 * Testes unitários para o Service UploadXMLModalService
 *
 * Created by ATILLA on 16/02/2016
 */
(function() {
    'use strict';

    describe('Teste do Service: UploadXMLModalService', UploadXMLModalServiceSpec);

    function UploadXMLModalServiceSpec() {
        // use module
        beforeEach(module('oobj-directives'));

        // variáveis globais para esta suíte de teste
        var $log,
            UploadXMLModalService,
            $httpBackend,
            $rootScope,
            $q,
            deferred;

        // injeção de dependencia das variáveis globais
        beforeEach(inject(function(_$log_, _UploadXMLModalService_, _$rootScope_,_$httpBackend_, _$q_) {
            $log = _$log_;
            UploadXMLModalService = _UploadXMLModalService_;
            $rootScope = _$rootScope_;
            $httpBackend = _$httpBackend_;
            $q = _$q_;
            deferred = $q.defer();
        }));

        // faz mock do request HTTP de upload
        beforeEach(function() {
            $httpBackend
                .whenPOST('https://angular-file-upload-cors-srv.appspot.com/upload')
                .respond('success');

            deferred.resolve('success');
        });

        // definição dos testes unitários
        it('Deve começar com 0% de progresso', deveInicializarProgressZerado);
        it('Deve ter função upload definida', deveTerFuncaoUploadDefined);
        it('Deve fazer upload do arquivo e executar callback de success', deveFazerUploadArquivo);
        it('Deve fazer upload do arquivo e executar callback default', deveFazerUploadArquivoSuccessDefault);
        it('Deve fazer upload de vários arquivos e executar callback de success', deveFazerUploadVariosArquivos);
        it('Não deve fazer upload de arquivo com progresso 100%', naoDeveFazerUploadArquivo100);

        /**
         * Certifica que o progresso do upload deve começar em 0%
         */
        function deveInicializarProgressZerado() {
            var fileWrapper = new FileWrapper({ name: 'Angular.png' });

            UploadXMLModalService.upload(fileWrapper);

            expect(fileWrapper.file.progress).toBeDefined();
            expect(fileWrapper.file.progress).toEqual(0);
        }

        /**
         * Certifica que o objeto upload está sendo definido pela API
         */
        function deveTerFuncaoUploadDefined() {
            var fileWrapper = new FileWrapper({ name: 'Angular.png' });

            UploadXMLModalService.upload(fileWrapper);

            expect(fileWrapper.upload).toBeDefined();
        }

        /**
         * Certifica que o callback de sucesso default do Service está sendo executado após o upload concluído
         */
        function deveFazerUploadArquivoSuccessDefault() {
            var fileWrapper = new FileWrapper({ name: 'Angular.png' }, { upload: function() {}});

            spyOn(fileWrapper, 'upload').and.returnValue(deferred.promise);
            spyOn($log, 'debug');

            UploadXMLModalService.upload(fileWrapper);

            $httpBackend.flush();

            expect($log.debug).toHaveBeenCalled();
        }

        /**
         * Certifica que o upload foi devidamente concluído e o callback de sucesso executado
         */
        function deveFazerUploadArquivo() {
            var mock = { success: function success(response) {} };
            var fileWrapper = new FileWrapper({ name: 'Angular.png' }, { upload: function() {}});

            spyOn(fileWrapper, 'upload').and.returnValue(deferred.promise);
            spyOn(mock, 'success');

            UploadXMLModalService.upload(fileWrapper, mock.success);

            $httpBackend.flush();

            expect(mock.success).toHaveBeenCalled();
        }

        /**
         * Certifica que o upload de vários arquivos de uma só vez está sendo concluído com sucesso
         */
        function deveFazerUploadVariosArquivos() {
            var mock = { success: function success(response) {} };

            var files = [];

            var fileWrapper1 = new FileWrapper({ name: 'Angular1.png' }, { upload: function() {}});
            var fileWrapper2 = new FileWrapper({ name: 'Angular2.png' }, { upload: function() {}});
            var fileWrapper3 = new FileWrapper({ name: 'Angular3.png' }, { upload: function() {}});

            files.push(fileWrapper1);
            files.push(fileWrapper2);
            files.push(fileWrapper3);

            spyOn(fileWrapper1, 'upload').and.returnValue(deferred.promise);
            spyOn(fileWrapper2, 'upload').and.returnValue(deferred.promise);
            spyOn(fileWrapper3, 'upload').and.returnValue(deferred.promise);
            spyOn(mock, 'success');

            UploadXMLModalService.uploadMultiple(files, mock.success);

            $httpBackend.flush();

            expect(mock.success).toHaveBeenCalledTimes(3);
        }

        /**
         * Certifica que não é feito o upload de um arquivo que já foi enviado (progresso 100%)
         */
        function naoDeveFazerUploadArquivo100() {
            var fileWrapper = new FileWrapper({ name: 'Angular.png', progress: 100 });
            var mock = { error: function error(erro) {} };

            spyOn(mock, 'error');

            UploadXMLModalService.upload(fileWrapper, success, mock.error);

            expect(mock.error).toHaveBeenCalled();

            function success() {}
        }

        /**
         * @constructor
         */
        function FileWrapper(file, upload) {
            this.file = file;
            this.upload = upload;
        }
    }
})();
