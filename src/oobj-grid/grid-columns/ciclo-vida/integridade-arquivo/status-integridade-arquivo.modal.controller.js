/**
 * Created by ATILLA on 27/01/2016
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .controller('StatusIntegridadeArquivoModalController', StatusIntegridadeArquivoModalController);

    StatusIntegridadeArquivoModalController.$inject = ['$uibModalInstance', '$window', 'selectedRow'];

    /** @ngInject */
    function StatusIntegridadeArquivoModalController($uibModalInstance, $window, selectedRow) {
        var vm = this;
        
        vm.dfe = selectedRow;

        // mock temporário
        mockarStatusIntegridade(vm.dfe);

        vm.saibaMais = function () {
            $window.open(vm.dfe.statusIntegridadeArquivo.linkSaibaMais, '_self');
            vm.dfe = null;
            $uibModalInstance.close();
        };

        vm.acao = function () {
            $window.open(vm.dfe.statusIntegridadeArquivo.linkAcao, '_self');
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
        function mockarStatusIntegridade(dfe) {
            dfe.statusIntegridadeArquivo = new Status('XML com falha estrutural',
                '<p>Indica que o arquivo XML possui alguma falha estrutural de acordo com o <br>' +
                'schema estabelecido pela Sefaz. Para corrigir, solicite ao fornecedor o arquivo  <br>' +
                'XML com estrutura válida ou realize o download direto da Sefaz (possível  <br>' +
                'apenas com a manifestação do destinatário).</p>',
                'fa-file-code-o', '#e74c3c', 'http://oobj.wiki.br/index.php?title=P%C3%A1gina_principal',
                'http://oobj.wiki.br/index.php?title=P%C3%A1gina_principal');
        }
    }
})();
