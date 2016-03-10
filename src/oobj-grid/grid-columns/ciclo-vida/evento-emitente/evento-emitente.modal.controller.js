/**
 * Created by ATILLA on 27/01/2016
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .controller('EventoEmitenteModalController', EventoEmitenteModalController);

    EventoEmitenteModalController.$inject = ['$uibModalInstance', '$filter', '$window', 'selectedRow'];

    /** @ngInject */
    function EventoEmitenteModalController($uibModalInstance, $filter, $window, selectedRow) {
        var vm = this;
        
        vm.dfe = selectedRow;

        /** temporário */
        mockarEventoEmitente(vm.dfe);

        vm.saibaMais = function () {
            $window.open(vm.dfe.eventoEmitente.linkSaibaMais, '_self');
            vm.dfe = null;
            $uibModalInstance.close();
        };

        vm.acao = function () {
            $window.open(vm.dfe.eventoEmitente.linkAcao, '_self');
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
        function mockarEventoEmitente(dfe) {
            dfe.eventoEmitente = new Status('Carta de Correção',
                '<p>Carta de Correção Homologada na SEFAZ<br>' +
                'Data/Hora: ' + $filter('date')(new Date(), 'dd/MM/yyyy hh:MM:ss') + '</p>',
                'fa-comments', '#f1c40f', 'http://oobj.wiki.br/index.php?title=P%C3%A1gina_principal',
                'http://oobj.wiki.br/index.php?title=P%C3%A1gina_principal');
        }
    }
})();
