(function () {
    'use strict';

    angular.module('oobj-directives')
        .directive('oobjSidebar', oobjSidebar);

    /* @ngInject */
    function oobjSidebar() {
        var directive = {
            templateUrl: 'oobj-sidebar/oobj-sidebar.html',
            restrict: 'E',
            replace: true,
            scope: {
                provider: '='
            },
            link: link
        }

        return directive;

        function link(scope, element, attrs, ngModelCtrl) {
            scope.selectedMenu = 'dashboard';
            scope.collapseVar = 0;
            scope.multiCollapseVar = 0;

            /*if (angular.isUndefined(scope.provider)) {
                scope.provider = [
                    {
                        "icon": "fa-tachometer fa-fw",
                        "label": "Dashboard",
                        "sref": "dashboard.home"
                    },
                    {
                        "icon": "fa-arrow-circle-o-right fa-fw",
                        "label": "Emissão de DF-e",
                        "itens": [
                            {
                                "label": "NF-e Emitidas",
                                "sref": "dashboard.nfe-emissao"
                            },
                            {
                                "label": "NFC-e Emitidas",
                                "sref": "dashboard.nfce-emissao"
                            },
                            {
                                "label": "CT-e Emitidos",
                                "sref": "dashboard.cte-emissao-pesquisa"
                            },
                            {
                                "label": "MDF-e Emitidos [tmp]",
                                "sref": "dashboard.cte-emissao-cadastro"
                            }
                        ]
                    },
                    {
                        "icon": "fa-arrow-circle-o-left fa-fw",
                        "label": "Recebimento de DF-e",
                        "itens": [
                            {
                                "label": "NF-e Recebidas",
                                "sref": "dashboard.nfe-recebimento"
                            },
                            {
                                "label": "NFC-e Recebidas",
                                "sref": "dashboard.nfce-recebimento"
                            },
                            {
                                "label": "CT-e Recebidos",
                                "sref": "dashboard.cte-recebimento"
                            },
                            {
                                "label": "MDF-e Recebidos",
                                "sref": "dashboard.mdfe-recebimento"
                            }
                        ]
                    },
                    {
                        "icon": "fa-share-alt fa-fw",
                        "label": "Integração",
                        "sref": "dashboard.integracao"
                    },
                    {
                        "icon": "fa-map-signs fa-fw",
                        "label": "Portaria",
                        "sref": "dashboard.portaria"
                    },
                    {
                        "icon": "fa-cog fa-fw",
                        "label": "Ferramentas",
                        "sref": "dashboard.ferramentas"
                    },
                    {
                        "icon": "fa-file-pdf-o fa-fw",
                        "label": "Relatórios",
                        "sref": "dashboard.relatorios"
                    },
                    {
                        "icon": "fa-briefcase fa-fw",
                        "label": "Administração",
                        "sref": "dashboard.administracao"
                    },
                    {
                        "icon": "fa-pencil-square-o fa-fw",
                        "label": "Customizações",
                        "sref": "dashboard.customizacoes"
                    }
                ];
            }*/

            scope.check = function (x) {
                if (x == scope.collapseVar) {
                    scope.collapseVar = 0;
                } else {
                    scope.collapseVar = x;
                }
            };

            scope.multiCheck = function (y) {
                if (y == scope.multiCollapseVar) {
                    scope.multiCollapseVar = 0;
                } else {
                    scope.multiCollapseVar = y;
                }
            };
        }
    }
})();
