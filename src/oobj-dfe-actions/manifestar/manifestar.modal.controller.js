/**
 * Controlador do modal de manifestar onde o usuário seleciona qual manifestação deseja realizar, adiciona uma
 * justificativa e seleciona a data.
 *
 * Created by Leonardo on 01/02/2016.
 */
(function() {
    'use strict';

    var OBJETO_VAZIO = 0;
    var PRIMEIRO_ITEM = 0;
    var TAMANHO_MINIMO_JUSTIFICATIVA = 15;
    var TAMANHO_MAXIMO_JUSTIFICATIVA = 255;

    angular
        .module('oobj-directives')
        .controller('ManifestarModalController', ManifestarModalController);

    ManifestarModalController.$inject = [
        '$scope', '$uibModalInstance', '$uibModal', 'selectedRows', 'ManifestarService', '$location'
    ];

    /** @ngInject */
    function ManifestarModalController($scope, $uibModalInstance, $uibModal, selectedRows, ManifestarService,
                                       $location) {
        var vm = this, now = new Date();

        vm.rows = angular.copy(selectedRows);
        vm.quantidadeItens = vm.rows.length;
        vm.manifestacao = {};
        vm.justificativa = '';

        vm.dataEvento = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes());
        ManifestarService.getManifestacoes().then(function(data) {
            vm.manifestacaoOpts = data;
        });
        vm.hasJustificativa = false;
        vm.exibirSelectDestinatario = false;
        vm.btnManifestarLabel = 'Manifestar';
        vm.tooltipJustificativa = 'A justificativa é opcional para eventos de "Operação não Realizada" ' +
            'mas obrigatória para eventos de "Desconhecimento da Operação". A justificativa deve ter ' +
            'no mínimo ' + TAMANHO_MINIMO_JUSTIFICATIVA + ' caracteres e no máximo ' + TAMANHO_MAXIMO_JUSTIFICATIVA;

        $scope.$watch('vm.manifestacao', function(newValue) {
            ManifestarService.hasJustificativa(newValue[PRIMEIRO_ITEM]).then(function(data) {
                vm.hasJustificativa = data;
            });
        });

        if ($location.path() !== '/dashboard/nfe-recebidas.pesquisa') {
            vm.exibirSelectDestinatario = true;
            ManifestarService.getDestinatarios().then(function(data) {
                vm.destinatarioOpts = data;
            });
            vm.btnManifestarLabel = 'Manifestar e Baixar da Sefaz';
        }

        vm.manifestar = function () {
            if (!hasWarning(vm)) {
                var docs = [];

                adicionarDocumentos(docs, vm);
                openModal($uibModal, $uibModalInstance, vm, docs);
            }
        };

        vm.cancel = function () {
            vm.rows = null;
            $uibModalInstance.close();
        };
    }

    /**
     * Abre o próximo modal que exibe os documentos selecionados para que o usuário confirme a ação.
     *
     * @param $uibModal
     *          ui-bootstrap modal
     * @param $uibModalInstance
     *          a instancia do modal
     * @param vm
     *          view model com as informações preenchidas pelo usuário
     * @param docs
     *          array que será transmitido para o servidor
     */
    function openModal($uibModal, $uibModalInstance, vm, docs) {
        $uibModal.open({
            controller: 'ManifestarConfirmarModalController',
            controllerAs: 'vm',
            templateUrl: 'js/directives/oobj-dfe-actions/manifestar/manifestar-confirmar.modal.html',
            resolve: {
                selectedRows: function () {
                    return docs;
                },
                justificativa: function () {
                    return vm.justificativa;
                },
                dataEvento: function () {
                    return vm.dataEvento;
                }
            }
        });
        $uibModalInstance.close();
    }

    /**
     * Adiciona documentos no array que será enviado para o servidor.
     *
     * @param docs
     *          o array que será transmitido pro servidor no padrão esperado
     * @param vm
     *          view model que contém as rows que serão iteradas
     */
    function adicionarDocumentos(docs, vm) {
        vm.rows.forEach(function (item) {
            var doc = {
                numero: item.numeroSerieInfo.numero,
                serie: item.numeroSerieInfo.serie,
                emitente: item.emitenteInfo.razaoSocial,
                cnpj: item.emitenteInfo.cnpj
            };
            docs.push(doc);
        });
    }

    /**
     * Checa se existe algum warning que será exibido para o usuário para os campos obrigatórios.
     *
     * @param vm
     *          view model que contém os objetos que serão validados
     * @returns {*} true caso tenha algum warning ou false caso esteja tudo como esperado
     */
    function hasWarning(vm) {
        return validarManifestacaoSelect(vm) ||
            validarJustificativaTamanhoMinimo(vm) ||
            validarJustificativaTamanhoMaximo(vm) ||
            validarDataEvento(vm);
    }

    /**
     * Valida o campo manifestacao se está preenchido.
     *
     * @param vm
     *          view model que possui esse campo
     * @returns {boolean} true caso exista algum problema ou false em caso contrário
     */
    function validarManifestacaoSelect(vm) {
        var hasErrors = false;
        if (Object.keys(vm.manifestacao).length === OBJETO_VAZIO) {
            vm.manifestacaoWarnMessage = 'ERRO: É necessário selecionar um tipo de manifestação.';
            hasErrors = true;
        } else {
            vm.manifestacaoWarnMessage = null;
        }
        return hasErrors;
    }

    /**
     * Valida o tamanho mínimo do campo justificativa quando necessário.
     *
     * @param vm view model que possui esse campo
     * @returns {boolean} true caso exista algum problema ou false em caso contrário
     */
    function validarJustificativaTamanhoMinimo(vm) {
        var hasErrors = false;
        if (vm.hasJustificativa && vm.justificativa.length < TAMANHO_MINIMO_JUSTIFICATIVA) {
            vm.justificativaWarnMessage = 'ERRO: Preencha a justificativa com no mínimo (' +
                TAMANHO_MINIMO_JUSTIFICATIVA + ') caracteres.';
            hasErrors = true;
        } else {
            vm.justificativaWarnMessage = null;
        }
        return hasErrors;
    }

    /**
     * Valida o tamanho máximo do campo justificativa quando necessário.
     *
     * @param vm view model que possui esse campo
     * @returns {boolean} true caso exista algum problema ou false em caso contrário
     */
    function validarJustificativaTamanhoMaximo(vm) {
        var hasErrors = false;
        if (vm.hasJustificativa && vm.justificativa.length > TAMANHO_MAXIMO_JUSTIFICATIVA) {
            vm.justificativaWarnMessage = 'ERRO: Preencha a justificativa com no máximo (' +
                TAMANHO_MAXIMO_JUSTIFICATIVA + ') caracteres.';
            hasErrors = true;
        } else {
            vm.justificativaWarnMessage = null;
        }
        return hasErrors;
    }

    /**
     * Valida se a data do evento está preenchida e é diferente de nulo.
     *
     * @param vm view model que possui esse campo
     * @returns {boolean} true caso exista algum problema ou false em caso contrário
     */
    function validarDataEvento(vm) {
        var hasErrors = false;
        if (!vm.dataEvento) {
            vm.dataWarnMessage = 'ERRO: É obrigatório informar a data do evento.';
            hasErrors = true;
        } else {
            vm.dataWarnMessage = null;
        }
        return hasErrors;
    }

})();