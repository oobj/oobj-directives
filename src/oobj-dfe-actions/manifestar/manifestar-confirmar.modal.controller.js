/**
 * Controlador do modal de Confirmar Manifestação.
 * Esse modal abre após o usuário selecionar documentos para serem manifestados.
 * Ele exibe todos os documentos selecionados e pede para o usuário confirmar essa pois ela é sem volta.
 *
 * Created by Leonardo on 01/02/2016.
 */
(function () {
    'use strict';

    var SEM_DOCUMENTOS = 0;
    var UM_DOCUMENTO = 1;

    angular.module('oobj-directives')
        .controller('ManifestarConfirmarModalController', ManifestarConfirmarModalController);

    ManifestarConfirmarModalController.$inject =
        ['$uibModalInstance', 'ModalUtil', 'ManifestarService', 'selectedRows', 'justificativa', 'dataEvento'];

    /** @ngInject */
    function ManifestarConfirmarModalController($uibModalInstance,
                                                ModalUtil,
                                                ManifestarService,
                                                selectedRows,
                                                justificativa,
                                                dataEvento) {
        var vm = this;

        ManifestarService.getManifestacoesSelecionadas(selectedRows).then(function(data) {
            vm.docs = data;
        });

        vm.acao = function () {
            if (!vm.docs || vm.docs.length === SEM_DOCUMENTOS) {
                ModalUtil.msgError('Nenhum documento selecionado para manifestação');
            } else {
                ModalUtil.msgSuccess('Manifestação(ões) realizada(s) com sucesso.');
            }
            vm.docs = null;
            $uibModalInstance.close();
        };

        vm.cancel = function () {
            vm.docs = null;
            $uibModalInstance.close();
        };

        /*
         * Remove um item do array vm.docs quando o usuário clica no X presente na tela.
         */
        vm.remover = function (doc) {
            // obtem o indice do elemento no array
            var index = vm.docs.indexOf(doc);
            // retira apenas essa posição do array
            vm.docs.splice(index, UM_DOCUMENTO);
        };

    }
})();