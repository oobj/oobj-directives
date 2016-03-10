/**
 * Suíte de teste do controller: EnviarEmailModalController
 *
 * Created by ATILLA on 25/02/2016.
 */
(function() {
    'use strict';

    describe('Teste do Controller: EnviarEmailModalController', EnviarEmailModalControllerSpec);

    function EnviarEmailModalControllerSpec() {
        // use module
        beforeEach(module('oobj-directives'));

        // variáveis globais para esta suíte de teste
        var EnviarEmailModalController,
            EnviarEmailModalService,
            $controller,
            uibModalInstanceMock,
            ModalUtil,
            ctrl,
            $q,
            deferred,
            $scope;

        var STRING_DOES_NOT_MATCH = -1;
        var FIRST_ITEM = 0;
        var SECOND_ITEM = 1;

        // injeção de dependencia das variáveis globais
        beforeEach(inject(function(_$controller_, _$rootScope_, _ModalUtil_, _$q_, _EnviarEmailModalService_) {
            EnviarEmailModalService = _EnviarEmailModalService_;
            $q = _$q_;
            $scope =_$rootScope_.$new();
            deferred = _$q_.defer();

            $controller = _$controller_;
            uibModalInstanceMock = {
                close: function() {},
                dismiss: function(message) {}
            };
            ModalUtil = _ModalUtil_;

            // mock EnviarEmailModalService
            spyOn(EnviarEmailModalService, 'enviarPorEmail').and.returnValue(deferred.promise);

            ctrl = $controller('EnviarEmailModalController', {
                $uibModalInstance: uibModalInstanceMock,
                selectedRows: [{ modelo: 'NF-e' }],
                ModalUtil: _ModalUtil_,
                EnviarEmailModalService: EnviarEmailModalService
            });
        }));

        // definição dos testes unitários
        it('Deve exibir as tags default para o autocomplete', deveRetornarTagsDefault);
        it('Deve adicionar tags no assunto', deveAdicionarTagsNoAssunto);
        it('Deve selecionar um anexo', deveSelecionarAnexo);
        it('Não deve enviar email / sem anexo selecionado', naoDeveEnviarEmailValidandoAnexo);
        it('Não deve enviar email / destinatario invalido', naoDeveEnviarEmailValidandoDestinatario);
        it('Deve fechar o modal', deveFecharModal);
        it('Deve enviar email', deveEnviarEmail);
        it('Deve tratar falha ao enviar email (backend)', deveTratarFalhaAoEnviarEmail);

        /**
         * Certifica que o modal é fechado corretamente
         */
        function deveFecharModal() {
            spyOn(uibModalInstanceMock, 'dismiss');

            ctrl.cancelar();

            expect(ctrl.rows).toBeNull();
            expect(uibModalInstanceMock.dismiss).toHaveBeenCalled();
        }

        /**
         * Garante que há um exception handler para tratar problemas no backend
         */
        function deveTratarFalhaAoEnviarEmail() {
            spyOn(ModalUtil, 'msgSuccess');
            spyOn(ModalUtil, 'msgError');
            spyOn(uibModalInstanceMock, 'close');

            ctrl.email.para = 'Whatever';
            ctrl.email.mensagem = 'Whatever';

            ctrl.enviar();

            deferred.reject('Damn it! 505 Code');
            $scope.$apply();

            expect(ctrl.invalid).toBe(true);
            expect(ctrl.msgValidacao).toBe('Damn it! 505 Code');
            expect(EnviarEmailModalService.enviarPorEmail).toHaveBeenCalled();
            expect(ModalUtil.msgError).toHaveBeenCalled();
            expect(ModalUtil.msgSuccess).not.toHaveBeenCalled();
            expect(uibModalInstanceMock.close).toHaveBeenCalled();
        }

        /**
         * Garante que emails válidos são enviados corretamente
         */
        function deveEnviarEmail() {
            spyOn(ModalUtil, 'msgSuccess');
            spyOn(uibModalInstanceMock, 'close');

            ctrl.email.para = 'Whatever';
            ctrl.email.mensagem = 'Whatever';

            ctrl.enviar();

            deferred.resolve('Documento(s) enviado(s) por e-mail com sucesso!');
            $scope.$apply();

            expect(ctrl.invalid).toBe(false);
            expect(ctrl.msgValidacao).toBeNull();
            expect(EnviarEmailModalService.enviarPorEmail).toHaveBeenCalled();
            expect(ModalUtil.msgSuccess).toHaveBeenCalled();
            expect(uibModalInstanceMock.close).toHaveBeenCalled();
        }

        /**
         * Garante que emails inválidos (sem anexo selecionado) não são enviados
         */
        function naoDeveEnviarEmailValidandoAnexo() {
            spyOn(ModalUtil, 'msgSuccess');
            spyOn(uibModalInstanceMock, 'close');

            ctrl.email = {
                para: 'Whatever',
                mensagem: 'Whatever'
            };
            ctrl.anexos[0].selected = false;

            ctrl.enviar();

            expect(ctrl.invalid).toBe(true);
            expect(ctrl.msgValidacao).not.toBeNull();
            expect(EnviarEmailModalService.enviarPorEmail).not.toHaveBeenCalled();
            expect(ModalUtil.msgSuccess).not.toHaveBeenCalled();
            expect(uibModalInstanceMock.close).not.toHaveBeenCalled();
        }

        /**
         * Garante que emails inválidos (sem destinatario preenchido) não são enviados
         */
        function naoDeveEnviarEmailValidandoDestinatario() {
            spyOn(ModalUtil, 'msgSuccess');
            spyOn(uibModalInstanceMock, 'close');

            ctrl.email = {};
            ctrl.email.para = null;

            ctrl.enviar();

            expect(ctrl.invalid).toBe(true);
            expect(ctrl.msgValidacao).not.toBeNull();
            expect(EnviarEmailModalService.enviarPorEmail).not.toHaveBeenCalled();
            expect(ModalUtil.msgSuccess).not.toHaveBeenCalled();
            expect(uibModalInstanceMock.close).not.toHaveBeenCalled();
        }

        /**
         * Garante que os anexos são selecionados e deselecionados corretamente para o email
         */
        function deveSelecionarAnexo() {
            expect(ctrl.anexos).toBeDefined();
            expect(ctrl.anexos[FIRST_ITEM].selected).toBeDefined();
            expect(ctrl.anexos[FIRST_ITEM].selected).toBe(true);
            expect(ctrl.anexos[SECOND_ITEM].selected).toBe(false);

            ctrl.selecionar(FIRST_ITEM);
            ctrl.selecionar(SECOND_ITEM);

            expect(ctrl.anexos[FIRST_ITEM].selected).toBe(false);
            expect(ctrl.anexos[SECOND_ITEM].selected).toBe(true);
        }

        /**
         * Garante que as tags são adicionadas no assunto
         */
        function deveAdicionarTagsNoAssunto() {
            var tagAssunto = '|NUMERO|';
            var tagSerie = '|SERIE|';

            ctrl.addAssunto(FIRST_ITEM);
            ctrl.addAssunto(SECOND_ITEM);

            expect(ctrl.email.assunto).toBeDefined();
            expect(ctrl.email.assunto.indexOf(tagAssunto) > STRING_DOES_NOT_MATCH).toBe(true);
            expect(ctrl.email.assunto.indexOf(tagSerie) > STRING_DOES_NOT_MATCH).toBe(true);
        }

        /**
         * Garante que a funcao retorne as tags para o autocomplete de acordo com a query digitada
         */
        function deveRetornarTagsDefault() {
            var query = 'E-mail';
            var tags = ctrl.getTagsDefault(query);

            expect(tags).toBeDefined();
            expect(tags.length).toBe(1);

            query = 'zzzzzzz';
            tags = ctrl.getTagsDefault(query);

            expect(tags.length).toBe(0);
        }
    }
})();
