angular.module('oobj-directives.templates', []).run(['$templateCache', function($templateCache) {
  "use strict";
  $templateCache.put("oobj-autocomplete/oobj-autocomplete.html",
    "<div ng-class=colspan class=\"form-group form-group-{{inputSize}}\"><label class=control-label ng-if=\"showLabel != false && label != undefined\" for={{id}}><strong><span ng-bind=label></span></strong> <span class=text-danger ng-show=ngRequired>*</span></label><div class=input-group><input id={{id}} class=form-control ng-model=ngModel placeholder={{placeholder}} uib-typeahead=\"item as item[itemLabel] for item in getItems()($viewValue)\" typeahead-loading=loadingItems typeahead-no-results=noResults ng-disabled=ngDisabled ng-readonly=ngReadonly ng-change=onChange($event) ng-blur=onBlur($event) maxlength={{maxlength}}><div class=input-group-btn><button type=button ng-click=limpar() class=\"btn btn-default btn-{{inputSize}} oobj-group-input-btn\"><i class=\"fa fa-times\"></i></button></div></div><div class=help-block><i ng-show=loadingItems class=\"fa fa-refresh\"></i><div ng-show=noResults><i class=\"fa fa-times\"></i> Nenhum resultado encontrado</div></div></div>");
  $templateCache.put("oobj-button/oobj-button.html",
    "<button type=button class=btn ng-class=btnClass ng-disabled=ngDisabled><i class=fa ng-class=icon></i> <span ng-bind=label></span></button>");
  $templateCache.put("oobj-chart/oobj-chart-bar.html",
    "<div class=\"{{ colspan }}\" id=\"{{ chartId }}\"><div class=\"panel panel-default\" style=\"border: 1px solid #e7e7e7; border-radius: 0\"><div class=panel-heading>{{ title }}</div><div class=panel-body><canvas class=\"chart chart-bar chart-xl\" chart-data=ngModel.data chart-labels=ngModel.labels chart-legend=true chart-click=ngModel.onClick chart-series=ngModel.series></canvas></div></div></div>");
  $templateCache.put("oobj-chart/oobj-chart-doughnut.html",
    "<div class=\"{{ colspan }}\" id=\"{{ chartId }}\"><div class=\"panel panel-default\" style=\"border: 1px solid #e7e7e7; border-radius: 0\"><div class=panel-heading>{{ title }}</div><div class=panel-body><canvas class=\"chart chart-doughnut chart-xs\" chart-data=ngModel.data chart-labels=ngModel.labels chart-legend=true></canvas></div></div></div>");
  $templateCache.put("oobj-chart/oobj-chart-line.html",
    "<div class=\"{{ colspan }}\" id=line-chart><div class=\"panel panel-default\" style=\"border: 1px solid #e7e7e7; border-radius: 0\"><div class=panel-heading>{{ title }}</div><div class=panel-body><canvas class=\"chart chart-line chart-xl\" chart-data=ngModel.data chart-labels=ngModel.labels chart-legend=true chart-click=ngModel.onClick chart-series=ngModel.series></canvas></div></div></div>");
  $templateCache.put("oobj-chart/oobj-chart-pie.html",
    "<div class=\"{{ colspan }}\" id=\"{{ chartId }}\"><div class=\"panel panel-default\" style=\"border: 1px solid #e7e7e7; border-radius: 0\"><div class=panel-heading>{{ title }}</div><div class=panel-body><canvas class=\"chart chart-pie chart-xs\" chart-data=ngModel.data chart-labels=ngModel.labels chart-legend=true></canvas></div></div></div>");
  $templateCache.put("oobj-chart/oobj-chart-radar.html",
    "<div class=\"{{ colspan }}\" id=\"{{ chartId }}\"><div class=\"panel panel-default\" style=\"border: 1px solid #e7e7e7; border-radius: 0\"><div class=panel-heading>{{ title }}</div><div class=panel-body><canvas class=\"chart chart-radar\" chart-data=ngModel.data chart-labels=ngModel.labels chart-legend=true chart-click=ngModel.onClick chart-series=ngModel.series></canvas></div></div></div>");
  $templateCache.put("oobj-checkbox/oobj-checkbox.html",
    "<div class=\"checkbox c-checkbox\" ng-class=checkboxClass ng-style=checkboxStyle><label><input type=checkbox id={{id}} ng-model=\"ngModel\"> <span class=\"fa fa-check\"></span> {{ label }}</label></div>");
  $templateCache.put("oobj-confirm-button/oobj-confirm-button.html",
    "<div><oobj-button data-toggle=modal data-target=#oobjConfirm label=\"{{ label }}\" icon=\"{{ icon }}\" btn-class=\"{{ btnClass }}\"></oobj-button><div id=oobjConfirm class=\"modal fade\" role=dialog><div class=modal-dialog><div class=modal-content><div class=modal-header><button type=button class=close data-dismiss=modal>&times;</button><h4 class=modal-title><span ng-bind=\"title || 'Confirmação'\"></span></h4></div><div class=modal-body><p><span ng-bind=msg ng-style=msgStyle></span></p></div><div class=modal-footer><div class=row><div class=\"col-md-12 text-right\"><oobj-button data-dismiss=modal label=\"{{labelBtnYes || 'Sim'}}\" ng-click=onClickBtnYes() icon=fa-check btn-class=\"{{classBtnYes  || 'btn-primary'}}\" style=\"padding-right: 5px\"></oobj-button><oobj-button data-dismiss=modal label=\"{{labelBtnNo || 'Não'}}\" ng-click=onClickBtnNo() icon=fa-times btn-class=\"{{classBtnNo || 'btn-default'}}\"></oobj-button></div></div></div></div></div></div></div>");
  $templateCache.put("oobj-container/oobj-container.html",
    "<div><div class=row ng-if=\"title != undefined\"><div class=col-lg-12><h5 class=page-header style=\"padding-bottom: 5px; border-bottom: 0px solid\"><span ng-bind=title></span></h5></div></div><div class=row><div ng-transclude></div></div></div>");
  $templateCache.put("oobj-crud/oobj-crud.html",
    "<oobj-container title={{title}}><oobj-panel colspan=col-lg-12><form role=form novalidate><div class=form-group><ng-include src=\"'formActions'\" ng-if=showBtnOnTop></ng-include><div class=container-fluid><div class=row><div ng-transclude></div></div></div><ng-include src=\"'formActions'\" ng-if=showBtnOnBottom></ng-include></div></form></oobj-panel></oobj-container><script type=text/ng-template id=formActions><div class=\"row\">\n" +
    "        <div class=\"col-md-12 text-right\">\n" +
    "            <oobj-button label=\"Limpar\" btn-class=\"btn-default\"\n" +
    "                         icon=\"fa-eraser\" ng-click=\"vm.limpar()\" ng-if=\"showBtnLimpar\">\n" +
    "            </oobj-button>\n" +
    "\n" +
    "            <oobj-button label=\"Excluir\" btn-class=\"btn-danger\"\n" +
    "                         icon=\"fa-trash-o\" ng-click=\"vm.excluir()\" ng-if=\"showBtnExcluir\">\n" +
    "            </oobj-button>\n" +
    "\n" +
    "            <oobj-button label=\"Salvar\" btn-class=\"btn-primary\"\n" +
    "                         icon=\"fa-floppy-o\" ng-click=\"vm.salvar()\" ng-if=\"showBtnSalvar\">\n" +
    "            </oobj-button>\n" +
    "        </div>\n" +
    "    </div></script>");
  $templateCache.put("oobj-date-picker/oobj-date-picker.html",
    "<div class=\"form-group form-group-{{inputSize}}\" ng-class=colspan><label ng-show=\"showLabel || label != undefined\"><strong><span ng-bind=label></span></strong> <span class=text-danger ng-show=ngRequired>*</span></label><div class=input-group><input date-range-picker options=opts name={{name}} ng-model=ngModel ng-disabled=ngDisabled ng-required=ngRequired ng-change=onChange($event) ng-blur=onBlur($event) ng-keyup=onKeyup($event) ng-keydown=onKeydown($event) ng-readonly=ngReadonly class=\"form-control date-picker\"><div class=input-group-btn><button type=button class=\"btn btn-default btn-{{inputSize}} oobj-group-input-btn\"><i class=\"fa fa-calendar\"></i></button></div></div></div>");
  $templateCache.put("oobj-fieldset/oobj-fieldset.html",
    "<fieldset ng-class=colspan style={{fieldsetStyle}}><legend style={{titleStyle}}><span ng-bind=title></span></legend><div ng-transclude></div></fieldset>");
  $templateCache.put("oobj-footer/oobj-footer.html",
    "<footer style=\"background: #6F6F6F;\n" +
    "                  color: #fff;\n" +
    "                  border-color: #000;\n" +
    "                  height: 100%;\n" +
    "                  text-align: right;\n" +
    "                  font-size: x-small;\n" +
    "                  padding-right: 30px\">&copy;{{ year | date:'yyyy'}} Painel de Gest&atilde;o<br>Powered by Oobj - v{{version}} [{{generatedData | date:'dd-MM-yyyy'}}]</footer>");
  $templateCache.put("oobj-grid/oobj-grid.html",
    "<div class={{colspan}}><div ui-grid=gridOptions ui-grid-selection ng-style=gridStyle class=table ng-cloak><div style=\"position: absolute; top : 0px; opacity: 0.25; font-size: 2em; width: 100%; text-align: center; z-index: 1000\" ng-show=!gridOptions.data.length>Nenhum resultado encontrado</div></div></div>");
  $templateCache.put("oobj-input-container/oobj-input-container.html",
    "<div ng-class=colspan class=form-group><label class=control-label ng-if=\"showLabel != false && label != undefined\"><strong><span ng-bind=label></span></strong> <span class=text-danger ng-show=ngRequired>*</span></label><div ng-transclude></div></div>");
  $templateCache.put("oobj-input-text/oobj-input-text.html",
    "<div ng-class=colspan class=\"form-group form-group-{{inputSize}}\"><label class=control-label ng-if=\"showLabel != false && label != undefined\" for={{id}}><strong><span ng-bind=label></span></strong> <span class=text-danger ng-show=ngRequired>*</span></label><div class=input-group><input id={{id}} type={{type}} class=form-control ng-model=ngModel ng-disabled=ngDisabled ng-required=ngRequired ng-change=onChange($event) ng-blur=onBlur($event) ng-keyup=onKeyup($event) ng-keydown=onKeydown($event) ng-readonly=ngReadonly placeholder={{placeholder}} maxlength={{maxlength}} max={{max}} min=\"{{min}}\"><div class=input-group-btn><button type=button ng-click=limpar() class=\"btn btn-default btn-{{inputSize}} oobj-group-input-btn\"><i class=\"fa fa-times\"></i></button></div></div></div>");
  $templateCache.put("oobj-login/oobj-login.html",
    "<div class=container style=margin-top:40px><div class=row><div class=\"col-sm-6 col-sm-offset-3\"><div class=\"panel panel-default\"><div class=panel-body><form role=form><fieldset><div class=row><div class=center-block><img class=profile-img src=\"{{logo}}\"></div></div><div class=row><div class=\"col-sm-12 col-md-10 col-md-offset-1\"><div class=form-group><div class=input-group><span class=input-group-addon><i class=\"glyphicon glyphicon-user\"></i></span> <input class=form-control placeholder=Usuário ng-model=username required autofocus></div></div><div class=form-group><div class=input-group><span class=input-group-addon><i class=\"glyphicon glyphicon-lock\"></i></span> <input class=form-control placeholder=Senha ng-model=password type=password required></div></div><div class=form-group><input type=submit class=\"btn btn-lg btn-primary btn-block login-btn\" value=\"{{labelBtnLogin || 'Entrar'}}\" ng-click=login()></div><div class=\"form-group login-control-btns\"><a href=javascript:; ng-click=forgotPassword()>{{labelForgotPassword || 'Esqueci minha senha!'}}</a></div><div class=\"form-group login-control-btns\"><a href=javascript:; ng-click=newUser()>{{labelNewUser || 'Cadastre-se'}}</a></div></div></div></fieldset></form></div></div></div></div></div>");
  $templateCache.put("oobj-modal/oobj-modal.html",
    "<span><oobj-button colspan={{colspan}} data-toggle=modal data-target=#oobjModal ng-show=showBtnOpen label={{labelBtnOpen}} icon=fa-info btn-class=\"{{ classBtnOpen }}\"></oobj-button><div id=oobjModal class=\"modal fade\" role=dialog><div class=modal-dialog ng-class=\"size == 'lg' ? 'modal-lg' : size == 'sm' ? 'modal-sm' : ''\"><div class=modal-content><div class=modal-header><button type=button class=close data-dismiss=modal>&times;</button><h4 class=modal-title ng-show=\"title != undefined\"><span ng-bind=title></span></h4></div><div class=modal-body><div ng-transclude></div></div><div class=modal-footer ng-show=showBtnClose><oobj-button data-dismiss=modal label={{labelBtnClose}}></oobj-button></div></div></div></div></span>");
  $templateCache.put("oobj-panel/oobj-panel.html",
    "<div ng-class=colspan><div class=panel ng-class=panelClass style=\"border: 1px solid #e7e7e7; border-radius: 0\" ng-style=panelStyle><div class=panel-heading ng-if=\"title != undefined\"><span ng-bind=title></span></div><div class=panel-body><div class=container-fluid><div class=row><div ng-transclude></div></div></div></div><div class=panel-footer ng-if=\"footer != undefined\"><span ng-bind=footer></span></div></div></div>");
  $templateCache.put("oobj-radio/oobj-radio.html",
    "<div class=\"radio c-radio c-radio-nofont\" ng-class=radioClass ng-style=radioStyle><label><input type=radio id=\"{{ id }}\" ng-value=optionValue name=\"{{ optionName }}\" ng-model=\"ngModel\"> <span class=\"fa fa-circle\"></span> {{ label }}</label></div>");
  $templateCache.put("oobj-search/oobj-search.html",
    "<oobj-container title={{title}}><oobj-panel colspan=col-lg-12><div class=container-fluid><div class=row><div class=form-group><ng-include src=\"'formActions'\" ng-if=showBtnOnTop></ng-include><div class=container-fluid><div class=row><div ng-transclude></div></div></div><ng-include src=\"'formActions'\" ng-if=showBtnOnBottom></ng-include></div></div></div></oobj-panel><oobj-panel colspan=col-lg-12><div class=row ng-if=vm.data><oobj-grid colspan=col-md-12 data=vm.data grid-options=gridOptions></oobj-grid></div></oobj-panel></oobj-container><script type=text/ng-template id=formActions><div class=\"row\">\n" +
    "        <div class=\"col-md-12 text-right\">\n" +
    "            <oobj-button label=\"Limpar\" btn-class=\"btn-success\" icon=\"fa-eraser\"\n" +
    "                         ng-click=\"vm.limpar()\" ng-if=\"showBtnLimpar\">\n" +
    "            </oobj-button>\n" +
    "\n" +
    "            <oobj-button label=\"Pesq. Avançada\" btn-class=\"btn-default\" icon=\"fa-search-plus\"\n" +
    "                         ng-click=\"vm.pesquisaAvancada()\" ng-if=\"showBtnPesquisaAvancada\">\n" +
    "            </oobj-button>\n" +
    "\n" +
    "            <oobj-button label=\"Pesquisar\" btn-class=\"btn-primary\" icon=\"fa-search\"\n" +
    "                         ng-click=\"vm.pesquisar()\" ng-if=\"showBtnPesquisar\">\n" +
    "            </oobj-button>\n" +
    "        </div>\n" +
    "    </div></script>");
  $templateCache.put("oobj-select/oobj-select.html",
    "<div ng-class=colspan class=\"form-group form-group-{{inputSize}}\"><label class=control-label ng-show=\"showLabel != false && label != undefined\"><strong><span ng-bind=label></span></strong> <span class=text-danger ng-show=ngRequired>*</span></label><div class=input-group><select name=select class=form-control required ng-model=ngModel ng-options=\"item as item[itemLabel] for item in provider\" style={{selectStyle}} ng-style=selectStyle><option ng-if=showEmptyOption value=\"\">Selecione uma opção...</option></select></div></div>");
  $templateCache.put("oobj-sidebar/oobj-sidebar.html",
    "<div class=\"navbar-default sidebar\" role=navigation><div class=\"sidebar-nav navbar-collapse\"><ul class=\"nav in\" id=side-menu><li ng-class=\"{active: collapseVar == $index}\" ng-repeat=\"categoria in provider track by $index\"><a href=\"\" ng-click=check($index) ng-if=\"categoria.itens != undefined\"><i class=fa ng-class=categoria.icon></i> <span ng-bind=categoria.label></span> <span class=\"fa plus\" ng-if=\"categoria.itens != undefined\"></span></a> <a href=\"\" ng-click=check($index) ng-if=\"categoria.itens == undefined\" ui-sref=\"{{ categoria.sref }}\"><i class=fa ng-class=categoria.icon></i> <span ng-bind=categoria.label></span> <span class=\"fa plus\" ng-if=\"categoria.itens != undefined\"></span></a><ul class=\"nav nav-second-level\" uib-collapse=\"collapseVar != $index\" ng-if=\"categoria.itens != undefined\"><li ui-sref-active=active ng-repeat=\"item in categoria.itens track by $index\"><a ui-sref=\"{{ item.sref }}\"><span ng-class=item.icon ng-if=\"item.icon != undefined\"></span> <span ng-bind=item.label></span></a></li></ul><!-- /.nav-second-level --></li></ul></div><!-- /.sidebar-collapse --></div>");
  $templateCache.put("oobj-stats/oobj-stats.html",
    "<div class=\"col-lg-3 col-md-6\"><div class=\"panel panel-{{colour}}\"><div class=panel-heading><div class=row><div class=col-xs-3><i class=\"fa fa-{{type}} fa-5x\"></i></div><div class=\"col-xs-9 text-right\"><div class=huge>{{number}}</div><div>{{comments}}</div></div></div></div><a ui-sref=\"{{goto === undefined ? '#' : goto}}\"><div class=panel-footer><span class=pull-right>Ver detalhes</span><div class=clearfix></div></div></a></div></div>");
  $templateCache.put("oobj-timeline/oobj-timeline.html",
    "<div class=panel-body ng-class=colspan><ul class=timeline><li ng-repeat=\"item in provider track by $index\" ng-class=\"$even ? '' : 'timeline-inverted'\"><div ng-if=item.badge class=timeline-badge ng-class=item.timelineStyle><i class=\"fa {{ item.badge }}\"></i></div><div class=timeline-panel><div class=timeline-heading><h5 class=timeline-title ng-bind=item.title></h5><p class=\"timeline-date text-muted\"><i class=\"fa fa-clock-o\"></i>&nbsp;<span ng-bind=\"item.date | date:'dd/MM/yyyy hh:mm:ss'\"></span></p></div><div class=timeline-body ng-if=item.description><p class=timeline-description ng-bind=item.description></p></div></div></li></ul></div>");
}]);
