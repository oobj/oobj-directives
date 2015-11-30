/**
 * Created by ATILLA on 25/09/2015.
 */
(function() {
    'use strict';

    angular.module('oobj-directives', [
        'oobj-directives.templates',
        'br-filters',
        'ngAnimate',
        'ngTouch',
        'ngSanitize',
        'ui.bootstrap',
        'ui.select',
        'ui.grid',
        'ui.grid.exporter',
        'ui.grid.selection',
        'ui.grid.pagination',
        'daterangepicker'
    ]);
})();

angular.module('oobj-directives.templates', []).run(['$templateCache', function($templateCache) {
  "use strict";
  $templateCache.put("oobj-autocomplete/oobj-autocomplete.html",
    "<div ng-class=::colspan class=\"form-group form-group-{{::inputSize}}\"><label class=control-label ng-if=\"::(showLabel != false && label != undefined)\" for={{::id}}><strong><span ng-bind=::label></span></strong> <span class=text-danger ng-show=::ngRequired>*</span></label><div class=input-group><input id={{::id}} class=form-control ng-model=ngModel placeholder={{::placeholder}} uib-typeahead=\"item as item[itemLabel] for item in getItems()($viewValue)\" typeahead-loading=loadingItems typeahead-no-results=noResults ng-disabled=::ngDisabled ng-readonly=::ngReadonly ng-change=::onChange($event) ng-blur=::onBlur($event) maxlength={{::maxlength}}><div class=input-group-btn><button type=button ng-click=::limpar() class=\"btn btn-default btn-{{::inputSize}} oobj-group-input-btn\"><i class=\"fa fa-times\"></i></button></div></div><div class=help-block><i ng-show=loadingItems class=\"fa fa-refresh\"></i><div ng-show=noResults><i class=\"fa fa-times\"></i> Nenhum resultado encontrado</div></div></div>");
  $templateCache.put("oobj-button-dropdown/oobj-button-dropdown.html",
    "<div class=btn-group uib-dropdown><button id=single-button type=button class=btn ng-class=::btnClass uib-dropdown-toggle ng-disabled=::ngDisabled><i class=fa ng-class=::icon></i> <span ng-bind=label class=oobj-button-dropdown-label></span> <i class=\"fa fa-angle-down\"></i></button><ul class=uib-dropdown-menu role=menu aria-labelledby=single-button><li role=menuitem ng-repeat=\"item in provider track by $index\"><a href=javascript:; ng-click=item.action()>{{item.label}}</a></li></ul></div>");
  $templateCache.put("oobj-button/oobj-button.html",
    "<button type=button class=btn ng-class=::btnClass ng-disabled=::ngDisabled><i class=fa ng-class=::icon></i> <span ng-bind=::label></span></button>");
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
    "<div class=\"checkbox c-checkbox\" ng-class=::checkboxClass ng-style=::checkboxStyle><label><input type=checkbox id={{::id}} ng-model=\"ngModel\"> <span class=\"fa fa-check\"></span> {{::label}}</label></div>");
  $templateCache.put("oobj-confirm-button/oobj-confirm-button.html",
    "<div><oobj-button data-toggle=modal data-target=#oobjConfirm label={{::label}} icon={{::icon}} btn-class={{::btnClass}}></oobj-button><div id=oobjConfirm class=\"modal fade\" role=dialog><div class=modal-dialog><div class=modal-content><div class=modal-header><button type=button class=close data-dismiss=modal>&times;</button><h4 class=modal-title><span ng-bind=\"::(title || 'Confirmação')\"></span></h4></div><div class=modal-body><p><span ng-bind=::msg ng-style=::msgStyle></span></p></div><div class=modal-footer><div class=row><div class=\"col-md-12 text-right\"><oobj-button data-dismiss=modal label=\"{{::(labelBtnYes || 'Sim')}}\" ng-click=::onClickBtnYes() icon=fa-check btn-class=\"{{::(classBtnYes  || 'btn-primary')}}\" class=oobj-confirm-button-btn-yes></oobj-button><oobj-button data-dismiss=modal label=\"{{::(labelBtnNo || 'Não')}}\" ng-click=::onClickBtnNo() icon=fa-times btn-class=\"{{::(classBtnNo || 'btn-default')}}\"></oobj-button></div></div></div></div></div></div></div>");
  $templateCache.put("oobj-container/oobj-container.html",
    "<div><div class=row ng-if=\"::(title != undefined)\"><div class=col-lg-12><h5 class=\"page-header oobj-container-title\"><span ng-bind=::title></span> <i class=\"fa fa-info-circle icon-info-medium\"></i></h5></div></div><div class=row><div ng-transclude></div></div></div>");
  $templateCache.put("oobj-crud/oobj-crud.html",
    "<oobj-container title={{::title}}><oobj-panel colspan=col-lg-12><form role=form novalidate><div class=form-group><ng-include src=\"'formActions'\" ng-if=showBtnOnTop></ng-include><div class=container-fluid><div class=row><div ng-transclude></div></div></div><ng-include src=\"'formActions'\" ng-if=showBtnOnBottom></ng-include></div></form></oobj-panel></oobj-container><script type=text/ng-template id=formActions><div class=\"row\">\n" +
    "        <div class=\"col-md-12 text-right\">\n" +
    "            <oobj-button label=\"Limpar\" btn-class=\"btn-default\" icon=\"fa-eraser\" ng-click=\"vm.limpar()\" ng-if=\"showBtnLimpar\">\n" +
    "            </oobj-button>\n" +
    "\n" +
    "            <oobj-button label=\"Excluir\" btn-class=\"btn-danger\" icon=\"fa-trash-o\" ng-click=\"vm.excluir()\" ng-if=\"showBtnExcluir\">\n" +
    "            </oobj-button>\n" +
    "\n" +
    "            <oobj-button label=\"Salvar\" btn-class=\"btn-primary\" icon=\"fa-floppy-o\" ng-click=\"vm.salvar()\" padding-right=\"0px\"\n" +
    "                         ng-if=\"showBtnSalvar\">\n" +
    "            </oobj-button>\n" +
    "        </div>\n" +
    "    </div></script>");
  $templateCache.put("oobj-date-picker/oobj-date-picker.html",
    "<div class=\"form-group form-group-{{::inputSize}}\" ng-class=::colspan><label ng-show=\"::(showLabel || label != undefined)\"><strong><span ng-bind=::label></span></strong> <span class=text-danger ng-show=::ngRequired>*</span></label><div class=input-group><input date-range-picker options=opts name={{::name}} ng-model=ngModel ng-disabled=ngDisabled ng-required=::ngRequired ng-change=::onChange($event) ng-blur=::onBlur($event) ng-keyup=::onKeyup($event) ng-keydown=::onKeydown($event) ng-readonly=::ngReadonly class=\"form-control date-picker\"><div class=input-group-btn><button type=button class=\"btn btn-default btn-{{::inputSize}} oobj-group-input-btn\"><i class=\"fa fa-calendar\"></i></button></div></div></div>");
  $templateCache.put("oobj-fieldset/oobj-fieldset.html",
    "<fieldset ng-class=::colspan><legend class=oobj-fieldset-title><span ng-bind=::title></span></legend><div ng-transclude></div></fieldset>");
  $templateCache.put("oobj-footer/oobj-footer.html",
    "<footer class=oobj-footer>&copy;{{::year | date:'yyyy'}} Painel de Gest&atilde;o<br>Powered by Oobj - v{{::version}} [{{::generatedData | date:'dd-MM-yyyy'}}]</footer>");
  $templateCache.put("oobj-grid/oobj-grid.html",
    "<div class={{::colspan}} ui-i18n={{::language}}><div class=table-responsive><div ui-grid=gridOptions ui-grid-exporter ui-grid-selection ui-grid-pagination ng-style=getHeight() class=\"table oobj-grid-options\" ng-cloak><div class=oobj-grid-noresult ng-show=!gridOptions.data.length>Nenhum resultado encontrado</div></div></div></div>");
  $templateCache.put("oobj-input-container/oobj-input-container.html",
    "<div ng-class=::colspan class=form-group><label class=control-label ng-if=\"::(showLabel != false && label != undefined)\"><strong><span ng-bind=::label></span></strong> <span class=text-danger ng-show=::ngRequired>*</span></label><div ng-transclude></div></div>");
  $templateCache.put("oobj-input-text/oobj-input-text.html",
    "<div ng-class=::colspan class=\"form-group form-group-{{::inputSize}}\"><label class=control-label ng-if=\"::(showLabel != false && label != undefined)\" for={{::id}}><strong><span ng-bind=::label></span></strong> <span class=text-danger ng-show=::ngRequired>*</span></label><div class=input-group><input id={{::id}} type={{::type}} class=form-control ng-model=ngModel ng-disabled=ngDisabled ng-required=::ngRequired ng-change=::onChange($event) ng-blur=::onBlur($event) ng-keyup=::onKeyup($event) ng-keydown=::onKeydown($event) ng-readonly=::ngReadonly placeholder={{::placeholder}} maxlength={{::maxlength}} max={{::max}} min=\"{{::min}}\"><div class=input-group-btn><button type=button ng-click=::limpar() class=\"btn btn-default btn-{{::inputSize}} oobj-group-input-btn\"><i class=\"fa fa-times\"></i></button></div></div></div>");
  $templateCache.put("oobj-login/oobj-login.html",
    "<div class=\"container oobj-login\"><div class=row><div class=\"col-sm-6 col-sm-offset-3\"><div class=\"panel panel-default\"><div class=panel-body><form role=form><fieldset><div class=row><div class=center-block><img class=profile-img src=\"{{::logo}}\"></div></div><div class=row><div class=\"col-sm-12 col-md-10 col-md-offset-1\"><div class=form-group><div class=input-group><span class=input-group-addon><i class=\"glyphicon glyphicon-user\"></i></span> <input class=form-control placeholder=Usuário ng-model=username required autofocus></div></div><div class=form-group><div class=input-group><span class=input-group-addon><i class=\"glyphicon glyphicon-lock\"></i></span> <input class=form-control placeholder=Senha ng-model=password type=password required></div></div><div class=form-group><input type=submit class=\"btn btn-lg btn-primary btn-block login-btn\" value=\"{{::labelBtnLogin || 'Entrar'}}\" ng-click=::login()></div><div class=\"form-group login-control-btns\"><a href=javascript:; ng-click=::forgotPassword()>{{::labelForgotPassword || 'Esqueci minha senha!'}}</a></div><div class=\"form-group login-control-btns\"><a href=javascript:; ng-click=::newUser()>{{::labelNewUser || 'Cadastre-se'}}</a></div></div></div></fieldset></form></div></div></div></div></div>");
  $templateCache.put("oobj-modal/oobj-modal.html",
    "<span><oobj-button colspan={{::colspan}} data-toggle=modal data-target=#oobjModal ng-show=showBtnOpen label={{::labelBtnOpen}} icon=fa-info btn-class={{::classBtnOpen}}></oobj-button><div id=oobjModal class=\"modal fade\" role=dialog><div class=modal-dialog ng-class=\"::(size == 'lg' ? 'modal-lg' : size == 'sm' ? 'modal-sm' : '')\"><div class=modal-content><div class=modal-header><button type=button class=close data-dismiss=modal>&times;</button><h4 class=modal-title ng-show=\"::(title != undefined)\"><span ng-bind=::title></span></h4></div><div class=modal-body><div ng-transclude></div></div><div class=modal-footer ng-show=::showBtnClose><oobj-button data-dismiss=modal label={{::labelBtnClose}}></oobj-button></div></div></div></div></span>");
  $templateCache.put("oobj-multiselect/oobj-multiselect.html",
    "<div ng-class=::colspan class=\"form-group form-group-{{::inputSize}}\"><label class=control-label ng-show=\"::(showLabel != false && label != undefined)\"><strong><span ng-bind=::label></span></strong> <span class=text-danger ng-show=::ngRequired>*</span></label><div class=input-group><select id={{::id}} class=\"selectpicker form-control\" ng-model=ngModel ng-required=ngRequired data-width=auto title=\"\" multiple ng-cloak></select></div></div>");
  $templateCache.put("oobj-panel/oobj-panel.html",
    "<div ng-class=::colspan><div class=\"panel oobj-panel\" ng-class=::panelClass><div class=panel-heading ng-if=\"::(title != undefined)\"><span ng-bind=::title></span></div><div class=panel-body><div class=container-fluid><div class=row><div ng-transclude></div></div></div></div><div class=panel-footer ng-if=\"::(footer != undefined)\"><span ng-bind=::footer></span></div></div></div>");
  $templateCache.put("oobj-radio/oobj-radio.html",
    "<div class=\"radio c-radio c-radio-nofont\" ng-class=::radioClass><label><input type=radio id={{::id}} ng-value=::optionValue name={{::optionName}} ng-model=\"ngModel\"> <span class=\"fa fa-circle\"></span> {{::label}}</label></div>");
  $templateCache.put("oobj-search/oobj-search.html",
    "<oobj-container title={{::title}}><oobj-panel colspan=col-lg-12><div class=container-fluid><div class=\"row oobj-search-container\"><div class=form-group><ng-include src=\"'formActions'\" ng-if=showBtnOnTop></ng-include><div class=container-fluid><div class=row><div ng-transclude></div></div></div><ng-include src=\"'formActions'\" ng-if=showBtnOnBottom></ng-include></div></div></div></oobj-panel><oobj-panel colspan=col-lg-12><ng-include src=\"'additionalContent'\"></ng-include><div class=row ng-if=vm.data><oobj-grid colspan=col-md-12 data=vm.data grid-options=gridOptions></oobj-grid></div></oobj-panel></oobj-container><script type=text/ng-template id=formActions><div class=\"row\">\n" +
    "        <div class=\"col-md-12 text-right\">\n" +
    "            <oobj-button label=\"Limpar\" btn-class=\"btn-success\" icon=\"fa-eraser\" ng-click=\"::vm.limpar()\"\n" +
    "                         ng-if=\"::showBtnLimpar\">\n" +
    "            </oobj-button>\n" +
    "\n" +
    "            <oobj-button label=\"Pesq. Avançada\" btn-class=\"btn-default\" ng-click=\"::vm.pesquisaAvancada()\"\n" +
    "                         icon=\"{{::(showBtnOnTop ? 'fa-search-minus': 'fa-search-plus')}}\"\n" +
    "                         ng-if=\"::showBtnPesquisaAvancada\">\n" +
    "            </oobj-button>\n" +
    "\n" +
    "            <oobj-button label=\"Pesquisar\" btn-class=\"btn-primary\" icon=\"fa-search\" padding-right=\"0px\"\n" +
    "                         ng-click=\"::vm.pesquisar()\" ng-if=\"::showBtnPesquisar\">\n" +
    "            </oobj-button>\n" +
    "        </div>\n" +
    "    </div></script>");
  $templateCache.put("oobj-select/oobj-select.html",
    "<div ng-class=colspan class=\"form-group form-group-{{inputSize}}\"><label class=control-label ng-show=\"showLabel != false && label != undefined\"><strong><span ng-bind=label></span></strong> <span class=text-danger ng-show=ngRequired>*</span></label><ui-select ng-model=ngModel ng-required=ngRequired><ui-select-match><span ng-bind=$select.selected[itemLabel]></span></ui-select-match><ui-select-choices repeat=\"item in (provider | filter: $select.search) track by $index\"><span ng-bind=item[itemLabel]></span></ui-select-choices></ui-select></div>");
  $templateCache.put("oobj-sidebar/oobj-sidebar.html",
    "<div class=\"navbar-default sidebar\" role=navigation><div class=\"sidebar-nav navbar-collapse\"><ul class=\"nav in\" id=side-menu><li ng-class=\"{active: collapseVar == $index}\" ng-repeat=\"categoria in provider track by $index\"><a href=\"\" ng-click=check($index) ng-if=\"categoria.itens != undefined\"><i class=fa ng-class=categoria.icon></i> <span ng-bind=categoria.label></span> <span class=\"fa plus\" ng-if=\"categoria.itens != undefined\"></span></a> <a href=\"\" ng-click=check($index) ng-if=\"categoria.itens == undefined\" ui-sref=\"{{ categoria.sref }}\"><i class=fa ng-class=categoria.icon></i> <span ng-bind=categoria.label></span> <span class=\"fa plus\" ng-if=\"categoria.itens != undefined\"></span></a><ul class=\"nav nav-second-level\" uib-collapse=\"collapseVar != $index\" ng-if=\"categoria.itens != undefined\"><li ui-sref-active=active ng-repeat=\"item in categoria.itens track by $index\"><a ui-sref=\"{{ item.sref }}\"><span ng-class=item.icon ng-if=\"item.icon != undefined\"></span> <span ng-bind=item.label></span></a></li></ul><!-- /.nav-second-level --></li></ul></div><!-- /.sidebar-collapse --></div>");
  $templateCache.put("oobj-stats/oobj-stats.html",
    "<div class=\"col-lg-3 col-md-6\"><div class=\"panel panel-{{colour}}\"><div class=panel-heading><div class=row><div class=col-xs-3><i class=\"fa fa-{{type}} fa-5x\"></i></div><div class=\"col-xs-9 text-right\"><div class=huge>{{number}}</div></div></div><div class=row><div class=\"col-xs-12 text-right\"><div>{{comments}}</div></div></div></div><a ui-sref=\"{{goto === undefined ? '#' : goto}}\"><div class=panel-footer><span class=pull-right>Ver detalhes</span><div class=clearfix></div></div></a></div></div>");
  $templateCache.put("oobj-timeline/oobj-timeline.html",
    "<div class=panel-body ng-class=colspan><ul class=timeline><li ng-repeat=\"item in provider track by $index\" ng-class=\"$even ? '' : 'timeline-inverted'\"><div ng-if=item.badge class=timeline-badge ng-class=item.timelineStyle><i class=\"fa {{ item.badge }}\"></i></div><div class=timeline-panel><div class=timeline-heading><h5 class=timeline-title ng-bind=item.title></h5><p class=\"timeline-date text-muted\"><i class=\"fa fa-clock-o\"></i>&nbsp;<span ng-bind=\"item.date | date:'dd/MM/yyyy hh:mm:ss'\"></span></p></div><div class=timeline-body ng-if=item.description><p class=timeline-description ng-bind=item.description></p></div></div></li></ul></div>");
}]);

/**
 * Created by ATILLA on 06/10/2015.
 */
(function() {
    'use strict';

    angular.module('oobj-directives')
        .directive('oobjAutocomplete', oobjAutocomplete);

    /** @ngInject */
    function oobjAutocomplete() {
        var directive = {
            require: 'ngModel',
            restrict: 'EA',
            templateUrl: 'oobj-autocomplete/oobj-autocomplete.html',
            scope: {
                id: '@',
                ngModel: '=?',
                colspan: '@',
                getItems: '&',
                itemLabel: '@',
                itemValue: '@',
                label: '@',
                showLabel: '=?',
                ngRequired: '=?',
                ngChange: '&',
                ngBlur: '&',
                ngDisabled: '=?',
                ngReadonly: '=?',
                maxlength: '@',
                placeholder: '@',
                toUpper: '=?',
                toLower: '=?',
                inputSize: '@' // options: lg (large), md (medium), sm (small)
            },
            link: link
        };

        return directive;

        function link(scope, element, attrs, ngModelCtrl) {
            if (angular.isUndefined(scope.inputSize)) {
                scope.inputSize = 'sm';
            }

            scope.limpar = function() {
                scope.ngModel = null;
            }
        }
    }
})();
/**
 * Created by ATILLA on 16/11/2015.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjButtonDropdown', oobjButtonDropdown);

    /** @ngInject */
    function oobjButtonDropdown() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'oobj-button-dropdown/oobj-button-dropdown.html',
            scope: {
                label: '@',
                btnClass: '@',
                icon: '@',
                colspan: '@',
                provider: '=',
                paddingRight: '@',
                paddingLeft: '@'
            },
            link: link,
            compile: compile
        };

        return directive;

        function link(scope, element, attrs, ngModelCtrl) {

        }

        function compile(tElement, tAttrs) {
            return {
                pre: function preLink(scope, element, attrs) {
                    if (angular.isUndefined(scope.btnClass)) {
                        scope.btnClass = 'btn-default';
                    }

                    if (angular.isUndefined(scope.paddingRight)) {
                        element.css('padding-right', '6px');
                    } else {
                        element.css('padding-right', scope.paddingRight);
                    }

                    if (angular.isDefined(scope.paddingLeft)) {
                        element.css('padding-left', scope.paddingLeft);
                    }
                }
            }
        }
    }
})();


/**
 * Created by ATILLA on 02/10/2015.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjButton', oobjButton);

    /** @ngInject */
    function oobjButton() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'oobj-button/oobj-button.html',
            scope: {
                label: '@',
                btnClass: '@',
                icon: '@',
                colspan: '@',
                paddingLeft: '@',
                paddingRight: '@'
            },
            compile: compile
        };

        return directive;

        function compile(tElement, tAttrs) {
            return {
                pre: function preLink(scope, element, attrs) {
                    if (angular.isUndefined(scope.btnClass)) {
                        scope.btnClass = 'btn-default';
                    }

                    if (angular.isUndefined(scope.paddingRight)) {
                        element.css('padding-right', '6px');
                    } else {
                        element.css('padding-right', scope.paddingRight);
                    }

                    if (angular.isDefined(scope.paddingLeft)) {
                        element.css('padding-left', scope.paddingLeft);
                    }
                }
            }
        }
    }
})();

/**
 * Created by Leonardo on 10/9/2015.
 */
(function() {
    'use strict';

    angular.module('oobj-directives')
        .directive('oobjChartBar', oobjChartBar);

    /* @ngInject */
    function oobjChartBar() {
        var directive = {
            require: 'ngModel',
            restrict: 'EA',
            templateUrl: 'oobj-chart/oobj-chart-bar.html',
            scope: {
                id: '@',
                chartId: '@',
                ngModel: '=?',
                colspan: '@',
                title: '@',
                type: '@'
            },
            link: link
        };

        return directive;

        function link(scope, element, attrs, ngModelCtrl) {

        }
    }
})();
/**
 * Created by Leonardo on 10/9/2015.
 */
(function() {
    'use strict';

    angular.module('oobj-directives')
        .directive('oobjChartDoughnut', oobjChartDoughnut);

    /* @ngInject */
    function oobjChartDoughnut() {

        return {
            require: 'ngModel',
            restrict: 'EA',
            templateUrl: 'oobj-chart/oobj-chart-doughnut.html',
            scope: {
                id: '@',
                ngModel: '=?',
                colspan: '@',
                title: '@',
                chartId: '@'
            }
        };

    }
})();
/**
 * Created by ATILLA on 09/10/2015.
 */
(function() {
    'use strict';

    angular.module('oobj-directives')
        .directive('oobjChartLine', oobjChartLine);

    /* @ngInject */
    function oobjChartLine() {

        return {
            require: 'ngModel',
            restrict: 'EA',
            templateUrl: 'oobj-chart/oobj-chart-line.html',
            scope: {
                id: '@',
                ngModel: '=?',
                colspan: '@',
                title: '@'
            }
        };

    }
})();
/**
 * Created by Leonardo on 10/9/2015.
 */
(function() {
    'use strict';

    angular.module('oobj-directives')
        .directive('oobjChartPie', oobjChartPie);

    /* @ngInject */
    function oobjChartPie() {
        var directive = {
            require: 'ngModel',
            restrict: 'EA',
            templateUrl: 'oobj-chart/oobj-chart-pie.html',
            scope: {
                id: '@',
                ngModel: '=?',
                colspan: '@',
                title: '@'
            },
            link: link
        };

        return directive;

        function link(scope, element, attrs, ngModelCtrl) {

        }
    }
})();
/**
 * Created by Leonardo on 10/9/2015.
 */
(function() {
    'use strict';

    angular.module('oobj-directives')
        .directive('oobjChartRadar', oobjChartRadar);

    /* @ngInject */
    function oobjChartRadar() {

        return {
            require: 'ngModel',
            restrict: 'EA',
            templateUrl: 'oobj-chart/oobj-chart-radar.html',
            scope: {
                id: '@',
                ngModel: '=?',
                colspan: '@',
                title: '@',
                chartId: '@'
            }
        };

    }
})();
/**
 * Created by Leonardo on 10/5/2015.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjCheckbox', oobjCheckbox);

    /** @ngInject */
    function oobjCheckbox() {
        var directive = {
            require: 'ngModel',
            restrict: 'EA',
            templateUrl: 'oobj-checkbox/oobj-checkbox.html',
            scope: {
                id: '@',
                ngModel: '=?',
                colspan: '@',
                label: '@',
                inline: '='
            },
            link: link
        };

        return directive;

        function link(scope, element, attrs, ngModelCtrl) {
            if (scope.inline == true) {
                scope.checkboxClass = 'checkbox-inline';
            }

            if (angular.isDefined(scope.colspan)) {
                var classes = scope.colspan;

                if (angular.isDefined(scope.checkboxClass)) {
                    classes = classes + ' ' + scope.checkboxClass;
                }

                scope.checkboxClass = classes;
            }
        }
    }
})();
/**
 * Created by ATILLA on 15/10/2015.
 */
(function() {
    'use strict';

    angular.module('oobj-directives')
        .directive('oobjConfirmButton', oobjConfirmButton);

    /* @ngInject */
    function oobjConfirmButton() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'oobj-confirm-button/oobj-confirm-button.html',
            scope: {
                colspan: '@',
                title: '@',
                labelBtnYes: '@',
                labelBtnNo: '@',
                label: '@',
                classBtnYes: '@',
                classBtnNo: '@',
                btnClass: '@',
                onClickBtnYes: '&',
                onClickBtnNo: '&',
                icon: '@',
                msg: '@',
                msgStyle: '@'
            },
            compile: compile
        };

        return directive;

        function compile(tElement, tAttrs) {
            return {
                pre: function preLink(scope, element, attrs) {
                    if (angular.isUndefined(scope.classBtnConfirm)) {
                        scope.classBtnConfirm = 'btn-default';
                    }
                }
            }
        }
    }
})();

/**
 * Created by ATILLA on 30/09/2015.
 */
(function() {
    'use strict';

    angular.module('oobj-directives')
            .directive('oobjContainer', oobjContainer);

    /* @ngInject */
    function oobjContainer() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'oobj-container/oobj-container.html',
            transclude: true,
            scope: {
                title: '@'
            },
            link: link
        };

        return directive;

        function link(scope, element, attrs, ngModelCtrl) {

        }
    }
})();


/**
 * Created by ATILLA on 09/10/2015.
 */
(function() {
    'use strict';

    angular.module('oobj-directives')
        .directive('oobjCrud', oobjCrud);

    /* @ngInject */
    function oobjCrud() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'oobj-crud/oobj-crud.html',
            transclude: true,
            scope: {
                title: '@',
                vm: '=',
                footer: '@',
                showBtnSalvar: '=',
                showBtnLimpar: '=',
                showBtnExcluir: '=',
                showBtnOnBottom: '=',
                showBtnOnTop: '='
            },
            link: link
        };

        return directive;

        function link(scope, element, attrs, ngModelCtrl) {
            if (angular.isUndefined(scope.showBtnSalvar)) {
                scope.showBtnSalvar = true;
            }

            if (angular.isUndefined(scope.showBtnLimpar)) {
                scope.showBtnLimpar = true;
            }

            if (angular.isUndefined(scope.showBtnExcluir)) {
                scope.showBtnExcluir = false;
            }

            if (angular.isUndefined(scope.showBtnOnBottom)) {
                scope.showBtnOnBottom = true;
            }

            if (angular.isUndefined(scope.showBtnOnTop)) {
                scope.showBtnOnTop = false;
            }
        }
    }
})();
/**
 * Created by Leonardo on 10/1/2015.
 */
(function () {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjDatePicker', oobjDatePicker);

    /** @ngInject */
    function oobjDatePicker() {

        var directive = {
            require: 'ngModel',
            restrict: 'EA',
            templateUrl: 'oobj-date-picker/oobj-date-picker.html',
            scope: {
                id: '@',
                name: '@',
                ngModel: '=?',
                label: '@',
                showLabel: '@',
                colspan: '@',
                opts: '=',
                range: '=?',
                inputSize: '@'
            },
            link: link
        };

        function link(scope, elements, attr, ngModelCtrl) {
            scope.opts = {
                locale: {
                    format: "DD/MM/YYYY",
                    separator: " - ",
                    cancelLabel: "Limpar",
                    applyLabel: "OK",
                    fromLabel: "Entre",
                    toLabel: "E",
                    customRangeLabel: "Personalizar",
                    daysOfWeek: [
                        "Dom",
                        "Seg",
                        "Ter",
                        "Qua",
                        "Qui",
                        "Sex",
                        "Sáb"
                    ],
                    monthNames: [
                        "Janeiro",
                        "Fevereiro",
                        "Março",
                        "Abril",
                        "Maio",
                        "Junho",
                        "Julho",
                        "Agosto",
                        "Setembro",
                        "Outubro",
                        "Novembro",
                        "Dezembro"
                    ],
                    firstDay: 1
                },
                ranges: {
                    'Hoje': [moment(), moment()],
                    'Ontem': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                    'Últimos 7 Dias': [moment().subtract(6, 'days'), moment()],
                    'Últimos 30 Dias': [moment().subtract(29, 'days'), moment()],
                    'Este Mês': [moment().startOf('month'), moment().endOf('month')],
                    'Mês Passado': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                },
                linkedCalendars: false,
                opens: "left",
                cancelClass: "btn-danger",
            };

            if (angular.isUndefined(scope.inputSize)) {
                scope.inputSize = 'sm';
            }

            if (angular.isDefined(scope.range)) {
                scope.opts.singleDatePicker = false;
            } else {
                scope.opts.singleDatePicker = true;
            }
        }

        return directive;
    }
})();
/**
 * Created by ATILLA on 05/11/2015.
 */
(function () {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjFieldset', oobjFieldset);

    /** @ngInject */
    function oobjFieldset() {
        var directive = {
            restrict: 'EA',
            transclude: true,
            templateUrl: 'oobj-fieldset/oobj-fieldset.html',
            scope: {
                id: '@',
                colspan: '@',
                title: '@'
            }
        };

        return directive;
    }
})();

/**
 * Created by Leonardo on 10/5/2015.
 */
(function() {
    'use strict';

    angular.module('oobj-directives')
        .directive('oobjFooter', oobjFooter);

    /* @ngInject */
    function oobjFooter() {
        return {
            restrict: 'EA',
            templateUrl: 'oobj-footer/oobj-footer.html',
            scope: {
                version: '@?',
                generatedData: '@?',
                year: '@'
            },
            link: link
        };

        function link(scope, elements, attr, ngModelCtrl) {
            scope.version = '0.0.1';
            scope.generatedData = new Date();
            scope.year = new Date();
        }
    }

})();
/**
 * Created by ATILLA on 27/11/2015.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .factory('oobjColumn', oobjColumn);

    oobjColumn.$inject = ['$filter'];

    /** @ngInject */
    function oobjColumn($filter) {

        var oobjColumn = function (columnName, field, width) {
            this.columnName = angular.isDefined(columnName) ? columnName : '';
            this.mask = mask;
        };

        return oobjColumn;

        function mask(value, pattern) {
            return $filter(pattern)(value);
        }
    }
})();

/**
 * Created by ATILLA on 02/10/2015.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjGrid', oobjGrid);

    /** @ngInject */
    function oobjGrid() {

        var directive = {
            restrict: 'EA',
            templateUrl: 'oobj-grid/oobj-grid.html',
            scope: {
                title: '@',
                data: '=',
                colspan: '@',
                footer: '@',
                gridOptions: '=',
                getHeight: '&'
            },
            compile: compile
        };

        return directive;

        function compile(tElement, tAttrs) {
            return {
                pre: function preLink(scope, element, attrs) {
                    scope.language = 'pt-br';

                    if (angular.isUndefined(scope.gridOptions)) {
                        scope.gridOptions = {};
                    }

                    scope.gridStyle = {};

                    if (angular.isDefined(attrs.width)) {
                        scope.gridStyle.width = attrs.width;
                    }

                    if (angular.isDefined(attrs.height)) {
                        scope.gridStyle.height = attrs.height;
                    }

                    if (angular.isDefined(scope.data)) {
                        scope.gridOptions.data = scope.data;
                    }

                    scope.getHeight = function() {
                        var rowHeight = 45;
                        return {
                            height: (scope.gridOptions.data.length * rowHeight) + "px"
                        };
                    }
                }
            }
        }

    }
})();


/**
 * Created by ATILLA on 05/10/2015.
 */
(function() {
    'use strict';

    angular.module('oobj-directives')
        .directive('oobjInputContainer', oobjInputContainer);

    /* @ngInject */
    function oobjInputContainer() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'oobj-input-container/oobj-input-container.html',
            transclude: true,
            scope: {
                colspan: '@',
                label: '@',
                showLabel: '=?'
            },
            link: link
        };

        return directive;

        function link(scope, element, attrs, ngModelCtrl) {

        }
    }
})();

/**
 * Created by ATILLA on 25/09/2015.
 */
(function() {
    'use strict';

    angular.module('oobj-directives')
            .directive('oobjInputText', oobjInputText);

    /* @ngInject */
    function oobjInputText() {

        var directive = {
            require: 'ngModel',
            restrict: 'EA',
            templateUrl: 'oobj-input-text/oobj-input-text.html',
            scope: {
                id: '@',
                ngModel: '=?',
                colspan: '@',
                type: '@',
                label: '@',
                showLabel: '=?',
                ngRequired: '=?',
                ngChange: '&',
                ngKeyup: '&',
                ngKeydown: '&',
                ngBlur: '&',
                ngDisabled: '=?',
                ngReadonly: '=?',
                maxlength: '@',
                max: '@',
                min: '@',
                mask: '@',
                removeMask: '=?',
                placeholder: '@',
                autofocus: '=?',
                currency: '=?',
                toUpper: '=?',
                toLower: '=?',
                inputSize: '@' // options: lg (large), md (medium), sm (small)
            },
            link: link
        };

        return directive;

        function link(scope, element, attrs, ngModelCtrl) {
            if (angular.isUndefined(scope.inputSize)) {
                scope.inputSize = 'sm';
            }

            scope.limpar = function() {
                scope.ngModel = null;
            }
        }

    }
})();


/**
 * Created by ATILLA on 20/10/2015.
 */
(function () {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjLogin', oobjLogin);

    /* @ngInject */
    function oobjLogin() {
        var directive = {
            link: link,
            restrict: 'EA',
            templateUrl: 'oobj-login/oobj-login.html',
            scope: {
                logo: '@',
                labelBtnLogin: '@',
                login: '&',
                labelForgotPassword: '@',
                labelNewUser: '@',
                forgotPassword: '&',
                newUser: '&',
                username: '=',
                password: '='
            }
        };

        return directive;

        function link(scope, element, attrs) {
        }
    }
})();

/**
 * Created by ATILLA on 14/10/2015.
 */
(function() {
    'use strict';

    angular.module('oobj-directives')
        .directive('oobjModal', oobjModal);

    /* @ngInject */
    function oobjModal() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'oobj-modal/oobj-modal.html',
            transclude: true,
            scope: {
                id: '@',
                colspan: '@',
                title: '@',
                showBtnOpen: '=',
                showBtnClose: '=',
                labelBtnOpen: '@',
                labelBtnClose: '@',
                classBtnOpen: '@',
                size: '@'
            },
            link: link,
            compile: compile
        };

        return directive;

        function link(scope, element, attrs, ngModelCtrl) {

        }

        function compile(tElement, tAttrs) {
            return {
                pre: function preLink(scope, element, attrs) {
                    if (angular.isUndefined(scope.id)) {
                        scope.id = '#oobjModal';
                    }

                    if (angular.isUndefined(scope.classBtnOpen)) {
                        scope.classBtnOpen = 'btn-default';
                    }

                    if (angular.isUndefined(scope.labelBtnOpen)) {
                        scope.labelBtnOpen = 'Abrir Modal';
                    }

                    if (angular.isUndefined(scope.labelBtnClose)) {
                        scope.labelBtnClose = 'Fechar';
                    }

                    if (angular.isUndefined(scope.showBtnOpen)) {
                        scope.showBtnOpen = true;
                    }

                    if (angular.isUndefined(scope.showBtnClose)) {
                        scope.showBtnClose = true;
                    }

                    if (angular.isUndefined(scope.size)) {
                        scope.size = '';
                    }
                }
            }
        }
    }
})();

/**
 * Created by ATILLA on 24/11/2015.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjMultiselect', oobjMultiselect);

    /** @ngInject */
    function oobjMultiselect() {
        var directive = {
            require: 'ngModel',
            restrict: 'EA',
            templateUrl: 'oobj-multiselect/oobj-multiselect.html',
            scope: {
                id: '@',
                ngModel: '=',
                colspan: '@',
                label: '@',
                showLabel: '=?',
                ngRequired: '=',
                onOpen: '&',
                provider: '=',
                itemLabel: '@',
                itemId: '@',
                inputSize: '@'
            },
            compile: compile
        };

        return directive;

        function compile(tElement, tAttrs) {
            return {
                pre: function preLink(scope, element, attrs) {
                    if (angular.isUndefined(scope.itemLabel)) {
                        scope.itemLabel = 'descricao';
                    }

                    if (angular.isUndefined(scope.itemId)) {
                        scope.itemId = 'id';
                    }

                    if (angular.isUndefined(scope.inputSize)) {
                        scope.inputSize = 'sm';
                    }

                    bindSelect(scope, element);
                }
            }
        }

        function bindSelect(scope, element) {
            var select = element.find('select');

            angular.forEach(scope.provider, function(value) {
                select.append(
                    angular.element('<option></option>')
                        .attr('value', value[scope.itemId])
                        .text(value[scope.itemLabel])
                );
            });

            select.selectpicker();
        }
    }
})();

/**
 * Created by ATILLA on 30/09/2015.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjPanel', oobjPanel);

    /** @ngInject */
    function oobjPanel() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'oobj-panel/oobj-panel.html',
            transclude: true,
            scope: {
                title: '@',
                footer: '@',
                colspan: '@',
                panelClass: '@'
            },
            link: link
        };

        return directive;

        function link(scope, element, attrs, ngModelCtrl) {
            if (angular.isUndefined(scope.panelClass)) {
                scope.panelClass = 'panel-default';
            }
        }
    }
})();

/**
 * Created by Leonardo on 10/5/2015.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjRadio', oobjRadio);

    /** @ngInject */
    function oobjRadio() {

        var directive = {
            require: 'ngModel',
            restrict: 'EA',
            templateUrl: 'oobj-radio/oobj-radio.html',
            scope: {
                id: '@',
                label: '@',
                ngModel: '=?',
                inline: '=',
                optionName: '@',
                optionValue: '@',
                colspan: '@'
            },
            link: link
        };

        return directive;

        function link(scope, element, attrs, ngModelCtrl) {
            if (scope.inline == true) {
                scope.radioClass = 'radio-inline';
            }

            if (angular.isDefined(scope.colspan)) {
                var classes = scope.colspan;

                if (angular.isDefined(scope.radioClass)) {
                    classes = classes + ' ' + scope.radioClass;
                }

                scope.radioClass = classes;
            }
        }
    }
})();

/**
 * Created by ATILLA on 08/10/2015.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjSearch', oobjSearch);

    /** @ngInject */
    function oobjSearch() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'oobj-search/oobj-search.html',
            transclude: true,
            scope: {
                title: '@',
                vm: '=',
                footer: '@',
                showBtnPesquisaAvancada: '=',
                showBtnLimpar: '=',
                showBtnPesquisar: '=',
                gridOptions: '=',
                showBtnOnBottom: '=',
                showBtnOnTop: '='
            },
            link: link
        };

        return directive;

        function link(scope, element, attrs, ngModelCtrl) {
            if (angular.isUndefined(scope.showBtnPesquisaAvancada)) {
                scope.showBtnPesquisaAvancada = true;
            }

            if (angular.isUndefined(scope.showBtnPesquisar)) {
                scope.showBtnPesquisar = true;
            }

            if (angular.isUndefined(scope.showBtnLimpar)) {
                scope.showBtnLimpar = false;
            }

            if (angular.isUndefined(scope.showBtnOnBottom)) {
                scope.showBtnOnBottom = true;
            }

            if (angular.isUndefined(scope.showBtnOnTop)) {
                scope.showBtnOnTop = false;
            }
        }
    }
})();

/**
 * Created by ATILLA on 19/11/2015.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjSelect', oobjSelect);

    /** @ngInject */
    function oobjSelect() {
        var directive = {
            require: 'ngModel',
            restrict: 'EA',
            templateUrl: 'oobj-select/oobj-select.html',
            scope: {
                id: '@',
                ngModel: '=',
                colspan: '@',
                label: '@',
                showLabel: '=?',
                ngRequired: '=',
                onOpen: '&',
                provider: '=',
                itemLabel: '@',
                inputSize: '@'
            },
            compile: compile
        };

        return directive;

        function compile(tElement, tAttrs) {
            return {
                pre: function preLink(scope, element, attrs) {
                    if (angular.isUndefined(scope.itemLabel)) {
                        scope.itemLabel = 'descricao';
                    }

                    if (angular.isUndefined(scope.inputSize)) {
                        scope.inputSize = 'sm';
                    }
                }
            }
        }
    }
})();
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

(function() {
    'use strict';

    angular.module('oobj-directives')
        .directive('oobjStats', oobjStats);

    /* @ngInject */
    function oobjStats () {
        var directive = {
            templateUrl: 'oobj-stats/oobj-stats.html',
            restrict: 'E',
            replace: true,
            scope: {
                'model': '=',
                'comments': '@',
                'number': '@',
                'name': '@',
                'colour': '@',
                'details': '@',
                'type': '@',
                'goto': '@'
            }
        };

        return directive;
    }
})();

/**
 * Created by Leonardo on 08/10/2015.
 */
(function () {
    'use strict';

    angular.module('oobj-directives')
        .directive('oobjTimeline', oobjTimeline);

    /* @ngInject */
    function oobjTimeline() {

        var directive = {
            templateUrl: 'oobj-timeline/oobj-timeline.html',
            restrict: 'E',
            replace: true,
            scope: {
                provider: '=',
                colspan: '@',
            },
            
        };

        return directive;
    }

})();