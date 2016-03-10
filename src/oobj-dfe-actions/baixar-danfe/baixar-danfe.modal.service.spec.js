/**
 * Suíte de teste do Service: BaixarDANFeModalService
 *
 * Created by ATILLA on 09/03/2016.
 */
(function() {
    'use strict';

    describe('Teste de Serviço: BaixarDANFeModalService', function() {
        var $window,
            BaixarDANFeModalService,
            $scope;

        beforeEach(module('oobj-directives'));
        beforeEach(inject(function(_$window_, _BaixarDANFeModalService_, _$rootScope_) {
            $scope = _$rootScope_.$new();
            $window = _$window_;
            BaixarDANFeModalService = _BaixarDANFeModalService_;
        }));

        it('com array de ids preenchido deve chamar o $window.open para baixar DANFE\'s', deveBaixarDANFE);
        it('com array de ids vazio deve lançar exceção pois é obrigatórios saber os ids', naoDeveBaixarDANFE);

        function deveBaixarDANFE() {
            var ids = [{id: 1, modelo: 'NF-e'}, {id: 2, modelo: 'NF-e'}];

            spyOn($window, 'open');

            BaixarDANFeModalService.baixar(ids, 'NF-e');

            expect($window.open).toHaveBeenCalled();
        }

        function naoDeveBaixarDANFE() {
            var mock = {
                onError: function () {}
            };

            spyOn(mock, 'onError');

            var ids = [];

            BaixarDANFeModalService.baixar(ids, 'NF-e').catch(mock.onError);

            $scope.$apply();

            expect(mock.onError).toHaveBeenCalled();
        }
    });
})();
