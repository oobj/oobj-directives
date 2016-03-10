/**
 * Teste do controlador da directiva: manifestar.modal.controller.js.
 *
 * Created by Leonardo on 10/02/2016.
 */
(function() {
    'use strict';

    describe('Teste do controlador da directiva: manifestar.modal.controller.js', function() {
        var $controller, $filter, $location, scope, ctrl, $uibModal, ManifestarService,
            uibModalInstanceMock = {};

        beforeEach(module('oobj-directives'));
        beforeEach(inject(function(_$controller_, _$filter_, _$rootScope_, _$location_,
                                   _$uibModal_, _OobjToastService_, _ManifestarService_) {
            $controller = _$controller_;
            $filter = _$filter_;
            $location = _$location_;
            scope = _$rootScope_.$new();
            $uibModal = _$uibModal_;
            ManifestarService = _ManifestarService_;
            uibModalInstanceMock.close = function() {};

            var selectedRows = [
                { numeroSerieInfo: { numero: 1, serie: 1}, emitenteInfo: { razaoSocial: 1, cnpj: '07385111000102'} },
                { numeroSerieInfo: { numero: 1, serie: 1}, emitenteInfo: { razaoSocial: 1, cnpj: '07385111000102'} },
                { numeroSerieInfo: { numero: 1, serie: 1}, emitenteInfo: { razaoSocial: 1, cnpj: '07385111000102'} },
                { numeroSerieInfo: { numero: 1, serie: 1}, emitenteInfo: { razaoSocial: 1, cnpj: '07385111000102'} }
            ];

            scope.value = new Date();

            ctrl = $controller('ManifestarModalController', {
                $scope: scope,
                $uibModalInstance: uibModalInstanceMock,
                $uibModal: $uibModal,
                selectedRows: selectedRows,
                ManifestarService: ManifestarService,
                $location: $location
            });
        }));

        it('quantidade deve ser a mesma dos parâmetros passados', function() {
            expect(ctrl.quantidadeItens).toBeDefined();
            expect(ctrl.quantidadeItens).toBe(4);
        });

        it('vm.dataEvento deve ser a data atual para exibir corretamente a informação para o usuário', function () {
            expect($filter('date')(ctrl.dataEvento, 'dd/MM/yyyy HH:mm'))
                .toEqual($filter('date')(new Date(), 'dd/MM/yyyy HH:mm'));
        });

        it('ao executar ação, não deve continuar caso justificativa seja menor que o tamanho mínimo', function() {
            ctrl.manifestacao = ['CIENCIA_OPERACAO'];
            ctrl.hasJustificativa = true;
            ctrl.justificativa = '0123456789';

            ctrl.manifestar();

            expect(ctrl.justificativaWarnMessage)
                .toEqual('ERRO: Preencha a justificativa com no mínimo (15) caracteres.');
        });

        it('ao executar ação, não deve continuar caso justificativa seja maior que o tamanho máximo', function() {
            ctrl.manifestacao = ['CIENCIA_OPERACAO'];
            ctrl.hasJustificativa = true;
            ctrl.justificativa = '0123456789 0123456789 0123456789 0123456789 0123456789 0123456789 0123456789 ' +
                '0123456789 0123456789 0123456789 0123456789 0123456789 0123456789 0123456789 0123456789 0123456789 ' +
                '0123456789 0123456789 0123456789 0123456789 0123456789 0123456789 0123456789 0123456789 0123456789 ' +
                '0123456789 0123456789 0123456789 0123456789 0123456789 0123456789 0123456789 0123456789 0123456789 ' +
                '0123456789 0123456789 0123456789 0123456789 0123456789 0123456789 0123456789 0123456789 0123456789 ';

            ctrl.manifestar();

            expect(ctrl.justificativaWarnMessage)
                .toEqual('ERRO: Preencha a justificativa com no máximo (255) caracteres.');
        });

        it('deve chamar o próximo modal de confirmar caso a justificativa e manifestação esteja ok', function() {
            spyOn($uibModal, 'open');
            spyOn(uibModalInstanceMock, 'close');

            ctrl.manifestacao = ['CIENCIA_OPERACAO'];
            ctrl.hasJustificativa = false;
            ctrl.justificativa = '0123456789 0123456789 0123456789 0123456789 0123456789 0123456789 0123456789';

            ctrl.manifestar();

            expect($uibModal.open).toHaveBeenCalled();
            expect(uibModalInstanceMock.close).toHaveBeenCalled();
        });

        it('deve fechar o modal ao executar cancel', function() {
            spyOn(uibModalInstanceMock, 'close');

            ctrl.cancel();

            expect(ctrl.rows).toBeNull();
            expect(uibModalInstanceMock.close).toHaveBeenCalled();
        });

        it('deve testar o watch em vm.manifestacao e o hasJustificativa deve ser false', function() {
            spyOn(ManifestarService, 'getManifestacoes').and.returnValue(['CIENCIA_OPERACAO']);

            scope.$apply('vm.manifestacao = [\'CIENCIA_OPERACAO\']');

            expect(ctrl.hasJustificativa).toBe(false);
        });

        it('deve testar o watch em vm.manifestacao e o hasJustificativa deve ser true', function() {
            spyOn(ManifestarService, 'getManifestacoes').and.returnValue(['DESCONHECIMENTO_OPERACAO']);

            scope.$apply('vm.manifestacao = [\'DESCONHECIMENTO_OPERACAO\']');

            expect(ctrl.hasJustificativa).toBe(true);
        });

        it('deve avisar quando nenhuma manifestação está selecionada', function() {
            ctrl.manifestacao = {};

            ctrl.manifestar();

            expect(ctrl.manifestacaoWarnMessage).toEqual('ERRO: É necessário selecionar um tipo de manifestação.');
        });

        it('deve avisar quando a data selecionada está inválida', function() {
            ctrl.manifestacao = ['DESCONHECIMENTO_OPERACAO'];
            ctrl.justificativa = 'aaaaaaaa aaaaaaaaaa aaaaaaaa aaaaaaaaaa aaaaaaaa aaaaaaaaaa';
            ctrl.dataEvento = null;

            ctrl.manifestar();

            expect(ctrl.dataWarnMessage).toEqual('ERRO: É obrigatório informar a data do evento.');
        });

        /**
         * TODO mockar $location
         */
        xit('deve consultar destinatários quando a página carregada for diferente de nfe-recebidas.pesquisa',
            function() {
                spyOn($location, 'path');
                spyOn(ManifestarService, 'getDestinatarios').and.stub();
                spyOn(ManifestarService, 'getManifestacoes').and.returnValue(['DESCONHECIMENTO_OPERACAO']);

                $location.path('/dashboard/nfe-nao-recebidas.pesquisa');
                scope.$apply('vm.manifestacao = [\'DESCONHECIMENTO_OPERACAO\']');

                expect($location.path).toHaveBeenCalledWith('/dashboard/nfe-nao-recebidas.pesquisa');
                expect(ManifestarService.getDestinatarios).not.toHaveBeenCalled();
                expect(ctrl.destinatarioOpts).toBeUndefined();
            }
        );

    });
})();