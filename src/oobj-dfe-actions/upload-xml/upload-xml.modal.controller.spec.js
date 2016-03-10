/**
 * Suíte de teste para o controlador (@link UploadXMLModalController)
 *
 * Created by ATILLA on 16/02/2016
 */
(function() {
    'use strict';

    describe('Teste do Controller: UploadXMLModalController', UploadXMLModalControllerSpec);

    function UploadXMLModalControllerSpec() {
        // use module
        beforeEach(module('oobj-directives'));

        // variáveis globais para esta suíte de teste
        var $log,
            UploadXMLModalController,
            UploadXMLModalService,
            $controller,
            uibModalInstanceMock,
            OobjToastService,
            ctrl,
            ctrlScope,
            MAX_FILES_PERMITIDO = 40;

        // injeção de dependencia das variáveis globais
        beforeEach(inject(function(_$log_, _$controller_, _$rootScope_, _OobjToastService_) {
            $log = _$log_;
            UploadXMLModalService = {
                upload: function() {},
                uploadMultiple: function() {}
            };
            $controller = _$controller_;
            uibModalInstanceMock = {
                close: function() {},
                dismiss: function(message) {}
            };
            OobjToastService = _OobjToastService_;
            ctrlScope = _$rootScope_.$new();
            ctrl = $controller('UploadXMLModalController', {
                $uibModalInstance: uibModalInstanceMock,
                OobjToastService: _OobjToastService_,
                $scope: ctrlScope,
                UploadXMLModalService: UploadXMLModalService
            });
        }));

        // definição dos testes unitários
        it('Deve fechar o modal', deveFecharModal);
        it('Deve executar funcao cancelar', deveCancelar);
        it('Deve cancelar uploads em andamento', deveCancelarUploadsEmAndamento);
        it('Deve executar funcao desfazer cancelamento', deveDesfazerCancelamento);
        it('Deve fazer upload dos arquivos', deveFazerUpload);
        it('Deve fazer wrap dos files', deveFazerWrapFiles);
        it('Deve disparar alerta ao fazer upload de arquivos indefinidos', naoDeveFazerUpload);
        it('Nao deve fazer wrap de files indefinidos', naoDeveFazerWrapFilesNull);
        it('Nao deve fazer wrap de files excedentes', naoDeveFazerWrapFilesExcedentes);
        it('Deve remover e abortar o upload de um arquivo', deveAbordarUpload);
        it('Não deve abortar o upload de um arquivo já finalizado ou nao enviado', naoDeveAbordarUpload);
        it('Deve atualizar variavel para true quando uploads sao concluidos', deveAtualizarVariavelTodosCompletados);
        it('Deve executar success e não informar sucesso de todos files', deveExecutarSuccessSemTodosCompletados);
        it('Não deve cancelar uploads em andamento', naoDeveCancelarUploadsEmAndamento);

        /**
         * Certifica que não deve ser feito o cancelamento do upload erroneamente // deveCancelar = false
         */
        function naoDeveCancelarUploadsEmAndamento() {
            var fileWrapper1 = new FileWrapper({ name: 'Angular1.png', progress: 50 }, { abort: function() {}});

            ctrl.files = [];
            ctrl.fileWrappers = [fileWrapper1];
            ctrl.deveCancelar = false;

            spyOn(fileWrapper1.upload, 'abort');

            ctrl.cancelarUploads();

            expect(fileWrapper1.upload.abort).not.toHaveBeenCalled();

            expect(ctrl.files).not.toBeNull();
            expect(ctrl.fileWrappers).not.toBeNull();

            deveFecharModal();
        }

        /**
         * Certifica que é feito o cancelamento dos uploads em andamento corretamente
         */
        function deveCancelarUploadsEmAndamento() {
            var fileWrapper1 = new FileWrapper({ name: 'Angular1.png', progress: 50 }, { abort: function() {}});
            var fileWrapper2 = new FileWrapper({ name: 'Angular2.png', progress: 50 }, { abort: function() {}});
            var fileWrapper3 = new FileWrapper({ name: 'Angular3.png', progress: 100 }, { abort: function() {}});

            ctrl.fileWrappers = [fileWrapper1, fileWrapper2, fileWrapper3];
            ctrl.deveCancelar = true;

            spyOn(fileWrapper1.upload, 'abort');
            spyOn(fileWrapper2.upload, 'abort');
            spyOn(fileWrapper3.upload, 'abort');

            ctrl.cancelarUploads();

            expect(fileWrapper1.upload.abort).toHaveBeenCalled();
            expect(fileWrapper2.upload.abort).toHaveBeenCalled();
            expect(fileWrapper3.upload.abort).not.toHaveBeenCalled();

            expect(ctrl.files).toBeNull();
            expect(ctrl.fileWrappers).toBeNull();

            deveFecharModal();
        }

        /**
         * Certifica que o usuário só é notificado quando TODOS os uploads foram concluídos
         */
        function deveExecutarSuccessSemTodosCompletados() {
            var fileWrapper1 = new FileWrapper({ name: 'Angular1.png', progress: 100 });
            var fileWrapper2 = new FileWrapper({ name: 'Angular2.png', progress: 100 });
            var fileWrapper3 = new FileWrapper({ name: 'Angular3.png', progress: 99 });
            ctrl.fileWrappers = [fileWrapper1, fileWrapper2, fileWrapper3];

            spyOn(OobjToastService, 'msgSuccess');

            ctrl.success();

            expect(ctrl.allCompleted).toBe(false);
            expect(OobjToastService.msgSuccess).not.toHaveBeenCalled();
        }

        /**
         * Certifica que o usuário seja informado corretamente quando todos os uploads são concluídos
         */
        function deveAtualizarVariavelTodosCompletados() {
            var fileWrapper1 = new FileWrapper({ name: 'Angular1.png', progress: 100 });
            var fileWrapper2 = new FileWrapper({ name: 'Angular2.png', progress: 100 });
            var fileWrapper3 = new FileWrapper({ name: 'Angular3.png', progress: 100 });
            ctrl.fileWrappers = [fileWrapper1, fileWrapper2, fileWrapper3];

            spyOn(OobjToastService, 'msgSuccess');

            ctrl.success();

            expect(ctrl.allCompleted).toBe(true);
        }

        /**
         * Certifica que o upload não seja abortado caso ainda não tenha sido enviado ou se o upload já foi completado
         */
        function naoDeveAbordarUpload() {
            var fileWrapper1 = new FileWrapper({ name: 'Angular1.png', progress: 100 }, { abort: function() {}});
            var fileWrapper2 = new FileWrapper({ name: 'Angular2.png', progress: 0 });
            ctrl.fileWrappers = [fileWrapper1, fileWrapper2];

            spyOn(fileWrapper1.upload, 'abort');

            expect(ctrl.fileWrappers.length).toBe(2);

            ctrl.remover(0);

            expect(ctrl.fileWrappers.length).toBe(1);
            expect(fileWrapper1.upload.abort).not.toHaveBeenCalled();

            ctrl.remover(0);

            expect(ctrl.fileWrappers.length).toBe(0);
            expect(fileWrapper2.upload).toBeUndefined();
        }

        /**
         * Certifica que o upload é abortado quando solicitado pelo usuário (arquivos com upload em andamento)
         */
        function deveAbordarUpload() {
            var fileWrapper1 = new FileWrapper({ name: 'Angular1.png', progress: 0 }, { abort: function() {}});
            var fileWrapper2 = new FileWrapper({ name: 'Angular2.png', progress: 0 }, { abort: function() {}});
            ctrl.fileWrappers = [fileWrapper1, fileWrapper2];

            spyOn(fileWrapper1.upload, 'abort');

            expect(ctrl.fileWrappers.length).toBe(2);

            ctrl.remover(0);

            expect(ctrl.fileWrappers.length).toBe(1);
            expect(fileWrapper1.upload.abort).toHaveBeenCalled();
        }

        /**
         * Certifica que os files são colocados em Wrappers para o correto monitoramento do progresso do upload
         */
        function deveFazerWrapFiles() {
            var file1 = { name: 'Angular1.png' };
            var file2 = { name: 'Angular2.png' };

            ctrl.files = [file1, file2];
            ctrlScope.$digest();

            expect(ctrl.fileWrappers).toBeDefined();
            expect(ctrl.allCompleted).toBe(false);
            expect(ctrl.limiteExcedido).toBe(false);
        }

        /**
         * Certifica que só é feito upload de arquivos dentro de um determinado limite
         */
        function naoDeveFazerWrapFilesExcedentes() {
            var files = [];

            // excede 10 itens além do máximo permitido
            for (var i = 0; i < (MAX_FILES_PERMITIDO + 10); i++) {
                files.push({ name: 'Angular'+i });
            }

            spyOn(OobjToastService, 'msgWarning');

            ctrl.files = files;
            ctrlScope.$digest();

            expect(ctrl.fileWrappers).toBeDefined();
            expect(ctrl.fileWrappers.length).toBe(MAX_FILES_PERMITIDO);
            expect(OobjToastService.msgWarning).toHaveBeenCalled();
            expect(ctrl.allCompleted).toBe(false);
            expect(ctrl.limiteExcedido).toBe(true);
        }

        /**
         * Certifica que o wrap não seja feito quando os files são nulos
         */
        function naoDeveFazerWrapFilesNull() {
            ctrl.files = [];
            ctrl.files = null;
            ctrlScope.$digest();

            expect(ctrl.fileWrappers).toBeNull();
        }

        /**
         * Certifica que os files são enviados para upload no respectivo Service
         */
        function deveFazerUpload() {
            var fileWrapper = new FileWrapper({ name: 'Angular.png' });
            ctrl.fileWrappers = [fileWrapper];

            spyOn(UploadXMLModalService, 'uploadMultiple');

            ctrl.upload();

            expect(UploadXMLModalService.uploadMultiple).toHaveBeenCalled();
        }

        /**
         * Certifica que o Service não seja solicitado caso não haja arquivos selecionados
         */
        function naoDeveFazerUpload() {
            spyOn(OobjToastService, 'msgWarning');

            ctrl.upload();

            expect(OobjToastService.msgWarning)
                .toHaveBeenCalledWith('É necessário selecionar arquivo(s) para fazer upload!');
        }

        /**
         * Certifica que o modal é fechado corretamente
         */
        function deveFecharModal() {
            spyOn(uibModalInstanceMock, 'dismiss');

            ctrl.fecharModal();

            expect(uibModalInstanceMock.dismiss).toHaveBeenCalledWith('cancel');
        }

        /**
         * Certifica que a variavel de controle para confirmação do cancelamento seja atualizado corretamente
         */
        function deveCancelar() {
            expect(ctrl.deveCancelar).toBe(false);

            ctrl.cancelar();

            expect(ctrl.deveCancelar).toBe(true);
        }

        /**
         * Certifica que o cancelmaneto seja revertido quando o usuário não confirma a ação
         */
        function deveDesfazerCancelamento() {
            ctrl.cancelar();

            expect(ctrl.deveCancelar).toBe(true);

            ctrl.desfazerCancelamento();

            expect(ctrl.deveCancelar).toBe(false);
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
