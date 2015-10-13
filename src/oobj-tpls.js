angular.module('templates-main', ['oobj-autocomplete/oobj-autocomplete.html', 'oobj-button/oobj-button.html', 'oobj-chart/oobj-chart-bar.html', 'oobj-chart/oobj-chart-doughnut.html', 'oobj-chart/oobj-chart-line.html', 'oobj-chart/oobj-chart-pie.html', 'oobj-chart/oobj-chart-radar.html', 'oobj-checkbox/oobj-checkbox.html', 'oobj-container/oobj-container.html', 'oobj-crud/oobj-crud.html', 'oobj-date-picker/oobj-date-picker.html', 'oobj-footer/oobj-footer.html', 'oobj-grid/oobj-grid.html', 'oobj-input-container/oobj-input-container.html', 'oobj-input-text/oobj-input-text.html', 'oobj-panel/oobj-panel.html', 'oobj-pesquisa/oobj-pesquisa.html', 'oobj-radio/oobj-radio.html', 'oobj-select/oobj-select.html', 'oobj-sidebar/oobj-sidebar.html', 'oobj-timeline/oobj-timeline.html']);

angular.module("oobj-autocomplete/oobj-autocomplete.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("oobj-autocomplete/oobj-autocomplete.html",
    "<div ng-class=\"colspan\" class=\"form-group form-group-{{inputSize}}\">\n" +
    "    <label class=\"control-label\" ng-if=\"showLabel != false && label != undefined\" for=\"{{id}}\">\n" +
    "        <span ng-bind=\"label\"></span>\n" +
    "        <span style=\"color: red;\" ng-show=\"ngRequired\">*</span>\n" +
    "    </label>\n" +
    "\n" +
    "    <div class=\"input-group\">\n" +
    "        <input id=\"{{id}}\"\n" +
    "               type=\"text\"\n" +
    "               class=\"form-control\"\n" +
    "               ng-model=\"ngModel\"\n" +
    "               placeholder=\"{{placeholder}}\"\n" +
    "               typeahead=\"item as item[itemLabel] for item in getItems()($viewValue)\"\n" +
    "               typeahead-loading=\"loadingItems\"\n" +
    "               typeahead-no-results=\"noResults\"\n" +
    "               ng-disabled=\"ngDisabled\"\n" +
    "               ng-readonly=\"ngReadonly\"\n" +
    "               ng-change=\"onChange($event)\"\n" +
    "               ng-blur=\"onBlur($event)\"\n" +
    "               maxlength=\"{{maxlength}}\">\n" +
    "\n" +
    "        <div class=\"input-group-btn\">\n" +
    "            <button type=\"button\" ng-click=\"limpar()\" class=\"btn btn-default btn-{{inputSize}}\">\n" +
    "                <i class=\"fa fa-times\"></i>\n" +
    "            </button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"help-block\">\n" +
    "        <i ng-show=\"loadingItems\" class=\"fa fa-refresh\"></i>\n" +
    "        <div ng-show=\"noResults\">\n" +
    "            <i class=\"fa fa-times\"></i> Nenhum resultado encontrado\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("oobj-button/oobj-button.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("oobj-button/oobj-button.html",
    "<button type=\"button\"\n" +
    "        class=\"btn\"\n" +
    "        ng-class=\"btnClass\"\n" +
    "        ng-style=\"btnStyle\"\n" +
    "        ng-disabled=\"ngDisabled\">\n" +
    "    <i class=\"fa\" ng-class=\"icon\"></i>\n" +
    "    <span ng-bind=\"label\"></span>\n" +
    "</button>");
}]);

angular.module("oobj-chart/oobj-chart-bar.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("oobj-chart/oobj-chart-bar.html",
    "<div class=\"{{ colspan }}\" id=\"{{ chartId }}\">\n" +
    "    <div class=\"panel panel-default\">\n" +
    "        <div class=\"panel-heading\">{{ title }}</div>\n" +
    "        <div class=\"panel-body\">\n" +
    "            <canvas class=\"chart chart-bar chart-xl\"\n" +
    "                    chart-data=\"ngModel.data\"\n" +
    "                    chart-labels=\"ngModel.labels\"\n" +
    "                    chart-legend=\"true\"\n" +
    "                    chart-click=\"ngModel.onClick\"\n" +
    "                    chart-series=\"ngModel.series\">\n" +
    "            </canvas>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("oobj-chart/oobj-chart-doughnut.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("oobj-chart/oobj-chart-doughnut.html",
    "<div class=\"{{ colspan }}\" id=\"{{ chartId }}\">\n" +
    "    <div class=\"panel panel-default\">\n" +
    "        <div class=\"panel-heading\">{{ title }}</div>\n" +
    "        <div class=\"panel-body\">\n" +
    "            <canvas class=\"chart chart-doughnut chart-xs\"\n" +
    "                    chart-data=\"ngModel.data\"\n" +
    "                    chart-labels=\"ngModel.labels\"\n" +
    "                    chart-legend=\"true\">\n" +
    "            </canvas>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("oobj-chart/oobj-chart-line.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("oobj-chart/oobj-chart-line.html",
    "<div class=\"{{ colspan }}\" id=\"line-chart\">\n" +
    "    <div class=\"panel panel-default\">\n" +
    "        <div class=\"panel-heading\">{{ title }}</div>\n" +
    "        <div class=\"panel-body\">\n" +
    "            <canvas class=\"chart chart-line chart-xl\"\n" +
    "                    chart-data=\"ngModel.data\"\n" +
    "                    chart-labels=\"ngModel.labels\"\n" +
    "                    chart-legend=\"true\"\n" +
    "                    chart-click=\"ngModel.onClick\"\n" +
    "                    chart-series=\"ngModel.series\">\n" +
    "            </canvas>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("oobj-chart/oobj-chart-pie.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("oobj-chart/oobj-chart-pie.html",
    "<div class=\"{{ colspan }}\" id=\"{{ chartId }}\">\n" +
    "    <div class=\"panel panel-default\">\n" +
    "        <div class=\"panel-heading\">{{ title }}</div>\n" +
    "        <div class=\"panel-body\">\n" +
    "            <canvas class=\"chart chart-pie chart-xs\"\n" +
    "                    chart-data=\"ngModel.data\"\n" +
    "                    chart-labels=\"ngModel.labels\"\n" +
    "                    chart-legend=\"true\">\n" +
    "            </canvas>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("oobj-chart/oobj-chart-radar.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("oobj-chart/oobj-chart-radar.html",
    "<div class=\"{{ colspan }}\" id=\"{{ chartId }}\">\n" +
    "    <div class=\"panel panel-default\">\n" +
    "        <div class=\"panel-heading\">{{ title }}</div>\n" +
    "        <div class=\"panel-body\">\n" +
    "            <canvas class=\"chart chart-radar\"\n" +
    "                    chart-data=\"ngModel.data\"\n" +
    "                    chart-labels=\"ngModel.labels\"\n" +
    "                    chart-legend=\"true\"\n" +
    "                    chart-click=\"ngModel.onClick\"\n" +
    "                    chart-series=\"ngModel.series\">\n" +
    "            </canvas>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("oobj-checkbox/oobj-checkbox.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("oobj-checkbox/oobj-checkbox.html",
    "<div class=\"checkbox c-checkbox\" ng-class=\"checkboxClass\" ng-style=\"checkboxStyle\">\n" +
    "    <label>\n" +
    "        <input type=\"checkbox\" id=\"{{id}}\" ng-model=\"ngModel\" />\n" +
    "        <span class=\"fa fa-check\"></span>\n" +
    "        {{ label }}\n" +
    "    </label>\n" +
    "</div>");
}]);

angular.module("oobj-container/oobj-container.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("oobj-container/oobj-container.html",
    "<div>\n" +
    "    <div class=\"row\" ng-if=\"title != undefined\">\n" +
    "        <div class=\"col-lg-12\">\n" +
    "            <h4 class=\"page-header\">\n" +
    "                <span ng-bind=\"title\"></span>\n" +
    "            </h4>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div ng-transclude></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("oobj-crud/oobj-crud.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("oobj-crud/oobj-crud.html",
    "<oobj-container title=\"{{title}}\">\n" +
    "    <form role=\"form\" novalidate>\n" +
    "        <oobj-panel colspan=\"col-lg-12\">\n" +
    "            <div class=\"row\" ng-if=\"showBtnOnTop\" style=\"padding-bottom: 15px;\">\n" +
    "                <ng-include src=\"'formActions'\"></ng-include>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"container-fluid\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div ng-transclude></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"row\" ng-if=\"showBtnOnBottom\">\n" +
    "                <ng-include src=\"'formActions'\"></ng-include>\n" +
    "            </div>\n" +
    "        </oobj-panel>\n" +
    "    </form>\n" +
    "</oobj-container>\n" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"formActions\">\n" +
    "    <div class=\"row\">\n" +
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
    "    </div>\n" +
    "</script>");
}]);

angular.module("oobj-date-picker/oobj-date-picker.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("oobj-date-picker/oobj-date-picker.html",
    "<div class=\"form-group form-group-{{inputSize}}\" ng-class=\"colspan\">\n" +
    "    <label ng-show=\"showLabel || label != undefined\">\n" +
    "        <span ng-bind=\"label\"></span>\n" +
    "        <span style=\"color: red;\" ng-show=\"ngRequired\">*</span>\n" +
    "    </label>\n" +
    "    <div class=\"input-group\">\n" +
    "        <input date-range-picker\n" +
    "               options=\"opts\"\n" +
    "               name=\"{{name}}\"\n" +
    "               ng-model=\"ngModel\"\n" +
    "               ng-disabled=\"ngDisabled\"\n" +
    "               ng-required=\"ngRequired\"\n" +
    "               ng-change=\"onChange($event)\"\n" +
    "               ng-blur=\"onBlur($event)\"\n" +
    "               ng-keyup=\"onKeyup($event)\"\n" +
    "               ng-keydown=\"onKeydown($event)\"\n" +
    "               ng-readonly=\"ngReadonly\"\n" +
    "               class=\"form-control date-picker\"\n" +
    "               type=\"text\"/>\n" +
    "\n" +
    "        <div class=\"input-group-btn\">\n" +
    "            <button type=\"button\" class=\"btn btn-default btn-{{inputSize}}\">\n" +
    "                <i class=\"fa fa-calendar\"></i>\n" +
    "            </button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("oobj-footer/oobj-footer.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("oobj-footer/oobj-footer.html",
    "<footer\n" +
    "        style=\"background: #2196F3;\n" +
    "                  color: #fff;\n" +
    "                  border-color: #000066;\n" +
    "                  height: 100%;\n" +
    "                  text-align: right;\n" +
    "                  font-size: x-small;\n" +
    "                  padding-right: 15px;\">\n" +
    "    &copy;{{ year | date:'yyyy'}} Painel de Gest&atilde;o\n" +
    "    <br>\n" +
    "    Powered by Oobj - v{{version}} [{{generatedData | date:'dd-MM-yyyy'}}]\n" +
    "</footer>");
}]);

angular.module("oobj-grid/oobj-grid.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("oobj-grid/oobj-grid.html",
    "<div style=\"padding-top: 15px;\" class=\"{{colspan}}\">\n" +
    "    <div ui-grid=\"gridOptions\" ui-grid-selection ng-style=\"gridStyle\" class=\"table\" ng-cloak>\n" +
    "        <div style=\"position: absolute; top : 0px; opacity: 0.25; font-size: 2em; width: 100%; text-align: center; z-index: 1000;\"\n" +
    "            ng-show=\"!gridOptions.data.length\">\n" +
    "            Nenhum resultado encontrado\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("oobj-input-container/oobj-input-container.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("oobj-input-container/oobj-input-container.html",
    "<div ng-class=\"colspan\" class=\"form-group\">\n" +
    "    <label class=\"control-label\" ng-if=\"showLabel != false && label != undefined\">\n" +
    "        <span ng-bind=\"label\"></span>\n" +
    "        <span style=\"color: red;\" ng-show=\"ngRequired\">*</span>\n" +
    "    </label>\n" +
    "    <div ng-transclude></div>\n" +
    "</div>");
}]);

angular.module("oobj-input-text/oobj-input-text.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("oobj-input-text/oobj-input-text.html",
    "<div ng-class=\"colspan\" class=\"form-group form-group-{{inputSize}}\">\n" +
    "    <label class=\"control-label\" ng-if=\"showLabel != false && label != undefined\" for=\"{{id}}\">\n" +
    "        <span ng-bind=\"label\"></span>\n" +
    "        <span style=\"color: red;\" ng-show=\"ngRequired\">*</span>\n" +
    "    </label>\n" +
    "    <div class=\"input-group\">\n" +
    "        <input id=\"{{id}}\"\n" +
    "               type=\"{{type}}\"\n" +
    "               class=\"form-control\"\n" +
    "               ng-model=\"ngModel\"\n" +
    "               ng-disabled=\"ngDisabled\"\n" +
    "               ng-required=\"ngRequired\"\n" +
    "               ng-change=\"onChange($event)\"\n" +
    "               ng-blur=\"onBlur($event)\"\n" +
    "               ng-keyup=\"onKeyup($event)\"\n" +
    "               ng-keydown=\"onKeydown($event)\"\n" +
    "               ng-readonly=\"ngReadonly\"\n" +
    "               placeholder=\"{{placeholder}}\"\n" +
    "               maxlength=\"{{maxlength}}\"\n" +
    "               max=\"{{max}}\"\n" +
    "               min=\"{{min}}\" />\n" +
    "        <div class=\"input-group-btn\">\n" +
    "            <button type=\"button\" ng-click=\"limpar()\" class=\"btn btn-default btn-{{inputSize}}\">\n" +
    "                <i class=\"fa fa-times\"></i>\n" +
    "            </button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("oobj-panel/oobj-panel.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("oobj-panel/oobj-panel.html",
    "<div ng-class=\"colspan\">\n" +
    "    <div class=\"panel\" ng-class=\"panelClass\" style=\"margin-bottom: 0px;\">\n" +
    "        <div class=\"panel-heading\" ng-if=\"title != undefined\">\n" +
    "            <span ng-bind=\"title\"></span>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"panel-body\">\n" +
    "            <div class=\"container-fluid\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div ng-transclude></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"panel-footer\" ng-if=\"footer != undefined\">\n" +
    "            <span ng-bind=\"footer\"></span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("oobj-pesquisa/oobj-pesquisa.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("oobj-pesquisa/oobj-pesquisa.html",
    "<oobj-container title=\"{{title}}\">\n" +
    "    <oobj-panel colspan=\"col-lg-12\">\n" +
    "        <div class=\"container-fluid\">\n" +
    "            <div class=\"row\">\n" +
    "                <div ng-transclude></div>\n" +
    "\n" +
    "                <div class=\"row\">\n" +
    "                    <oobj-button label=\"Pesquisar\" class=\"pull-right\" style=\"padding-right: 15px;\" btn-class=\"btn-primary\" icon=\"fa-search\"\n" +
    "                                 ng-click=\"vm.pesquisar()\" ng-if=\"showBtnPesquisar\">\n" +
    "                    </oobj-button>\n" +
    "\n" +
    "                    <oobj-button label=\"Limpar\" class=\"pull-right\" style=\"padding-right: 15px;\" btn-class=\"btn-success\" icon=\"fa-eraser\"\n" +
    "                                 ng-click=\"vm.limpar()\" ng-if=\"showBtnLimpar\">\n" +
    "                    </oobj-button>\n" +
    "\n" +
    "                    <oobj-button label=\"Pesq. Avançada\" class=\"pull-right\" style=\"padding-right: 15px;\" btn-class=\"btn-default\" icon=\"fa-search-plus\"\n" +
    "                                 ng-click=\"vm.pesquisaAvancada()\" ng-if=\"showBtnPesquisaAvancada\">\n" +
    "                    </oobj-button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"row\" ng-if=\"vm.data\">\n" +
    "            <oobj-grid colspan=\"col-md-12\" data=\"vm.data\" grid-options=\"gridOptions\"></oobj-grid>\n" +
    "        </div>\n" +
    "    </oobj-panel>\n" +
    "</oobj-container>");
}]);

angular.module("oobj-radio/oobj-radio.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("oobj-radio/oobj-radio.html",
    "<div class=\"radio c-radio c-radio-nofont\" ng-class=\"radioClass\" ng-style=\"radioStyle\">\n" +
    "    <label>\n" +
    "        <input type=\"radio\" id=\"{{ id }}\" ng-value=\"optionValue\" name=\"{{ optionName }}\" ng-model=\"ngModel\" />\n" +
    "        <span class=\"fa fa-circle\"></span>\n" +
    "        {{ label }}\n" +
    "    </label>\n" +
    "</div>");
}]);

angular.module("oobj-select/oobj-select.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("oobj-select/oobj-select.html",
    "<div ng-class=\"colspan\" class=\"form-group\" ng-style=\"selectStyle\">\n" +
    "    <label class=\"control-label\" ng-show=\"showLabel != false && label != undefined\">\n" +
    "        <span ng-bind=\"label\"></span>\n" +
    "        <span style=\"color: red;\" ng-show=\"ngRequired\">*</span>\n" +
    "    </label>\n" +
    "\n" +
    "    <div class=\"input-group\">\n" +
    "        <select name=\"select\" class=\"form-control\" required=\"{{ngRequired}}\" ng-model=\"ngModel\" style=\"border-radius: 4px; min-width: 200px;\"\n" +
    "                ng-options=\"item as item[itemLabel] for item in provider\">\n" +
    "            <option value=\"\">Selecione uma opção...</option>\n" +
    "        </select>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("oobj-sidebar/oobj-sidebar.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("oobj-sidebar/oobj-sidebar.html",
    "<div class=\"navbar-default sidebar\" role=\"navigation\">\n" +
    "    <div class=\"sidebar-nav navbar-collapse\">\n" +
    "        <ul class=\"nav in\" id=\"side-menu\" style=\"background-color: white;\">\n" +
    "\n" +
    "            <li ng-class=\"{active: collapseVar == $index}\" ng-repeat=\"categoria in provider track by $index\">\n" +
    "\n" +
    "                <a href=\"\" ng-click=\"check($index)\" ng-if=\"categoria.itens != undefined\">\n" +
    "                    <i class=\"fa\" ng-class=\"categoria.icon\"></i>\n" +
    "                    <span ng-bind=\"categoria.label\"></span>\n" +
    "                    <span class=\"fa arrow\" ng-if=\"categoria.itens != undefined\"></span>\n" +
    "                </a>\n" +
    "\n" +
    "                <a href=\"\" ng-click=\"check($index)\" ng-if=\"categoria.itens == undefined\" ui-sref=\"{{ categoria.sref }}\">\n" +
    "                    <i class=\"fa\" ng-class=\"categoria.icon\"></i>\n" +
    "                    <span ng-bind=\"categoria.label\"></span>\n" +
    "                    <span class=\"fa arrow\" ng-if=\"categoria.itens != undefined\"></span>\n" +
    "                </a>\n" +
    "\n" +
    "                <ul class=\"nav nav-second-level\" collapse=\"collapseVar != $index\" ng-if=\"categoria.itens != undefined\">\n" +
    "                    <li ui-sref-active=\"active\" ng-repeat=\"item in categoria.itens track by $index\">\n" +
    "\n" +
    "                        <a ui-sref=\"{{ item.sref }}\">\n" +
    "                            <span ng-class=\"item.icon\" ng-if=\"item.icon != undefined\"></span>\n" +
    "                            <span ng-bind=\"item.label\"></span>\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "                <!-- /.nav-second-level -->\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <!-- /.sidebar-collapse -->\n" +
    "</div>");
}]);

angular.module("oobj-timeline/oobj-timeline.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("oobj-timeline/oobj-timeline.html",
    "<div class=\"panel-body\" ng-class=\"colspan\">\n" +
    "    <ul class=\"timeline\">\n" +
    "        <li ng-repeat=\"item in provider track by $index\" ng-class=\"$even ? '' : 'timeline-inverted'\">\n" +
    "            <div ng-if=\"item.badge\" class=\"timeline-badge\" ng-class=\"item.timelineStyle\"><i class=\"fa {{ item.badge }}\"></i></div>\n" +
    "            <div class=\"timeline-panel\">\n" +
    "                <div class=\"timeline-heading\">\n" +
    "                    <h4 class=\"timeline-title\" ng-bind=\"item.title\"></h4>\n" +
    "                    <p><small class=\"text-muted\"><i class=\"fa fa-clock-o\"></i>&nbsp;<span ng-bind=\"item.date | date:'dd/MM/yyyy hh:mm:ss'\"></span></small></p>\n" +
    "                </div>\n" +
    "                <div class=\"timeline-body\" ng-if=\"item.description\">\n" +
    "                    <p ng-bind=\"item.description\"></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>");
}]);