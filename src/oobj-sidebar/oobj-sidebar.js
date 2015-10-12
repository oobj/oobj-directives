(function () {
    'use strict';

    angular.module('oobjDirectives')
        .directive('oobjSidebar', oobjSidebar);

    oobjSidebar.$inject = [];

    function oobjSidebar() {
        var directive = {
            templateUrl: 'scripts/directives/oobj-sidebar/oobj-sidebar.html',
            restrict: 'E',
            replace: true,
            scope: {
                provider: '='
            },
            controller: sidebarCtrl
        }

        return directive;

        function sidebarCtrl(scope) {
            scope.selectedMenu = 'dashboard';
            scope.collapseVar = 0;
            scope.multiCollapseVar = 0;

            if (angular.isUndefined(scope.provider)) {
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
                                "sref": "dashboard.panels-wells"
                            },
                            {
                                "label": "NFC-e Emitidas",
                                "sref": "dashboard.buttons"
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
                                "sref": "dashboard.buttons"
                            },
                            {
                                "label": "CT-e Recebidos",
                                "sref": "dashboard.notifications"
                            },
                            {
                                "label": "MDF-e Recebidos",
                                "sref": "dashboard.typography"
                            }
                        ]
                    },
                    {
                        "icon": "fa-share-alt fa-fw",
                        "label": "Integração",
                        "sref": "dashboard.home"
                    },
                    {
                        "icon": "fa-map-signs fa-fw",
                        "label": "Portaria",
                        "sref": "dashboard.home"
                    },
                    {
                        "icon": "fa-cog fa-fw",
                        "label": "Ferramentas",
                        "sref": "dashboard.home"
                    },
                    {
                        "icon": "fa-file-pdf-o fa-fw",
                        "label": "Relatórios",
                        "sref": "dashboard.home"
                    },
                    {
                        "icon": "fa-briefcase fa-fw",
                        "label": "Administração",
                        "sref": "dashboard.home"
                    },
                    {
                        "icon": "fa-pencil-square-o fa-fw",
                        "label": "Customizações",
                        "sref": "dashboard.home"
                    }
                ];
            }

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
