/**
 * Suíte de teste do Service: BaixarDACCeModalService
 *
 * Created by ATILLA on 09/03/2016.
 */
(function() {
    'use strict';

    describe('Teste de Serviço: BaixarDACCeModalService', function() {
        var $window,
            BaixarDACCeModalService,
            $scope;

        beforeEach(module('oobj-directives'));
        beforeEach(inject(function(_$window_, _BaixarDACCeModalService_, _$rootScope_) {
            $scope = _$rootScope_.$new();
            $window = _$window_;
            BaixarDACCeModalService = _BaixarDACCeModalService_;
        }));

        it('com array de ids preenchido deve chamar o $window.open para baixar DACCE\'s', deveBaixarDACCE);
        it('com array de ids vazio deve lançar exceção pois é obrigatórios saber os ids', naoDeveBaixarDACCE);

        function deveBaixarDACCE() {
            var ids = [{id: 1, modelo: 'NF-e'}, {id: 2, modelo: 'NF-e'}];

            spyOn($window, 'open');

            BaixarDACCeModalService.baixar(ids, 'NF-e');

            expect($window.open).toHaveBeenCalled();
        }

        function naoDeveBaixarDACCE() {
            var mock = {
                onError: function () {}
            };

            spyOn(mock, 'onError');

            var ids = [];

            BaixarDACCeModalService.baixar(ids, 'NF-e').catch(mock.onError);

            $scope.$apply();

            expect(mock.onError).toHaveBeenCalled();
        }
    });
})();
