/**
 * Suíte de teste do Service: BaixarXMLModalService
 *
 * Created by ATILLA on 09/03/2016.
 */
(function() {
    'use strict';

    describe('Teste de Serviço: BaixarXMLModalService', function() {
        var $window,
            BaixarXMLModalService,
            $scope;

        beforeEach(module('oobj-directives'));
        beforeEach(inject(function(_$window_, _BaixarXMLModalService_, _$rootScope_) {
            $scope = _$rootScope_.$new();
            $window = _$window_;
            BaixarXMLModalService = _BaixarXMLModalService_;
        }));

        it('com array de ids preenchido deve chamar o $window.open para baixar XML\'s', deveBaixarXML);
        it('com array de ids vazio deve lançar exceção pois é obrigatórios saber os ids', naoDeveBaixarXML);

        function deveBaixarXML() {
            var ids = [{id: 1, modelo: 'NF-e'}, {id: 2, modelo: 'NF-e'}];

            spyOn($window, 'open');

            BaixarXMLModalService.baixar(ids, true, true, 'NF-e');

            expect($window.open).toHaveBeenCalled();
        }

        function naoDeveBaixarXML() {
            var mock = {
                onError: function () {}
            };

            spyOn(mock, 'onError');

            var ids = [];

            BaixarXMLModalService.baixar(ids, true, true, 'NF-e').catch(mock.onError);

            $scope.$apply();

            expect(mock.onError).toHaveBeenCalled();
        }
    });
})();
