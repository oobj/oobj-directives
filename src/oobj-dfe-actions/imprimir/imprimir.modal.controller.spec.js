/**
 * Teste do Controller do Modal Imprimir: ImprimirModalController
 *
 * Created by ATILLA on 19/02/2016.
 */
(function() {
    'use strict';

    describe('Teste do Service: ImprimirModalController', ImprimirModalControllerSpec);

    function ImprimirModalControllerSpec() {
        // use module
        beforeEach(module('oobj-directives'));

        // variáveis globais para esta suíte de teste
        var ImprimirModalController,
            ImprimirModalService,
            $controller,
            uibModalInstanceMock,
            ModalUtil,
            ctrl,
            $scope,
            deferred;

        // injeção de dependencia das variáveis globais
        beforeEach(inject(function(_$controller_, _$rootScope_, _ModalUtil_, _$q_, _ImprimirModalService_) {
            deferred = _$q_.defer();
            ImprimirModalService = _ImprimirModalService_;
            $controller = _$controller_;
            uibModalInstanceMock = {
                close: function() {},
                dismiss: function(message) {}
            };
            ModalUtil = _ModalUtil_;
            $scope = _$rootScope_.$new();
            ctrl = $controller('ImprimirModalController', {
                $scope: $scope,
                $uibModalInstance: uibModalInstanceMock,
                selectedRows: [],
                ModalUtil: _ModalUtil_,
                ImprimirModalService: ImprimirModalService
            });

            spyOn(ImprimirModalService, 'imprimir').and.returnValue(deferred.promise);
        }));

        // definição dos testes unitários
        it('Deve fechar o modal', deveFecharModal);
        it('Deve buscar impressoras', deveBuscarImpressoras);
        it('Deve selecionar uma impressora', deveSelecionarImpressora);
        it('Deve desfazer seleção de uma impressora', deveDesfazerSelecionarImpressora);
        it('Deve selecionar uma impressora e desfazer seleção das outras',
            deveSelecionarImpressoraEDesfazerSelecaoDasOutras);
        it('Deve enviar documentos para impressao', deveEnviarDocsParaImpressao);
        it('Não deve enviar documentos para impressao sem selecionar itens', naoDeveEnviarDocsParaImpressao);

        /**
         * Certifica que não é enviado documentos para seleção se não houver nenhum item selecionado
         */
        function naoDeveEnviarDocsParaImpressao() {
            spyOn(uibModalInstanceMock, 'close');
            spyOn(ModalUtil, 'msgSuccess');
            spyOn(ModalUtil, 'msgWarning');

            ctrl.imprimir();
            $scope.$apply();

            expect(ImprimirModalService.imprimir).not.toHaveBeenCalled();
            expect(uibModalInstanceMock.close).toHaveBeenCalled();
            expect(ModalUtil.msgSuccess).not.toHaveBeenCalled();
            expect(ModalUtil.msgWarning).toHaveBeenCalled();
        }

        /**
         * Certifica que os documentos são enviados para impressão nas impressoras selecionadas
         */
        function deveEnviarDocsParaImpressao() {
            ctrl.quantidadeItens = 2;

            spyOn(uibModalInstanceMock, 'close');
            spyOn(ModalUtil, 'msgSuccess');
            spyOn(ModalUtil, 'msgWarning');

            ctrl.impressoras = [new Printer('Printer Test 01'), new Printer('Printer Test 02'), new Printer('Test 03')];
            ctrl.impressoras[0].selected = true;
            ctrl.imprimir();

            deferred.resolve('Tudo ok!');
            $scope.$apply();

            expect(ImprimirModalService.imprimir).toHaveBeenCalled();
            expect(uibModalInstanceMock.close).toHaveBeenCalled();
            expect(ModalUtil.msgSuccess).toHaveBeenCalled();
            expect(ModalUtil.msgWarning).not.toHaveBeenCalled();
        }

        /**
         * Certifica que a seleção de uma impressora é feita e as outras seleções são desfeitas
         */
        function deveSelecionarImpressoraEDesfazerSelecaoDasOutras() {
            ctrl.impressoras = [new Printer('Printer Test 01', true), new Printer('Printer Test 02', true),
                new Printer('Test 03')];

            expect(ctrl.impressoras[0].selected).toBe(true);
            expect(ctrl.impressoras[1].selected).toBe(true);
            expect(ctrl.impressoras[2].selected).toBe(false);

            ctrl.selecionar(2);

            expect(ctrl.impressoras[0].selected).toBe(false);
            expect(ctrl.impressoras[1].selected).toBe(false);
            expect(ctrl.impressoras[2].selected).toBe(true);
        }

        /**
         * Certifica que a seleção de uma impressora pode ser desfeita
         */
        function deveDesfazerSelecionarImpressora() {
            ctrl.impressoras = [new Printer('Printer Test 01'), new Printer('Printer Test 02'), new Printer('Test 03')];

            expect(ctrl.impressoras[0].selected).toBe(false);
            expect(ctrl.impressoras[1].selected).toBe(false);

            ctrl.selecionar(0);

            expect(ctrl.impressoras[0].selected).toBe(true);
            expect(ctrl.impressoras[1].selected).toBe(false);

            ctrl.selecionar(0);

            expect(ctrl.impressoras[0].selected).toBe(false);
            expect(ctrl.impressoras[1].selected).toBe(false);
        }

        /**
         * Certifica que a seleção de uma impressora é feita corretamente
         */
        function deveSelecionarImpressora() {
            ctrl.impressoras = [new Printer('Printer Test 01'), new Printer('Printer Test 02'), new Printer('Test 03')];

            expect(ctrl.impressoras[0].selected).toBe(false);
            expect(ctrl.impressoras[1].selected).toBe(false);

            ctrl.selecionar(0);

            expect(ctrl.impressoras[0].selected).toBe(true);
            expect(ctrl.impressoras[1].selected).toBe(false);
        }

        /**
         * Certifica que é feito a busca por impressoras
         */
        function deveBuscarImpressoras() {
            $scope.$apply();

            expect(ctrl.impressoras).toBeDefined();
        }

        /**
         * Certifica que o modal é fechado corretamente
         */
        function deveFecharModal() {
            spyOn(uibModalInstanceMock, 'dismiss');

            ctrl.cancel();

            expect(ctrl.rows).toBeNull();
            expect(uibModalInstanceMock.dismiss).toHaveBeenCalled();
        }

        /**
         * @constructor
         */
        function Printer(name, selected) {
            this.name = name;
            this.selected = selected || false;
        }
    }
})();
