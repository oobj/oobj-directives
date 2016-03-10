/**
 * Diretiva de ações sobre documentos fiscais.
 * Trabalha com modais onde o usuário tem mais detalhes do que pode ser feito e confirmado.
 *
 * O item que receberá a ação pode ser um ou vários.
 * Para vários deve ser utilizados o scope.gridScope.getSelectedRows() da oobj-grid.
 * Para apenas um deve ser utilizado o scope.item.
 *
 * Atualmente possui as seguintes ações: baixar xml, baixar danfe, realizar manifestações, reconsultar dfes na Sefaz,
 * fazer e desfazer entrada,
 *
 * Created by Renato on 11/12/2015.
 * Created by Leonardo
 * Created by Átilla
 */
(function () {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjDfeActions', oobjDfeActions);

    oobjDfeActions.$inject = ['$uibModal', '$log', 'ModalUtil'];

    /** @ngInject */
    function oobjDfeActions($uibModal, $log, ModalUtil) {
        return {
            templateUrl: 'js/directives/oobj-dfe-actions/oobj-dfe-actions.html',
            scope: {
                gridScope: '=',
                modeloDocumento: '=',

                // choose which buttons to display
                hideUploadXml: '=?',
                hideDownloadDanfe: '=?',
                hideDownloadXml: '=?',
                hideManifestar: '=?',
                hideReconsultar: '=?',
                hideMaisAcoes: '=?',
                hideEntrada: '=?',
                hideGerarRetorno: '=?'
            },
            link: link
        };

        function link(scope) {
            if (!scope.modeloDocumento) {
                $log.warn('O Modelo de Documento deve ser especificado <oobj-dfe-actions>');
            }

            scope.openModalUploadXML = openModalUploadXML($uibModal);
            scope.openModalBaixarXML = openModalBaixarXML(scope, ModalUtil, $uibModal);
            scope.openModalBaixarDANFe = openModalBaixarDANFe(scope, ModalUtil, $uibModal);
            scope.openModalManifestar = openModalManifestar(scope, ModalUtil, $uibModal);
            scope.openModalReconsultarSefaz = openModalReconsultarSefaz(scope, ModalUtil, $uibModal);

            scope.dropdownItems = {
                downloadDACCe: {
                    label: 'Baixar DACCe',
                    action: openModalBaixarDAACCe(scope, ModalUtil, $uibModal)
                },
                revalidarXML: {
                    label: 'Revalidar Arquivo XML',
                    action: openModalRevalidarArquivo(scope, ModalUtil, $uibModal)
                },
                diagnosticoFiscal: {
                    label: 'Diagnóstico Fiscal',
                    action: openModalDiagnosticoFiscal(scope, ModalUtil, $uibModal)
                },
                reconhecerDocumentos: {
                    label: 'Reconhecer Documento(s)',
                    action: openModalReconhecerDocumentos(scope, ModalUtil, $uibModal)
                },
                reentregarDocumentos: {
                    label: 'Reentregar Documento(s)',
                    action: openModalReentregarDocumentos(scope, ModalUtil, $uibModal)
                },
                reentregarResumo: {
                    label: 'Reentregar Resumo(s)',
                    action: openModalReentregarResumo(scope, ModalUtil, $uibModal)
                },
                reprocessarDocumentos: {
                    label: 'Reprocessar Documento(s)',
                    action: openModalReprocessar(scope, ModalUtil, $uibModal)
                },
                imprimir: {
                    label: 'Imprimir Documento(s)',
                    action: openModalImprimir(scope, ModalUtil, $uibModal)
                },
                cancelar: {
                    label: 'Cancelar DF-e',
                    action: openModalCancelarDFe(scope, ModalUtil, $uibModal)
                },
                cartaCorrecao: {
                    label: 'Carta de Correção',
                    action: openModalCartaCorrecao(scope, ModalUtil, $uibModal)
                },
                enviarEmail: {
                    label: 'Enviar DF-e por E-mail',
                    action: openModalEnviarEmail(scope, ModalUtil, $uibModal)
                }
            };

            scope.itensEntrada = {
                registrarEntrada: {
                    label: 'Registrar Entrada',
                    action: openModalRegistrarEntrada(scope, ModalUtil, $uibModal)
                },
                desfazerEntrada: {
                    label: 'Desfazer Entrada',
                    action: openModalDesfazerEntrada(scope, ModalUtil, $uibModal)
                }
            };

            scope.itensGerarRetorno = {
                gerarRetornoEventos: {
                    label: 'Retorno de Evento(s)',
                    action: openModalRetornoEventos(scope, ModalUtil, $uibModal)
                },
                gerarRetornoAutorizacao: {
                    label: 'Retorno de Autorização',
                    action: openModalRetornoAutorizacao(scope, ModalUtil, $uibModal)
                }
            };
        }

    }

    function openModalUploadXML($uibModal) {
        return openModalWithoutResolve($uibModal, 'UploadXMLModalController',
            'js/directives/oobj-dfe-actions/upload-xml/upload-xml.modal.html');
    }

    function openModalBaixarXML(scope, ModalUtil, $uibModal) {
        return openModal(scope, 'BaixarXMLModalController',
            'js/directives/oobj-dfe-actions/baixar-xml/baixar-xml.modal.html', ModalUtil, $uibModal);
    }

    function openModalBaixarDANFe(scope, ModalUtil, $uibModal) {
        return openModal(scope, 'BaixarDANFeModalController',
            'js/directives/oobj-dfe-actions/baixar-danfe/baixar-danfe.modal.html', ModalUtil, $uibModal);
    }

    function openModalManifestar(scope, ModalUtil, $uibModal) {
        return openModal(scope, 'ManifestarModalController',
            'js/directives/oobj-dfe-actions/manifestar/manifestar.modal.html', ModalUtil, $uibModal);
    }

    function openModalRegistrarEntrada(scope, ModalUtil, $uibModal) {
        return openModal(scope, 'RegistrarEntradaModalController',
            'js/directives/oobj-dfe-actions/registrar-entrada/registrar-entrada.modal.html', ModalUtil, $uibModal);
    }

    function openModalDesfazerEntrada(scope, ModalUtil, $uibModal) {
        return openModal(scope, 'DesfazerEntradaModalController',
            'js/directives/oobj-dfe-actions/desfazer-entrada/desfazer-entrada.modal.html', ModalUtil, $uibModal);
    }

    function openModalBaixarDAACCe(scope, ModalUtil, $uibModal) {
        return openModal(scope, 'BaixarDANFeModalController',
            'js/directives/oobj-dfe-actions/baixar-dacce/baixar-dacce.modal.html', ModalUtil, $uibModal);
    }

    function openModalRevalidarArquivo(scope, ModalUtil, $uibModal) {
        return openModal(scope, 'RevalidarArquivoModalController',
            'js/directives/oobj-dfe-actions/revalidar-arquivo/revalidar-arquivo.modal.html', ModalUtil, $uibModal);
    }

    function openModalDiagnosticoFiscal(scope, ModalUtil, $uibModal) {
        return openModal(scope, 'DiagnosticoFiscalModalController',
            'js/directives/oobj-dfe-actions/diagnostico-fiscal/diagnostico-fiscal.modal.html', ModalUtil, $uibModal);
    }

    function openModalReconhecerDocumentos(scope, ModalUtil, $uibModal) {
        return openModal(scope, 'ReconhecerDocumentosModalController',
            'js/directives/oobj-dfe-actions/reconhecer-documentos/reconhecer-documentos.modal.html', ModalUtil,
            $uibModal);
    }

    function openModalReentregarDocumentos(scope, ModalUtil, $uibModal) {
        return openModal(scope, 'ReentregarDocumentosModalController',
            'js/directives/oobj-dfe-actions/reentregar-documentos/reentregar-documentos.modal.html', ModalUtil,
            $uibModal);
    }

    function openModalReentregarResumo(scope, ModalUtil, $uibModal) {
        return openModal(scope, 'ReentregarResumoModalController',
            'js/directives/oobj-dfe-actions/reentregar-resumo/reentregar-resumo.modal.html', ModalUtil, $uibModal);
    }

    function openModalReprocessar(scope, ModalUtil, $uibModal) {
        return openModal(scope, 'ReprocessarModalController',
            'js/directives/oobj-dfe-actions/reprocessar/reprocessar.modal.html', ModalUtil, $uibModal);
    }

    function openModalImprimir(scope, ModalUtil, $uibModal) {
        return openModal(scope, 'ImprimirModalController',
            'js/directives/oobj-dfe-actions/imprimir/imprimir.modal.html', ModalUtil, $uibModal);
    }

    function openModalCancelarDFe(scope, ModalUtil, $uibModal) {
        return openModal(scope, 'CancelarDFeModalController',
            'js/directives/oobj-dfe-actions/cancelar-dfe/cancelar-dfe.modal.html', ModalUtil, $uibModal, 'lg');
    }

    function openModalCartaCorrecao(scope, ModalUtil, $uibModal) {
        return openModal(scope, 'CartaCorrecaoModalController',
            'js/directives/oobj-dfe-actions/carta-correcao/carta-correcao.modal.html', ModalUtil, $uibModal,
            'lg');
    }

    function openModalEnviarEmail(scope, ModalUtil, $uibModal) {
        return openModal(scope, 'EnviarEmailModalController',
            'js/directives/oobj-dfe-actions/enviar-email/enviar-email.modal.html', ModalUtil, $uibModal, 'lg');
    }

    function openModalRetornoEventos(scope, ModalUtil, $uibModal) {
        return openModal(scope, 'RetornoEventosModalController',
            'js/directives/oobj-dfe-actions/retorno-eventos/retorno-eventos.modal.html', ModalUtil, $uibModal);
    }

    function openModalRetornoAutorizacao(scope, ModalUtil, $uibModal) {
        return openModal(scope, 'RetornoAutorizacaoModalController',
            'js/directives/oobj-dfe-actions/retorno-autorizacao/retorno-autorizacao.modal.html', ModalUtil, $uibModal);
    }

    function openModalReconsultarSefaz(scope, ModalUtil, $uibModal) {
        return openModal(scope, 'ReconsultarSefazModalController',
            'js/directives/oobj-dfe-actions/reconsultar-sefaz/reconsultar-sefaz.modal.html', ModalUtil, $uibModal);
    }

    /**
     * Abre um modal do ui-bootstrap injetando itens da grid
     *
     * @param scope
     * @param controller
     * @param templateUrl
     * @param size
     * @param ModalUtil
     * @param $uibModal
     * @returns {Function}
     */
    function openModal(scope, controller, templateUrl, ModalUtil, $uibModal, size) {
        return function () {
            var selectedRows = scope.gridScope ? scope.gridScope.getSelectedRows() : [];
            if (!selectedRows.length && !scope.item) {
                ModalUtil.msgWarning('Você não selecionou nenhum documento. ' +
                    'É necessário selecionar pelo menos 1 documento.');
            } else {
                $uibModal.open({
                    controller: controller,
                    controllerAs: 'vm',
                    templateUrl: templateUrl,
                    size: size,
                    resolve: {
                        selectedRows: function () {
                            return selectedRows;
                        },
                        modeloDocumento: function () {
                            return scope.modelo;
                        },
                        item: function () {
                            return scope.item;
                        }
                    }
                });
            }
        };
    }

    /**
     * Abre um modal sem a necessidade de injetar objetos do scope
     *
     * @param $uibModal
     * @param controller
     * @param templateUrl
     * @param size
     * @returns {Function}
     */
    function openModalWithoutResolve($uibModal, controller, templateUrl, size) {
        return function () {
            $uibModal.open({
                controller: controller,
                controllerAs: 'vm',
                templateUrl: templateUrl,
                size: size
            });
        };
    }
})();
