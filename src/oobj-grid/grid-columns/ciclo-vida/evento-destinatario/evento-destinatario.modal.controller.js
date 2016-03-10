/**
 * Created by ATILLA on 27/01/2016
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .controller('EventoDestinatarioModalController', EventoDestinatarioModalController);

    EventoDestinatarioModalController.$inject = ['$uibModalInstance', '$filter', '$window', 'selectedRow'];

    /** @ngInject */
    function EventoDestinatarioModalController($uibModalInstance, $filter, $window, selectedRow) {
        var vm = this;
        
        vm.dfe = selectedRow;

        /** temporário */
        mockarEventoDestinatario(vm.dfe);

        vm.saibaMais = function () {
            $window.open(vm.dfe.eventoDestinatario.linkSaibaMais, '_self');
            vm.dfe = null;
            $uibModalInstance.close();
        };

        vm.acao = function () {
            $window.open(vm.dfe.eventoDestinatario.linkAcao, '_self');
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
        function mockarEventoDestinatario(dfe) {
            dfe.eventoDestinatario = new Status('Ciência da Operação',
                '<p>Ciência da Operação Homologada<br>' +
                'Data/Hora: ' + $filter('date')(new Date(), 'dd/MM/yyyy hh:MM:ss') + '</p>',
                'fa-hand-pointer-o', '#3498db', 'http://oobj.wiki.br/index.php?title=P%C3%A1gina_principal');
        }
    }
})();
