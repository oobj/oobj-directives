/**
 * Teste unitário para os serviços de manifestação do destinatário.
 *
 * Created by Leonardo on 11/02/2016.
 */
(function() {
    'use strict';

    describe('Teste para serviços que realizam a comunicação entre os controladores e o backend para manifestação',
        function() {
            var ManifestarService,
                $scope;

            beforeEach(module('oobj-directives'));
            beforeEach(inject(function(_ManifestarService_, _$rootScope_) {
                $scope = _$rootScope_.$new();
                ManifestarService = _ManifestarService_;
            }));

            it('deve validar as manifestações existentes', deveValidarManifestacoesExistentes);
            it('getManifestacoesSelecionadas deve retornar sempre as chaves estipuladas', 
                selecionadasDevemTerChavesEstipuladas);
            it('getDestinatarios deve retornar sempre as chaves estipuladas', deveTerChavesEstipuladas);
            it('hasJustificativa deve retornar true para DESCONHECIMENTO_OPERACAO',
                deveTerJustificativaParaDesconhecimentoOperacao);
            it('hasJustificativa deve retornar true para OPERACAO_NAO_REALIZADA',
                deveTerJustificativaParaOperacaoNaoRealizada);
            it('hasJustificativa deve retornar false para CIENCIA_OPERACAO',
                naoDeveTerJustificativaParaCienciaOperacao);
            it('hasJustificativa deve retornar false para CONFIRMACAO_OPERACAO',
                naoDeveTerJustificativaParaConfirmacaoOperacao);
            it('hasJustificativa deve retornar false para opção inválida', naoDeveTerJustificativa);

            function deveValidarManifestacoesExistentes() {
                var manifestacoes = [
                    { valor: 'CIENCIA_OPERACAO', descricao: 'Ciência da Operação' },
                    { valor: 'DESCONHECIMENTO_OPERACAO' , descricao: 'Desconhecimento da Operação' },
                    { valor: 'OPERACAO_NAO_REALIZADA', descricao: 'Operação não Realizada' },
                    { valor: 'CONFIRMACAO_OPERACAO', descricao: 'Confirmação da Operação' }
                ];

                ManifestarService.getManifestacoes().then(function(data) {
                    expect(data).toEqual(manifestacoes);
                });

                $scope.$apply();
            }

            function selecionadasDevemTerChavesEstipuladas() {
                var rows = [
                    {numero: 123456, serie: 1, emitente: 'E-Sales', cnpj: '07.385.111/0001-02'},
                    {numero: 789101, serie: 1, emitente: 'E-Sales', cnpj: '07.385.111/0001-02'}
                ];

                ManifestarService.getManifestacoesSelecionadas(rows).then(function(selecionadas) {
                    angular.forEach(selecionadas, function(item) {
                        expect(item.numero).toBeDefined();
                        expect(item.serie).toBeDefined();
                        expect(item.emitente).toBeDefined();
                        expect(item.cnpj).toBeDefined();
                    });
                });

                $scope.$apply();
            }

            function deveTerChavesEstipuladas() {
                ManifestarService.getDestinatarios().then(function(selecionadas) {
                    angular.forEach(selecionadas, function(item) {
                        expect(item.id).toBeDefined();
                        expect(item.nome).toBeDefined();
                    });
                });

                $scope.$apply();
            }
            
            function deveTerJustificativaParaDesconhecimentoOperacao() {
                ManifestarService.hasJustificativa('DESCONHECIMENTO_OPERACAO').then(function(hasJustificativa) {
                    expect(hasJustificativa).toBe(true);
                });

                $scope.$apply();
            }

            function deveTerJustificativaParaOperacaoNaoRealizada() {
                ManifestarService.hasJustificativa('OPERACAO_NAO_REALIZADA').then(function(hasJustificativa) {
                    expect(hasJustificativa).toBe(true);
                });

                $scope.$apply();
            }

            function naoDeveTerJustificativaParaCienciaOperacao() {
                ManifestarService.hasJustificativa('CIENCIA_OPERACAO').then(function(hasJustificativa) {
                    expect(hasJustificativa).toBe(false);
                });

                $scope.$apply();
            }

            function naoDeveTerJustificativaParaConfirmacaoOperacao() {
                ManifestarService.hasJustificativa('CONFIRMACAO_OPERACAO').then(function(hasJustificativa) {
                    expect(hasJustificativa).toBe(false);
                });

                $scope.$apply();
            }

            function naoDeveTerJustificativa() {
                ManifestarService.hasJustificativa('AAAAAAAAAAAAAAAAAAAAA').then(function(hasJustificativa) {
                    expect(hasJustificativa).toBe(false);
                });

                $scope.$apply();
            }
        });
})();
