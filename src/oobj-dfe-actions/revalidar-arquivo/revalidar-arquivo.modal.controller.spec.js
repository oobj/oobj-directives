/**
 * Teste do controlador da directiva: revalidar-arquivo.modal.controller.js.
 *
 * Created by Leonardo on 10/02/2016.
 */
(function() {
    'use strict';

    describe('Teste do controlador da directiva: revalidar-arquivo.modal.controller.js', function() {
        var $controller,
            ModalUtil,
            uibModalInstanceMock = {},
            selectedRows,
            ctrl,
            RevalidarArquivoModalService,
            deferred,
            $scope;

        beforeEach(module('oobj-directives'));
        beforeEach(inject(function(_$controller_, _ModalUtil_, _RevalidarArquivoModalService_, _$q_, _$rootScope_) {
            deferred = _$q_.defer();
            $scope = _$rootScope_.$new();
            $controller = _$controller_;
            ModalUtil = _ModalUtil_;
            RevalidarArquivoModalService = _RevalidarArquivoModalService_;
            uibModalInstanceMock.close = function() {};
            uibModalInstanceMock.dismiss = function(message) {};
            selectedRows = [];

            ctrl = $controller('RevalidarArquivoModalController', {
                $uibModalInstance: uibModalInstanceMock,
                selectedRows: selectedRows,
                ModalUtil: ModalUtil,
                RevalidarArquivoModalService: RevalidarArquivoModalService
            });

            spyOn(RevalidarArquivoModalService, 'revalidar').and.returnValue(deferred.promise);
        }));

        it('Quantidade deve ser a mesma dos parâmetros passados', deveTerMesmaQuantidadeParametros);
        it('Executar ação com deve exibir modal de sucesso caso não ocorra nenhuma falha', deveExecutarAcaoComSucesso);
        it('Executar validar quantidade de itens selecionados', naoDeveExecutarAcaoComSucesso);
        it('Deve fechar o modal ao executar ação de clicar no botão cancelar', deveFecharModal);

        function deveExecutarAcaoComSucesso() {
            spyOn(ModalUtil, 'msgSuccess');
            spyOn(uibModalInstanceMock, 'close');

            ctrl.quantidadeItens = 5;

            ctrl.revalidar();
            deferred.resolve('all right!');
            $scope.$apply();

            expect(ModalUtil.msgSuccess).toHaveBeenCalledWith('all right!');
            expect(uibModalInstanceMock.close).toHaveBeenCalled();
        }

        function naoDeveExecutarAcaoComSucesso() {
            spyOn(ModalUtil, 'msgError');
            spyOn(uibModalInstanceMock, 'close');

            ctrl.revalidar();
            deferred.reject('damn it!');
            $scope.$apply();

            expect(ModalUtil.msgError).toHaveBeenCalledWith('damn it!');
            expect(uibModalInstanceMock.close).toHaveBeenCalled();
        }

        function deveTerMesmaQuantidadeParametros() {
            expect(ctrl).toBeDefined();
            expect(ctrl.quantidadeItens).toBeDefined();
            expect(ctrl.quantidadeItens).toEqual(0);
        }

        function deveFecharModal() {
            spyOn(uibModalInstanceMock, 'dismiss');

            ctrl.cancelar();

            expect(uibModalInstanceMock.dismiss).toHaveBeenCalled();
        }
    });
})();