!function(){"use strict";function a(){function a(a){a.selectedMenu="dashboard",a.collapseVar=0,a.multiCollapseVar=0,angular.isUndefined(a.provider)&&(a.provider=[{icon:"fa-tachometer fa-fw",label:"Dashboard",sref:"dashboard.home"},{icon:"fa-arrow-circle-o-right fa-fw",label:"Emissão de DF-e",itens:[{label:"NF-e Emitidas",sref:"dashboard.panels-wells"},{label:"NFC-e Emitidas",sref:"dashboard.buttons"},{label:"CT-e Emitidos",sref:"dashboard.cte-emissao-pesquisa"},{label:"MDF-e Emitidos [tmp]",sref:"dashboard.cte-emissao-cadastro"}]},{icon:"fa-arrow-circle-o-left fa-fw",label:"Recebimento de DF-e",itens:[{label:"NF-e Recebidas",sref:"dashboard.nfe-recebimento"},{label:"NFC-e Recebidas",sref:"dashboard.buttons"},{label:"CT-e Recebidos",sref:"dashboard.notifications"},{label:"MDF-e Recebidos",sref:"dashboard.typography"}]},{icon:"fa-share-alt fa-fw",label:"Integração",sref:"dashboard.home"},{icon:"fa-map-signs fa-fw",label:"Portaria",sref:"dashboard.home"},{icon:"fa-cog fa-fw",label:"Ferramentas",sref:"dashboard.home"},{icon:"fa-file-pdf-o fa-fw",label:"Relatórios",sref:"dashboard.home"},{icon:"fa-briefcase fa-fw",label:"Administração",sref:"dashboard.home"},{icon:"fa-pencil-square-o fa-fw",label:"Customizações",sref:"dashboard.home"}]),a.check=function(b){b==a.collapseVar?a.collapseVar=0:a.collapseVar=b},a.multiCheck=function(b){b==a.multiCollapseVar?a.multiCollapseVar=0:a.multiCollapseVar=b}}var b={templateUrl:"scripts/directives/oobj-sidebar/oobj-sidebar.html",restrict:"E",replace:!0,scope:{provider:"="},controller:a};return b}angular.module("oobjDirectives").directive("oobjSidebar",a),a.$inject=[]}();