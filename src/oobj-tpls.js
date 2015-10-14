angular.module('oobj-directives.templates', []).run(['$templateCache', function($templateCache) {
  "use strict";
  $templateCache.put("oobj-autocomplete/oobj-autocomplete.html",
    "<div ng-class=colspan class=\"form-group form-group-{{inputSize}}\"><label class=control-label ng-if=\"showLabel != false && label != undefined\" for={{id}}><span ng-bind=label></span> <span style=\"color: red\" ng-show=ngRequired>*</span></label><div class=input-group><input id={{id}} class=form-control ng-model=ngModel placeholder={{placeholder}} typeahead=\"item as item[itemLabel] for item in getItems()($viewValue)\" typeahead-loading=loadingItems typeahead-no-results=noResults ng-disabled=ngDisabled ng-readonly=ngReadonly ng-change=onChange($event) ng-blur=onBlur($event) maxlength={{maxlength}}><div class=input-group-btn><button type=button ng-click=limpar() class=\"btn btn-default btn-{{inputSize}}\" style=\"box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.6)\"><i class=\"fa fa-times\"></i></button></div></div><div class=help-block><i ng-show=loadingItems class=\"fa fa-refresh\"></i><div ng-show=noResults><i class=\"fa fa-times\"></i> Nenhum resultado encontrado</div></div></div>");
  $templateCache.put("oobj-button/oobj-button.html",
    "<button type=button class=btn ng-class=btnClass ng-style=btnStyle ng-disabled=ngDisabled><i class=fa ng-class=icon></i> <span ng-bind=label></span></button>");
  $templateCache.put("oobj-chart/oobj-chart-bar.html",
    "<div class=\"{{ colspan }}\" id=\"{{ chartId }}\"><div class=\"panel panel-default\"><div class=panel-heading>{{ title }}</div><div class=panel-body><canvas class=\"chart chart-bar chart-xl\" chart-data=ngModel.data chart-labels=ngModel.labels chart-legend=true chart-click=ngModel.onClick chart-series=ngModel.series></canvas></div></div></div>");
  $templateCache.put("oobj-chart/oobj-chart-doughnut.html",
    "<div class=\"{{ colspan }}\" id=\"{{ chartId }}\"><div class=\"panel panel-default\"><div class=panel-heading>{{ title }}</div><div class=panel-body><canvas class=\"chart chart-doughnut chart-xs\" chart-data=ngModel.data chart-labels=ngModel.labels chart-legend=true></canvas></div></div></div>");
  $templateCache.put("oobj-chart/oobj-chart-line.html",
    "<div class=\"{{ colspan }}\" id=line-chart><div class=\"panel panel-default\"><div class=panel-heading>{{ title }}</div><div class=panel-body><canvas class=\"chart chart-line chart-xl\" chart-data=ngModel.data chart-labels=ngModel.labels chart-legend=true chart-click=ngModel.onClick chart-series=ngModel.series></canvas></div></div></div>");
  $templateCache.put("oobj-chart/oobj-chart-pie.html",
    "<div class=\"{{ colspan }}\" id=\"{{ chartId }}\"><div class=\"panel panel-default\"><div class=panel-heading>{{ title }}</div><div class=panel-body><canvas class=\"chart chart-pie chart-xs\" chart-data=ngModel.data chart-labels=ngModel.labels chart-legend=true></canvas></div></div></div>");
  $templateCache.put("oobj-chart/oobj-chart-radar.html",
    "<div class=\"{{ colspan }}\" id=\"{{ chartId }}\"><div class=\"panel panel-default\"><div class=panel-heading>{{ title }}</div><div class=panel-body><canvas class=\"chart chart-radar\" chart-data=ngModel.data chart-labels=ngModel.labels chart-legend=true chart-click=ngModel.onClick chart-series=ngModel.series></canvas></div></div></div>");
  $templateCache.put("oobj-checkbox/oobj-checkbox.html",
    "<div class=\"checkbox c-checkbox\" ng-class=checkboxClass ng-style=checkboxStyle><label><input type=checkbox id={{id}} ng-model=\"ngModel\"> <span class=\"fa fa-check\"></span> {{ label }}</label></div>");
  $templateCache.put("oobj-container/oobj-container.html",
    "<div><div class=row ng-if=\"title != undefined\"><div class=col-lg-12><h5 class=page-header><span ng-bind=title></span></h5></div></div><div class=row><div ng-transclude></div></div></div>");
  $templateCache.put("oobj-crud/oobj-crud.html",
    "<oobj-container title={{title}}><form role=form novalidate><oobj-panel colspan=col-lg-12><div class=row ng-if=showBtnOnTop style=\"padding-bottom: 15px\"><ng-include src=\"'formActions'\"></ng-include></div><div class=container-fluid><div class=row><div ng-transclude></div></div></div><div class=row ng-if=showBtnOnBottom><ng-include src=\"'formActions'\"></ng-include></div></oobj-panel></form></oobj-container><script type=text/ng-template id=formActions><div class=\"row\">\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <oobj-button label=\"Salvar\" class=\"pull-right\" style=\"padding-right: 15px;\" btn-class=\"btn-primary\"\n" +
    "                         icon=\"fa-floppy-o\" ng-click=\"vm.salvar()\" ng-if=\"showBtnSalvar\">\n" +
    "            </oobj-button>\n" +
    "\n" +
    "            <oobj-button label=\"Excluir\" class=\"pull-right\" style=\"padding-right: 15px;\" btn-class=\"btn-danger\"\n" +
    "                         icon=\"fa-trash-o\" ng-click=\"vm.excluir()\" ng-if=\"showBtnExcluir\">\n" +
    "            </oobj-button>\n" +
    "\n" +
    "            <oobj-button label=\"Limpar\" class=\"pull-right\" style=\"padding-right: 15px;\" btn-class=\"btn-default\"\n" +
    "                         icon=\"fa-eraser\" ng-click=\"vm.limpar()\" ng-if=\"showBtnLimpar\">\n" +
    "            </oobj-button>\n" +
    "        </div>\n" +
    "    </div></script>");
  $templateCache.put("oobj-date-picker/oobj-date-picker.html",
    "<div class=\"form-group form-group-{{inputSize}}\" ng-class=colspan><label ng-show=\"showLabel || label != undefined\"><span ng-bind=label></span> <span style=\"color: red\" ng-show=ngRequired>*</span></label><div class=input-group><input date-range-picker options=opts name={{name}} ng-model=ngModel ng-disabled=ngDisabled ng-required=ngRequired ng-change=onChange($event) ng-blur=onBlur($event) ng-keyup=onKeyup($event) ng-keydown=onKeydown($event) ng-readonly=ngReadonly class=\"form-control date-picker\"><div class=input-group-btn><button type=button class=\"btn btn-default btn-{{inputSize}}\" style=\"box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.6)\"><i class=\"fa fa-calendar\"></i></button></div></div></div>");
  $templateCache.put("oobj-footer/oobj-footer.html",
    "<footer style=\"background: #2196F3;\n" +
    "                  color: #fff;\n" +
    "                  border-color: #000066;\n" +
    "                  height: 100%;\n" +
    "                  text-align: right;\n" +
    "                  font-size: x-small;\n" +
    "                  padding-right: 15px\">&copy;{{ year | date:'yyyy'}} Painel de Gest&atilde;o<br>Powered by Oobj - v{{version}} [{{generatedData | date:'dd-MM-yyyy'}}]</footer>");
  $templateCache.put("oobj-grid/oobj-grid.html",
    "<div style=\"padding-top: 15px\" class={{colspan}}><div ui-grid=gridOptions ui-grid-selection ng-style=gridStyle class=table ng-cloak><div style=\"position: absolute; top : 0px; opacity: 0.25; font-size: 2em; width: 100%; text-align: center; z-index: 1000\" ng-show=!gridOptions.data.length>Nenhum resultado encontrado</div></div></div>");
  $templateCache.put("oobj-input-container/oobj-input-container.html",
    "<div ng-class=colspan class=form-group><label class=control-label ng-if=\"showLabel != false && label != undefined\"><span ng-bind=label></span> <span style=\"color: red\" ng-show=ngRequired>*</span></label><div ng-transclude></div></div>");
  $templateCache.put("oobj-input-text/oobj-input-text.html",
    "<div ng-class=colspan class=\"form-group form-group-{{inputSize}}\"><label class=control-label ng-if=\"showLabel != false && label != undefined\" for={{id}}><span ng-bind=label></span> <span style=\"color: red\" ng-show=ngRequired>*</span></label><div class=input-group><input id={{id}} type={{type}} class=form-control ng-model=ngModel ng-disabled=ngDisabled ng-required=ngRequired ng-change=onChange($event) ng-blur=onBlur($event) ng-keyup=onKeyup($event) ng-keydown=onKeydown($event) ng-readonly=ngReadonly placeholder={{placeholder}} maxlength={{maxlength}} max={{max}} min=\"{{min}}\"><div class=input-group-btn><button type=button ng-click=limpar() style=\"box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.6)\" class=\"btn btn-default btn-{{inputSize}}\"><i class=\"fa fa-times\"></i></button></div></div></div>");
  $templateCache.put("oobj-modal/oobj-modal.html",
    "<div style=\"padding-top: 15px; padding-left: 15px\"><oobj-button colspan={{colspan}} data-toggle=modal data-target=#oobjModal ng-show=showBtnOpen label={{labelBtnOpen}}></oobj-button><div id=oobjModal class=\"modal fade\" role=dialog><div class=modal-dialog><div class=modal-content><div class=modal-header><button type=button class=close data-dismiss=modal>&times;</button><h4 class=modal-title ng-show=\"title != undefined\"><span ng-bind=title></span></h4></div><div class=modal-body style=\"min-height: 120px\"><div ng-transclude></div></div><div class=modal-footer ng-show=showBtnClose><oobj-button data-dismiss=modal label={{labelBtnClose}} colspan=col-md-2></oobj-button></div></div></div></div></div>");
  $templateCache.put("oobj-panel/oobj-panel.html",
    "<div ng-class=colspan><div class=panel ng-class=panelClass style=\"margin-bottom: 0px\"><div class=panel-heading ng-if=\"title != undefined\"><span ng-bind=title></span></div><div class=panel-body><div class=container-fluid><div class=row><div ng-transclude></div></div></div></div><div class=panel-footer ng-if=\"footer != undefined\"><span ng-bind=footer></span></div></div></div>");
  $templateCache.put("oobj-pesquisa/oobj-pesquisa.html",
    "<oobj-container title={{title}}><oobj-panel colspan=col-lg-12><div class=container-fluid><div class=row><div ng-transclude></div><div class=row><oobj-button label=Pesquisar class=pull-right style=\"padding-right: 15px\" btn-class=btn-primary icon=fa-search ng-click=vm.pesquisar() ng-if=showBtnPesquisar></oobj-button><oobj-button label=Limpar class=pull-right style=\"padding-right: 15px\" btn-class=btn-success icon=fa-eraser ng-click=vm.limpar() ng-if=showBtnLimpar></oobj-button><oobj-button label=\"Pesq. Avançada\" class=pull-right style=\"padding-right: 15px\" btn-class=btn-default icon=fa-search-plus ng-click=vm.pesquisaAvancada() ng-if=showBtnPesquisaAvancada></oobj-button></div></div></div><div class=row ng-if=vm.data><oobj-grid colspan=col-md-12 data=vm.data grid-options=gridOptions></oobj-grid></div></oobj-panel></oobj-container>");
  $templateCache.put("oobj-radio/oobj-radio.html",
    "<div class=\"radio c-radio c-radio-nofont\" ng-class=radioClass ng-style=radioStyle><label><input type=radio id=\"{{ id }}\" ng-value=optionValue name=\"{{ optionName }}\" ng-model=\"ngModel\"> <span class=\"fa fa-circle\"></span> {{ label }}</label></div>");
  $templateCache.put("oobj-select/oobj-select.html",
    "<div ng-class=colspan class=form-group ng-style=selectStyle><label class=control-label ng-show=\"showLabel != false && label != undefined\"><span ng-bind=label></span> <span style=\"color: red\" ng-show=ngRequired>*</span></label><div class=input-group><select name=select class=form-control required ng-model=ngModel style=\"min-width: 200px\" ng-options=\"item as item[itemLabel] for item in provider\"><option value=\"\">Selecione uma opção...</option></select></div></div>");
  $templateCache.put("oobj-sidebar/oobj-sidebar.html",
    "<div class=\"navbar-default sidebar\" role=navigation><div class=\"sidebar-nav navbar-collapse\"><ul class=\"nav in\" id=side-menu style=\"background-color: white\"><li ng-class=\"{active: collapseVar == $index}\" ng-repeat=\"categoria in provider track by $index\"><a href=\"\" ng-click=check($index) ng-if=\"categoria.itens != undefined\"><i class=fa ng-class=categoria.icon></i> <span ng-bind=categoria.label></span> <span class=\"fa arrow\" ng-if=\"categoria.itens != undefined\"></span></a> <a href=\"\" ng-click=check($index) ng-if=\"categoria.itens == undefined\" ui-sref=\"{{ categoria.sref }}\"><i class=fa ng-class=categoria.icon></i> <span ng-bind=categoria.label></span> <span class=\"fa arrow\" ng-if=\"categoria.itens != undefined\"></span></a><ul class=\"nav nav-second-level\" collapse=\"collapseVar != $index\" ng-if=\"categoria.itens != undefined\"><li ui-sref-active=active ng-repeat=\"item in categoria.itens track by $index\"><a ui-sref=\"{{ item.sref }}\"><span ng-class=item.icon ng-if=\"item.icon != undefined\"></span> <span ng-bind=item.label></span></a></li></ul><!-- /.nav-second-level --></li></ul></div><!-- /.sidebar-collapse --></div>");
  $templateCache.put("oobj-stats/oobj-stats.html",
    "<div class=\"col-lg-3 col-md-6\"><div class=\"panel panel-{{colour}}\"><div class=panel-heading><div class=row><div class=col-xs-3><i class=\"fa fa-{{type}} fa-5x\"></i></div><div class=\"col-xs-9 text-right\"><div class=huge>{{number}}</div><div>{{comments}}</div></div></div></div><a ui-sref=\"{{ goto === undefined ? '#' : goto}}\"><div class=panel-footer><span class=pull-left>Ver detalhes</span> <span class=pull-right><i class=\"fa fa-arrow-circle-right\"></i></span><div class=clearfix></div></div></a></div></div>");
  $templateCache.put("oobj-timeline/oobj-timeline.html",
    "<div class=panel-body ng-class=colspan><ul class=timeline><li ng-repeat=\"item in provider track by $index\" ng-class=\"$even ? '' : 'timeline-inverted'\"><div ng-if=item.badge class=timeline-badge ng-class=item.timelineStyle><i class=\"fa {{ item.badge }}\"></i></div><div class=timeline-panel><div class=timeline-heading><h4 class=timeline-title ng-bind=item.title></h4><p><small class=text-muted><i class=\"fa fa-clock-o\"></i>&nbsp;<span ng-bind=\"item.date | date:'dd/MM/yyyy hh:mm:ss'\"></span></small></p></div><div class=timeline-body ng-if=item.description><p ng-bind=item.description></p></div></div></li></ul></div>");
}]);
