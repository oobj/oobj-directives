/**
 * Controller responsável por abrir um modal para efetuar o upload de arquivos XML.
 *
 * Created by ATILLA on 10/02/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .controller('UploadXMLModalController', UploadXMLModalController);

    /** @ngInject */
    function UploadXMLModalController($uibModalInstance, $scope, UploadXMLModalService, OobjToastService) {
        // constantes usados apenas neste controller
        var UM_ITEM = 1;
        var MAX_FILES_PERMITIDO = 40;
        var LENGTH_ARRAY_VAZIO = 0;
        var ZERO_POR_CENTO = 0;
        var CEM_POR_CENTO = 100;

        // $scope
        var vm = this;

        // variaveis e functions usadas na tela - scope do controller
        vm.files = null;
        vm.fileWrappers = null;
        vm.allCompleted = false;
        vm.deveCancelar = false;
        vm.remover = remover;
        vm.cancelar = cancelar;
        vm.upload = upload;
        vm.fecharModal = fecharModal;
        vm.desfazerCancelamento = desfazerCancelamento;
        vm.cancelarUploads = cancelarUploads;
        vm.success = success;

        // Watch necessário para adicionar os arquivos selecionados em Wrappers
        $scope.$watch('vm.files', wrapFiles);

        /**
         * Adiciona cada arquivo selecionado em um Wrapper e adiciona todos em um array de wrappers
         */
        function wrapFiles() {
            // verifica se há arquivos selecionados
            if (vm.files) {
                // prepara o array para novos arquivos de seleção
                vm.fileWrappers = [];
                vm.limiteExcedido = false;

                // adiciona cada arquivo em um wrapper
                vm.files.forEach(function(file) {
                    // máximo permitido é 40
                    if (vm.fileWrappers.length < MAX_FILES_PERMITIDO) {
                        vm.fileWrappers.push(new FileWrapper(file));
                    } else {
                        // nao faz upload dos arquivos excedentes
                        vm.limiteExcedido = true;
                    }
                });

                // alerta o usuário que o máximo de arquivos permitido foi excedido
                if (vm.limiteExcedido === true) {
                    OobjToastService.msgWarning('O limite máximo para upload é de 40 arquivos.');
                }

                // novos arquivos adicionados, 0% concluído
                vm.allCompleted = false;
            }
        }

        /**
         * Funcao executada quando o usuário termina de selecionar arquivos e clicka em Fazer Upload
         */
        function upload() {
            // Valida se há arquivos selecionados antes da chamada ao service de upload
            if (vm.fileWrappers && vm.fileWrappers.length > LENGTH_ARRAY_VAZIO) {
                UploadXMLModalService.uploadMultiple(vm.fileWrappers, success, error);
            } else {
                OobjToastService.msgWarning('É necessário selecionar arquivo(s) para fazer upload!');
            }
        }

        /**
         * Remove o item selecionado e aborta o upload caso esteja em andamento
         *
         * @param index
         *          Posição no array do file que deve ser removido
         */
        function remover(index) {
            // obtem o arquivo selecionado (wrapper)
            var wrap = vm.fileWrappers[index];

            // verifica se o upload está em andamento - ainda não está em 100%
            if (wrap.upload && wrap.file.progress < CEM_POR_CENTO) {
                // aborta o upload em andamento
                wrap.upload.abort();
            }

            // remove o arquivo da lista
            vm.fileWrappers.splice(index, UM_ITEM);
        }

        /**
         * Callback executando quando cada upload é concluído
         */
        function success() {
            // total requerido em porcentagem - 100%
            var totalPercentRequired = vm.fileWrappers.length * CEM_POR_CENTO;
            var totalPercentAtual = ZERO_POR_CENTO;

            // calcula a porcentagem de uploads concluídos
            vm.fileWrappers.forEach(function (wrap) {
                // soma a porcentagem do arquivo com a porcentagem total atual
                totalPercentAtual += wrap.file.progress;
            });

            // verifica se todos os uploads foram concluídos (se é 100%)
            if (totalPercentRequired === totalPercentAtual) {
                vm.allCompleted = true;
            }
        }

        /**
         * Callback de erro executando quando há uma falha no upload
         *
         * @param erro
         *          String/Objeto com a descrição do erro
         */
        function error(erro) {
            if (typeof erro === 'string') {
                OobjToastService.msgError(erro);
            }
        }

        /**
         * Funcao executada quando o usuário clica no botão Cancelar
         */
        function cancelar() {
            vm.deveCancelar = true;
        }

        /**
         * Funcao executada quando o usuário NÃO confirma o cancelamento
         */
        function desfazerCancelamento() {
            vm.deveCancelar = false;
        }

        /**
         * Cancela todos os uploads em andamento
         */
        function cancelarUploads() {
            // efetua o abort do upload apenas se o cancelamento foi solicitado pelo botão Cancelar especificamente
            if (vm.deveCancelar === true && vm.fileWrappers) {
                vm.fileWrappers.forEach(function (wrap) {
                    // realiza o abort do upload apenas se ainda não foi concluído
                    if (wrap.upload && wrap.file.progress < CEM_POR_CENTO) {
                        wrap.upload.abort();
                    }
                });

                // reseta os vetores de arquivos para upload
                vm.files = null;
                vm.fileWrappers = null;
            }

            vm.fecharModal();
        }

        /**
         * Fecha o Modal de Upload de XML
         */
        function fecharModal() {
            $uibModalInstance.dismiss('cancel');
        }

        /**
         * @param file
         *          Arquivo do usuário a ser feito upload
         * @param upload
         *          Função que faz chamada a API para fazer upload do arquivo
         * @constructor
         */
        function FileWrapper(file, upload) {
            this.file = file;
            this.upload = upload;
        }
    }
    UploadXMLModalController.$inject = ['$uibModalInstance', '$scope', 'UploadXMLModalService', 'OobjToastService'];
})();
