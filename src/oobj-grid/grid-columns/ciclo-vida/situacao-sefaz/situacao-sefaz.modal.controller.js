/**
 * Created by ATILLA on 27/01/2016
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .controller('SituacaoSefazModalController', SituacaoSefazModalController);

    SituacaoSefazModalController.$inject = ['$uibModalInstance', '$filter', '$window', 'selectedRow'];

    /** @ngInject */
    function SituacaoSefazModalController($uibModalInstance, $filter, $window, selectedRow) {
        var vm = this;
        
        vm.dfe = selectedRow;

        /** temporário */
        mockarSituacaoSefaz(vm.dfe);

        vm.saibaMais = function () {
            $window.open(vm.dfe.situacaoSefaz.linkSaibaMais, '_self');
            vm.dfe = null;
            $uibModalInstance.close();
        };

        vm.acao = function () {
            $window.open(vm.dfe.situacaoSefaz.linkAcao, '_self');
            vm.dfe = null;
            $uibModalInstance.close();
        };

        vm.cancel = function () {
            vm.dfe = null;
            $uibModalInstance.dismiss('cancel');
        };

        /** temporário */
        function Status(titulo, descricao, icone, cor, linkSaibaMais, linkAcao) {
            this.titulo = titulo;
            this.descricao = descricao;
            this.icone = icone;
            this.cor = cor;
            this.linkSaibaMais = linkSaibaMais;
            this.linkAcao = linkAcao;
        }

        /** temporário */
        function mockarSituacaoSefaz(dfe) {
            dfe.situacaoSefaz = new Status('Autorizado',
                '<p>Documento Autorizado na SEFAZ<br>' +
                'Data/Hora: ' + $filter('date')(new Date(), 'dd/MM/yyyy hh:MM:ss') + '</p>',
                'fa-check', '#2ecc71', 'http://oobj.wiki.br/index.php?title=P%C3%A1gina_principal');
        }
    }
})();
