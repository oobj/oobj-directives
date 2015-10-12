!function(){"use strict";function a(a){function b(a,b,c,d){a.limpar=function(){a.ngModel=null}}var c={require:"ngModel",restrict:"EA",templateUrl:"scripts/directives/oobj-autocomplete/oobj-autocomplete.html",scope:{id:"@",ngModel:"=?",colspan:"@",getItems:"&",itemLabel:"@",itemValue:"@",label:"@",showLabel:"=?",ngRequired:"=?",ngChange:"&",ngBlur:"&",ngDisabled:"=?",ngReadonly:"=?",maxlength:"@",placeholder:"@",toUpper:"=?",toLower:"=?",inputSize:"@"},link:b};return c}angular.module("oobjDirectives").directive("oobjAutocomplete",a),a.$inject=["$http"]}(),function(){"use strict";function a(){function a(a,b,c,d){}function b(a,b){return{pre:function(a,b,c){angular.isUndefined(c.width)&&(c.width="150px"),angular.isUndefined(a.btnClass)&&(a.btnClass="btn-default"),a.btnStyle={},a.btnStyle.height=c.height,a.btnStyle.width=c.width}}}var c={restrict:"EA",templateUrl:"scripts/directives/oobj-button/oobj-button.html",scope:{label:"@",btnClass:"@",icon:"@",colspan:"@"},link:a,compile:b};return c}angular.module("oobjDirectives").directive("oobjButton",a),a.$inject=[]}(),function(){"use strict";function a(){function a(a,b,c,d){}var b={require:"ngModel",restrict:"EA",templateUrl:"scripts/directives/oobj-chart/oobj-chart-bar.html",scope:{id:"@",chartId:"@",ngModel:"=?",colspan:"@",title:"@",type:"@"},link:a};return b}angular.module("oobjDirectives").directive("oobjChartBar",a),a.$inject=[]}(),function(){"use strict";function a(){return{require:"ngModel",restrict:"EA",templateUrl:"scripts/directives/oobj-chart/oobj-chart-doughnut.html",scope:{id:"@",ngModel:"=?",colspan:"@",title:"@",chartId:"@"}}}angular.module("oobjDirectives").directive("oobjChartDoughnut",a),a.$inject=[]}(),function(){"use strict";function a(){return{require:"ngModel",restrict:"EA",templateUrl:"scripts/directives/oobj-chart/oobj-chart-line.html",scope:{id:"@",ngModel:"=?",colspan:"@",title:"@"}}}angular.module("oobjDirectives").directive("oobjChartLine",a),a.$inject=[]}(),function(){"use strict";function a(){function a(a,b,c,d){}var b={require:"ngModel",restrict:"EA",templateUrl:"scripts/directives/oobj-chart/oobj-chart-pie.html",scope:{id:"@",ngModel:"=?",colspan:"@",title:"@"},link:a};return b}angular.module("oobjDirectives").directive("oobjChartPie",a),a.$inject=[]}(),function(){"use strict";function a(){return{require:"ngModel",restrict:"EA",templateUrl:"scripts/directives/oobj-chart/oobj-chart-radar.html",scope:{id:"@",ngModel:"=?",colspan:"@",title:"@",chartId:"@"}}}angular.module("oobjDirectives").directive("oobjChartRadar",a),a.$inject=[]}(),function(){"use strict";function a(){function a(a,b,c,d){if(1==a.inline&&(a.checkboxClass="checkbox-inline"),angular.isDefined(a.colspan)){var e=a.colspan;angular.isDefined(a.checkboxClass)&&(e=e+" "+a.checkboxClass),a.checkboxClass=e}}var b={require:"ngModel",restrict:"EA",templateUrl:"scripts/directives/oobj-checkbox/oobj-checkbox.html",scope:{id:"@",ngModel:"=?",colspan:"@",label:"@",inline:"="},link:a};return b}angular.module("oobjDirectives").directive("oobjCheckbox",a),a.$inject=[]}(),function(){"use strict";function a(){function a(a,b,c,d){}var b={restrict:"EA",templateUrl:"scripts/directives/oobj-container/oobj-container.html",transclude:!0,scope:{title:"@"},link:a};return b}angular.module("oobjDirectives").directive("oobjContainer",a),a.$inject=[]}(),function(){"use strict";function a(){function a(a,b,c,d){angular.isUndefined(a.showBtnSalvar)&&(a.showBtnSalvar=!0),angular.isUndefined(a.showBtnLimpar)&&(a.showBtnLimpar=!0),angular.isUndefined(a.showBtnLimpar)&&(a.showBtnExcluir=!1),angular.isUndefined(a.showBtnOnBottom)&&(a.showBtnOnBottom=!0),angular.isUndefined(a.showBtnOnTop)&&(a.showBtnOnTop=!1)}var b={restrict:"EA",templateUrl:"scripts/directives/oobj-crud/oobj-crud.html",transclude:!0,scope:{title:"@",vm:"=",footer:"@",showBtnSalvar:"=",showBtnLimpar:"=",showBtnExcluir:"=",showBtnOnBottom:"=",showBtnOnTop:"="},link:a};return b}angular.module("oobjDirectives").directive("oobjCrud",a),a.$inject=[]}(),function(){"use strict";function a(){function a(a,b,c,d){a.opts={locale:{format:"DD/MM/YYYY",separator:" - ",applyLabel:"OK",cancelLabel:"Limpar",fromLabel:"Entre",toLabel:"E",customRangeLabel:"Customizar",daysOfWeek:["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],monthNames:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],firstDay:1},ranges:{Hoje:[moment(),moment()],Ontem:[moment().subtract(1,"days"),moment().subtract(1,"days")],"Últimos 7 Dias":[moment().subtract(6,"days"),moment()],"Últimos 30 Dias":[moment().subtract(29,"days"),moment()],"Este Mês":[moment().startOf("month"),moment().endOf("month")],"Mês Passado":[moment().subtract(1,"month").startOf("month"),moment().subtract(1,"month").endOf("month")]},linkedCalendars:!1,opens:"left",cancelClass:"btn-danger"},angular.isDefined(a.range)?a.opts.singleDatePicker=!1:a.opts.singleDatePicker=!0}var b={require:"ngModel",restrict:"EA",templateUrl:"scripts/directives/oobj-date-picker/oobj-date-picker.html",scope:{id:"@",name:"@",ngModel:"=?",label:"@",showLabel:"@",colspan:"@",opts:"=",range:"=?",inputSize:"@"},link:a};return b}angular.module("oobjDirectives").directive("oobjDatePicker",a),a.$inject=[]}(),function(){"use strict";function a(){function a(a,b,c,d){a.version="0.0.1",a.generatedData=new Date,a.year=new Date}return{restrict:"EA",templateUrl:"scripts/directives/oobj-footer/oobj-footer.html",scope:{version:"@?",generatedData:"@?",year:"@"},link:a}}angular.module("oobjDirectives").directive("oobjFooter",a),a.$inject=[]}(),function(){"use strict";function a(a,b){function c(a,b,c,d){}function d(a,b){return{pre:function(a,b,c){angular.isUndefined(a.gridOptions)&&(a.gridOptions={}),a.gridStyle={},angular.isDefined(c.width)&&(a.gridStyle.width=c.width),angular.isDefined(c.height)&&(a.gridStyle.height=c.height),a.data.length||(a.gridStyle.height="60px"),angular.isDefined(a.data)&&(a.gridOptions.data=a.data)}}}var e={restrict:"EA",templateUrl:"scripts/directives/oobj-grid/oobj-grid.html",scope:{title:"@",data:"=",colspan:"@",footer:"@",gridOptions:"="},link:c,compile:d};return e}angular.module("oobjDirectives").directive("oobjGrid",a),a.$inject=["$interval","uiGridConstants"]}(),function(){"use strict";function a(){function a(a,b,c,d){}var b={restrict:"EA",templateUrl:"scripts/directives/oobj-input-container/oobj-input-container.html",transclude:!0,scope:{colspan:"@",label:"@",showLabel:"=?"},link:a};return b}angular.module("oobjDirectives").directive("oobjInputContainer",a),a.$inject=[]}(),function(){"use strict";function a(){function a(a,b,c,d){a.limpar=function(){a.ngModel=null}}var b={require:"ngModel",restrict:"EA",templateUrl:"scripts/directives/oobj-input-text/oobj-input-text.html",scope:{id:"@",ngModel:"=?",colspan:"@",type:"@",label:"@",showLabel:"=?",ngRequired:"=?",ngChange:"&",ngKeyup:"&",ngKeydown:"&",ngBlur:"&",ngDisabled:"=?",ngReadonly:"=?",maxlength:"@",max:"@",min:"@",mask:"@",removeMask:"=?",placeholder:"@",autofocus:"=?",currency:"=?",toUpper:"=?",toLower:"=?",inputSize:"@"},link:a};return b}angular.module("oobjDirectives").directive("oobjInputText",a),a.$inject=[]}(),describe("Teste de Directiva: oobjInputText - ",function(){function a(){var a=angular.element('<oobj-input-text show-label="showLabel" ng-model="ngModel" ng-required="ngRequired" ng-disabled="ngDisabled" ng-readonly="ngReadonly" remove-mask="removeMask" autofocus="autofocus" currency="currency" to-upper="toUpper" to-lower="toLower" ng-change="ngChange()" ng-keyup="ngKeyup()" ng-keydown="ngKeydown()" ng-blur="ngBlur()"></oobj-input-text>'),b=c(a)(d);return d.$digest(),b}var b,c,d,e,f;beforeEach(function(){module("oobjDirectives"),angular.mock.module("templates")}),beforeEach(inject(function(g,h){b=h,d=b.$new(),c=g,d.id="testeId",d.colspan="testecolspan",d.type="testetype",d.label="testelabel",d.maxlength="testemaxlength",d.max="testemax",d.min="testemin",d.mask="testemask",d.placeholder="testeplaceholder",d.inputSize="testeinputSize",d.showLabel={prop:"valorScope"},d.ngModel={prop:"ngModel"},d.ngRequired={prop:"ngRequired"},d.ngDisabled={prop:"ngDisabled"},d.ngReadonly={prop:"ngReadonly"},d.removeMask={prop:"removeMask"},d.autofocus={prop:"autofocus"},d.currency={prop:"currency"},d.toUpper={prop:"toUpper"},d.toLower={prop:"toLower"},d.ngChange=jasmine.createSpy("ngChange"),d.ngKeyup=jasmine.createSpy("ngKeyup"),d.ngKeydown=jasmine.createSpy("ngKeydown"),d.ngBlur=jasmine.createSpy("ngBlur"),e=a(),f=e.isolateScope()})),it("Teste input text. Divs presentes",function(){expect(e.find("div").length).toEqual(3),expect(e.find("div")).toBeDefined(),expect(e.find("div")).toBeTruthy()}),it("Isolated scope deve ter atributos assigned",function(){expect(f.showLabel).toBeDefined(),expect(f.ngChange).toBeDefined(),expect(f.ngModel).toBeDefined(),expect(f.ngRequired).toBeDefined(),expect(f.ngKeyup).toBeDefined(),expect(f.ngKeydown).toBeDefined(),expect(f.ngBlur).toBeDefined(),expect(f.ngDisabled).toBeDefined(),expect(f.ngReadonly).toBeDefined(),expect(f.removeMask).toBeDefined(),expect(f.autofocus).toBeDefined(),expect(f.currency).toBeDefined(),expect(f.toUpper).toBeDefined(),expect(f.toLower).toBeDefined(),expect(f.inputSize).toBeDefined()}),it('Teste atributos com scope isolado - one way binding ("@").',function(){expect(d.id).toEqual("testeId"),f.id="isoladoId",expect(d.id).toEqual("testeId"),expect(d.colspan).toEqual("testecolspan"),f.colspan="isoladocolspan",expect(d.colspan).toEqual("testecolspan"),expect(d.type).toEqual("testetype"),f.type="isoladotype",expect(d.type).toEqual("testetype"),expect(d.label).toEqual("testelabel"),f.label="isoladolabel",expect(d.label).toEqual("testelabel"),expect(d.maxlength).toEqual("testemaxlength"),f.maxlength="isoladomaxlengthl",expect(d.maxlength).toEqual("testemaxlength"),expect(d.max).toEqual("testemax"),f.max="isoladomax",expect(d.max).toEqual("testemax"),expect(d.min).toEqual("testemin"),f.min="isoladomax",expect(d.min).toEqual("testemin"),expect(d.mask).toEqual("testemask"),f.mask="isoladomask",expect(d.mask).toEqual("testemask"),expect(d.placeholder).toEqual("testeplaceholder"),f.placeholder="isoladoplaceholder",expect(d.placeholder).toEqual("testeplaceholder"),expect(d.inputSize).toEqual("testeinputSize"),f.inputSize="isoladoinputSize",expect(d.inputSize).toEqual("testeinputSize")}),it('Teste atributos com scope isolado - two way binding ("=").',function(){f.showLabel.prop="valorIsoladoScope",expect(d.showLabel.prop).toEqual("valorIsoladoScope"),f.ngModel.prop="valorIsoladoScope",expect(d.ngModel.prop).toEqual("valorIsoladoScope"),f.ngRequired.prop="valorIsoladoScope",expect(d.ngRequired.prop).toEqual("valorIsoladoScope"),f.ngDisabled.prop="valorIsoladoScope",expect(d.ngDisabled.prop).toEqual("valorIsoladoScope"),f.ngReadonly.prop="valorIsoladoScope",expect(d.ngReadonly.prop).toEqual("valorIsoladoScope"),f.removeMask.prop="valorIsoladoScope",expect(d.removeMask.prop).toEqual("valorIsoladoScope"),f.autofocus.prop="valorIsoladoScope",expect(d.autofocus.prop).toEqual("valorIsoladoScope"),f.currency.prop="valorIsoladoScope",expect(d.currency.prop).toEqual("valorIsoladoScope"),f.toUpper.prop="valorIsoladoScope",expect(d.toUpper.prop).toEqual("valorIsoladoScope"),f.toLower.prop="valorIsoladoScope",expect(d.toLower.prop).toEqual("valorIsoladoScope")}),it('Teste atributos - function ("&").',function(){expect(typeof f.ngChange).toEqual("function"),expect(typeof f.ngKeyup).toEqual("function"),expect(typeof f.ngKeydown).toEqual("function"),expect(typeof f.ngBlur).toEqual("function")}),it('Teste atributos com scope isolado - function ("&").',function(){f.ngChange(),expect(d.ngChange).toHaveBeenCalled(),f.ngKeyup(),expect(d.ngKeyup).toHaveBeenCalled(),f.ngKeydown(),expect(d.ngKeydown).toHaveBeenCalled(),f.ngBlur(),expect(d.ngBlur).toHaveBeenCalled()})}),function(){"use strict";function a(){function a(a,b,c,d){a.panelClass="panel-default",angular.isDefined(a.panelStyle)&&(a.panelClass="panel-"+a.panelStyle)}var b={restrict:"EA",templateUrl:"scripts/directives/oobj-panel/oobj-panel.html",transclude:!0,scope:{title:"@",footer:"@",colspan:"@",panelStyle:"@"},link:a};return b}angular.module("oobjDirectives").directive("oobjPanel",a),a.$inject=[]}(),function(){"use strict";function a(){function a(a,b,c,d){angular.isUndefined(a.showBtnPesquisaAvancada)&&(a.showBtnPesquisaAvancada=!0),angular.isUndefined(a.showBtnPesquisar)&&(a.showBtnPesquisar=!0),angular.isUndefined(a.showBtnLimpar)&&(a.showBtnLimpar=!1)}var b={restrict:"EA",templateUrl:"scripts/directives/oobj-pesquisa/oobj-pesquisa.html",transclude:!0,scope:{title:"@",vm:"=",footer:"@",showBtnPesquisaAvancada:"=",showBtnLimpar:"=",showBtnPesquisar:"=",gridOptions:"="},link:a};return b}angular.module("oobjDirectives").directive("oobjPesquisa",a),a.$inject=[]}(),function(){"use strict";function a(){function a(a,b,c,d){if(1==a.inline&&(a.radioClass="radio-inline"),angular.isDefined(a.colspan)){var e=a.colspan;angular.isDefined(a.radioClass)&&(e=e+" "+a.radioClass),a.radioClass=e}}var b={require:"ngModel",restrict:"EA",templateUrl:"scripts/directives/oobj-radio/oobj-radio.html",scope:{id:"@",label:"@",ngModel:"=?",inline:"=",optionName:"@",optionValue:"@",colspan:"@"},link:a};return b}angular.module("oobjDirectives").directive("oobjRadio",a)}(),function(){"use strict";function a(){function a(a,b,c,d){}function b(a,b){return{pre:function(a,b,c){a.selectStyle={},angular.isDefined(c.width)&&(a.selectStyle.width=c.width),angular.isDefined(c.height)&&(a.selectStyle.height=c.height)}}}var c={require:"ngModel",restrict:"EA",templateUrl:"scripts/directives/oobj-select/oobj-select.html",scope:{id:"@",ngModel:"=",colspan:"@",label:"@",showLabel:"=?",ngRequired:"=",placeholder:"@",onOpen:"&",provider:"=",itemLabel:"@",itemValue:"@"},link:a,compile:b};return c}angular.module("oobjDirectives").directive("oobjSelect",a),a.$inject=[]}(),function(){"use strict";function a(){function a(a){a.selectedMenu="dashboard",a.collapseVar=0,a.multiCollapseVar=0,angular.isUndefined(a.provider)&&(a.provider=[{icon:"fa-tachometer fa-fw",label:"Dashboard",sref:"dashboard.home"},{icon:"fa-arrow-circle-o-right fa-fw",label:"Emissão de DF-e",itens:[{label:"NF-e Emitidas",sref:"dashboard.panels-wells"},{label:"NFC-e Emitidas",sref:"dashboard.buttons"},{label:"CT-e Emitidos",sref:"dashboard.cte-emissao-pesquisa"},{label:"MDF-e Emitidos [tmp]",sref:"dashboard.cte-emissao-cadastro"}]},{icon:"fa-arrow-circle-o-left fa-fw",label:"Recebimento de DF-e",itens:[{label:"NF-e Recebidas",sref:"dashboard.nfe-recebimento"},{label:"NFC-e Recebidas",sref:"dashboard.buttons"},{label:"CT-e Recebidos",sref:"dashboard.notifications"},{label:"MDF-e Recebidos",sref:"dashboard.typography"}]},{icon:"fa-share-alt fa-fw",label:"Integração",sref:"dashboard.home"},{icon:"fa-map-signs fa-fw",label:"Portaria",sref:"dashboard.home"},{icon:"fa-cog fa-fw",label:"Ferramentas",sref:"dashboard.home"},{icon:"fa-file-pdf-o fa-fw",label:"Relatórios",sref:"dashboard.home"},{icon:"fa-briefcase fa-fw",label:"Administração",sref:"dashboard.home"},{icon:"fa-pencil-square-o fa-fw",label:"Customizações",sref:"dashboard.home"}]),a.check=function(b){b==a.collapseVar?a.collapseVar=0:a.collapseVar=b},a.multiCheck=function(b){b==a.multiCollapseVar?a.multiCollapseVar=0:a.multiCollapseVar=b}}var b={templateUrl:"scripts/directives/oobj-sidebar/oobj-sidebar.html",restrict:"E",replace:!0,scope:{provider:"="},controller:a};return b}angular.module("oobjDirectives").directive("oobjSidebar",a),a.$inject=[]}(),function(){"use strict";function a(){var a={templateUrl:"scripts/directives/oobj-timeline/oobj-timeline.html",restrict:"E",replace:!0,scope:{provider:"=",colspan:"@"}};return a}angular.module("oobjDirectives").directive("oobjTimeline",a),a.$inject=[]}(),angular.module("templates-main",["oobj-autocomplete/oobj-autocomplete.html","oobj-button/oobj-button.html","oobj-chart/oobj-chart-bar.html","oobj-chart/oobj-chart-doughnut.html","oobj-chart/oobj-chart-line.html","oobj-chart/oobj-chart-pie.html","oobj-chart/oobj-chart-radar.html","oobj-checkbox/oobj-checkbox.html","oobj-container/oobj-container.html","oobj-crud/oobj-crud.html","oobj-date-picker/oobj-date-picker.html","oobj-footer/oobj-footer.html","oobj-grid/oobj-grid.html","oobj-input-container/oobj-input-container.html","oobj-input-text/oobj-input-text.html","oobj-panel/oobj-panel.html","oobj-pesquisa/oobj-pesquisa.html","oobj-radio/oobj-radio.html","oobj-select/oobj-select.html","oobj-sidebar/oobj-sidebar.html","oobj-timeline/oobj-timeline.html"]),angular.module("oobj-autocomplete/oobj-autocomplete.html",[]).run(["$templateCache",function(a){a.put("oobj-autocomplete/oobj-autocomplete.html",'<div ng-class="colspan" class="form-group form-group-{{inputSize}}">\n    <label class="control-label" ng-if="showLabel != false && label != undefined" for="{{id}}">\n        <span ng-bind="label"></span>\n        <span style="color: red;" ng-show="ngRequired">*</span>\n    </label>\n\n    <div class="input-group">\n        <input id="{{id}}"\n               type="text"\n               class="form-control"\n               ng-model="ngModel"\n               placeholder="{{placeholder}}"\n               typeahead="item as item[itemLabel] for item in getItems()($viewValue)"\n               typeahead-loading="loadingItems"\n               typeahead-no-results="noResults"\n               ng-disabled="ngDisabled"\n               ng-readonly="ngReadonly"\n               ng-change="onChange($event)"\n               ng-blur="onBlur($event)"\n               maxlength="{{maxlength}}">\n\n        <div class="input-group-btn">\n            <button type="button" ng-click="limpar()" class="btn btn-default btn-{{inputSize}}">\n                <i class="fa fa-times"></i>\n            </button>\n        </div>\n    </div>\n\n    <div class="help-block">\n        <i ng-show="loadingItems" class="fa fa-refresh"></i>\n        <div ng-show="noResults">\n            <i class="fa fa-times"></i> Nenhum resultado encontrado\n        </div>\n    </div>\n</div>\n')}]),angular.module("oobj-button/oobj-button.html",[]).run(["$templateCache",function(a){a.put("oobj-button/oobj-button.html",'<button type="button"\n        class="btn"\n        ng-class="btnClass"\n        ng-style="btnStyle"\n        ng-disabled="ngDisabled">\n    <i class="fa" ng-class="icon"></i>\n    <span ng-bind="label"></span>\n</button>')}]),angular.module("oobj-chart/oobj-chart-bar.html",[]).run(["$templateCache",function(a){a.put("oobj-chart/oobj-chart-bar.html",'<div class="{{ colspan }}" id="{{ chartId }}">\n    <div class="panel panel-default">\n        <div class="panel-heading">{{ title }}</div>\n        <div class="panel-body">\n            <canvas class="chart chart-bar chart-xl"\n                    chart-data="ngModel.data"\n                    chart-labels="ngModel.labels"\n                    chart-legend="true"\n                    chart-click="ngModel.onClick"\n                    chart-series="ngModel.series">\n            </canvas>\n        </div>\n    </div>\n</div>')}]),angular.module("oobj-chart/oobj-chart-doughnut.html",[]).run(["$templateCache",function(a){a.put("oobj-chart/oobj-chart-doughnut.html",'<div class="{{ colspan }}" id="{{ chartId }}">\n    <div class="panel panel-default">\n        <div class="panel-heading">{{ title }}</div>\n        <div class="panel-body">\n            <canvas class="chart chart-doughnut chart-xs"\n                    chart-data="ngModel.data"\n                    chart-labels="ngModel.labels"\n                    chart-legend="true">\n            </canvas>\n        </div>\n    </div>\n</div>')}]),angular.module("oobj-chart/oobj-chart-line.html",[]).run(["$templateCache",function(a){a.put("oobj-chart/oobj-chart-line.html",'<div class="{{ colspan }}" id="line-chart">\n    <div class="panel panel-default">\n        <div class="panel-heading">{{ title }}</div>\n        <div class="panel-body">\n            <canvas class="chart chart-line chart-xl"\n                    chart-data="ngModel.data"\n                    chart-labels="ngModel.labels"\n                    chart-legend="true"\n                    chart-click="ngModel.onClick"\n                    chart-series="ngModel.series">\n            </canvas>\n        </div>\n    </div>\n</div>')}]),angular.module("oobj-chart/oobj-chart-pie.html",[]).run(["$templateCache",function(a){a.put("oobj-chart/oobj-chart-pie.html",'<div class="{{ colspan }}" id="{{ chartId }}">\n    <div class="panel panel-default">\n        <div class="panel-heading">{{ title }}</div>\n        <div class="panel-body">\n            <canvas class="chart chart-pie chart-xs"\n                    chart-data="ngModel.data"\n                    chart-labels="ngModel.labels"\n                    chart-legend="true">\n            </canvas>\n        </div>\n    </div>\n</div>')}]),angular.module("oobj-chart/oobj-chart-radar.html",[]).run(["$templateCache",function(a){a.put("oobj-chart/oobj-chart-radar.html",'<div class="{{ colspan }}" id="{{ chartId }}">\n    <div class="panel panel-default">\n        <div class="panel-heading">{{ title }}</div>\n        <div class="panel-body">\n            <canvas class="chart chart-radar"\n                    chart-data="ngModel.data"\n                    chart-labels="ngModel.labels"\n                    chart-legend="true"\n                    chart-click="ngModel.onClick"\n                    chart-series="ngModel.series">\n            </canvas>\n        </div>\n    </div>\n</div>')}]),angular.module("oobj-checkbox/oobj-checkbox.html",[]).run(["$templateCache",function(a){a.put("oobj-checkbox/oobj-checkbox.html",'<div class="checkbox c-checkbox" ng-class="checkboxClass" ng-style="checkboxStyle">\n    <label>\n        <input type="checkbox" id="{{id}}" ng-model="ngModel" />\n        <span class="fa fa-check"></span>\n        {{ label }}\n    </label>\n</div>')}]),angular.module("oobj-container/oobj-container.html",[]).run(["$templateCache",function(a){a.put("oobj-container/oobj-container.html",'<div>\n    <div class="row" ng-if="title != undefined">\n        <div class="col-lg-12">\n            <h4 class="page-header">\n                <span ng-bind="title"></span>\n            </h4>\n        </div>\n    </div>\n\n    <div class="row">\n        <div ng-transclude></div>\n    </div>\n</div>\n')}]),angular.module("oobj-crud/oobj-crud.html",[]).run(["$templateCache",function(a){a.put("oobj-crud/oobj-crud.html",'<oobj-container title="{{title}}">\n    <form role="form" novalidate>\n        <oobj-panel colspan="col-lg-12">\n            <div class="row" ng-if="showBtnOnTop" style="padding-bottom: 15px;">\n                <ng-include src="\'formActions\'"></ng-include>\n            </div>\n\n            <div class="container-fluid">\n                <div class="row">\n                    <div ng-transclude></div>\n                </div>\n            </div>\n\n            <div class="row" ng-if="showBtnOnBottom">\n                <ng-include src="\'formActions\'"></ng-include>\n            </div>\n        </oobj-panel>\n    </form>\n</oobj-container>\n\n<script type="text/ng-template" id="formActions">\n    <div class="row">\n        <div class="col-md-12">\n            <oobj-button label="Salvar" class="pull-right" style="padding-right: 15px;" btn-class="btn-primary"\n                         icon="fa-floppy-o" ng-click="vm.salvar()" ng-if="showBtnSalvar">\n            </oobj-button>\n\n            <oobj-button label="Excluir" class="pull-right" style="padding-right: 15px;" btn-class="btn-danger"\n                         icon="fa-trash-o" ng-click="vm.excluir()" ng-if="showBtnExcluir">\n            </oobj-button>\n\n            <oobj-button label="Limpar" class="pull-right" style="padding-right: 15px;" btn-class="btn-default"\n                         icon="fa-eraser" ng-click="vm.limpar()" ng-if="showBtnLimpar">\n            </oobj-button>\n        </div>\n    </div>\n</script>')}]),angular.module("oobj-date-picker/oobj-date-picker.html",[]).run(["$templateCache",function(a){a.put("oobj-date-picker/oobj-date-picker.html",'<div class="form-group form-group-{{inputSize}}" ng-class="colspan">\n    <label ng-show="showLabel || label != undefined">\n        <span ng-bind="label"></span>\n        <span style="color: red;" ng-show="ngRequired">*</span>\n    </label>\n    <div class="input-group">\n        <input date-range-picker\n               options="opts"\n               name="{{name}}"\n               ng-model="ngModel"\n               ng-disabled="ngDisabled"\n               ng-required="ngRequired"\n               ng-change="onChange($event)"\n               ng-blur="onBlur($event)"\n               ng-keyup="onKeyup($event)"\n               ng-keydown="onKeydown($event)"\n               ng-readonly="ngReadonly"\n               class="form-control date-picker"\n               type="text"/>\n\n        <div class="input-group-btn">\n            <button type="button" class="btn btn-default btn-{{inputSize}}">\n                <i class="fa fa-calendar"></i>\n            </button>\n        </div>\n    </div>\n</div>')}]),angular.module("oobj-footer/oobj-footer.html",[]).run(["$templateCache",function(a){a.put("oobj-footer/oobj-footer.html","<footer\n        style=\"background: #2196F3;\n                  color: #fff;\n                  border-color: #000066;\n                  height: 100%;\n                  text-align: right;\n                  font-size: x-small;\n                  padding-right: 15px;\">\n    &copy;{{ year | date:'yyyy'}} Painel de Gest&atilde;o\n    <br>\n    Powered by Oobj - v{{version}} [{{generatedData | date:'dd-MM-yyyy'}}]\n</footer>")}]),angular.module("oobj-grid/oobj-grid.html",[]).run(["$templateCache",function(a){a.put("oobj-grid/oobj-grid.html",'<div style="padding-top: 15px;" class="{{colspan}}">\n    <div ui-grid="gridOptions" ui-grid-selection ng-style="gridStyle" class="table" ng-cloak>\n        <div style="position: absolute; top : 0px; opacity: 0.25; font-size: 2em; width: 100%; text-align: center; z-index: 1000;"\n            ng-show="!gridOptions.data.length">\n            Nenhum resultado encontrado\n        </div>\n    </div>\n</div>')}]),angular.module("oobj-input-container/oobj-input-container.html",[]).run(["$templateCache",function(a){a.put("oobj-input-container/oobj-input-container.html",'<div ng-class="colspan" class="form-group">\n    <label class="control-label" ng-if="showLabel != false && label != undefined">\n        <span ng-bind="label"></span>\n        <span style="color: red;" ng-show="ngRequired">*</span>\n    </label>\n    <div ng-transclude></div>\n</div>')}]),angular.module("oobj-input-text/oobj-input-text.html",[]).run(["$templateCache",function(a){a.put("oobj-input-text/oobj-input-text.html",'<div ng-class="colspan" class="form-group form-group-{{inputSize}}">\n    <label class="control-label" ng-if="showLabel != false && label != undefined" for="{{id}}">\n        <span ng-bind="label"></span>\n        <span style="color: red;" ng-show="ngRequired">*</span>\n    </label>\n    <div class="input-group">\n        <input id="{{id}}"\n               type="{{type}}"\n               class="form-control"\n               ng-model="ngModel"\n               ng-disabled="ngDisabled"\n               ng-required="ngRequired"\n               ng-change="onChange($event)"\n               ng-blur="onBlur($event)"\n               ng-keyup="onKeyup($event)"\n               ng-keydown="onKeydown($event)"\n               ng-readonly="ngReadonly"\n               placeholder="{{placeholder}}"\n               maxlength="{{maxlength}}"\n               max="{{max}}"\n               min="{{min}}" />\n        <div class="input-group-btn">\n            <button type="button" ng-click="limpar()" class="btn btn-default btn-{{inputSize}}">\n                <i class="fa fa-times"></i>\n            </button>\n        </div>\n    </div>\n</div>\n')}]),angular.module("oobj-panel/oobj-panel.html",[]).run(["$templateCache",function(a){a.put("oobj-panel/oobj-panel.html",'<div ng-class="colspan">\n    <div class="panel" ng-class="panelClass" style="margin-bottom: 0px;">\n        <div class="panel-heading" ng-if="title != undefined">\n            <span ng-bind="title"></span>\n        </div>\n\n        <div class="panel-body">\n            <div class="container-fluid">\n                <div class="row">\n                    <div ng-transclude></div>\n                </div>\n            </div>\n        </div>\n\n        <div class="panel-footer" ng-if="footer != undefined">\n            <span ng-bind="footer"></span>\n        </div>\n    </div>\n</div>')}]),angular.module("oobj-pesquisa/oobj-pesquisa.html",[]).run(["$templateCache",function(a){a.put("oobj-pesquisa/oobj-pesquisa.html",'<oobj-container title="{{title}}">\n    <oobj-panel colspan="col-lg-12">\n        <div class="container-fluid">\n            <div class="row">\n                <div ng-transclude></div>\n\n                <div class="row">\n                    <oobj-button label="Pesquisar" class="pull-right" style="padding-right: 15px;" btn-class="btn-primary" icon="fa-search"\n                                 ng-click="vm.pesquisar()" ng-if="showBtnPesquisar">\n                    </oobj-button>\n\n                    <oobj-button label="Limpar" class="pull-right" style="padding-right: 15px;" btn-class="btn-success" icon="fa-eraser"\n                                 ng-click="vm.limpar()" ng-if="showBtnLimpar">\n                    </oobj-button>\n\n                    <oobj-button label="Pesq. Avançada" class="pull-right" style="padding-right: 15px;" btn-class="btn-default" icon="fa-search-plus"\n                                 ng-click="vm.pesquisaAvancada()" ng-if="showBtnPesquisaAvancada">\n                    </oobj-button>\n                </div>\n            </div>\n        </div>\n\n        <div class="row" ng-if="vm.data">\n            <oobj-grid colspan="col-md-12" data="vm.data" grid-options="gridOptions"></oobj-grid>\n        </div>\n    </oobj-panel>\n</oobj-container>')}]),angular.module("oobj-radio/oobj-radio.html",[]).run(["$templateCache",function(a){a.put("oobj-radio/oobj-radio.html",'<div class="radio c-radio c-radio-nofont" ng-class="radioClass" ng-style="radioStyle">\n    <label>\n        <input type="radio" id="{{ id }}" ng-value="optionValue" name="{{ optionName }}" ng-model="ngModel" />\n        <span class="fa fa-circle"></span>\n        {{ label }}\n    </label>\n</div>')}]),angular.module("oobj-select/oobj-select.html",[]).run(["$templateCache",function(a){a.put("oobj-select/oobj-select.html",'<div ng-class="colspan" class="form-group" ng-style="selectStyle">\n    <label class="control-label" ng-show="showLabel != false && label != undefined">\n        <span ng-bind="label"></span>\n        <span style="color: red;" ng-show="ngRequired">*</span>\n    </label>\n\n    <div class="input-group">\n        <select name="select" class="form-control" required="{{ngRequired}}" ng-model="ngModel" style="border-radius: 4px; min-width: 200px;"\n                ng-options="item as item[itemLabel] for item in provider">\n            <option value="">Selecione uma opção...</option>\n        </select>\n    </div>\n</div>')}]),angular.module("oobj-sidebar/oobj-sidebar.html",[]).run(["$templateCache",function(a){a.put("oobj-sidebar/oobj-sidebar.html",'<div class="navbar-default sidebar" role="navigation">\n    <div class="sidebar-nav navbar-collapse">\n        <ul class="nav in" id="side-menu" style="background-color: white;">\n\n            <li ng-class="{active: collapseVar == $index}" ng-repeat="categoria in provider track by $index">\n\n                <a href="" ng-click="check($index)" ng-if="categoria.itens != undefined">\n                    <i class="fa" ng-class="categoria.icon"></i>\n                    <span ng-bind="categoria.label"></span>\n                    <span class="fa arrow" ng-if="categoria.itens != undefined"></span>\n                </a>\n\n                <a href="" ng-click="check($index)" ng-if="categoria.itens == undefined" ui-sref="{{ categoria.sref }}">\n                    <i class="fa" ng-class="categoria.icon"></i>\n                    <span ng-bind="categoria.label"></span>\n                    <span class="fa arrow" ng-if="categoria.itens != undefined"></span>\n                </a>\n\n                <ul class="nav nav-second-level" collapse="collapseVar != $index" ng-if="categoria.itens != undefined">\n                    <li ui-sref-active="active" ng-repeat="item in categoria.itens track by $index">\n\n                        <a ui-sref="{{ item.sref }}">\n                            <span ng-class="item.icon" ng-if="item.icon != undefined"></span>\n                            <span ng-bind="item.label"></span>\n                        </a>\n                    </li>\n                </ul>\n                <!-- /.nav-second-level -->\n            </li>\n        </ul>\n    </div>\n    <!-- /.sidebar-collapse -->\n</div>');
}]),angular.module("oobj-timeline/oobj-timeline.html",[]).run(["$templateCache",function(a){a.put("oobj-timeline/oobj-timeline.html",'<div class="panel-body" ng-class="colspan">\n    <ul class="timeline">\n        <li ng-repeat="item in provider track by $index" ng-class="$even ? \'\' : \'timeline-inverted\'">\n            <div ng-if="item.badge" class="timeline-badge" ng-class="item.timelineStyle"><i class="fa {{ item.badge }}"></i></div>\n            <div class="timeline-panel">\n                <div class="timeline-heading">\n                    <h4 class="timeline-title" ng-bind="item.title"></h4>\n                    <p><small class="text-muted"><i class="fa fa-clock-o"></i>&nbsp;<span ng-bind="item.date | date:\'dd/MM/yyyy hh:mm:ss\'"></span></small></p>\n                </div>\n                <div class="timeline-body" ng-if="item.description">\n                    <p ng-bind="item.description"></p>\n                </div>\n            </div>\n        </li>\n    </ul>\n</div>')}]);