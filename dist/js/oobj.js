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
        'ui.grid',
        'ngFileUpload',
        'ui.grid.selection',
        'ui.grid.pagination',
        'ui.grid.autoResize',
        'ui.grid.moveColumns',
        'toastr',
        'daterangepicker',
        'painel.environment.const',
        'ngTagsInput'
    ]);
})();

angular.module('oobj-directives.templates', []).run(['$templateCache', function($templateCache) {
  "use strict";
  $templateCache.put("oobj-autocomplete/oobj-autocomplete.html",
    "<div ng-class=::colspan class=\"form-group form-group-{{::inputSize}}\"><label class=control-label ng-if=\"::(showLabel !== false && label !== undefined)\" for={{::id}}><strong><span ng-bind=::label></span></strong> <span class=text-danger ng-show=::ngRequired>*</span></label><div class=input-group><input id={{::id}} class=form-control ng-model=ngModel placeholder={{::placeholder}} uib-typeahead=\"item as item[itemLabel] for item in getItems()($viewValue)\" typeahead-loading=loadingItems typeahead-no-results=noResults ng-disabled=::ngDisabled ng-readonly=::ngReadonly ng-change=::onChange($event) ng-blur=::onBlur($event) maxlength={{::maxlength}}><div class=input-group-btn><button type=button ng-click=::limpar() class=\"btn btn-default btn-{{::inputSize}} oobj-group-input-btn\"><i class=\"fa fa-times\"></i></button></div></div><div class=help-block><i ng-show=loadingItems class=\"fa fa-refresh\"></i><div ng-show=noResults><i class=\"fa fa-times\"></i> Nenhum resultado encontrado</div></div></div>");
  $templateCache.put("oobj-button-dropdown/oobj-button-dropdown.html",
    "<div class=btn-group uib-dropdown><button id=single-button type=button class=btn ng-class=::btnClass uib-dropdown-toggle ng-disabled=::ngDisabled><i class=fa ng-class=::icon></i> <span ng-bind=::label class=oobj-button-dropdown-label></span> <i class=\"fa fa-angle-down\"></i></button><ul class=uib-dropdown-menu role=menu aria-labelledby=single-button><li role=menuitem ng-repeat=\"item in provider track by $index\"><a href=javascript:; ng-click=::item.action()>{{::item.label}}</a></li></ul></div>");
  $templateCache.put("oobj-button/oobj-button.html",
    "<button type=button class=btn ng-class=::btnClass ng-disabled=::ngDisabled><i class=fa ng-class=::icon></i> <span ng-bind=::label></span></button>");
  $templateCache.put("oobj-calendar/oobj-calendar.html",
    "<div class=\"form-group form-group-sm\" ng-class=::colspan><label class=control-label ng-if=\"::(showLabel !== false || label)\" for={{::id}}><strong><span ng-bind=::label></span></strong> <span class=text-danger ng-show=::ngRequired>*</span> <i uib-tooltip={{tooltipMessage}} tooltip-placement=left class=\"fa fa-info-circle icon-info-medium-center\" ng-if=tooltipMessage></i></label><div class=input-group><input id={{::id}} type=\"{{ ::type }}\" class=form-control ng-class=ngClass uib-datepicker-popup=\"{{ ::pattern }}\" datepicker-options=::dateOptions ng-model=ngModel is-open=opened on-open-focus=false close-text=Fechar clear-text=Limpar current-text=Hoje ng-click=\"::open()\"> <span class=input-group-btn><button type=button class=\"btn btn-default btn-sm\" ng-click=::open()><i class=\"fa fa-calendar\"></i></button></span></div></div>");
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
    "<div ng-class=::colspan><oobj-button data-toggle=modal data-target=#{{::idModal}} label={{::label}} icon={{::icon}} btn-class={{::classBtnConfirm}}></oobj-button><oobj-modal id-modal={{::idModal}} size=md show-btn-open=false show-btn-action=true label-btn-close=Cancelar label-btn-action=\"Sim, tenho certeza\" class-btn-action=btn-warning on-click-btn-action=::onClickBtnYes() class-btn-close=oobj-confirm-button-btn-cancelar><div class=\"row center\"><i class=\"fa fa-5x fa-exclamation text-warning\"></i><h3><span>Você tem certeza?</span></h3><p>Não será possível desfazer a ação após sua confirmação.</p></div></oobj-modal></div>");
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
    "<div class=\"form-group form-group-{{::inputSize}}\" ng-class=::colspan><label ng-show=\"::(showLabel || label != undefined)\"><strong><span ng-bind=::label></span></strong> <span class=text-danger ng-show=::ngRequired>*</span></label><div class=input-group><input date-range-picker options=opts name={{::name}} ng-model=ngModel ng-disabled=ngDisabled ng-required=::ngRequired ng-change=::onChange($event) ng-blur=::onBlur($event) ng-keyup=::onKeyup($event) ng-keydown=::onKeydown($event) ng-readonly=::ngReadonly class=\"form-control date-picker\" ng-value=\"ngValue\"><div class=input-group-btn><button class=\"btn btn-default btn-{{::inputSize}} oobj-group-input-btn\" ng-click=::focusInput()><i class=\"fa fa-calendar\"></i></button></div></div></div>");
  $templateCache.put("oobj-dfe-actions/baixar-dacce/baixar-dacce.modal.html",
    "<div class=modal-content><div class=modal-header><button type=button class=close ng-click=::vm.cancel()>&times;</button><div class=\"row center\"><i class=\"fa fa-5x fa-download text-primary\"></i><h4><span class=oobj-ciclo-vida-column-title>Download de DACCe</span></h4></div></div><div class=modal-body><div class=\"row center\"><p>Você selecionou <strong ng-bind=::vm.quantidade></strong> documento(s) para fazer download de DACCe.</p></div></div><div class=\"row center modal-footer\"><p ng-show=vm.invalid><span class=text-danger ng-bind-html=vm.msgValidacao></span></p><oobj-button ng-click=::vm.cancel() label=Cancelar btn-class=oobj-ciclo-vida-column-btn-cancelar></oobj-button><oobj-button ng-click=::vm.download() label=\"Baixar PDF\" btn-class=btn-primary></oobj-button></div></div>");
  $templateCache.put("oobj-dfe-actions/baixar-danfe/baixar-danfe.modal.html",
    "<div class=modal-content><div class=modal-header><button type=button class=close ng-click=vm.cancel()>&times;</button><div class=\"row center\"><i class=\"fa fa-5x fa-download text-primary\"></i><h4><span class=oobj-ciclo-vida-column-title>Download de DANFe</span> <i uib-tooltip=\"\" tooltip-placement=left class=\"fa fa-info-circle icon-info-medium-center\"></i></h4></div></div><div class=modal-body><div class=\"row center\"><p>Você selecionou <strong ng-bind=vm.quantidade></strong> documento(s) para fazer download do(s) DANFe.</p></div></div><div class=\"row center modal-footer\"><p ng-show=vm.invalid><span class=text-danger ng-bind-html=vm.msgValidacao></span></p><oobj-button ng-click=vm.cancel() label=Cancelar btn-class=oobj-ciclo-vida-column-btn-cancelar></oobj-button><oobj-button ng-click=vm.download() label=\"Baixar PDF\" btn-class=btn-primary></oobj-button></div></div>");
  $templateCache.put("oobj-dfe-actions/baixar-xml/baixar-xml.modal.html",
    "<div class=modal-content><div class=modal-header><button type=button class=close ng-click=vm.cancel()>&times;</button><div class=\"row center\"><i class=\"fa fa-5x fa-download text-primary\"></i><h4><span class=oobj-ciclo-vida-column-title>Download de XML</span> <i uib-tooltip=\"\" tooltip-placement=left class=\"fa fa-info-circle icon-info-medium-center\"></i></h4></div></div><div class=modal-body><div class=\"row center\"><p>Você selecionou <strong ng-bind=vm.quantidade></strong> documento(s) para fazer download do(s) arquivos(s) XML.<br>Escolha os tipos de documento que você deseja baixar:</p><div class=row><oobj-input-container colspan=col-md-12><oobj-checkbox ng-model=vm.proc inline=true label=\"Proc {{::vm.modelo}}\" aria-checked=true></oobj-checkbox><oobj-checkbox ng-model=vm.eventos inline=true label=\"Proc Eventos\"></oobj-checkbox></oobj-input-container></div></div></div><div class=\"row center modal-footer\"><p ng-show=vm.invalid><span class=text-danger ng-bind-html=vm.msgValidacao></span></p><oobj-button ng-click=vm.cancel() label=Cancelar btn-class=oobj-ciclo-vida-column-btn-cancelar></oobj-button><oobj-button ng-click=vm.download() label=\"Baixar XML\" btn-class=btn-primary></oobj-button></div></div>");
  $templateCache.put("oobj-dfe-actions/cancelar-dfe/cancelar-dfe.modal.html",
    "<div class=modal-content ng-form=myForm><div class=modal-header><button type=button class=close ng-click=::vm.cancelar()>&times;</button><div class=\"row center\"><h4><span class=oobj-options-column-title>Cancelar {{::vm.modelo}}</span> <i uib-tooltip=\"\" tooltip-placement=left class=\"fa fa-info-circle icon-info-medium-center\"></i></h4></div></div><div class=modal-body><div class=row><div class=row><div class=col-md-4><p class=oobj-options-column-line-height><span class=text-muted>Número - Série</span><br><span class=text-primary ng-bind-html=\"::(vm.dfe.numeroSerieInfo.numero +\n" +
    "                                ' - ' + vm.dfe.numeroSerieInfo.serie)\"></span></p></div><div class=col-md-8><p class=oobj-options-column-line-height><span class=text-muted>Chave de Acesso</span><br><span class=text-primary ng-bind=::vm.dfe.chaveAcesso></span></p></div></div><div class=row><div class=col-md-4><p class=oobj-options-column-line-height><span class=text-muted>Emitente</span><br><span class=text-primary ng-bind=::vm.dfe.emitenteInfo.razaoSocial.toUpperCase()></span> <span class=text-primary ng-bind=::vm.dfe.emitenteInfo.cnpj></span></p></div><div class=col-md-4><p class=oobj-options-column-line-height><span class=text-muted>Destinatário</span><br><span class=text-primary ng-bind=::vm.dfe.destinatarioInfo.razaoSocial.toUpperCase()></span> <span class=text-primary ng-bind=::vm.dfe.destinatarioInfo.cnpj></span></p></div><div class=col-md-4><p class=oobj-options-column-line-height><span class=text-muted>Transportador</span><br><span class=text-primary ng-bind=::vm.dfe.transportadorInfo.razaoSocial.toUpperCase()></span> <span class=text-primary ng-bind=::vm.dfe.transportadorInfo.cnpj></span></p></div></div><hr><div class=row><oobj-textarea ng-model=vm.evento.justificativa rows=3 title=\"Justificativa de Cancelamento\" label=\"Justificativa de Cancelamento\" colspan=col-md-12 tooltip-message=Justificativa ng-minlength=30></oobj-textarea><oobj-calendar colspan=col-md-4 label=\"Data do Evento\" pattern=\"dd/MM/yyyy hh:mm\" ng-model=vm.evento.data tooltip-message=\"Data/Hora do Evento\"></oobj-calendar></div></div></div><div class=\"row center modal-footer\" ng-hide=vm.confirmar><p class=text-danger ng-show=vm.invalid><span ng-bind-html=vm.msgValidacao></span></p><oobj-button ng-click=::vm.cancelar() label=Fechar btn-class=\"oobj-options-column-btn-gray oobj-options-column-btn-100px\"></oobj-button><oobj-button ng-click=::vm.exibirConfirmacao() label=\"Registrar Evento\" btn-class=btn-primary></oobj-button></div><div class=\"row center modal-footer\" ng-show=vm.confirmar><p class=oobj-options-column-line-height><b>Você realmente deseja cancelar esta {{::vm.modelo}}?</b><br>Não será possível desfazer esta ação.</p><oobj-button ng-click=::vm.desfazerEvento() label=Desfazer btn-class=\"oobj-options-column-btn-gray oobj-options-column-btn-100px\"></oobj-button><oobj-button ng-click=::vm.registrar() label=\"Sim, quero cancelar\" btn-class=btn-warning></oobj-button></div></div>");
  $templateCache.put("oobj-dfe-actions/carta-correcao/carta-correcao.modal.html",
    "<div class=modal-content><div class=modal-header><button type=button class=close ng-click=::vm.cancelar()>&times;</button><div class=\"row center\"><h4><span class=oobj-options-column-title>Carta de Correção</span> <i uib-tooltip=\"\" tooltip-placement=left class=\"fa fa-info-circle icon-info-medium-center\"></i></h4></div></div><div class=modal-body><div class=row><div class=row><div class=col-md-4><p class=oobj-options-column-line-height><span class=text-muted>Número - Série</span><br><span class=text-primary ng-bind-html=\"::(vm.dfe.numeroSerieInfo.numero +\n" +
    "                                ' - ' + vm.dfe.numeroSerieInfo.serie)\"></span></p></div><div class=col-md-8><p class=oobj-options-column-line-height><span class=text-muted>Chave de Acesso</span><br><span class=text-primary ng-bind=::vm.dfe.chaveAcesso></span></p></div></div><div class=row><div class=col-md-4><p class=oobj-options-column-line-height><span class=text-muted>Emitente</span><br><span class=text-primary ng-bind=::vm.dfe.emitenteInfo.razaoSocial.toUpperCase()></span> <span class=text-primary ng-bind=::vm.dfe.emitenteInfo.cnpj></span></p></div><div class=col-md-4><p class=oobj-options-column-line-height><span class=text-muted>Destinatário</span><br><span class=text-primary ng-bind=::vm.dfe.destinatarioInfo.razaoSocial.toUpperCase()></span> <span class=text-primary ng-bind=::vm.dfe.destinatarioInfo.cnpj></span></p></div><div class=col-md-4><p class=oobj-options-column-line-height><span class=text-muted>Transportador</span><br><span class=text-primary ng-bind=::vm.dfe.transportadorInfo.razaoSocial.toUpperCase()></span> <span class=text-primary ng-bind=::vm.dfe.transportadorInfo.cnpj></span></p></div></div><hr><div class=row><oobj-textarea ng-model=vm.evento.justificativa rows=3 title=\"Justificativa da Correção\" label=\"Justificativa da Correção\" colspan=col-md-12 tooltip-message=Justificativa></oobj-textarea><oobj-calendar colspan=col-md-4 label=\"Data do Evento\" pattern=\"dd/MM/yyyy HH:mm\" ng-model=vm.evento.data tooltip-message=\"Data/Hora do Evento\"></oobj-calendar></div></div></div><div class=\"row center modal-footer\" ng-hide=vm.confirmar><p class=text-danger ng-show=vm.invalid><span ng-bind-html=vm.msgValidacao></span></p><oobj-button ng-click=::vm.cancelar() label=Fechar btn-class=\"oobj-options-column-btn-gray oobj-options-column-btn-100px\"></oobj-button><oobj-button ng-click=::vm.exibirConfirmacao() label=\"Registrar Evento\" btn-class=btn-primary></oobj-button></div><div class=\"row center modal-footer\" ng-show=vm.confirmar><p class=oobj-options-column-line-height><b>Você realmente deseja registrar esta carta de correção?</b><br>Não será possível desfazer esta ação.</p><oobj-button ng-click=::vm.desfazerEvento() label=Desfazer btn-class=\"oobj-options-column-btn-gray oobj-options-column-btn-100px\"></oobj-button><oobj-button ng-click=::vm.registrar() label=\"Sim, quero registrar\" btn-class=btn-warning></oobj-button></div></div>");
  $templateCache.put("oobj-dfe-actions/desfazer-entrada/desfazer-entrada.modal.html",
    "<div class=modal-content><div class=modal-header><button type=button class=close ng-click=::vm.cancelar()>&times;</button><div class=\"row center\"><i class=\"fa fa-5x fa-map-signs oobj-dfe-actions-header-primary\"></i><h4><span class=oobj-dfe-actions-header-title>Desfazer Registro de Entrada</span> <i uib-tooltip=\"\" tooltip-placement=left class=\"fa fa-info-circle icon-info-medium-center\"></i></h4></div></div><div class=modal-body><div class=\"row center\"><p>Você selecionou <strong ng-bind-html=::vm.quantidadeItens></strong> documento(s) para desfazer o registo de entrada.</p></div></div><div class=\"row center modal-footer\"><oobj-button ng-click=::vm.cancelar() label=Cancelar btn-class=oobj-dfe-actions-btn-cancelar></oobj-button><oobj-button ng-click=::vm.desfazer() label=Confirmar btn-class=btn-primary></oobj-button></div></div>");
  $templateCache.put("oobj-dfe-actions/diagnostico-fiscal/diagnostico-fiscal.modal.html",
    "<div class=modal-content><div class=modal-header><button type=button class=close ng-click=::vm.cancelar()>&times;</button><div class=\"row center\"><i class=\"fa fa-5x fa-heartbeat oobj-dfe-actions-header-primary\"></i><h4><span class=oobj-dfe-actions-header-title>Diagnóstico Fiscal</span></h4></div></div><div class=modal-body><div class=\"row center\"><p>Você selecionou <strong ng-bind=::vm.quantidadeItens></strong> documento(s) para ser(em) diagnosticado(s).</p><p>Essa ação analisa automaticamente os tributos das NF-e's selecionadas e indica todas as críticas encontradas além de propor algumas sugestões.</p><div class=row><div class=\"col-md-6 oobj-dfe-actions-font-super-small\"><i class=\"fa fa-2x fa-check-square-o oobj-dfe-actions-amarelo-desbotado\"></i><br>Identificação de <strong>NCMs</strong> inválidas</div><div class=\"col-md-6 oobj-dfe-actions-font-super-small\"><i class=\"fa fa-2x fa-check-square-o oobj-dfe-actions-amarelo-desbotado\"></i><br>Aplicação de Alíquotas do <strong>IPI</strong></div></div><div class=row><div class=\"col-md-6 oobj-dfe-actions-font-super-small\"><i class=\"fa fa-2x fa-check-square-o oobj-dfe-actions-amarelo-desbotado\"></i><br>Aplicação de Alíquotas de <strong>ICMS</strong> para Operações Interestaduais</div><div class=\"col-md-6 oobj-dfe-actions-font-super-small\"><i class=\"fa fa-2x fa-check-square-o oobj-dfe-actions-amarelo-desbotado\"></i><br>Escrituração do Ponto de Vista de Operação (Coerência entre <strong>Operações</strong> e <strong>Situação</strong> Tributária)</div></div></div></div><div class=\"row center modal-footer\"><oobj-button ng-click=::vm.cancelar() label=Cancelar btn-class=oobj-dfe-actions-btn-cancelar></oobj-button><oobj-button ng-click=::vm.diagnosticar() label=Diagnosticar btn-class=btn-primary></oobj-button></div></div>");
  $templateCache.put("oobj-dfe-actions/enviar-email/enviar-email.modal.html",
    "<div class=modal-content><div class=modal-header><button type=button class=close ng-click=::vm.cancelar()>&times;</button><div class=\"row center\"><i class=\"fa fa-5x fa-envelope oobj-dfe-actions-header-primary\"></i><h4><span class=oobj-dfe-actions-header-title>Enviar {{::vm.modelo}} por E-mail</span> <i uib-tooltip=\"\" class=\"fa fa-info-circle icon-info-medium-center\"></i></h4><br></div><div class=row><p class=col-md-2><b>Para:</b></p><div class=\"col-md-10 enviar-email-tags-padding-left\"><tags-input ng-model=vm.email.para placeholder=\"Informe os e-mails separados por vírgula\" add-on-enter=true add-on-space=true add-on-comma=true add-on-blur=true add-on-paste=true allowed-tags-pattern={{::vm.validEmail}} replace-spaces-with-dashes=false class=\"enviar-email-tags-padding-right enviar-email-font-family\"><auto-complete source=::vm.getTagsDefault($query) highlight-matched-text=false min-length=0 load-on-down-arrow=true load-on-empty=true load-on-focus=true select-first-match=false></auto-complete></tags-input></div></div><div class=row><p class=col-md-2><b>De:</b></p><div class=\"col-md-10 enviar-email-tags-padding-left enviar-email-margin-bottom\"><div class=input-group><input class=\"form-control enviar-email-padding-text\" ng-model=vm.email.de placeholder=naoresponder@oobj.com.br maxlength=60 max=60 min=\"1\"><div class=\"input-group-btn enviar-email-padding-right\"><!-- a possible button to clear the input right here --></div></div></div></div><div class=row><p class=col-md-2><b>Assunto:</b></p><div class=\"col-md-10 enviar-email-tags-padding-left\"><div class=input-group><input class=\"form-control enviar-email-padding-text\" ng-model=vm.email.assunto placeholder=\"Insira o assunto\" maxlength=200 max=200 min=\"1\"><div class=\"input-group-btn enviar-email-padding-right\"><div class=btn-group uib-dropdown><button id=btn-drop class=\"btn btn-primary oobj-group-input-btn\" uib-dropdown-toggle><i class=\"fa fa-plus\"></i></button><ul class=\"uib-dropdown-menu pull-right\" role=menu aria-labelledby=btn-drop><li role=menuitem ng-repeat=\"assunto in vm.assuntos track by $index\"><a href=javascript:; ng-click=::vm.addAssunto($index)>{{::assunto.label}}</a></li></ul></div></div></div></div></div></div><div class=modal-body><div class=row><p class=col-md-2><b>Mensagem:</b></p><oobj-textarea rows=6 ng-model=vm.email.mensagem textarea-class=enviar-email-textarea colspan=\"col-md-10 enviar-email-textarea-padding-left enviar-email-padding-right\"></oobj-textarea></div><br><div class=row><p class=col-md-2><b>Anexos:</b></p><div class=col-md-10><div class=row><div class=col-md-3 ng-repeat=\"anexo in vm.anexos track by $index\"><div class=\"row cursor-pointer\" ng-click=::vm.selecionar($index)><div class=\"col-md-2 enviar-email-anexos-padding-left\" ng-class=\"anexo.selected ? 'text-primary' : 'text-muted'\"><i class=\"fa fa-2x\" ng-class=::anexo.icon></i></div><div ng-class=\"anexo.selected ? 'oobj-dfe-actions-text-bold' : 'text-muted'\" class=\"col-md-10 enviar-email-anexos-padding-left\" ng-bind=::anexo.name></div></div></div></div></div></div></div><div class=\"row center modal-footer\"><p class=text-danger ng-show=vm.invalid><span ng-bind-html=vm.msgValidacao></span></p><oobj-button ng-click=::vm.cancelar() label=Cancelar btn-class=\"oobj-dfe-actions-btn-cancelar oobj-dfe-actions-btn-width\"></oobj-button><oobj-button ng-click=::vm.enviar() label=Enviar btn-class=\"btn-primary oobj-dfe-actions-btn-width\"></oobj-button></div></div>");
  $templateCache.put("oobj-dfe-actions/imprimir/imprimir.modal.html",
    "<div class=modal-content><div class=modal-header><button type=button class=close ng-click=::vm.cancel()>&times;</button><div class=\"row center\"><i class=\"fa fa-5x fa-print oobj-dfe-actions-header-primary\"></i><h4><span class=oobj-dfe-actions-header-title>Imprimir</span> <i uib-tooltip=\"\" tooltip-placement=left class=\"fa fa-info-circle icon-info-medium-center\"></i></h4></div></div><div class=modal-body><div class=\"row center\"><p class=oobj-dfe-actions-line-height>Você selecionou <strong ng-bind-html=::vm.quantidadeItens></strong> documento(s) para a impressão.<br></p></div><div class=\"row center\"><oobj-input-container colspan=col-md-12><oobj-radio inline=true label-bold=true ng-model=vm.localizacaoImpressora label=\"Impressora Padrão\" option-value=padrao></oobj-radio><oobj-radio inline=true label-bold=true ng-model=vm.localizacaoImpressora label=\"Impressora do Servidor\" option-value=servidor></oobj-radio></oobj-input-container><p class=oobj-dfe-actions-line-height ng-hide=\"vm.localizacaoImpressora === 'padrao'\">Selecione a impressora que você deseja realizar a impressão:</p><p class=oobj-dfe-actions-line-height ng-show=\"vm.localizacaoImpressora === 'padrao'\">Cada documento será enviado para a impressora configurada na impressão automática.</p></div><div class=row><div class=col-md-4 ng-repeat=\"impressora in vm.impressoras\" ng-hide=\"vm.localizacaoImpressora === 'padrao'\"><div class=\"row cursor-pointer\" ng-click=::vm.selecionar($index)><div class=col-md-2 ng-class=\"impressora.selected ? 'text-primary' : 'text-muted'\"><i class=\"fa fa-2x fa-print\"></i></div><div ng-class=\"impressora.selected ? 'oobj-dfe-actions-text-bold' : 'text-muted'\" class=col-md-10 ng-bind=::impressora.name></div></div></div></div></div><div class=\"row center modal-footer\"><oobj-button ng-click=::vm.cancel() label=Cancelar btn-class=\"oobj-dfe-actions-btn-cancelar oobj-dfe-actions-btn-width\"></oobj-button><oobj-button ng-click=::vm.imprimir() label=Imprimir btn-class=\"btn-primary oobj-dfe-actions-btn-width\"></oobj-button></div></div>");
  $templateCache.put("oobj-dfe-actions/manifestar/manifestar-confirmar.modal.html",
    "<div class=modal-content><div class=modal-header><button type=button class=close ng-click=::vm.cancel()>&times;</button><div class=\"row center\"><i class=\"fa fa-5x fa-bullhorn oobj-dfe-actions-header-primary\"></i><h4><span class=oobj-dfe-actions-header-title>Manifestação do Destinatário</span></h4></div></div><div class=modal-body><div class=\"row center\"><p>Atenção! Você está prestes a registrar a manifestação(ões) para o(s) seguinte(s) documento(s):</p><table class=\"table table-responsive table-borderless text-left\"><thead><tr><td>&nbsp;</td><td><strong>Nº / Série</strong></td><td><strong>Emitente</strong></td></tr></thead><tbody><tr ng-repeat=\"doc in vm.docs\"><td><i class=\"fa fa-times cursor-pointer\" ng-click=::vm.remover(doc)></i></td><td><span ng-bind=::doc.numero></span> - <span ng-bind=::doc.serie></span></td><td><span ng-bind=::doc.emitente></span><br><span ng-bind=::doc.cnpj></span></td></tr></tbody></table></div></div><div class=\"row center modal-footer\"><oobj-button ng-click=::vm.cancel() label=Cancelar btn-class=oobj-dfe-actions-btn-cancelar></oobj-button><oobj-button ng-click=::vm.acao() label=Confirmar btn-class=btn-primary></oobj-button></div></div>");
  $templateCache.put("oobj-dfe-actions/manifestar/manifestar.modal.html",
    "<div class=modal-content><div class=modal-header><button type=button class=close ng-click=::vm.cancel()>&times;</button><div class=\"row center\"><i class=\"fa fa-5x fa-bullhorn oobj-dfe-actions-header-primary\"></i><h4><span class=oobj-dfe-actions-header-title>Manifestação do Destinatário</span></h4></div></div><div class=modal-body><div class=\"row center\"><p>Você selecionou <strong ng-bind-html=::vm.quantidadeItens></strong> documento(s) para a manifestação do destinatário.</p><div class=row ng-if=vm.exibirSelectDestinatario><div class=\"col-sm-6 col-md-5 col-lg-4 text-right\"><strong>Destinatário:</strong></div><div class=\"col-sm-6 col-md-7 col-lg-8 text-left\"><oobj-select colspan=\"col-sm-12 col-md-10 col-xl-8\" ng-model=vm.destinatario provider=vm.destinatarioOpts item-label=nome item-id=id></oobj-select></div></div><div class=row><div class=\"col-sm-6 col-md-5 col-lg-4 text-right\"><strong ng-class=\"vm.manifestacaoWarnMessage ? 'text-danger' : ''\">Manifestação:</strong></div><div class=\"col-sm-6 col-md-7 col-lg-8 text-left\"><oobj-select colspan=\"col-sm-12 col-md-10 col-xl-8\" ng-model=vm.manifestacao provider=vm.manifestacaoOpts item-label=descricao item-id=valor></oobj-select></div></div><div class=row ng-if=vm.hasJustificativa><div class=\"col-sm-6 col-md-5 col-lg-4 text-right\"><strong ng-class=\"vm.justificativaWarnMessage ? 'text-danger' : ''\">Justificativa:</strong> <i class=\"fa fa-info-circle\" uib-tooltip=\"{{ ::vm.tooltipJustificativa }}\"></i></div><div class=\"col-sm-6 col-md-7 col-lg-8 text-left\"><oobj-textarea ng-model=vm.justificativa rows=3 title=Justificativa show-filled-chars=true placeholder=\"Preenchimento obrigatório. Mínimo 15 caracteres.\" colspan=\"pull-left col-sm-12 col-md-12 col-xl-12\"></oobj-textarea></div></div><div class=row><div class=\"col-sm-6 col-md-5 col-lg-4 text-right\"><strong ng-class=\"vm.dataWarnMessage ? 'text-danger' : ''\">Data/Hora do Evento:</strong></div><div class=\"col-sm-6 col-md-7 col-lg-8 text-left\"><oobj-calendar colspan=\"col-sm-12 col-md-10 col-lg-8\" ng-model=vm.dataEvento pattern=\"dd/MM/yyyy HH:mm\"></oobj-calendar></div></div></div></div><div class=\"row center modal-footer\"><p class=center ng-show=vm.manifestacaoWarnMessage><strong class=text-danger ng-bind-html=vm.manifestacaoWarnMessage></strong></p><p class=center ng-show=vm.justificativaWarnMessage><strong class=text-danger ng-bind-html=vm.justificativaWarnMessage></strong></p><p class=center ng-show=vm.dataWarnMessage><strong class=text-danger ng-bind-html=vm.dataWarnMessage></strong></p><oobj-button ng-click=::vm.cancel() label=Cancelar btn-class=oobj-dfe-actions-btn-cancelar></oobj-button><oobj-button ng-click=::vm.manifestar() label=\"{{ ::vm.btnManifestarLabel }}\" btn-class=btn-primary></oobj-button></div></div>");
  $templateCache.put("oobj-dfe-actions/oobj-dfe-actions.html",
    "<div class=form-group><oobj-button ng-click=::openModalUploadXML() ng-hide=::hideUploadXml label=\"Upload de XML\" icon=fa-upload btn-class=btn-primary></oobj-button><oobj-button ng-click=::openModalBaixarXML() ng-hide=::hideDownloadXml label=\"Baixar XML\" icon=fa-download btn-class=btn-primary></oobj-button><oobj-button ng-click=::openModalBaixarDANFe() ng-hide=::hideDownloadDanfe label=\"Baixar DANFE\" icon=fa-download btn-class=btn-primary></oobj-button><oobj-button ng-click=::openModalManifestar() ng-hide=::hideManifestar label=Manifestar icon=fa-bullhorn btn-class=btn-primary></oobj-button><oobj-button ng-click=::openModalReconsultarSefaz() ng-hide=::hideReconsultar label=Reconsultar icon=fa-refresh btn-class=btn-primary></oobj-button><oobj-button-dropdown label=Entrada ng-hide=::hideEntrada icon=fa-map-signs btn-class=btn-primary provider=::itensEntrada></oobj-button-dropdown><oobj-button-dropdown label=\"Gerar Retorno\" ng-hide=::hideGerarRetorno icon=fa-long-arrow-left btn-class=btn-primary provider=::itensGerarRetorno></oobj-button-dropdown><oobj-button-dropdown label=\"Mais Ações\" ng-hide=::hideMaisAcoes icon=fa-th-large btn-class=btn-primary provider=::dropdownItems></oobj-button-dropdown></div>");
  $templateCache.put("oobj-dfe-actions/reconhecer-documentos/reconhecer-documentos.modal.html",
    "<div class=modal-content><div class=modal-header><button type=button class=close ng-click=::vm.cancelar()>&times;</button><div class=\"row center\"><i class=\"fa fa-5x fa-map-signs oobj-dfe-actions-header-primary\"></i><h4><span class=oobj-dfe-actions-header-title>Reconhecer Documentos na Aplicação</span></h4></div></div><div class=modal-body><div class=\"row center\"><p>Você selecionou <strong ng-bind-html=::vm.quantidadeItens></strong> documento(s) para serem reconhecidos na aplicação.</p></div></div><div class=\"row center modal-footer\"><oobj-button ng-click=::vm.cancelar() label=Cancelar btn-class=oobj-dfe-actions-btn-cancelar></oobj-button><oobj-button ng-click=::vm.reconhecer() label=Reconhecer btn-class=btn-primary></oobj-button></div></div>");
  $templateCache.put("oobj-dfe-actions/reconsultar-sefaz/reconsultar-sefaz.modal.html",
    "<div class=modal-content><div class=modal-header><button type=button class=close ng-click=::vm.cancelar()>&times;</button><div class=\"row center\"><i class=\"fa fa-5x fa-map-signs oobj-dfe-actions-header-primary\"></i><h4><span class=oobj-dfe-actions-header-title>Reconsultar Status do Documento na Sefaz</span> <i uib-tooltip=\"\" tooltip-placement=left class=\"fa fa-info-circle icon-info-medium-center\"></i></h4></div></div><div class=modal-body><div class=\"row center\"><p>Você selecionou <strong ng-bind-html=::vm.quantidadeItens></strong> documento(s) para consultar o status na Sefaz.</p></div></div><div class=\"row center modal-footer\"><oobj-button ng-click=::vm.cancelar() label=Cancelar btn-class=oobj-dfe-actions-btn-cancelar></oobj-button><oobj-button ng-click=::vm.reconsultar() label=Reconsultar btn-class=btn-primary></oobj-button></div></div>");
  $templateCache.put("oobj-dfe-actions/reentregar-documentos/reentregar-documentos.modal.html",
    "<div class=modal-content><div class=modal-header><button type=button class=close ng-click=::vm.cancelar()>&times;</button><div class=\"row center\"><i class=\"fa fa-5x fa-paper-plane oobj-dfe-actions-header-primary\"></i><h4><span class=oobj-dfe-actions-header-title>Reentregar Documentos para o Sistema ERP</span> <i uib-tooltip=\"\" tooltip-placement=left class=\"fa fa-info-circle icon-info-medium-center\"></i></h4></div></div><div class=modal-body><div class=\"row center\"><p>Você selecionou <strong ng-bind-html=::vm.quantidadeItens></strong> documento(s) para fazer a reentrega do(s) arquivo(s) XML.<br>Os documentos só serão entregues caso se encaixem na(s) regra(s) configurada(s).</p></div></div><div class=\"row center modal-footer\"><oobj-button ng-click=::vm.cancelar() label=Cancelar btn-class=oobj-dfe-actions-btn-cancelar></oobj-button><oobj-button ng-click=::vm.reentregar() label=Reentregar btn-class=btn-primary></oobj-button></div></div>");
  $templateCache.put("oobj-dfe-actions/reentregar-resumo/reentregar-resumo.modal.html",
    "<div class=modal-content><div class=modal-header><button type=button class=close ng-click=::vm.cancelar()>&times;</button><div class=\"row center\"><i class=\"fa fa-5x fa-paper-plane oobj-dfe-actions-header-primary\"></i><h4><span class=oobj-dfe-actions-header-title>Reentregar Resumo de NFe para o Sistema ERP</span> <i uib-tooltip=\"\" tooltip-placement=left class=\"fa fa-info-circle icon-info-medium-center\"></i></h4></div></div><div class=modal-body><div class=\"row center\"><p>Você selecionou <strong ng-bind-html=::vm.quantidadeItens></strong> documento(s) para fazer a reentrega do(s) arquivo(s) XML.<br>Os documentos só serão entregues caso se encaixem na(s) regra(s) configurada(s).</p></div></div><div class=\"row center modal-footer\"><oobj-button ng-click=::vm.cancelar() label=Cancelar btn-class=oobj-dfe-actions-btn-cancelar></oobj-button><oobj-button ng-click=::vm.reentregar() label=Reentregar btn-class=btn-primary></oobj-button></div></div>");
  $templateCache.put("oobj-dfe-actions/registrar-entrada/registrar-entrada.modal.html",
    "<div class=modal-content><div class=modal-header><button type=button class=close ng-click=::vm.cancelar()>&times;</button><div class=\"row center\"><i class=\"fa fa-5x fa-map-signs oobj-dfe-actions-header-primary\"></i><h4><span class=oobj-dfe-actions-header-title>Registrar Entrada</span> <i uib-tooltip=\"\" tooltip-placement=left class=\"fa fa-info-circle icon-info-medium-center\"></i></h4></div></div><div class=modal-body><div class=\"row center\"><p>Você selecionou <strong ng-bind-html=::vm.quantidadeItens></strong> documento(s) para registrar entrada.</p></div></div><div class=\"row center modal-footer\"><oobj-button ng-click=::vm.cancelar() label=Cancelar btn-class=oobj-dfe-actions-btn-cancelar></oobj-button><oobj-button ng-click=::vm.registrarEntrada() label=Confirmar btn-class=btn-primary></oobj-button></div></div>");
  $templateCache.put("oobj-dfe-actions/reprocessar/reprocessar.modal.html",
    "<div class=modal-content><div class=modal-header><button type=button class=close ng-click=::vm.cancelar()>&times;</button><div class=\"row center\"><i class=\"fa fa-5x fa-refresh oobj-dfe-actions-header-primary\"></i><h4><span class=oobj-dfe-actions-header-title>Reprocessar Documento(s)</span> <i uib-tooltip=\"\" tooltip-placement=left class=\"fa fa-info-circle icon-info-medium-center\"></i></h4></div></div><div class=modal-body><div class=\"row center\"><p class=oobj-dfe-actions-line-height>Você selecionou <strong ng-bind-html=::vm.quantidadeItens></strong> documento(s) para reprocessar.</p></div></div><div class=\"row center modal-footer\"><oobj-button ng-click=::vm.cancelar() label=Cancelar btn-class=oobj-dfe-actions-btn-cancelar></oobj-button><oobj-button ng-click=::vm.reprocessar() label=Reprocessar btn-class=btn-primary></oobj-button></div></div>");
  $templateCache.put("oobj-dfe-actions/retorno-autorizacao/retorno-autorizacao.modal.html",
    "<div class=modal-content><div class=modal-header><button type=button class=close ng-click=::vm.cancelar()>&times;</button><div class=\"row center\"><i class=\"fa fa-5x fa-refresh oobj-dfe-actions-header-primary\"></i><h4><span class=oobj-dfe-actions-header-title>Gerar Retorno de Autorização</span> <i uib-tooltip=\"\" tooltip-placement=left class=\"fa fa-info-circle icon-info-medium-center\"></i></h4></div></div><div class=modal-body><div class=\"row center\"><p>Você selecionou <strong ng-bind-html=::vm.quantidadeItens></strong> documento(s) para gerar retorno.</p></div></div><div class=\"row center modal-footer\"><oobj-button ng-click=::vm.cancelar() label=Cancelar btn-class=oobj-dfe-actions-btn-cancelar></oobj-button><oobj-button ng-click=::vm.gerarRetorno() label=\"Gerar Retorno\" btn-class=btn-primary></oobj-button></div></div>");
  $templateCache.put("oobj-dfe-actions/retorno-eventos/retorno-eventos.modal.html",
    "<div class=modal-content><div class=modal-header><button type=button class=close ng-click=::vm.cancelar()>&times;</button><div class=\"row center\"><i class=\"fa fa-5x fa-refresh oobj-dfe-actions-header-primary\"></i><h4><span class=oobj-dfe-actions-header-title>Gerar Retorno de Evento(s)</span> <i uib-tooltip=\"\" tooltip-placement=left class=\"fa fa-info-circle icon-info-medium-center\"></i></h4></div></div><div class=modal-body><div class=\"row center\"><p>Você selecionou <strong ng-bind-html=::vm.quantidadeItens></strong> documento(s) para gerar retorno.</p></div></div><div class=\"row center modal-footer\"><oobj-button ng-click=::vm.cancelar() label=Cancelar btn-class=oobj-dfe-actions-btn-cancelar></oobj-button><oobj-button ng-click=::vm.confirmar() label=Confirmar btn-class=btn-primary></oobj-button></div></div>");
  $templateCache.put("oobj-dfe-actions/revalidar-arquivo/revalidar-arquivo.modal.html",
    "<div class=modal-content><div class=modal-header><button type=button class=close ng-click=::vm.cancelar()>&times;</button><div class=\"row center\"><i class=\"fa fa-5x fa-refresh oobj-dfe-actions-header-primary\"></i><h4><span class=oobj-dfe-actions-header-title>Revalidar Arquivo XML</span> <i uib-tooltip=\"\" tooltip-placement=left class=\"fa fa-info-circle icon-info-medium-center\"></i></h4></div></div><div class=modal-body><div class=\"row center\"><p>Você selecionou <strong ng-bind-html=::vm.quantidadeItens></strong> documento(s) para revalidar.</p></div></div><div class=\"row center modal-footer\"><oobj-button ng-click=::vm.cancelar() label=Cancelar btn-class=oobj-dfe-actions-btn-cancelar></oobj-button><oobj-button ng-click=::vm.revalidar() label=Revalidar btn-class=btn-primary></oobj-button></div></div>");
  $templateCache.put("oobj-dfe-actions/upload-xml/upload-xml.modal.html",
    "<div class=modal-content><div class=modal-header><button type=button class=close ng-click=::vm.fecharModal()>&times;</button><div class=\"row center\"><i class=\"fa fa-5x fa-upload oobj-dfe-actions-header-primary\"></i><h4><span class=oobj-dfe-actions-header-title>Upload de XML</span> <i uib-tooltip=\"\" tooltip-placement=left class=\"fa fa-info-circle icon-info-medium-center\"></i></h4><p class=oobj-dfe-actions-line-height>Informe até <b>40</b> arquivos XML de cada vez.<br>Se preferir, envie um arquivo compactado no formato <b>ZIP, RAR ou 7ZIP</b>.<br>(Tamanho máximo: <b>10MB</b>)</p></div></div><div class=modal-body><div class=\"row center\"><div ng-model=vm.files ngf-drop ngf-select ngf-multiple=true ngf-allow-dir=true ngf-pattern=\"'.7z,.xml,.rar,.zip'\" ngf-max-size=10MB ngf-drag-over-class=\"'dragover'\" class=\"col-md-12 drop-box\"><p class=\"text-muted oobj-dfe-actions-line-height\">ARRASTE E SOLTE OS ARQUIVOS AQUI<br>ou se preferir...</p><oobj-button label=\"Escolha um arquivo para fazer upload\" btn-class=oobj-dfe-actions-btn-gray></oobj-button></div></div><div class=\"row center\" ng-if=vm.fileWrappers><p class=text-primary><span ng-bind=vm.fileWrappers.length></span> arquivo(s) selecionado(s)</p><table class=\"table table-responsive table-borderless text-left\"><thead><tr><td>&nbsp;</td><td><strong>Nome do Arquivo</strong></td><td><strong>Tamanho</strong></td><td><strong>Progresso</strong></td></tr></thead><tbody><tr ng-repeat=\"wrapper in vm.fileWrappers\"><td><i class=\"fa fa-times cursor-pointer\" ng-click=::vm.remover($index)></i></td><td><div ng-bind=::wrapper.file.name class=oobj-dfe-actions-upload-td-width></div></td><td><span ng-bind=\"::wrapper.file.size | bytes\"></span></td><td><uib-progressbar value=\"wrapper.file.progress || 0\" class=progress-bar-td type=\"{{ wrapper.file.progress === 100 ? 'success' : 'primary' }}\"><strong ng-bind=\"wrapper.file.progress + '%'\" ng-show=wrapper.file.progress></strong></uib-progressbar></td></tr></tbody></table></div></div><div class=\"row center modal-footer\"><p class=text-success ng-show=vm.allCompleted>Upload concluído com sucesso!</p><div ng-hide=vm.deveCancelar><oobj-button ng-click=::vm.cancelar() label=Cancelar btn-class=\"oobj-dfe-actions-btn-gray upload-xml-btn\" ng-show=!vm.allCompleted></oobj-button><oobj-button ng-click=::vm.upload() label=\"Fazer Upload\" btn-class=\"btn-primary upload-xml-btn\" ng-show=!vm.allCompleted></oobj-button><oobj-button ng-click=::vm.fecharModal() label=Fechar ng-show=vm.allCompleted btn-class=\"oobj-dfe-actions-btn-gray upload-xml-btn\"></oobj-button></div><div ng-show=vm.deveCancelar><p class=oobj-dfe-actions-line-height><strong>Tem certeza que deseja cancelar?</strong><br>O processo de upload dos arquivos em andamento serão cancelados.</p><oobj-button ng-click=::vm.desfazerCancelamento() label=Não btn-class=\"oobj-dfe-actions-btn-gray upload-xml-btn\"></oobj-button><oobj-button ng-click=::vm.cancelarUploads() label=Sim btn-class=\"btn-primary upload-xml-btn\"></oobj-button></div></div></div>");
  $templateCache.put("oobj-fieldset/oobj-fieldset.html",
    "<fieldset ng-class=::colspan><legend class=oobj-fieldset-title><span ng-bind=::title></span></legend><div ng-transclude></div></fieldset>");
  $templateCache.put("oobj-footer/oobj-footer.html",
    "<footer class=oobj-footer>&copy;{{::year | date:'yyyy'}} Painel de Gest&atilde;o<br>Powered by Oobj - v{{::version}} [{{::generatedData | date:'dd-MM-yyyy'}}]</footer>");
  $templateCache.put("oobj-grid/grid-columns/ciclo-vida/evento-destinatario/evento-destinatario.modal.html",
    "<div class=modal-content><div class=modal-header><button type=button class=close ng-click=::vm.cancel()>&times;</button><div class=\"row center\"><i class=\"fa fa-5x\" ng-class=::vm.dfe.eventoDestinatario.icone style=\"color: {{vm.dfe.eventoDestinatario.cor}}\"></i><h4><span ng-bind=::vm.dfe.eventoDestinatario.titulo class=oobj-ciclo-vida-column-title></span> <i uib-tooltip=\"\" tooltip-placement=left class=\"fa fa-info-circle icon-info-medium-center\"></i></h4></div></div><div class=modal-body><div class=\"row center\"><p ng-bind-html=::vm.dfe.eventoDestinatario.descricao></p></div></div><div class=\"row center modal-footer\"><oobj-button ng-click=::vm.cancel() label=FECHAR btn-class=oobj-ciclo-vida-column-btn-cancelar></oobj-button><oobj-button ng-click=::vm.saibaMais() btn-class=oobj-ciclo-vida-column-btn-saiba-mais label=\"SAIBA MAIS\"></oobj-button><oobj-button ng-click=::vm.acao() ng-show=::vm.dfe.eventoDestinatario.linkAcao label=\"DETALHES DO EVENTO\" btn-class=btn-primary></oobj-button></div></div>");
  $templateCache.put("oobj-grid/grid-columns/ciclo-vida/evento-emitente/evento-emitente.modal.html",
    "<div class=modal-content><div class=modal-header><button type=button class=close ng-click=::vm.cancel()>&times;</button><div class=\"row center\"><i class=\"fa fa-5x\" ng-class=::vm.dfe.eventoEmitente.icone style=\"color: {{vm.dfe.eventoEmitente.cor}}\"></i><h4><span ng-bind=::vm.dfe.eventoEmitente.titulo class=oobj-ciclo-vida-column-title></span> <i uib-tooltip=\"\" tooltip-placement=left class=\"fa fa-info-circle icon-info-medium-center\"></i></h4></div></div><div class=modal-body><div class=\"row center\"><p ng-bind-html=::vm.dfe.eventoEmitente.descricao></p></div></div><div class=\"row center modal-footer\"><oobj-button ng-click=::vm.cancel() label=FECHAR btn-class=oobj-ciclo-vida-column-btn-cancelar></oobj-button><oobj-button ng-click=::vm.saibaMais() btn-class=oobj-ciclo-vida-column-btn-saiba-mais label=\"SAIBA MAIS\"></oobj-button><oobj-button ng-click=::vm.acao() ng-show=::vm.dfe.eventoEmitente.linkAcao label=\"DETALHES DO EVENTO\" btn-class=btn-primary></oobj-button></div></div>");
  $templateCache.put("oobj-grid/grid-columns/ciclo-vida/integridade-arquivo/status-integridade-arquivo.modal.html",
    "<div class=modal-content><div class=modal-header><button type=button class=close ng-click=::vm.cancel()>&times;</button><div class=\"row center\"><i class=\"fa fa-5x\" ng-class=::vm.dfe.statusIntegridadeArquivo.icone style=\"color: {{vm.dfe.statusIntegridadeArquivo.cor}}\"></i><h4><span ng-bind=::vm.dfe.statusIntegridadeArquivo.titulo class=oobj-ciclo-vida-column-title></span> <i uib-tooltip=\"\" tooltip-placement=left class=\"fa fa-info-circle icon-info-medium-center\"></i></h4></div></div><div class=modal-body><div class=\"row center\"><p ng-bind-html=::vm.dfe.statusIntegridadeArquivo.descricao></p></div></div><div class=\"row center modal-footer\"><oobj-button ng-click=::vm.cancel() label=FECHAR btn-class=oobj-ciclo-vida-column-btn-cancelar></oobj-button><oobj-button ng-click=::vm.saibaMais() btn-class=oobj-ciclo-vida-column-btn-saiba-mais label=\"SAIBA MAIS\"></oobj-button><oobj-button ng-click=::vm.acao() ng-show=::vm.dfe.statusIntegridadeArquivo.linkAcao label=\"DOWNLOAD NA SEFAZ\" btn-class=btn-primary></oobj-button></div></div>");
  $templateCache.put("oobj-grid/grid-columns/ciclo-vida/oobj-column-ciclo-vida.html",
    "<div class=ui-grid-cell-contents><button class=\"btn btn-circle oobj-ciclo-vida-column-btn\" ng-click=grid.appScope.openModalIntegridadeArquivo(row) style=\"background-color: {{ COL_FIELD.statusArquivo.backgroundColor }}; color: {{ COL_FIELD.statusArquivo.color }}\" ng-show=grid.appScope.cicloVidaConfig.integridade title=\" {{COL_FIELD.statusArquivo.descricao}} \"><i class=\"fa {{ COL_FIELD.statusArquivo.icone }}\"></i></button> <button data-toggle=modal class=\"btn btn-circle oobj-ciclo-vida-column-btn\" ng-click=grid.appScope.openModalSituacaoSefaz(row) style=\"background-color: {{ COL_FIELD.situacaoSefaz.backgroundColor }}; color: {{ COL_FIELD.situacaoSefaz.color }}\" ng-show=grid.appScope.cicloVidaConfig.situacaoSefaz title=\" {{COL_FIELD.situacaoSefaz.descricao}} \"><i class=\"fa {{ COL_FIELD.situacaoSefaz.icone }}\"></i></button> <button data-toggle=modal class=\"btn btn-circle oobj-ciclo-vida-column-btn\" ng-click=grid.appScope.openModalEventoEmitente(row) style=\"background-color: {{ COL_FIELD.backgroundColorEventoEmitente }}; color: {{ COL_FIELD.colorEventoEmitente }}\" ng-show=grid.appScope.cicloVidaConfig.eventoEmitente><i class=\"fa {{ COL_FIELD.iconeEventoEmitente }}\"></i></button> <button data-toggle=modal class=\"btn btn-circle\" ng-click=grid.appScope.openModalEventoDestinatario(row) style=\"background-color: {{ COL_FIELD.backgroundColorEventoDestinatario }}; color: {{ COL_FIELD.colorEventoDestinatario }}\" ng-show=grid.appScope.cicloVidaConfig.eventoDestinatario><i class=\"fa {{ COL_FIELD.iconeEventoDestinatario }}\"></i></button></div>");
  $templateCache.put("oobj-grid/grid-columns/ciclo-vida/situacao-sefaz/situacao-sefaz.modal.html",
    "<div class=modal-content><div class=modal-header><button type=button class=close ng-click=::vm.cancel()>&times;</button><div class=\"row center\"><i class=\"fa fa-5x\" ng-class=::vm.dfe.situacaoSefaz.icone style=\"color: {{vm.dfe.situacaoSefaz.cor}}\"></i><h4><span ng-bind=::vm.dfe.situacaoSefaz.titulo class=oobj-ciclo-vida-column-title></span> <i uib-tooltip=\"\" tooltip-placement=left class=\"fa fa-info-circle icon-info-medium-center\"></i></h4></div></div><div class=modal-body><div class=\"row center\"><p ng-bind-html=::vm.dfe.situacaoSefaz.descricao></p></div></div><div class=\"row center modal-footer\"><oobj-button ng-click=::vm.cancel() label=FECHAR btn-class=oobj-ciclo-vida-column-btn-cancelar></oobj-button><oobj-button ng-click=::vm.saibaMais() btn-class=oobj-ciclo-vida-column-btn-saiba-mais label=\"SAIBA MAIS\"></oobj-button><oobj-button ng-click=::vm.acao() ng-show=::vm.dfe.situacaoSefaz.linkAcao label=\"DOWNLOAD NA SEFAZ\" btn-class=btn-primary></oobj-button></div></div>");
  $templateCache.put("oobj-grid/grid-columns/oobj-num-serie-column.tpls.html",
    "<div class=ui-grid-cell-contents>{{ COL_FIELD.numero }} - {{ COL_FIELD.serie }}</div>");
  $templateCache.put("oobj-grid/grid-columns/oobj-razao-social-cnpj-column.tpls.html",
    "<div class=ui-grid-cell-contents>{{ COL_FIELD.razaoSocial }}<br>{{ COL_FIELD.cnpj }}</div>");
  $templateCache.put("oobj-grid/grid-columns/options/detalhes-nfe/detalhes-nfe.modal.html",
    "<div class=modal-content><div class=modal-header><button type=button class=close ng-click=::vm.cancel()>&times;</button><div class=\"row center\"><h4><span ng-bind=::vm.title></span></h4></div></div><div class=modal-body><!-- inicio - Cabeçalho (Chave, numero e versão) --><div class=row><div class=col-md-12><p class=timeline-text><span class=\"text-primary oobj-detalhes-nfe-text-bold\">Dados Gerais</span></p></div><hr><div class=col-md-12><div class=col-md-7><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Chave de Acesso</span><br><span ng-bind=::vm.dfe.chaveAcesso></span></p></div><div class=col-md-3><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Número</span><br><span ng-bind=::vm.dfe.numero></span></p></div><div class=col-md-2><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Versão XML</span><br><span ng-bind=::vm.dfe.versaoXml></span></p></div></div><!-- fim - Cabeçalho (Chave, numero e versão) --><br><div class=col-md-12><uib-tabset><!-- Aba NFe --><uib-tab heading=NF-e><ng-include src=\"'js/directives/oobj-grid/grid-columns/options/detalhes-nfe/tab-nfe.html'\"></ng-include></uib-tab><!-- Aba Emitente --><uib-tab heading=Emitente><ng-include src=\"'js/directives/oobj-grid/grid-columns/options/detalhes-nfe/tab-emitente.html'\"></ng-include></uib-tab><!-- Aba Destinatario --><uib-tab heading=Destinatário><ng-include src=\"'js/directives/oobj-grid/grid-columns/options/detalhes-nfe/tab-destinatario.html'\"></ng-include></uib-tab><!-- Aba Produtos e Serviços --><uib-tab heading=\"Produtos e Serviços\"><ng-include src=\"'js/directives/oobj-grid/grid-columns/options/detalhes-nfe/tab-produtos-servicos.html'\"></ng-include></uib-tab><!-- Aba Totais --><uib-tab heading=Totais><ng-include src=\"'js/directives/oobj-grid/grid-columns/options/detalhes-nfe/tab-totais.html'\"></ng-include></uib-tab><!-- Aba Transporte --><uib-tab heading=Transporte><ng-include src=\"'js/directives/oobj-grid/grid-columns/options/detalhes-nfe/tab-transporte.htm'\"></ng-include></uib-tab><!-- Aba Cobrança --><uib-tab heading=Cobrança><ng-include src=\"'js/directives/oobj-grid/grid-columns/options/detalhes-nfe/tab-cobranca.html'\"></ng-include></uib-tab><!-- Aba Informações Adicionais --><uib-tab heading=\"Informações Adicionais\"><ng-include src=\"'js/directives/oobj-grid/grid-columns/options/detalhes-nfe/tab-informacoes-adicionais.html'\"></ng-include></uib-tab></uib-tabset></div></div><div class=\"row wrapper text-center\"><oobj-dfe-actions modelo-documento=::vm.modeloDocumento></oobj-dfe-actions></div></div></div>");
  $templateCache.put("oobj-grid/grid-columns/options/detalhes-nfe/tab-cobranca.html",
    "<oobj-panel><div nf-if=vm.dfe.cobr.fat><span class=\"text-primary oobj-detalhes-nfe-text-bold\">Fatura</span><br><div class=row><div class=col-md-6><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Número</span><br><span ng-bind=::vm.dfe.cobr.fat.nFat></span></p></div><div class=col-md-6><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Valor Original</span><br><span ng-bind=\"::vm.dfe.cobr.fat.vOrig | currency:'R$ '\"></span></p></div></div><div class=row><div class=col-md-6><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Valor do Desconto</span><br><span ng-bind=\"::vm.dfe.cobr.fat.vDesc | currency:'R$ '\"></span></p></div><div class=col-md-6><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Valor Líquido</span><br><span ng-bind=\"::vm.dfe.cobr.fat.vLiq | currency:'R$ '\"></span></p></div></div></div><div nf-if=::vm.dfe.cobr.dup><hr><span class=\"text-primary oobj-detalhes-nfe-text-bold\">Duplicatas</span><br><div class=row ng-repeat=\"duplicata in vm.dfe.cobr.dup\"><div class=col-md-4><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Número</span><br><span ng-bind=::duplicata.nDup></span></p></div><div class=col-md-4><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Vencimento</span><br><span ng-bind=::duplicata.dVenc></span></p></div><div class=col-md-4><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Valor</span><br><span ng-bind=\"::duplicata.vDup | currency:'R$ '\"></span></p></div></div></div></oobj-panel>");
  $templateCache.put("oobj-grid/grid-columns/options/detalhes-nfe/tab-destinatario.html",
    "<oobj-panel><span class=\"text-primary oobj-detalhes-nfe-text-bold\">Dados do Destinatário</span><br><div class=row><div class=col-md-12><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Nome / Razão Social</span><br><span ng-bind=::vm.dfe.dest.razaoSocial></span></p></div></div><div class=row><div class=col-md-6><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>CNPJ</span><br><span ng-bind=\"::vm.dfe.dest.cnpj | cpfCnpj\"></span></p></div><div class=col-md-6><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Endereço</span><br><span ng-bind=::vm.dfe.dest.logradouro></span></p></div></div><div class=row><div class=col-md-6><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Bairro</span><br><span ng-bind=::vm.dfe.dest.bairro></span></p></div><div class=col-md-6><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>CEP</span><br><span ng-bind=\"::vm.dfe.dest.cep | cep\"></span></p></div></div><div class=row><div class=col-md-6><p><span class=oobj-detalhes-nfe-text-bold>Município</span><br><span ng-bind=::vm.dfe.dest.municipio></span></p></div><div class=col-md-6><p><span class=oobj-detalhes-nfe-text-bold>Telefone</span><br><span ng-bind=\"::vm.dfe.dest.telefone | telefone\"></span></p></div></div><div class=row><div class=col-md-6><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>UF</span><br><span ng-bind=::vm.dfe.dest.uf></span></p></div><div class=col-md-6><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>País</span><br><span ng-bind=::vm.dfe.dest.pais></span></p></div></div><div class=row><div class=col-md-3><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Indicador IE</span><br><span ng-bind=::vm.dfe.dest.indIe></span></p></div><div class=col-md-3><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Inscrição Estadual</span><br><span ng-bind=::vm.dfe.dest.ie></span></p></div><div class=col-md-6><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Inscrição SUFRAMA</span><br><span ng-bind=::vm.dfe.dest.suframa></span></p><br></div></div></oobj-panel>");
  $templateCache.put("oobj-grid/grid-columns/options/detalhes-nfe/tab-detalhes-produtos-servicos.html",
    "<oobj-panel><div class=row><div class=col-md-4><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Código do Produto</span><br><span ng-bind=::detalhesProduto[$index].resumoProduto.codigo></span></p></div><div class=col-md-4><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Código NCM</span><br><span ng-bind=::detalhesProduto[$index].ncm></span></p></div><div class=col-md-4><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Código CEST</span><br><span ng-bind=::detalhesProduto[$index].cest></span></p></div></div><div class=row><div class=col-md-4><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Código EX da TIPI</span><br><span ng-bind=::detalhesProduto[$index].codExTipi></span></p></div><div class=col-md-4><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>CFOP</span><br><span ng-bind=::detalhesProduto[$index].cfop></span></p></div><div class=col-md-4><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Outras Despesas Acessórias</span><br><span ng-bind=\"::detalhesProduto[$index].despesasAcessorias | currency: 'R$ '\"></span></p></div></div><hr><div class=row><div class=col-md-12><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Indicador de Composição do Valor Total da NF-e</span><br><span ng-bind=::detalhesProduto[$index].indTot></span></p></div></div><div class=row><div class=col-md-4><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Código EAN Comercial</span><br><span ng-bind=::detalhesProduto[$index].ean></span></p></div><div class=col-md-4><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Unidade Comercial</span><br><span ng-bind=::detalhesProduto[$index].resumoProduto.unidadeComercial></span></p></div><div class=col-md-4><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Quantidade Comercial</span><br><span ng-bind=::detalhesProduto[$index].resumoProduto.quantidadeComercial></span></p></div></div><div class=row><div class=col-md-4><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Código EAN Tributável</span><br><span ng-bind=::detalhesProduto[$index].eanTrib></span></p></div><div class=col-md-4><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Unidade Tributável</span><br><span ng-bind=::detalhesProduto[$index].uTrib></span></p></div><div class=col-md-4><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Quantidade Tributável</span><br><span ng-bind=::detalhesProduto[$index].qTrib></span></p></div></div><div class=row><div class=col-md-4><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Valor unitário de Comercialização</span><br><span ng-bind=\"::detalhesProduto[$index].vUnCom | currency : 'R$ '\"></span></p></div><div class=col-md-4><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Valor Unitário de Tributação</span><br><span ng-bind=\"::detalhesProduto[$index].vUnTrib | currency : 'R$ '\"></span></p></div><div class=col-md-4><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Valor Aproximado dos Tributos</span><br><span ng-bind=\"::detalhesProduto[$index].vTotTrib | currency : 'R$ '\"></span></p></div></div><div class=row><div class=col-md-4><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Número do pedido de compra</span><br><span ng-bind=::detalhesProduto[$index].xPed></span></p></div><div class=col-md-4><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Item do pedido de compra</span><br><span ng-bind=::detalhesProduto[$index].nItemPed></span></p></div><div class=col-md-4><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Número FCI</span><br><span ng-bind=::detalhesProduto[$index].nFci></span></p></div></div><hr><span class=\"text-primary oobj-detalhes-nfe-text-bold\">ICMS Normal e ST</span><br><div class=row><div class=col-md-4><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Origem da Mercadoria</span><br><span ng-bind=::detalhesProduto[$index].icms.orig></span></p></div><div class=col-md-4><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Tributação ICMS</span><br><span ng-bind=::detalhesProduto[$index].icms.cst></span></p></div><div class=col-md-4><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Modalidade Definição da BC ICMS NORMAL</span><br><span ng-bind=::detalhesProduto[$index].icms.modBc></span></p></div></div><div class=row><div class=col-md-4><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Base de Cálculo do ICMS Normal</span><br><span ng-bind=\"::detalhesProduto[$index].icms.vBc | currency: 'R$ '\"></span></p></div><div class=col-md-4><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Alíquota do ICMS Normal</span><br><span ng-bind=::detalhesProduto[$index].icms.pIcms></span></p></div><div class=col-md-4><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Valor do ICMS Normal</span><br><span ng-bind=\"::detalhesProduto[$index].icms.vIcms | currency: 'R$ '\"></span></p></div></div><div class=row><div class=col-md-4><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Base de Cálculo do ICMS ST</span><br><span ng-bind=\"::detalhesProduto[$index].icms.vBcSt | currency: 'R$ '\"></span></p></div><div class=col-md-4><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Alíquota do ICMS ST</span><br><span ng-bind=::detalhesProduto[$index].icms.pIcmsSt></span></p></div><div class=col-md-4><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Valor do ICMS ST</span><br><span ng-bind=\"::detalhesProduto[$index].icms.vIcmsSt | currency: 'R$ '\"></span></p></div></div><div class=row><div class=col-md-4><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Percentual Redução de BC do ICMS ST</span><br><span ng-bind=::detalhesProduto[$index].icms.pRedBcSt></span></p></div><div class=col-md-4><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Percentual do MVA do ICMS ST</span><br><span ng-bind=::detalhesProduto[$index].icms.pMVASt></span></p></div><div class=col-md-4><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Modalidade Definição da BC ICMS ST</span><br><span ng-bind=::detalhesProduto[$index].icms.modBcSt></span></p></div></div><hr><div ng-show=::detalhesProduto[$index].ipi><span class=\"text-primary oobj-detalhes-nfe-text-bold\">IPI</span><br><div class=row><div class=col-md-4><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Classe de Enquadramento</span><br><span ng-bind=::detalhesProduto[$index].ipi.clEnq></span></p></div><div class=col-md-4><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Código de Enquadramento</span><br><span ng-bind=::detalhesProduto[$index].ipi.cEnq></span></p></div><div class=col-md-4><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Código do Selo</span><br><span ng-bind=::detalhesProduto[$index].ipi.cSelo></span></p></div></div><div class=row><div class=col-md-4><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>CNPJ do Produtor</span><br><span ng-bind=\"::detalhesProduto[$index].ipi.cnpjProd | cpfCnpj\"></span></p></div><div class=col-md-4><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Qtd. Selo</span><br><span ng-bind=::detalhesProduto[$index].ipi.qSelo></span></p></div><div class=col-md-4><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>CST</span><br><span ng-bind=::detalhesProduto[$index].ipi.cst></span></p></div></div><div class=row><div class=col-md-4><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Qtd Total Unidade Padrão</span><br><span ng-bind=::detalhesProduto[$index].ipi.qUnid></span></p></div><div class=col-md-4><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Valor por Unidade</span><br><span ng-bind=\"::detalhesProduto[$index].ipi.vUnid | currency : 'R$ '\"></span></p></div><div class=col-md-4><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Valor IPI</span><br><span ng-bind=\"::detalhesProduto[$index].ipi.vIpi | currency : 'R$ '\"></span></p></div></div><div class=row><div class=col-md-4><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Base de Cálculo</span><br><span ng-bind=\"::detalhesProduto[$index].ipi.vBc | currency : 'R$ '\"></span></p></div><div class=col-md-4><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Alíquota</span><br><span ng-bind=::detalhesProduto[$index].ipi.pIpi></span></p></div></div><hr></div><div ng-show=::detalhesProduto[$index].pis><span class=\"text-primary oobj-detalhes-nfe-text-bold\">PIS</span><br><div class=row><div class=col-md-12><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>CST</span><br><span ng-bind=::detalhesProduto[$index].pis.cst></span></p></div></div><div class=row><div class=col-md-4><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Base de Cálculo</span><br><span ng-bind=\"::detalhesProduto[$index].pis.vBc | currency : 'R$ '\"></span></p></div><div class=col-md-4><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Alíquota</span><br><span ng-bind=\"::detalhesProduto[$index].pis.pPis | number\"></span></p></div><div class=col-md-4><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Valor</span><br><span ng-bind=\"::detalhesProduto[$index].pis.vPis | currency : 'R$ '\"></span></p></div></div><hr></div><div ng-show=::detalhesProduto[$index].cofins><span class=\"text-primary oobj-detalhes-nfe-text-bold\">COFINS</span><br><div class=row><div class=col-md-12><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>CST</span><br><span ng-bind=::detalhesProduto[$index].cofins.cst></span></p></div></div><div class=row><div class=col-md-4><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Base de Cálculo</span><br><span ng-bind=\"::detalhesProduto[$index].cofins.vBc | currency : 'R$ '\"></span></p></div><div class=col-md-4><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Alíquota</span><br><span ng-bind=\"::detalhesProduto[$index].cofins.pCofins | number\"></span></p></div><div class=col-md-4><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Valor</span><br><span ng-bind=\"::detalhesProduto[$index].cofins.vCofins | currency : 'R$ '\"></span></p></div></div></div></oobj-panel>");
  $templateCache.put("oobj-grid/grid-columns/options/detalhes-nfe/tab-emitente.html",
    "<oobj-panel><span class=\"text-primary oobj-detalhes-nfe-text-bold\">Dados do Emitente</span><br><div class=row><div class=col-md-6><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Nome / Razão Social</span><br><span ng-bind=::vm.dfe.emit.razaoSocial></span></p></div><div class=col-md-6><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Nome Fantasia</span><br><span ng-bind=::vm.dfe.emit.nomeFantasia></span></p></div></div><div class=row><div class=col-md-6><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>CNPJ</span><br><span ng-bind=\"::vm.dfe.emit.cnpj | cpfCnpj\"></span></p></div><div class=col-md-6><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Endereço</span><br><span ng-bind=::vm.dfe.emit.logradouro></span></p></div></div><div class=row><div class=col-md-6><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Bairro</span><br><span ng-bind=::vm.dfe.emit.bairro></span></p></div><div class=col-md-6><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>CEP</span><br><span ng-bind=\"::vm.dfe.emit.cep | cep\"></span></p></div></div><div class=row><div class=col-md-6><p><span class=oobj-detalhes-nfe-text-bold>Município</span><br><span ng-bind=::vm.dfe.emit.municipio></span></p></div><div class=col-md-6><p><span class=oobj-detalhes-nfe-text-bold>Telefone</span><br><span ng-bind=\"::vm.dfe.emit.telefone | telefone\"></span></p></div></div><div class=row><div class=col-md-6><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>UF</span><br><span ng-bind=::vm.dfe.emit.uf></span></p></div><div class=col-md-6><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>País</span><br><span ng-bind=::vm.dfe.emit.pais></span></p></div></div><div class=row><div class=col-md-6><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Inscrição Estadual</span><br><span ng-bind=::vm.dfe.emit.ie></span></p></div><div class=col-md-6><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Inscrição Estadual Substituto</span><br><span ng-bind=::vm.dfe.emit.iest></span></p></div></div><div class=row><div class=col-md-6><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Inscrição Municipal</span><br><span ng-bind=::vm.dfe.emit.im></span></p></div><div class=col-md-6><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Município da Ocorrência do Fato Gerador do ICMS</span><br><span ng-bind=::vm.dfe.emit.fgIcms></span></p></div></div><div class=row><div class=col-md-6><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>CNAE Fiscal</span><br><span ng-bind=::vm.dfe.emit.cnae></span></p></div><div class=col-md-6><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Código de Regime Tributário</span><br><span ng-bind=::vm.dfe.emit.crt></span></p></div></div></oobj-panel>");
  $templateCache.put("oobj-grid/grid-columns/options/detalhes-nfe/tab-informacoes-adicionais.html",
    "<oobj-panel><br><div ng-if=::vm.dfe.infAdic.infAdFisco><span class=\"text-primary oobj-detalhes-nfe-text-bold\">Informações Adicionais de Interesse do Fisco</span><div class=row><div class=col-md-12><p class=timeline-text><span ng-bind=::vm.dfe.infAdic.infAdFisco></span></p></div></div></div><div ng-if=::vm.dfe.infAdic.infCpl><hr><span class=\"text-primary oobj-detalhes-nfe-text-bold\">Informações Complementares de Interesse do Contribuinte</span><br><div class=row><div class=col-md-12><p class=timeline-text><span ng-bind=::vm.dfe.infAdic.infCpl></span></p></div></div></div><div ng-if=::vm.dfe.infAdic.obsCont><hr><span class=\"text-primary oobj-detalhes-nfe-text-bold\">Observações do Contribuinte</span><br><div class=row><div class=col-md-6><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Campo</span></p></div><div class=col-md-6><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Texto</span></p></div></div><div class=row ng-repeat=\"obs in vm.dfe.infAdic.obsCont\"><div class=col-md-6><p class=timeline-text><span ng-bind=::obs.xCampo></span></p></div><div class=col-md-6><p class=timeline-text><span ng-bind=::obs.xTexto></span></p></div></div></div></oobj-panel>");
  $templateCache.put("oobj-grid/grid-columns/options/detalhes-nfe/tab-nfe.html",
    "<oobj-panel><!-- Dados da NF-e --><span class=\"text-primary oobj-detalhes-nfe-text-bold\">Dados da NF-e</span><br><div class=row><div class=col-md-1><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Modelo</span><br><span ng-bind=::vm.dfe.modelo></span></p></div><div class=col-md-1><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Série</span><br><span ng-bind=::vm.dfe.serie></span></p></div><div class=col-md-2><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Número</span><br><span ng-bind=::vm.dfe.numero></span></p></div><div class=col-md-3><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Data de Emissão</span><br><span ng-bind=::vm.dfe.dhEmi></span></p></div><div class=col-md-3><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Data Saída/Entrada</span><br><span ng-bind=::vm.dfe.dhSaiEnt></span></p></div><div class=col-md-2><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Valor Total</span><br><span ng-bind=\"::vm.dfe.valorTotal | currency:'R$ '\"></span></p></div></div><hr><!-- Emitente --><span class=\"text-primary oobj-detalhes-nfe-text-bold\">Emitente</span><br><div class=row><div class=col-md-3><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>CNPJ</span><br><span ng-bind=\"::vm.dfe.emit.cnpj | cpfCnpj\"></span></p></div><div class=col-md-5><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Nome / Razão Social</span><br><span ng-bind=::vm.dfe.emit.razaoSocial></span></p></div><div class=col-md-3><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Inscrição Estadual</span><br><span ng-bind=::vm.dfe.emit.ie></span></p></div><div class=col-md-1><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>UF</span><br><span ng-bind=::vm.dfe.emit.uf></span></p></div></div><hr><!-- Destinatario --><span class=\"text-primary oobj-detalhes-nfe-text-bold\">Destinatário</span><br><div class=row><div class=col-md-3><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>CNPJ</span><br><span ng-bind=\"::vm.dfe.dest.cnpj | cpfCnpj\"></span></p></div><div class=col-md-5><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Nome / Razão Social</span><br><span ng-bind=::vm.dfe.dest.razaoSocial></span></p></div><div class=col-md-3><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Inscrição Estadual</span><br><span ng-bind=::vm.dfe.dest.ie></span></p></div><div class=col-md-1><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>UF</span><br><span ng-bind=::vm.dfe.dest.uf></span></p></div></div><div class=row><div class=col-md-3><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Destino da Operação</span><br><span ng-bind=::vm.dfe.idDest></span></p></div><div class=col-md-4><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Consumidor Final</span><br><span ng-bind=::vm.dfe.dest.indFinal></span></p></div><div class=col-md-5><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Presença do Comprador</span><br><span ng-bind=::vm.dfe.dest.indPres></span></p></div></div><hr><!-- Emissao --><span class=\"text-primary oobj-detalhes-nfe-text-bold\">Emissão</span><br><div class=row><div class=col-md-3><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Processo</span><br><span ng-bind=::vm.dfe.idDest></span></p></div><div class=col-md-3><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Versão do Processo</span><br><span ng-bind=::vm.dfe.dest.indFinal></span></p></div><div class=col-md-3><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Tipo de emissão</span><br><span ng-bind=::vm.dfe.tpEmis></span></p></div><div class=col-md-3><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Finalidade</span><br><span ng-bind=::vm.dfe.finNfe></span></p></div></div><div class=row><div class=col-md-3><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Natureza da Operação</span><br><span ng-bind=::vm.dfe.natOp></span></p></div><div class=col-md-2><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Tipo de Operação</span><br><span ng-bind=::vm.dfe.tpNfe></span></p></div><div class=col-md-3><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Forma de Pagamento</span><br><span ng-bind=::vm.dfe.indPag></span></p></div><div class=col-md-4><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Digest Value</span><br><span ng-bind=::vm.dfe.digVal></span></p></div></div></oobj-panel>");
  $templateCache.put("oobj-grid/grid-columns/options/detalhes-nfe/tab-produtos-servicos.html",
    "<oobj-painel><br><div class=row><div class=col-md-7><p class=\"timeline-text wrapper text-center\"><span class=oobj-detalhes-nfe-text-bold>Descrição</span></p></div><div class=col-md-1><p class=\"timeline-text wrapper text-center\"><span class=oobj-detalhes-nfe-text-bold>Quantidade</span></p></div><div class=col-md-2><p class=\"timeline-text wrapper text-center\"><span class=oobj-detalhes-nfe-text-bold>Unidade<br>Comercial</span></p></div><div class=col-md-1><p class=\"timeline-text wrapper text-center\"><span class=oobj-detalhes-nfe-text-bold>Valor</span></p></div></div><uib-accordion close-others=false><uib-accordion-group ng-repeat=\"produtos in vm.dfe.resumoProdutos\" is-open=status.open ng-click=getDetalhesProduto($index) class=panel-detalhes-produto><uib-accordion-heading><div class=col-md-2><div class=col-md-6><i class=glyphicon ng-class=\"{'glyphicon-chevron-down': status.open, 'glyphicon-chevron-right': !status.open}\"></i></div><div class=col-md-6><p class=timeline-text><span ng-bind=$index+1></span></p></div></div><div class=col-md-5><p class=timeline-text><span ng-bind=::produtos.descricao></span></p></div><div class=col-md-2><p class=timeline-text><span ng-bind=::produtos.quantidadeComercial></span></p></div><div class=col-md-1><p class=timeline-text><span ng-bind=::produtos.unidadeComercial></span></p></div><div class=col-md-2><p class=timeline-text><span ng-bind=\"::produtos.valor | currency:'R$ '\"></span></p></div></uib-accordion-heading><div class=row><ng-include src=\"'js/directives/oobj-grid/grid-columns/options/detalhes-nfe/tab-detalhes-produtos-servicos.html'\"></ng-include></div></uib-accordion-group></uib-accordion></oobj-painel>");
  $templateCache.put("oobj-grid/grid-columns/options/detalhes-nfe/tab-totais.html",
    "<oobj-panel><span class=\"text-primary oobj-detalhes-nfe-text-bold\">Totais</span><br><div class=row><div class=col-md-3><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Base de Cálculo ICMS</span><br><span ng-bind=\"::vm.dfe.tot.vBC | currency:'R$ '\"></span></p></div><div class=col-md-3><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Valor do ICMS</span><br><span ng-bind=\"::vm.dfe.tot.vICMS | currency:'R$ '\"></span></p></div><div class=col-md-3><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Valor do ICMS Desonerado</span><br><span ng-bind=\"::vm.dfe.tot.vICMSDeson | currency:'R$ '\"></span></p></div><div class=col-md-3><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Base de Cálculo ICMS ST</span><br><span ng-bind=\"::vm.dfe.tot.vBCST | currency:'R$ '\"></span></p></div></div><div class=row><div class=col-md-3><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Valor ICMS Substituição</span><br><span ng-bind=\"::vm.dfe.tot.vST | currency:'R$ '\"></span></p></div><div class=col-md-3><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Valor Total dos Produtos</span><br><span ng-bind=\"::vm.dfe.tot.vProd | currency:'R$ '\"></span></p></div><div class=col-md-3><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Valor do Frete</span><br><span ng-bind=\"::vm.dfe.tot.vFrete | currency:'R$ '\"></span></p></div><div class=col-md-3><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Valor do Seguro</span><br><span ng-bind=\"::vm.dfe.tot.vSeg | currency:'R$ '\"></span></p></div></div><div class=row><div class=col-md-3><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Outras Despesas Acessórias</span><br><span ng-bind=\"::vm.dfe.tot.vOutro | currency:'R$ '\"></span></p></div><div class=col-md-3><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Valor Total do IPI</span><br><span ng-bind=\"::vm.dfe.tot.vIPI | currency:'R$ '\"></span></p></div><div class=col-md-3><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Valor Total da NF-e</span><br><span ng-bind=\"::vm.dfe.tot.vNF | currency:'R$ '\"></span></p></div><div class=col-md-3><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Valor Total dos Desconstos</span><br><span ng-bind=\"::vm.dfe.tot.vDesc | currency:'R$ '\"></span></p></div></div><div class=row><div class=col-md-3><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Valor Total do II</span><br><span ng-bind=\"::vm.dfe.tot.vII | currency:'R$ '\"></span></p></div><div class=col-md-3><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Valor do PIS</span><br><span ng-bind=\"::vm.dfe.tot.vPIS | currency:'R$ '\"></span></p></div><div class=col-md-3><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Valor da COFINS</span><br><span ng-bind=\"::vm.dfe.tot.vCOFINS | currency:'R$ '\"></span></p></div><div class=col-md-3><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Valor Aproximado dos Tributos</span><br><span ng-bind=\"::vm.dfe.tot.vTotTrib | currency:'R$ '\"></span></p></div></div><div class=row><div class=col-md-3><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Valor Total ICMS FCP</span><br><span ng-bind=\"::vm.dfe.tot.vFCPUFDest | currency:'R$ '\"></span></p></div><div class=col-md-5><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Valor Total do ICMS Interestadual UF Destino</span><br><span ng-bind=\"::vm.dfe.tot.vICMSUFDest | currency:'R$ '\"></span></p></div><div class=col-md-4><p class=timeline-text><span class=oobj-detalhes-nfe-text-bold>Valor Total do ICMS Interestadual UF Rem</span><br><span ng-bind=\"::vm.dfe.tot.vICMSUFRemet | currency:'R$ '\"></span></p></div></div></oobj-panel>");
  $templateCache.put("oobj-grid/grid-columns/options/eventos-vinculados/eventos-vinculados.modal.html",
    "<div class=modal-content><div class=modal-header><button type=button class=close ng-click=::vm.cancel()>&times;</button><div class=\"row center\"><h4><span class=oobj-options-column-title>Eventos Vinculados</span> <i uib-tooltip=\"\" tooltip-placement=left class=\"fa fa-info-circle icon-info-medium-center\"></i></h4></div></div><div class=modal-body><div class=row><div class=row><div class=col-md-4><p class=oobj-options-column-line-height><span class=text-muted>Número - Série</span><br><span class=text-primary ng-bind-html=\"::(vm.dfe.numeroSerieInfo.numero +\n" +
    "                                ' - ' + vm.dfe.numeroSerieInfo.serie)\"></span></p></div><div class=col-md-8><p class=oobj-options-column-line-height><span class=text-muted>Chave de Acesso</span><br><span class=text-primary ng-bind=::vm.dfe.chaveAcesso></span></p></div></div><div class=row><div class=col-md-4><p class=oobj-options-column-line-height><span class=text-muted>Emitente</span><br><span class=text-primary ng-bind=::vm.dfe.emitenteInfo.razaoSocial.toUpperCase()></span> <span class=text-primary ng-bind=::vm.dfe.emitenteInfo.cnpj></span></p></div><div class=col-md-4><p class=oobj-options-column-line-height><span class=text-muted>Destinatário</span><br><span class=text-primary ng-bind=::vm.dfe.destinatarioInfo.razaoSocial.toUpperCase()></span> <span class=text-primary ng-bind=::vm.dfe.destinatarioInfo.cnpj></span></p></div><div class=col-md-4><p class=oobj-options-column-line-height><span class=text-muted>Transportador</span><br><span class=text-primary ng-bind=::vm.dfe.transportadorInfo.razaoSocial.toUpperCase()></span> <span class=text-primary ng-bind=::vm.dfe.transportadorInfo.cnpj></span></p></div></div><hr><div class=row><oobj-input-container label=\"Exibir eventos\" colspan=col-md-12><oobj-checkbox inline=true ng-model=vm.deveExibirEventosEmitente label=Emitente></oobj-checkbox><oobj-checkbox inline=true ng-model=vm.deveExibirEventosDestinatario label=Destinatário></oobj-checkbox><oobj-checkbox inline=true ng-model=vm.deveExibirEventosSefaz label=Sefaz></oobj-checkbox></oobj-input-container></div><hr><div ng-if=vm.deveExibirEventosEmitente ng-repeat=\"evento in vm.eventosEmitente track by $index\"><div class=\"row {{ evento.vigente === false ? 'text-muted' : '' }}\"><div class=col-md-1><button class=\"btn btn-circle pull-right\" ng-class=::evento.type><i class=fa ng-class=::evento.icon></i></button></div><div class=\"col-md-3 oobj-options-column-line-height\"><span ng-bind=::evento.autor class=oobj-options-column-text-12px></span><br><strong ng-bind-html=::evento.tipo class=oobj-options-column-text-15px></strong></div><div class=\"col-md-3 oobj-options-column-line-height oobj-options-column-text-12px\"><b>Enviado às</b> <span ng-bind=\"::evento.dataHoraEvento | date: 'dd/MM/yyyy HH:mm:ss'\"></span><br><b>Registrado às</b> <span ng-bind=\"::evento.dataHoraRegistro | date: 'dd/MM/yyyy HH:mm:ss'\"></span><br><b>Protocolo:</b> <span ng-bind=::evento.protocolo></span></div><div class=col-md-4><div class=\"oobj-options-column-line-height oobj-options-column-text-12px\" ng-repeat=\"(key, value) in ::evento.det\"><strong ng-bind-html=::key></strong>: <span ng-bind-html=::value></span></div></div><div class=col-md-1><div class=row><i class=\"fa fa-file-pdf-o fa-2x col-md-6 oobj-options-column-cursor oobj-options-column-eventos-actions-padding\" ng-click=::vm.downloadPDF() uib-tooltip=\"Baixar PDF\" ng-hide=\"evento.vigente === false || evento.pdf !== true\"></i> <i class=\"fa fa-file-code-o fa-2x col-md-6 oobj-options-column-cursor oobj-options-column-eventos-actions-padding {{ evento.pdf !== true ? 'pull-right' : '' }}\" ng-click=::vm.downloadXML() uib-tooltip=\"Baixar XML\" ng-hide=\"evento.vigente === false\"></i></div></div></div><hr ng-show=vm.deveExibirEventosEmitente class=\"oobj-options-column-eventos-hr\"></div><div ng-if=vm.deveExibirEventosDestinatario ng-repeat=\"evento in vm.eventosDestinatario track by $index\"><div class=row><div class=col-md-1><button class=\"btn btn-circle pull-right\" ng-class=::evento.type><i class=fa ng-class=::evento.icon></i></button></div><div class=\"col-md-3 oobj-options-column-line-height\"><span ng-bind=::evento.autor class=oobj-options-column-text-12px></span><br><strong ng-bind-html=::evento.tipo class=oobj-options-column-text-15px></strong></div><div class=\"col-md-3 oobj-options-column-line-height oobj-options-column-text-12px\"><b>Enviado às</b> <span ng-bind=\"::evento.dataHoraEvento | date: 'dd/MM/yyyy HH:mm:ss'\"></span><br><b>Registrado às</b> <span ng-bind=\"::evento.dataHoraRegistro | date: 'dd/MM/yyyy HH:mm:ss'\"></span><br><b>Protocolo:</b> <span ng-bind=::evento.protocolo></span></div><div class=col-md-4><div class=\"oobj-options-column-line-height oobj-options-column-text-12px\" ng-repeat=\"(key, value) in ::evento.det\"><strong ng-bind-html=::key></strong>: <span ng-bind-html=::value></span></div></div><div class=col-md-1><div class=row><i class=\"fa fa-file-code-o fa-2x col-md-6 pull-right oobj-options-column-cursor oobj-options-column-eventos-actions-padding\" ng-click=::vm.downloadXML() uib-tooltip=\"Baixar XML\" ng-hide=\"evento.vigente === false\"></i></div></div></div><hr ng-show=vm.deveExibirEventosDestinatario class=\"oobj-options-column-eventos-hr\"></div><div ng-if=vm.deveExibirEventosSefaz ng-repeat=\"evento in vm.eventosSefaz track by $index\"><div class=row><div class=col-md-1><button class=\"btn btn-circle pull-right\" ng-class=::evento.type><i class=fa ng-class=::evento.icon></i></button></div><div class=\"col-md-3 oobj-options-column-line-height\"><span ng-bind=::evento.autor class=oobj-options-column-text-12px></span><br><strong ng-bind-html=::evento.tipo class=oobj-options-column-text-15px></strong></div><div class=\"col-md-3 oobj-options-column-line-height oobj-options-column-text-12px\"><b>Enviado às</b> <span ng-bind=\"::evento.dataHoraEvento | date: 'dd/MM/yyyy HH:mm:ss'\"></span><br><b>Registrado às</b> <span ng-bind=\"::evento.dataHoraRegistro | date: 'dd/MM/yyyy HH:mm:ss'\"></span><br><b>Protocolo:</b> <span ng-bind=::evento.protocolo></span></div><div class=col-md-4><div class=\"oobj-options-column-line-height oobj-options-column-text-12px\" ng-repeat=\"(key, value) in ::evento.det\"><strong ng-bind-html=::key></strong>: <span ng-bind-html=::value></span></div></div><div class=col-md-1><div class=row><i class=\"fa fa-file-code-o fa-2x col-md-6 pull-right oobj-options-column-cursor oobj-options-column-eventos-actions-padding\" ng-click=::vm.downloadXML() uib-tooltip=\"Baixar XML\" ng-hide=\"evento.vigente === false\"></i></div></div></div><hr ng-show=vm.deveExibirEventosSefaz class=\"oobj-options-column-eventos-hr\"></div></div></div><div class=\"row center modal-footer\"></div></div>");
  $templateCache.put("oobj-grid/grid-columns/options/historico-entrega/historico-entrega.modal.html",
    "<div class=modal-content><div class=modal-header><button type=button class=close ng-click=vm.cancel()>&times;</button><div class=\"row center\"><h4><span ng-bind=vm.title></span></h4></div></div><div class=modal-body><div class=row><div class=row><div class=col-md-4><p class=oobj-options-column-line-height><span class=text-muted>Número - Série</span><br><span class=text-primary ng-bind-html=\"::(vm.dfe.numeroSerieInfo.numero +\n" +
    "                                ' - ' + vm.dfe.numeroSerieInfo.serie)\"></span></p></div><div class=col-md-8><p class=oobj-options-column-line-height><span class=text-muted>Chave de Acesso</span><br><span class=text-primary ng-bind=::vm.dfe.chaveAcesso></span></p></div></div><div class=row><div class=col-md-4><p class=oobj-options-column-line-height><span class=text-muted>Emitente</span><br><span class=text-primary ng-bind=::vm.dfe.emitenteInfo.razaoSocial.toUpperCase()></span> <span class=text-primary ng-bind=::vm.dfe.emitenteInfo.cnpj></span></p></div><div class=col-md-4><p class=oobj-options-column-line-height><span class=text-muted>Destinatário</span><br><span class=text-primary ng-bind=::vm.dfe.destinatarioInfo.razaoSocial.toUpperCase()></span> <span class=text-primary ng-bind=::vm.dfe.destinatarioInfo.cnpj></span></p></div><div class=col-md-4><p class=oobj-options-column-line-height><span class=text-muted>Transportador</span><br><span class=text-primary ng-bind=::vm.dfe.transportadorInfo.razaoSocial.toUpperCase()></span> <span class=text-primary ng-bind=::vm.dfe.transportadorInfo.cnpj></span></p></div></div><hr><!--<div class=\"row\">--><!--<oobj-grid colspan=\"col-md-12\" grid-options=\"gridOptions\"></oobj-grid>--><!--</div>--></div></div><div class=\"row center modal-footer\"><div class=\"row center\"><oobj-button label=REENTREGAR btn-class=\"btn btn-primary\"></oobj-button></div></div></div>");
  $templateCache.put("oobj-grid/grid-columns/options/observacoes/observacoes.modal.html",
    "<div class=modal-content><div class=modal-header><button type=button class=close ng-click=::vm.cancelar()>&times;</button><div class=\"row center\"><h4><span class=oobj-options-column-title>Observações</span> <i uib-tooltip=\"\" tooltip-placement=left class=\"fa fa-info-circle icon-info-medium-center\"></i></h4></div></div><div class=modal-body><div class=row><div class=row><div class=col-md-4><p class=oobj-options-column-line-height><span class=text-muted>Número - Série</span><br><span class=text-primary ng-bind-html=\"::(vm.dfe.numeroSerieInfo.numero +\n" +
    "                                ' - ' + vm.dfe.numeroSerieInfo.serie)\"></span></p></div><div class=col-md-8><p class=oobj-options-column-line-height><span class=text-muted>Chave de Acesso</span><br><span class=text-primary ng-bind=::vm.dfe.chaveAcesso></span></p></div></div><div class=row><div class=col-md-4><p class=oobj-options-column-line-height><span class=text-muted>Emitente</span><br><span class=text-primary ng-bind=::vm.dfe.emitenteInfo.razaoSocial.toUpperCase()></span> <span class=text-primary ng-bind=::vm.dfe.emitenteInfo.cnpj></span></p></div><div class=col-md-4><p class=oobj-options-column-line-height><span class=text-muted>Destinatário</span><br><span class=text-primary ng-bind=::vm.dfe.destinatarioInfo.razaoSocial.toUpperCase()></span> <span class=text-primary ng-bind=::vm.dfe.destinatarioInfo.cnpj></span></p></div><div class=col-md-4><p class=oobj-options-column-line-height><span class=text-muted>Transportador</span><br><span class=text-primary ng-bind=::vm.dfe.transportadorInfo.razaoSocial.toUpperCase()></span> <span class=text-primary ng-bind=::vm.dfe.transportadorInfo.cnpj></span></p></div></div><hr><div class=row><oobj-textarea ng-model=vm.observacao.comentario rows=3 title=Observação label=Observação colspan=col-md-12 ng-readonly=!vm.habilitarEdicao></oobj-textarea><div class=\"col-md-12 text-muted oobj-options-column-text-12px\" ng-hide=vm.habilitarEdicao>Alterado em <span ng-bind=\"vm.observacao.data | date: 'dd/MM/yyyy'\"></span> às <span ng-bind=\"vm.observacao.data | date: 'HH:mm:ss'\"></span> pelo usuário <i ng-bind=vm.observacao.usuario></i></div></div></div></div><div class=\"row center modal-footer\" ng-show=vm.habilitarEdicao><oobj-button ng-click=::vm.cancelarEdicao() label=Cancelar btn-class=\"oobj-options-column-btn-gray oobj-options-column-btn-100px\"></oobj-button><oobj-button ng-click=::vm.salvar() label=Salvar btn-class=\"btn-primary oobj-options-column-btn-100px\"></oobj-button></div><div class=\"row center modal-footer\" ng-hide=vm.habilitarEdicao><p class=oobj-options-column-line-height><span ng-bind=vm.resultado class=text-success ng-show=vm.resultado></span></p><oobj-button ng-click=::vm.cancelar() label=Fechar btn-class=\"oobj-options-column-btn-gray oobj-options-column-btn-100px\"></oobj-button><oobj-button ng-click=::vm.editar() label=Editar btn-class=\"btn-primary oobj-options-column-btn-100px\" ng-hide=vm.habilitarEdicao></oobj-button></div></div>");
  $templateCache.put("oobj-grid/grid-columns/options/oobj-column-options-cfe.html",
    "<div class=ui-grid-cell-contents><i class=\"fa fa-map-o oobj-options-column-cursor\" uib-tooltip=\"Ciclo de Vida da CF-e\" tooltip-placement=left data-toggle=modal data-target=#oobjModal></i>&nbsp;&nbsp; <i class=\"fa fa-eye oobj-options-column-cursor\" uib-tooltip=\"Detalhes da CF-e\" tooltip-placement=left ng-click=grid.appScope.openModalDetalhes(row)></i>&nbsp;&nbsp; <i class=\"fa fa-comments-o oobj-options-column-cursor\" uib-tooltip=\"Eventos Vinculados à CF-e\" tooltip-placement=left ng-click=grid.appScope.openModalEventosVinculados(row)></i><br><i class=\"fa fa-cloud-upload oobj-options-column-cursor\" uib-tooltip=\"Envio para o Noov\" tooltip-placement=left></i>&nbsp;&nbsp; <i class=\"fa fa-paper-plane-o oobj-options-column-cursor\" uib-tooltip=\"Histórico de Entrega da CF-e\" tooltip-placement=left ng-click=grid.appScope.openModalHistoricoEntrega(row)></i>&nbsp;&nbsp; <i class=\"fa fa-commenting-o oobj-options-column-cursor\" uib-tooltip=\"Observações da CF-e\" tooltip-placement=left ng-click=grid.appScope.openModalObservacoes(row)></i>&nbsp;&nbsp;</div>");
  $templateCache.put("oobj-grid/grid-columns/options/oobj-column-options-nfe.html",
    "<div class=oobj-grid-options-options-column><i class=\"fa fa-map-o oobj-options-column-cursor\" uib-tooltip=\"Ciclo de Vida da NF-e\" tooltip-placement=left data-toggle=modal data-target=#oobjModal></i>&nbsp;&nbsp; <i class=\"fa fa-eye oobj-options-column-cursor\" uib-tooltip=\"Detalhes da NF-e\" tooltip-placement=left ng-click=grid.appScope.openModalDetalhesNFe(row)></i>&nbsp;&nbsp; <i class=\"fa fa-comments-o oobj-options-column-cursor\" uib-tooltip=\"Eventos Vinculados à NF-e\" tooltip-placement=left ng-click=grid.appScope.openModalEventosVinculados(row)></i><br><i class=\"fa fa-cloud-upload oobj-options-column-cursor\" uib-tooltip=\"Envio para o Noov\" tooltip-placement=left></i>&nbsp;&nbsp; <i class=\"fa fa-paper-plane-o oobj-options-column-cursor\" uib-tooltip=\"Histórico de Entrega da NF-e\" tooltip-placement=left ng-click=grid.appScope.openModalHistoricoEntrega(row)></i>&nbsp;&nbsp; <i class=\"fa fa-commenting-o oobj-options-column-cursor\" uib-tooltip=\"Observações da NF-e\" tooltip-placement=left ng-click=grid.appScope.openModalObservacoes(row)></i>&nbsp;&nbsp;</div>");
  $templateCache.put("oobj-grid/oobj-grid.html",
    "<div class={{::colspan}}><div class=table-responsive><div ui-grid=gridOptions ui-grid-selection ui-grid-pagination ui-grid-auto-resize ui-grid-move-columns class=\"table oobj-grid-options\" ng-cloak><div class=grid-msg-overlay ng-hide=!loading><div class=msg><span class=loading><div class=loader><div class=\"loader-inner ball-spin-fade-loader\"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div><br>Carregando...</span></div></div><div class=grid-msg-overlay ng-hide=\"loading || gridOptions.data.length\"><div class=msg><span class=noresult><i class=\"fa fa-file-o noresult-icon\"></i><br>Nenhum item encontrado</span></div></div></div></div></div>");
  $templateCache.put("oobj-hist-entrega-modal/oobj-hist-entrega-modal.html",
    "<oobj-modal title=\"Histórico de entrega da NF-e\" label-btn-open=\"Open modal\" size=lg show-btn-close=false show-btn-open=false id-modal=oobjModalHistEntrega><div class=row><div class=col-md-4><p class=timeline-text><span class=text-muted>Número - Série</span><br><span class=text-primary ng-bind=\"dfe.numero + ' - ' + dfe.serie\"></span></p></div><div class=col-md-8><p class=timeline-text><span class=text-muted>Chave de Acesso</span><br><span class=text-primary ng-bind=dfe.chaveAcesso></span></p></div></div><div class=row><div class=col-md-4><p class=timeline-text><span class=text-muted>Emitente</span><br><span class=text-primary ng-bind=dfe.emit.razaoSocial.toUpperCase()></span> <span class=text-primary ng-bind=dfe.emit.cnpj></span></p></div><div class=col-md-4><p class=timeline-text><span class=text-muted>Destinatário</span><br><span class=text-primary ng-bind=dfe.dest.razaoSocial.toUpperCase()></span> <span class=text-primary ng-bind=dfe.dest.cnpj></span></p></div><div class=col-md-4><p class=timeline-text><span class=text-muted>Transportador</span><br><span class=text-primary ng-bind=dfe.transp.razaoSocial.toUpperCase()></span> <span class=text-primary ng-bind=dfe.transp.cnpj></span></p></div></div><hr><div class=row><oobj-grid colspan=col-md-12 grid-options=gridOptions></oobj-grid></div></oobj-modal>");
  $templateCache.put("oobj-input-container/oobj-input-container.html",
    "<div ng-class=::colspan class=form-group><label class=control-label ng-if=\"::(showLabel != false && label != undefined)\"><strong><span ng-bind=::label></span></strong> <span class=text-danger ng-show=::ngRequired>*</span></label><div ng-transclude></div></div>");
  $templateCache.put("oobj-input-tags/oobj-input-tags.html",
    "<div ng-class=::colspan class=form-group><label class=control-label ng-if=\"::(showLabel !== false && label !== undefined)\"><strong><span ng-bind=::label></span></strong> <span class=text-danger ng-show=::ngRequired>*</span></label><div class=input-group><tags-input ng-model=ngModel placeholder={{::placeholder}} add-on-enter={{::addOnEnter}} add-on-space={{::addOnSpace}} add-on-comma={{::addOnComma}} add-on-blur={{::addOnBlur}} add-on-paste={{::addOnPaste}} allowed-tags-pattern={{::tagsPattern}} replace-spaces-with-dashes=false min-length={{::minlength}} max-length={{::maxlength}} ng-disabled=::ngDisabled ng-readonly=::ngReadonly ng-change=::ngChange($event) ng-blur=::ngBlur($event)><auto-complete source=::getTags($query) highlight-matched-text=false min-length={{::minlength}} load-on-down-arrow=true load-on-empty={{::loadOnEmpty}} load-on-focus={{::loadOnFocus}} select-first-match=true ng-if=::provider></auto-complete></tags-input><div class=input-group-btn><button type=button ng-click=::limpar() class=\"btn btn-default oobj-group-input-btn oobj-input-tags-btn-limpar\"><i class=\"fa fa-times\"></i></button></div></div></div>");
  $templateCache.put("oobj-input-text/oobj-input-text.html",
    "<div ng-class=::colspan class=\"form-group form-group-{{::inputSize}}\"><label class=control-label ng-if=\"::(showLabel != false && label != undefined)\" for={{::id}}><strong><span ng-bind=::label></span></strong> <span class=text-danger ng-show=::ngRequired>*</span></label><div class=input-group><input id={{::id}} type={{::type}} class=form-control ng-model=ngModel ng-disabled=ngDisabled ng-required=::ngRequired ng-change=::onChange($event) ng-blur=::onBlur($event) ng-keyup=::onKeyup($event) ng-keydown=::onKeydown($event) ng-readonly=::ngReadonly placeholder={{::placeholder}} maxlength={{::maxlength}} max={{::max}} min=\"{{::min}}\"><div class=input-group-btn><button type=button ng-click=::limpar() class=\"btn btn-default btn-{{::inputSize}} oobj-group-input-btn\"><i class=\"fa fa-times\"></i></button></div></div></div>");
  $templateCache.put("oobj-login/oobj-login.html",
    "<div class=\"container oobj-login\"><div class=row><div class=\"col-sm-6 col-sm-offset-3\"><div class=\"panel panel-default\"><div class=panel-body><form role=form><fieldset><div class=row><div class=center-block><img class=profile-img src=\"{{::logo}}\"></div></div><div class=row><div class=\"col-sm-12 col-md-10 col-md-offset-1\"><div class=form-group><div class=input-group><span class=input-group-addon><i class=\"glyphicon glyphicon-user\"></i></span> <input class=form-control placeholder=Usuário ng-model=username required autofocus></div></div><div class=form-group><div class=input-group><span class=input-group-addon><i class=\"glyphicon glyphicon-lock\"></i></span> <input class=form-control placeholder=Senha ng-model=password type=password required></div></div><div class=form-group><input type=submit class=\"btn btn-lg btn-primary btn-block login-btn\" value=\"{{::labelBtnLogin || 'Entrar'}}\" ng-click=::login()></div><div class=\"form-group login-control-btns\"><a href=javascript:; ng-click=::forgotPassword()>{{::labelForgotPassword || 'Esqueci minha senha!'}}</a></div><div class=\"form-group login-control-btns\"><a href=javascript:; ng-click=::newUser()>{{::labelNewUser || 'Cadastre-se'}}</a></div></div></div></fieldset></form></div></div></div></div></div>");
  $templateCache.put("oobj-modal/oobj-modal.html",
    "<span><oobj-button colspan={{::colspan}} data-toggle=modal data-target=#oobjModal ng-show=showBtnOpen label={{::labelBtnOpen}} icon=fa-info btn-class={{classBtnOpen}}></oobj-button><div id={{::idModal}} class=\"modal fade\" role=dialog><div class=modal-dialog ng-class=\"::(size === 'lg' ? 'modal-lg' : size === 'sm' ? 'modal-sm' : '')\"><div class=modal-content><div class=modal-header><button type=button class=close data-dismiss=modal>&times;</button><h4 class=modal-title ng-show=\"::(title != undefined)\"><span ng-bind=::title></span></h4></div><div class=modal-body><div ng-transclude></div></div><div class=\"row center modal-footer\"><oobj-button ng-show=::showBtnClose data-dismiss=modal label={{::labelBtnClose}} btn-class={{::classBtnClose}}></oobj-button><oobj-button ng-show=::showBtnAction ng-click=::onClickBtnAction() data-dismiss=modal label={{::labelBtnAction}} btn-class={{::classBtnAction}}></oobj-button></div></div></div></div></span>");
  $templateCache.put("oobj-multiselect/oobj-multiselect.html",
    "<div ng-class=::colspan class=\"form-group form-group-{{::inputSize}}\"><label class=control-label ng-show=\"::(showLabel != false && label != undefined)\"><strong><span ng-bind=::label></span></strong> <span class=text-danger ng-show=::ngRequired>*</span></label><div class=input-group><select id={{::id}} class=\"selectpicker form-control\" ng-model=ngModel ng-required=ngRequired data-width=auto title=\"\" multiple ng-cloak></select></div></div>");
  $templateCache.put("oobj-newselect/oobj-newselect.html",
    "<div class=\"btn-group oobj-select newselect form-control\" ng-class=\"{'show-tick' : multi}\"><button type=button class=\"btn dropdown-toggle btn-default\" data-toggle=dropdown><span class=\"filter-option pull-left\">{{valorApresentacaoSelecionados}}</span>&nbsp; <span class=bs-caret><span class=caret></span></span></button><div class=\"dropdown-menu open menu\" style=\"overflow: hidden; min-height: 0px\"><div style=\"margin: 4px\" ng-show=search><input ng-model=searchValue class=form-control></div><ul class=\"dropdown-menu inner\" role=menu style=\"max-height: 345px; overflow-y: auto; min-height: 0px\"><li ng-repeat=\"opcao in options | filter : {$ : searchValue} track by opcao[trackByProp] \" ng-class=\"{'selected' : isSelected(opcao), 'manualSelect' : $index === indexAtualNavegacaoTeclado}\"><a ng-click=selectItem(opcao)><span class=text>{{opcao[valueProp]}}</span><span class=\"glyphicon glyphicon-ok check-mark\"></span></a></li></ul></div></div>");
  $templateCache.put("oobj-notification-modal/oobj-notification.modal.html",
    "<div class=modal-content><div class=modal-header><button type=button class=close ng-click=::vm.close()>&times;</button><div class=\"row center\"><i class=\"fa fa-5x\" ng-class=::vm.iconClass></i><h4><span class=oobj-notification-modal-title ng-bind-html=::vm.title></span> <i ng-show=::vm.tooltip uib-tooltip={{::vm.tooltip}} tooltip-placement=left class=\"fa fa-info-circle icon-info-medium-center\"></i></h4></div></div><div class=modal-body><div class=\"row center\"><p ng-bind-html=::vm.message></p></div></div><div class=\"row center modal-footer\"><oobj-button label=OK ng-click=::vm.ok() btn-class={{::vm.btnClass}}></oobj-button></div></div>");
  $templateCache.put("oobj-panel/oobj-panel.html",
    "<div ng-class=::colspan><div class=\"panel oobj-panel\" ng-class=::panelClass><div class=panel-heading ng-if=\"::(title != undefined)\"><span ng-bind=::title></span></div><div class=panel-body><div class=container-fluid><div class=row><div ng-transclude></div></div></div></div><div class=panel-footer ng-if=\"::(footer != undefined)\"><span ng-bind=::footer></span></div></div></div>");
  $templateCache.put("oobj-radio/oobj-radio.html",
    "<div class=\"radio c-radio c-radio-nofont\" ng-class=::radioClass><label style=\"{{::(labelBold === true ? 'font-weight: bold;' : '')}}\"><input type=radio id={{::id}} ng-value=::optionValue name={{::optionName}} ng-model=ngModel> <span class=\"fa fa-circle\"></span> {{::label}}</label></div>");
  $templateCache.put("oobj-search/oobj-search.html",
    "<oobj-container title={{::title}}><oobj-panel colspan=col-lg-12><div class=container-fluid><div class=\"row oobj-search-container\"><div class=form-group><ng-include src=\"'formActions'\" ng-if=showBtnOnTop></ng-include><div class=container-fluid><div class=row><div ng-transclude></div></div></div><ng-include src=\"'formActions'\" ng-if=showBtnOnBottom></ng-include></div></div></div></oobj-panel><oobj-panel colspan=col-lg-12><ng-include src=\"'additionalContent'\"></ng-include><div class=row><oobj-grid colspan=col-md-12 init-grid=vm.initGrid pesquisar=vm.pesquisar></oobj-grid></div></oobj-panel></oobj-container><script type=text/ng-template id=formActions><div class=\"row\">\n" +
    "        <div class=\"col-md-12 text-right\">\n" +
    "            <oobj-button label=\"Limpar\" btn-class=\"btn-success\" icon=\"fa-eraser\" ng-click=\"::vm.limpar()\"\n" +
    "                         ng-if=\"::showBtnLimpar\">\n" +
    "            </oobj-button>\n" +
    "\n" +
    "            <oobj-button label=\"Pesquisa Avançada\" btn-class=\"btn-default\" ng-click=\"::vm.pesquisaAvancada()\"\n" +
    "                         icon=\"{{::(showBtnOnTop ? 'fa-search-minus': 'fa-search-plus')}}\"\n" +
    "                         ng-if=\"::showBtnPesquisaAvancada\">\n" +
    "            </oobj-button>\n" +
    "\n" +
    "            <oobj-button label=\"Pesquisar\" btn-class=\"btn-primary\" icon=\"fa-search\" padding-right=\"0px\"\n" +
    "                         ng-click=\"::vm.gridScope.pesquisar(vm.gridScope.callbackDefault)\" ng-if=\"::showBtnPesquisar\">\n" +
    "            </oobj-button>\n" +
    "        </div>\n" +
    "    </div></script>");
  $templateCache.put("oobj-select/oobj-select.html",
    "<div ng-class=::colspan class=\"form-group form-group-{{::inputSize}}\"><label class=control-label ng-show=\"::(showLabel != false && label != undefined)\" for={{::id}}><strong><span ng-bind=::label></span></strong> <span class=text-danger ng-show=::ngRequired>*</span></label><select id={{::id}} class=\"selectpicker form-control\" ng-model=ngModel ng-required=::ngRequired title=\" \" data-selected-text-format=\"count > 3\" multiple ng-cloak></select></div>");
  $templateCache.put("oobj-sidebar/oobj-sidebar.html",
    "<div class=\"navbar-default sidebar\" role=navigation><div class=\"sidebar-nav navbar-collapse\"><ul class=\"nav in\" id=side-menu><li ng-class=\"{active: collapseVar == $index}\" ng-repeat=\"categoria in ::provider track by $index\"><a href=\"\" ng-click=::check($index) ng-if=\"::(categoria.itens != undefined)\"><i class=fa ng-class=::categoria.icon></i> <span ng-bind=::categoria.label></span> <span class=\"fa plus\" ng-if=\"::(categoria.itens != undefined)\"></span></a> <a href=\"\" ng-click=::check($index) ng-if=\"::(categoria.itens == undefined)\" ui-sref={{::categoria.sref}}><i class=fa ng-class=::categoria.icon></i> <span ng-bind=::categoria.label></span> <span class=\"fa plus\" ng-if=\"::(categoria.itens != undefined)\"></span></a><ul class=\"nav nav-second-level\" uib-collapse=\"collapseVar != $index\" ng-if=\"::(categoria.itens != undefined)\"><li ui-sref-active=active ng-repeat=\"item in ::categoria.itens track by $index\"><a ui-sref={{::item.sref}}><span ng-class=::item.icon ng-if=\"::(item.icon != undefined)\"></span> <span ng-bind=::item.label></span></a></li></ul><!-- /.nav-second-level --></li></ul></div><!-- /.sidebar-collapse --></div>");
  $templateCache.put("oobj-stats/oobj-stats.html",
    "<div class=\"col-lg-3 col-md-6\"><div class=\"panel panel-{{::colour}}\"><div class=panel-heading><div class=row><div class=col-xs-3><i class=\"fa fa-{{::type}} fa-5x\"></i></div><div class=\"col-xs-9 text-right\"><div class=huge>{{::number}}</div></div></div><div class=row><div class=\"col-xs-12 text-right\"><div>{{::comments}}</div></div></div></div><a ui-sref=\"{{::(goto === undefined ? '#' : goto)}}\"><div class=panel-footer><span class=pull-right>Ver detalhes</span><div class=clearfix></div></div></a></div></div>");
  $templateCache.put("oobj-textarea/oobj-textarea.html",
    "<div ng-class=::colspan class=\"form-group form-group-{{::inputSize}}\"><label class=control-label ng-if=\"::(showLabel !== false && label !== undefined)\" for={{::id}}><strong><span ng-bind=::label></span></strong> <span class=text-danger ng-show=::ngRequired>*</span> <i uib-tooltip={{tooltipMessage}} tooltip-placement=left class=\"fa fa-info-circle icon-info-medium-center\" ng-if=tooltipMessage></i></label><textarea id={{::id}} class=form-control ng-class=::textareaClass title={{::title}} rows={{::rows}} ng-model=ngModel ng-required=::ngRequired ng-readonly=ngReadonly ng-maxlength=::ngMaxlength ng-minlength=::ngMinlength placeholder={{::placeholder}}>\n" +
    "    </textarea><span class=\"text-muted filled-chars-fontsize pull-right\" ng-hide=show-filled-chars>{{ ngModel.length }} catacteres preenchidos</span></div>");
  $templateCache.put("oobj-timeline-modal/oobj-timeline-modal.html",
    "<oobj-modal title=\"Ciclo de Vida da NFe\" label-btn-open=\"Open modal\" size=lg show-btn-close=false show-btn-open=false><div class=row><div class=col-md-4><p class=timeline-text><span class=text-muted>Número - Série</span><br><span class=text-primary ng-bind=\"dfe.numero + '-' + dfe.serie\"></span></p></div><div class=col-md-8><p class=timeline-text><span class=text-muted>Chave de Acesso</span><br><span class=text-primary ng-bind=dfe.chaveAcesso></span></p></div></div><div class=row><div class=col-md-4><p class=timeline-text><span class=text-muted>Emitente</span><br><span class=text-primary ng-bind=dfe.emit.razaoSocial.toUpperCase()></span> <span class=text-primary ng-bind=dfe.emit.cnpj></span></p></div><div class=col-md-4><p class=timeline-text><span class=text-muted>Destinatário</span><br><span class=text-primary ng-bind=dfe.dest.razaoSocial.toUpperCase()></span> <span class=text-primary ng-bind=dfe.dest.cnpj></span></p></div><div class=col-md-4><p class=timeline-text><span class=text-muted>Transportador</span><br><span class=text-primary ng-bind=dfe.transp.razaoSocial.toUpperCase()></span> <span class=text-primary ng-bind=dfe.transp.cnpj></span></p></div></div><hr><div class=row><div class=\"form-group col-md-12\"><label class=control-label><strong>Exibir</strong></label><br><oobj-radio inline=true label=Todos colspan=4 ng-model=type option-name=type option-value=todos></oobj-radio><oobj-radio inline=true label=Eventos colspan=4 ng-model=type option-name=type option-value=evento></oobj-radio><oobj-radio inline=true label=Ocorrências colspan=4 ng-model=type option-name=type option-value=ocorrencia></oobj-radio></div></div><oobj-timeline provider=items filter-by=type></oobj-timeline><oobj-dfe-actions modelo-documento=\"'55'\"></oobj-dfe-actions></oobj-modal>");
  $templateCache.put("oobj-timeline/oobj-timeline.html",
    "<div class=panel-body ng-class=::colspan><ul class=timeline><li ng-repeat=\"item in items\" ng-class=\"$even ? '' : 'timeline-inverted'\"><div ng-if=::item.badge class=timeline-badge ng-class=::item.timelineStyle><i class=\"fa {{::item.badge}}\"></i></div><div class=timeline-panel><div class=timeline-heading><h5 class=timeline-title ng-bind=::item.title></h5><p class=\"timeline-date text-muted\"><i class=\"fa fa-clock-o\"></i>&nbsp; <span ng-bind=\"::item.date | date:'dd/MM/yyyy hh:mm:ss'\"></span></p></div><div class=timeline-body ng-if=::item.description><p class=timeline-description ng-bind=::item.description></p></div></div></li></ul></div>");
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
        return {
            require: 'ngModel',
            templateUrl: 'js/directives/oobj-autocomplete/oobj-autocomplete.html',
            scope: {
                id: '@?',
                ngModel: '=',
                colspan: '@?',
                ngBlur: '&',
                getItems: '&',
                ngChange: '&',
                itemLabel: '@?',
                itemValue: '@?',
                label: '@?',
                showLabel: '=?',
                ngRequired: '=?',
                ngDisabled: '=?',
                ngReadonly: '=?',
                maxlength: '@?',
                placeholder: '@?',
                toUpper: '=?',
                toLower: '=?',
                // options: lg (large), md (medium), sm (small)
                inputSize: '@?'
            },
            link: link
        };

        function link(scope) {
            if (!scope.inputSize) {
                scope.inputSize = 'sm';
            }

            scope.limpar = function() {
                scope.ngModel = null;
            };
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
        return {
            templateUrl: 'js/directives/oobj-button-dropdown/oobj-button-dropdown.html',
            scope: {
                icon: '@?',
                label: '@',
                provider: '=',
                colspan: '@?',
                btnClass: '@?',
                paddingLeft: '@?',
                paddingRight: '@?'
            },
            compile: compile
        };

        function compile() {
            return {
                pre: function(scope, element) {

                    scope.btnClass = scope.btnClass || 'btn-default';

                    if (scope.paddingRight) {
                        element.css('padding-right', scope.paddingRight);
                    } else {
                        element.css('padding-right', '6px');
                    }

                    if (scope.paddingLeft) {
                        element.css('padding-left', scope.paddingLeft);
                    }
                }
            };
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
        return {
            restrict: 'EA',
            templateUrl: 'js/directives/oobj-button/oobj-button.html',
            scope: {
                label: '@?',
                btnClass: '@?',
                icon: '@?',
                colspan: '@?',
                paddingLeft: '@?',
                paddingRight: '@?'
            },
            compile: compile
        };

        function compile() {
            return {
                pre: function(scope, element) {
                    scope.btnClass = scope.btnClass || 'btn-default';

                    if (!scope.paddingRight) {
                        element.css('padding-right', '6px');
                    } else {
                        element.css('padding-right', scope.paddingRight);
                    }

                    if (scope.paddingLeft) {
                        element.css('padding-left', scope.paddingLeft);
                    }
                }
            };
        }
    }
})();

/**
 * Diretiva de calendário que utiliza ui.bootstrap.datepicker.
 *
 * Created by Leonardo on 25/02/2016.
 */
(function() {
    'use strict';

    angular.module('oobj-directives')
        .directive('oobjCalendar', oobjCalendar);

    /** @ngInject */
    function oobjCalendar() {
        return {
            require: 'ngModel',
            templateUrl: 'js/directives/oobj-calendar/oobj-calendar.html',
            scope: {
                id: '@?',
                label: '@?',
                showLabel: '=?',
                colspan: '@?',
                tooltipMessage: '@?',
                // obrigatório ser um objeto do tipo Date do javascript
                ngModel: '=',
                ngClass: '=?',
                // padrão: dd/MM/yyyy
                pattern: '@?',
                type: '@?'
            },
            link: link
        };

        function link(scope) {
            scope.pattern = scope.pattern || 'dd/MM/yyyy hh:mm';

            // ui-mask utiliza o seguinte padrão:
            //  A Any letter.
            //  9 Any number.
            //  * Any letter or number.
            //  ? Make any part of the mask optional.
            // a regex a seguir muda as letras para o número 9 para seguir esse padrão de mascara
            //scope.mask = scope.pattern.replace(/\w/g, '9');
            scope.type = scope.type || 'text';
            scope.opened = false;

            scope.open = function() {
                scope.opened = !scope.opened;
            };

            scope.dateOptions = {
                showWeeks: false
            };
        }
    }
})();
/**
 * Created by Leonardo on 10/9/2015.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjChartBar', oobjChartBar);

    function oobjChartBar() {
        return {
            require: 'ngModel',
            templateUrl: 'js/directives/oobj-chart/oobj-chart-bar.html',
            scope: {
                id: '@?',
                ngModel: '=',
                chartId: '@?',
                colspan: '@?',
                title: '@?',
                type: '@?'
            }
        };
    }

})();
/**
 * Created by Leonardo on 10/9/2015.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjChartDoughnut', oobjChartDoughnut);

    /** @ngInject */
    function oobjChartDoughnut() {
        return {
            require: 'ngModel',
            restrict: 'EA',
            templateUrl: 'js/directives/oobj-chart/oobj-chart-doughnut.html',
            scope: {
                id: '@?',
                ngModel: '=',
                colspan: '@?',
                title: '@?',
                chartId: '@?'
            }
        };
    }
})();
/**
 * Created by ATILLA on 09/10/2015.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjChartLine', oobjChartLine);

    /** @ngInject */
    function oobjChartLine() {
        return {
            require: 'ngModel',
            restrict: 'EA',
            templateUrl: 'js/directives/oobj-chart/oobj-chart-line.html',
            scope: {
                id: '@?',
                ngModel: '=',
                colspan: '@?',
                title: '@?'
            }
        };
    }
})();
/**
 * Created by Leonardo on 10/9/2015.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjChartPie', oobjChartPie);

    /** @ngInject */
    function oobjChartPie() {
        return {
            require: 'ngModel',
            restrict: 'EA',
            templateUrl: 'js/directives/oobj-chart/oobj-chart-pie.html',
            scope: {
                id: '@?',
                ngModel: '=',
                colspan: '@?',
                title: '@?'
            }
        };
    }
})();
/**
 * Created by Leonardo on 10/9/2015.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjChartRadar', oobjChartRadar);

    /** @ngInject */
    function oobjChartRadar() {
        return {
            require: 'ngModel',
            restrict: 'EA',
            templateUrl: 'js/directives/oobj-chart/oobj-chart-radar.html',
            scope: {
                id: '@?',
                ngModel: '=',
                colspan: '@?',
                title: '@?',
                chartId: '@?'
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
        return {
            restrict: 'EA',
            require: 'ngModel',
            templateUrl: 'js/directives/oobj-checkbox/oobj-checkbox.html',
            scope: {
                id: '@?',
                ngModel: '=',
                colspan: '@?',
                label: '@?',
                inline: '=?'
            },
            link: link
        };

        function link(scope) {
            if (scope.inline === true) {
                scope.checkboxClass = 'checkbox-inline';
            }

            if (scope.colspan) {
                var classes = scope.colspan;

                if (scope.checkboxClass) {
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

    angular
        .module('oobj-directives')
        .directive('oobjConfirmButton', oobjConfirmButton);

    /** @ngInject */
    function oobjConfirmButton() {
        return {
            restrict: 'EA',
            templateUrl: 'js/directives/oobj-confirm-button/oobj-confirm-button.html',
            scope: {
                idModal: '@',
                colspan: '@?',
                label: '@?',
                icon: '@?',
                onClickBtnYes: '&?',
                classBtnConfirm: '@'
            }
        };

    }
})();

/**
 * Created by ATILLA on 30/09/2015.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjContainer', oobjContainer);

    /** @ngInject */
    function oobjContainer() {
        return {
            restrict: 'EA',
            templateUrl: 'js/directives/oobj-container/oobj-container.html',
            transclude: true,
            scope: {
                title: '@?'
            }
        };

    }
})();

/**
 * Created by ATILLA on 09/10/2015.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjCrud', oobjCrud);

    /** @ngInject */
    function oobjCrud() {
        return {
            templateUrl: 'js/directives/oobj-crud/oobj-crud.html',
            transclude: true,
            scope: {
                vm: '=?',
                title: '@?',
                footer: '@?',
                showBtnSalvar: '=?',
                showBtnLimpar: '=?',
                showBtnExcluir: '=?',
                showBtnOnTop: '=?',
                showBtnOnBottom: '=?'
            },
            link: link
        };

        function link(scope) {
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
        var INCREMENT_TIME = 1;

        return {
            require: 'ngModel',
            restrict: 'EA',
            templateUrl: 'js/directives/oobj-date-picker/oobj-date-picker.html',
            scope: {
                id: '@?',
                name: '@?',
                value: '@?',
                ngModel: '=?',
                ngValue: '=?',
                label: '@?',
                showLabel: '@?',
                colspan: '@?',
                opts: '=?',
                range: '=?',
                time: '=?',
                timeIncrement: '@?',
                format: '@?',
                inputSize: '@?'
            },
            link: link
        };

        function link(scope, element) {
            scope.focusInput = function() {
                element.find('input').focus();
            };

            scope.format = scope.format || 'DD/MM/YYYY';

            if (!scope.time) {
                scope.time = false;
            }

            if (!scope.timeIncrement) {
                scope.timeIncrement = INCREMENT_TIME;
            }

            scope.opts = {
                timePicker: scope.time,
                timePickerIncrement: scope.timeIncrement,
                timePicker24Hour: true,
                showDropdowns: true,
                locale: getLocale(scope.format),
                linkedCalendars: false,
                opens: 'left',
                cancelClass: 'btn-danger'
            };

            if (scope.range === true) {
                scope.opts.singleDatePicker = false;
                scope.opts.ranges = getRanges();
            } else {
                scope.opts.singleDatePicker = true;
            }

            if (!scope.inputSize) {
                scope.inputSize = 'sm';
            }
        }

        function getDaysOfWeek() {
            return ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
        }

        function getMonthNames() {
            return ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro',
                    'Outubro', 'Novembro', 'Dezembro'];
        }

        function getRanges() {
            return {
                'Hoje': [moment(), moment()],
                'Ontem': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Últimos 7 Dias': [moment().subtract(6, 'days'), moment()],
                'Últimos 30 Dias': [moment().subtract(29, 'days'), moment()],
                'Este Mês': [moment().startOf('month'), moment().endOf('month')],
                'Mês Passado': [
                    moment().subtract(1, 'month').startOf('month'),
                    moment().subtract(1, 'month').endOf('month')
                ]
            };
        }

        function getLocale(format) {
            return {
                format: format,
                separator: ' - ',
                cancelLabel: 'Limpar',
                applyLabel: 'OK',
                fromLabel: 'Entre',
                toLabel: 'E',
                customRangeLabel: 'Personalizar',
                daysOfWeek: getDaysOfWeek(),
                monthNames: getMonthNames(),
                firstDay: 1
            };
        }
    }
})();

/**
 * Controlador do modal de Download de Documento Auxiliar de Carta de Correção Eletrônica.
 * Deve enviar a requisição para o backend e salvar os dados através do navegador na máquina do cliente.
 *
 * Created by Leonardo on 29/01/2016.
 */
(function() {
    'use strict';

    angular.module('oobj-directives')
        .controller('BaixarDACCeModalController', BaixarDACCeModalController);

    /** @ngInject */
    function BaixarDACCeModalController($uibModalInstance, BaixarDACCeModalService, selectedRows) {
        var vm = this;

        vm.quantidade = selectedRows.length;

        vm.invalid = false;
        vm.msgValidacao = null;

        vm.download = download;
        vm.cancel = cancelar;

        /**
         * Faz o download do DACCE
         */
        function download() {
            var idsArray = [];

            angular.forEach(selectedRows, function(item) {
                idsArray.push(item.id);
            });

            BaixarDACCeModalService.baixar(idsArray).then(function(result) {
                vm.invalid = false;
                vm.msgValidacao = result;

                $uibModalInstance.close();
            }).catch(function(err) {
                vm.invalid = true;
                vm.msgValidacao = err;
            });
        }

        /**
         * Fecha o modal
         */
        function cancelar() {
            $uibModalInstance.close();
        }
    }
    BaixarDACCeModalController.$inject = ['$uibModalInstance', 'BaixarDACCeModalService', 'selectedRows'];
})();
/**
 * Service responsável por consultar a API de download de DACCE
 *
 * Created by ATILLA on 09/03/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .service('BaixarDACCeModalService', BaixarDACCeModalService);

    /** @ngInject */
    function BaixarDACCeModalService($window, ENV, $q) {
        var ARRAY_VAZIO = 0;

        return {
            baixar: baixar
        };

        /**
         * Consulta a API para baixar o DACCE
         *
         * @param ids
         *          ID dos documentos
         * @param modelo
         *          NFe, CTe, etc
         * @returns {*}
         */
        function baixar(ids, modelo) {
            return $q(function(resolve, reject) {
                if (!ids || ids.length === ARRAY_VAZIO) {
                    reject('Nennhum id informado para download do documento');
                    return;
                }

                try {
                    modelo = modelo || 'nfe';

                    var url = ENV.API_ENDPOINT + '/api/' + modelo.toLowerCase() + '/download/dacce?ids=' + ids;
                    $window.open(url);

                    resolve('DACCe(s) baixado(s) com sucesso.');
                } catch(err) {
                    reject(err);
                }
            });
        }
    }
    BaixarDACCeModalService.$inject = ['$window', 'ENV', '$q'];
})();

/**
 * Controlador do modal de baixar DANFE
 *
 * Created by Leonardo on 29/01/2016.
 */
(function() {
    'use strict';

    angular.module('oobj-directives')
        .controller('BaixarDANFeModalController', BaixarDANFeModalController);

    /** @ngInject */
    function BaixarDANFeModalController($uibModalInstance, BaixarDANFeModalService, selectedRows) {
        var vm = this;

        vm.quantidade = selectedRows.length;

        vm.invalid = false;
        vm.msgValidacao = null;

        vm.download = download;
        vm.cancel = cancelar;

        /**
         * Faz o download do DANFE
         */
        function download() {
            var idsArray = [];

            angular.forEach(selectedRows, function(item) {
                idsArray.push(item.id);
            });

            BaixarDANFeModalService.baixar(idsArray).then(function(result) {
                vm.invalid = false;
                vm.msgValidacao = result;

                $uibModalInstance.close();
            }).catch(function(err) {
                vm.invalid = true;
                vm.msgValidacao = err;
            });
        }

        /**
         * Fecha o modal
         */
        function cancelar() {
            $uibModalInstance.close();
        }
    }
    BaixarDANFeModalController.$inject = ['$uibModalInstance', 'BaixarDANFeModalService', 'selectedRows'];
})();
/**
 * Service responsável por consultar a API de download de DANFE
 *
 * Created by ATILLA on 09/03/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .service('BaixarDANFeModalService', BaixarDANFeModalService);

    /** @ngInject */
    function BaixarDANFeModalService($window, ENV, $q) {
        var ARRAY_VAZIO = 0;

        return {
            baixar: baixar
        };

        /**
         * Consulta a API para baixar o DANFE
         *
         * @param ids
         *          ID dos documentos
         * @param modelo
         *          NFe, CTe, etc
         * @returns {*}
         */
        function baixar(ids, modelo) {
            return $q(function(resolve, reject) {
                if (!ids || ids.length === ARRAY_VAZIO) {
                    reject('Nennhum id informado para download do documento');
                    return;
                }

                try {
                    modelo = modelo || 'nfe';

                    var url = ENV.API_ENDPOINT + '/api/' + modelo.toLowerCase() + '/download/danfe?ids=' + ids;
                    $window.open(url);

                    resolve('DANFe(s) baixado(s) com sucesso.');
                } catch(err) {
                    reject(err);
                }
            });
        }
    }
    BaixarDANFeModalService.$inject = ['$window', 'ENV', '$q'];
})();

/**
 * Controlador do modal de baixar XML
 *
 * Created by Leonardo on 28/01/2016.
 */
(function() {
    'use strict';

    angular.module('oobj-directives')
        .controller('BaixarXMLModalController', BaixarXMLModalController);

    /** @ngInject */
    function BaixarXMLModalController($uibModalInstance, BaixarXMLModalService, selectedRows) {
        var vm = this;

        // constantes
        var PRIMEIRO_ITEM = 0;

        // variaveis do controlador
        vm.quantidade = selectedRows.length;
        vm.dfe = selectedRows[PRIMEIRO_ITEM];
        vm.modelo = vm.dfe ? vm.dfe.modelo : 'NF-e';

        vm.proc = true;
        vm.eventos = false;

        // variaveis de validao
        vm.invalid = false;
        vm.msgValidacao = null;

        // funcoes
        vm.download = download;

        function download() {
            var idsArray = [];

            angular.forEach(selectedRows, function(item) {
                idsArray.push(item.id);
            });

            // verifica se o formulário foi preenchido corretamente e faz exibe a validacao
            if (!isInvalid()) {
                BaixarXMLModalService.baixar(idsArray, vm.proc, vm.eventos, vm.modelo).then(function(result) {
                    vm.invalid = false;
                    vm.msgValidacao = result;

                    $uibModalInstance.close();
                }).catch(function(err) {
                    vm.invalid = true;
                    vm.msgValidacao = err;
                });
            }
        }

        /**
         * Verifica se o formulário não foi preenchido corretamente
         *
         * @returns {boolean}
         */
        function isInvalid() {
            vm.invalid = false;

            if (!vm.proc && !vm.eventos) {
                vm.invalid = true;
                vm.msgValidacao = 'Ops! Você deve selecionar <b>Proc ' + vm.modelo +
                    '</b> ou <b>Proc Eventos</b> antes de fazer download.';
            }

            return vm.invalid;
        }

        /**
         * Fecha o modal
         */
        vm.cancel = function() {
            $uibModalInstance.close();
        };
    }
    BaixarXMLModalController.$inject = ['$uibModalInstance', 'BaixarXMLModalService', 'selectedRows'];
})();

/**
 * Service responsável por consultar a API de download de XML
 *
 * Created by ATILLA on 09/03/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .service('BaixarXMLModalService', BaixarXMLModalService);

    /** @ngInject */
    function BaixarXMLModalService($window, ENV, $q) {
        var ARRAY_VAZIO = 0;

        return {
            baixar: baixar
        };

        /**
         * Consulta a API para baixar o XML
         *
         * @param ids
         *          ID dos documentos
         * @param downloadProc
         *          Opção para baixar também o Proc
         * @param downloadEventos
         *          Opção para baixar também os eventos
         * @param modelo
         *          NFe, CTe, etc
         * @returns {*}
         */
        function baixar(ids, downloadProc, downloadEventos, modelo) {
            return $q(function(resolve, reject) {
                if (!ids || ids.length === ARRAY_VAZIO) {
                    reject('Nennhum id informado para download do documento');
                    return;
                }

                try {
                    var url = getURL(modelo, ids, downloadProc, downloadEventos);
                    $window.open(url);

                    resolve('XML(s) baixado(s) com sucesso.');
                } catch(err) {
                    reject(err);
                }
            });
        }

        /**
         * Monta a URL com os parametros para efetuar o download do XML consultando o backend
         *
         * @param modelo
         *          NFe, CTe, etc
         * @param ids
         *          ID dos documentos
         * @param downloadProc
         *          Opção para baixar também o Proc
         * @param downloadEventos
         *          Opção para baixar também os eventos
         * @returns {string}
         */
        function getURL(modelo, ids, downloadProc, downloadEventos) {
            return ENV.API_ENDPOINT + '/api/' + modelo.toLowerCase() + '/download/xml?ids=' + ids.toString() +
                '&downloadProc=' + downloadProc +
                '&downloadEventos=' + downloadEventos +
                '&modeloDocumento=' + modelo;
        }
    }
    BaixarXMLModalService.$inject = ['$window', 'ENV', '$q'];
})();

/**
 * Controller do modal para registrar um evento de cancelamento da NFe
 *
 * Created by ATILLA on 25/02/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .controller('CancelarDFeModalController', CancelarDFeModalController);

    /** @ngInject */
    function CancelarDFeModalController($uibModalInstance, selectedRows, ModalUtil, CancelarDFeModalService) {
        var vm = this;

        // constantes
        var TAMANHO_MINIMO_JUSTIFICATIVA = 15;

        // variáveis globais do controlador
        vm.dfe = selectedRows[0];
        vm.modelo = vm.dfe ? vm.dfe.modelo : 'NF-e';
        vm.confirmar = false;
        vm.invalid = false;
        vm.msgValidacao = null;
        vm.evento = {
            data: new Date()
        };

        vm.cancelar = cancelar;
        vm.desfazerEvento = desfazerEvento;
        vm.registrar = registrar;
        vm.exibirConfirmacao = exibirConfirmacao;

        /**
         * Registra o evento de cancelamento para a DFe selecionada
         */
        function registrar() {
            // certifica que há uma nota selecionada e os campos foram preenchidos
            if (eventoValido()) {
                vm.evento.dfe = vm.dfe;

                CancelarDFeModalService.registrarEvento(vm.evento).then(function(result) {
                    vm.msgValidacao = result;
                    vm.invalid = false;

                    ModalUtil.msgSuccess('Evento de <b>Cancelamento da ' + vm.modelo + '</b> Registrado com Sucesso!');
                    $uibModalInstance.close();
                }).catch(function(reason) {
                    vm.msgValidacao = reason;
                    vm.invalid = true;
                    vm.confirmar = false;
                });
            }
        }

        /**
         * Valida se o formulário foi preenchido corretamente
         *
         * @returns {boolean}
         */
        function eventoValido() {
            // verifica se o documento foi selecionado
            if (isDocumentoInvalido()) {
                return validacaoDFe();
            }
            // verifica se a justificativa possui quantidade mínima informada
            else if (isJustificativaInvalida()) {
                return validacaoJustificativa();
            }
            // verifica se a data do evento foi selecionada corretamente
            else if (isDataInvalida()) {
                return validacaoData();
            }
            // formulário OK
            else {
                return validacaoOk();
            }
        }

        /**
         * Reverte a ação de registrar o evento de cancelamento
         */
        function desfazerEvento() {
            vm.confirmar = false;
        }

        /**
         * Exibe/Esconde alerta para confirmação antes de registrar o evento irreversível de cancelamento
         */
        function exibirConfirmacao() {
            vm.confirmar = !vm.confirmar;
        }

        /**
         * Fecha o modal de cancelamento
         */
        function cancelar() {
            vm.dfe = null;
            $uibModalInstance.dismiss('cancel');
        }

        /**
         * Obtem o tratamento padrao para DFe inválido
         *
         * @returns {boolean}
         */
        function validacaoDFe() {
            vm.msgValidacao = 'Selecione um <b>documento</b> e preencha <b>todos os campos</b> corretamente.';
            vm.invalid = true;
            vm.confirmar = false;

            return false;
        }

        /**
         * Obtem o tratamento padrao para justificativa inválida
         *
         * @returns {boolean}
         */
        function validacaoJustificativa() {
            vm.msgValidacao = '<b>Justificativa</b> deve ter pelo menos ' +
                TAMANHO_MINIMO_JUSTIFICATIVA + ' caractéres.';
            vm.invalid = true;
            vm.confirmar = false;

            return false;
        }

        /**
         * Obtem o tratamento padrao quando o formulário está ok
         *
         * @returns {boolean}
         */
        function validacaoOk() {
            vm.msgValidacao = null;
            vm.invalid = false;

            return true;
        }

        /**
         * Obtem o tratamento padrao para data inválida
         *
         * @returns {boolean}
         */
        function validacaoData() {
            vm.msgValidacao = 'Selecione uma <b>data</b> válida.';
            vm.invalid = true;
            vm.confirmar = false;

            return false;
        }

        /**
         * Verifica se o documento nao foi selecionado corretamente
         *
         * @returns {boolean}
         */
        function isDocumentoInvalido() {
            return !vm.dfe || !vm.evento;
        }

        /**
         * Verifica se a justificativa é inválida
         *
         * @returns {boolean}
         */
        function isJustificativaInvalida() {
            return !vm.evento.justificativa || vm.evento.justificativa.length < TAMANHO_MINIMO_JUSTIFICATIVA;
        }

        /**
         * Verifica se a data é invalida
         *
         * @returns {boolean}
         */
        function isDataInvalida() {
            return !vm.evento.data;
        }
    }
    CancelarDFeModalController.$inject = ['$uibModalInstance', 'selectedRows', 'ModalUtil', 'CancelarDFeModalService'];
})();

/**
 * Service do modal de cancelamento de DFe
 *
 * Created by ATILLA on 25/02/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .service('CancelarDFeModalService', CancelarDFeModalService);

    /** @ngInject */
    function CancelarDFeModalService($log, $q) {
        return {
            registrarEvento: registrarEvento
        };

        /**
         * Registra um evento de cancelamento
         *
         * @param evento
         */
        function registrarEvento(evento) {
            return $q(function(resolve, reject) {
                try {
                    $log.debug(evento);
                    resolve('Evento registrado com sucesso!');
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
    CancelarDFeModalService.$inject = ['$log', '$q'];
})();

/**
 * Controller do modal para registrar um evento de carta de correção
 *
 * Created by ATILLA on 25/02/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .controller('CartaCorrecaoModalController', CartaCorrecaoModalController);

    /** @ngInject */
    function CartaCorrecaoModalController($uibModalInstance, selectedRows, ModalUtil, CartaCorrecaoModalService) {
        var vm = this;

        // constantes
        var TAMANHO_MINIMO_JUSTIFICATIVA = 15;

        // variáveis globais do controlador
        vm.dfe = selectedRows[0];
        vm.modelo = vm.dfe ? vm.dfe.modelo : 'NF-e';
        vm.confirmar = false;
        vm.invalid = false;
        vm.msgValidacao = null;
        vm.evento = {
            data: new Date()
        };

        vm.cancelar = cancelar;
        vm.desfazerEvento = desfazerEvento;
        vm.registrar = registrar;
        vm.exibirConfirmacao = exibirConfirmacao;

        /**
         * Registra o evento de carta de correcao para o documento selecionado
         */
        function registrar() {
            // certifica que há uma nota selecionada e os campos foram preenchidos
            if (eventoValido()) {
                vm.evento.dfe = vm.dfe;

                CartaCorrecaoModalService.registrarEvento(vm.evento).then(function(result) {
                    vm.msgValidacao = result;
                    vm.invalid = false;

                    ModalUtil.msgSuccess('Evento de <b>Carta de Correção</b> Registrado com Sucesso!');
                    $uibModalInstance.close();
                }).catch(function(reason) {
                    vm.msgValidacao = reason;
                    vm.invalid = true;
                    vm.confirmar = false;
                });
            }
        }

        /**
         * Valida se o formulário foi preenchido corretamente
         *
         * @returns {boolean}
         */
        function eventoValido() {
            // verifica se o documento foi selecionado
            if (isDocumentoInvalido()) {
                return validacaoDFe();
            }
            // verifica se a justificativa possui quantidade mínima informada
            else if (isJustificativaInvalida()) {
                return validacaoJustificativa();
            }
            // verifica se a data do evento foi selecionada corretamente
            else if (isDataInvalida()) {
                return validacaoData();
            }
            // formulário OK
            else {
                return validacaoOk();
            }
        }

        /**
         * Reverte a ação de registrar o evento de carta de correção
         */
        function desfazerEvento() {
            vm.confirmar = false;
        }

        /**
         * Exibe/Esconde alerta para confirmação antes de registrar o evento de carta de correção
         */
        function exibirConfirmacao() {
            vm.confirmar = !vm.confirmar;
        }

        /**
         * Fecha o modal de cancelamento
         */
        function cancelar() {
            vm.dfe = null;
            $uibModalInstance.dismiss('cancel');
        }

        /**
         * Obtem o tratamento padrao para DFe inválido
         *
         * @returns {boolean}
         */
        function validacaoDFe() {
            vm.msgValidacao = 'Selecione um <b>documento</b> e preencha <b>todos os campos</b> corretamente.';
            vm.invalid = true;
            vm.confirmar = false;

            return false;
        }

        /**
         * Obtem o tratamento padrao para justificativa inválida
         *
         * @returns {boolean}
         */
        function validacaoJustificativa() {
            vm.msgValidacao = '<b>Justificativa</b> deve ter pelo menos ' +
                TAMANHO_MINIMO_JUSTIFICATIVA + ' caractéres.';
            vm.invalid = true;
            vm.confirmar = false;

            return false;
        }

        /**
         * Obtem o tratamento padrao quando o formulário está ok
         *
         * @returns {boolean}
         */
        function validacaoOk() {
            vm.msgValidacao = null;
            vm.invalid = false;

            return true;
        }

        /**
         * Obtem o tratamento padrao para data inválida
         *
         * @returns {boolean}
         */
        function validacaoData() {
            vm.msgValidacao = 'Selecione uma <b>data</b> válida.';
            vm.invalid = true;
            vm.confirmar = false;

            return false;
        }

        /**
         * Verifica se o documento nao foi selecionado corretamente
         *
         * @returns {boolean}
         */
        function isDocumentoInvalido() {
            return !vm.dfe || !vm.evento;
        }

        /**
         * Verifica se a justificativa é inválida
         *
         * @returns {boolean}
         */
        function isJustificativaInvalida() {
            return !vm.evento.justificativa || vm.evento.justificativa.length < TAMANHO_MINIMO_JUSTIFICATIVA;
        }

        /**
         * Verifica se a data é invalida
         *
         * @returns {boolean}
         */
        function isDataInvalida() {
            return !vm.evento.data;
        }
    }
    CartaCorrecaoModalController.$inject = ['$uibModalInstance', 'selectedRows', 'ModalUtil', 'CartaCorrecaoModalService'];
})();

/**
 * Service do modal de carta de correção
 *
 * Created by ATILLA on 25/02/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .service('CartaCorrecaoModalService', CartaCorrecaoModalService);

    /** @ngInject */
    function CartaCorrecaoModalService($log, $q) {
        return {
            registrarEvento: registrarEvento
        };

        /**
         * Registra um evento de cartao de correção
         *
         * @param evento
         */
        function registrarEvento(evento) {
            return $q(function(resolve, reject) {
                try {
                    $log.debug(evento);
                    resolve('Evento registrado com sucesso!');
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
    CartaCorrecaoModalService.$inject = ['$log', '$q'];
})();

/**
 * Controlador do modal de desfazer entrada
 *
 * Created by Isaias on 29/01/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .controller('DesfazerEntradaModalController', DesfazerEntradaModalController);

    /** @ngInject */
    function DesfazerEntradaModalController($uibModalInstance, selectedRows, ModalUtil, DesfazerEntradaModalService) {
        var vm = this;

        vm.docs = selectedRows;
        vm.quantidadeItens = vm.docs.length;

        vm.desfazer = desfazer;
        vm.cancelar = cancelar;

        /**
         * Desfaz o registro de entrada
         */
        function desfazer() {
            DesfazerEntradaModalService.desfazerEntrada(vm.docs).then(function (result) {
                ModalUtil.msgSuccess(result);
                $uibModalInstance.close();
            }).catch(function (reason) {
                ModalUtil.msgError(reason);
                $uibModalInstance.close();
            });
        }

        /**
         * Fecha o modal
         */
        function cancelar() {
            vm.rows = null;
            $uibModalInstance.close();
        }
    }
    DesfazerEntradaModalController.$inject = ['$uibModalInstance', 'selectedRows', 'ModalUtil', 'DesfazerEntradaModalService'];
})();

/**
 * Service responsável por consultar a API para desfazer a entrada
 *
 * Created by ATILLA on 09/03/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .service('DesfazerEntradaModalService', DesfazerEntradaModalService);

    /** @ngInject */
    function DesfazerEntradaModalService($log, $q) {
        return {
            desfazerEntrada: desfazerEntrada
        };

        /**
         * Desfaz a entrada registrada para o documento
         *
         * @param dfe
         *          Documentos com a entrada registrada
         */
        function desfazerEntrada(dfe) {
            return $q(function(resolve, reject) {
                try {
                    $log.debug(dfe);
                    resolve('Registro de Entrada removido com sucesso.');
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
    DesfazerEntradaModalService.$inject = ['$log', '$q'];
})();

/**
 * Controlador para o modal de diagnóstico fiscal.
 * Este realiza a comunicação com o backend para validar se os documentos selecionados não possuem problemas fiscais que
 * a Sefaz não valida, mas acaba sendo incorreto.
 *
 * Created by Leonardo on 02/02/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .controller('DiagnosticoFiscalModalController', DiagnosticoFiscalModalController);

    /** @ngInject */
    function DiagnosticoFiscalModalController($uibModalInstance, selectedRows, ModalUtil,
                                              DiagnosticoFiscalModalService) {
        var vm = this;

        vm.docs = selectedRows;
        vm.quantidadeItens = vm.docs.length;

        vm.diagnosticar = diagnosticar;
        vm.cancelar = cancelar;

        /**
         * Faz o diagnostico fiscal dos documentos
         */
        function diagnosticar() {
            DiagnosticoFiscalModalService.diagnosticar(vm.docs).then(function(result) {
                ModalUtil.msgSuccess(result);
                $uibModalInstance.close();
            }).catch(function(reason) {
                ModalUtil.msgError(reason);
                $uibModalInstance.close();
            });
        }

        /**
         * Fecha o modal
         */
        function cancelar() {
            vm.docs = null;
            $uibModalInstance.close();
        }
    }
    DiagnosticoFiscalModalController.$inject = ['$uibModalInstance', 'selectedRows', 'ModalUtil', 'DiagnosticoFiscalModalService'];
})();

/**
 * Service responsável por consultar a API para diagnostico fiscal
 *
 * Created by ATILLA on 09/03/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .service('DiagnosticoFiscalModalService', DiagnosticoFiscalModalService);

    /** @ngInject */
    function DiagnosticoFiscalModalService($log, $q) {
        return {
            diagnosticar: diagnosticar
        };

        /**
         * Consulta o diagnóstico fiscal do documento no backend
         *
         * @param dfe
         *          Documentos para consultar o diagnostico
         */
        function diagnosticar(dfe) {
            return $q(function(resolve, reject) {
                try {
                    $log.debug(dfe);
                    resolve('Documento(s) diagnosticado(s) com sucesso!');
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
    DiagnosticoFiscalModalService.$inject = ['$log', '$q'];
})();

/**
 * Controlador do modal de enviar NFe por email
 *
 * Created by ATILLA on 25/02/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .controller('EnviarEmailModalController', EnviarEmailModalController);

    /** @ngInject */
    function EnviarEmailModalController($uibModalInstance, selectedRows, ModalUtil, EnviarEmailModalService) {
        var vm = this;

        // constantes;
        var STRING_DOES_NOT_MATCH = -1;
        var UM_ITEM = 1;
        vm.validEmail = '(^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$)|(E.mail.s. contido.s. no arquivo XML)';

        // variáveis globais do controlador
        vm.rows = selectedRows;
        vm.quantidadeItens = vm.rows.length;
        vm.modelo = vm.rows[0] ? vm.rows[0].modelo : 'NF-e';
        vm.invalid = false;
        vm.msgValidacao = null;
        vm.email = new Email();

        definirAssuntos();
        definirAnexos();

        vm.cancelar = cancelar;
        vm.enviar = enviar;
        vm.selecionar = selecionar;
        vm.addAssunto = addAssunto;
        vm.getTagsDefault = getTagsDefault;

        /**
         * Autocomplete de tags default para o input-tags de Destinatários
         *
         * @param query
         *          String digitada pelo usuário no input-tag
         * @returns {*}
         */
        function getTagsDefault(query) {
            var todosEmails = 'E-mail(s) contido(s) no arquivo XML';

            // verifica se a string digitada está presente na string todosEmails
            return todosEmails.indexOf(query) > STRING_DOES_NOT_MATCH ? [todosEmails] : [];
        }

        /**
         * Adiciona uma tag no assunto
         *
         * @param index
         *          Posicao do assunto no array de tags
         */
        function addAssunto(index) {
            // inicializa o assunto do email
            vm.email.assunto = vm.email.assunto || '';

            // adiciona a tag no assunto
            vm.email.assunto += (' ' + vm.assuntos[index].tag);
        }

        /**
         * Executado para selecionar/desfazer seleção de um anexo listado
         *
         * @param $index
         *          Posição do anexo no array de anexos
         */
        function selecionar($index) {
            // seleciona ou desfaz seleção do anexo escolhido no modal
            vm.anexos[$index].selected = !vm.anexos[$index].selected;
        }

        /**
         * Envia os documentos selecionados por email
         */
        function enviar() {
            if (validarEmail() && addAnexos() && !vm.invalid) {
                EnviarEmailModalService.enviarPorEmail(vm.email).then(function(msg) {
                    ModalUtil.msgSuccess(msg);
                    $uibModalInstance.close();
                }).catch(function(reason) {
                    vm.msgValidacao = reason;
                    vm.invalid = true;

                    ModalUtil.msgError(reason);
                    $uibModalInstance.close();
                });
            }
        }

        /**
         * Adiciona os anexos selecionados no corpo do email
         *
         * @return {boolean}
         *          Verdadeiro se algum anexo foi adicionado
         */
        function addAnexos() {
            var anexoAdded = false;
            vm.email.anexos = [];

            vm.anexos.forEach(function (anexo) {
                if (anexo.selected) {
                    vm.email.anexos.push(anexo);
                    anexoAdded = true;
                }
            });

            return validacaoAnexos(anexoAdded);
        }

        /**
         * Adiciona a devida validação para destinatários inválidos
         *
         * @returns {boolean}
         */
        function validacaoDestinatarioInvalido() {
            vm.msgValidacao = 'Ops! Você não informou nenhum <b>Destinatário</b>. Esse campo é obrigatório.';
            vm.invalid = true;

            return false;
        }

        /**
         * Validação usada quando o preenchimento do formulário está ok
         *
         * @returns {boolean}
         */
        function validacaoOk() {
            vm.msgValidacao = null;
            vm.invalid = false;

            return true;
        }

        /**
         * Verifica se o destinatario é inválido
         *
         * @returns {boolean}
         */
        function isDestinatarioInvalido() {
            return !vm.email.para || vm.email.para.length < UM_ITEM;
        }

        /**
         * Valida se os dados do email foram preenchidos
         *
         * @returns {boolean}
         */
        function validarEmail() {
            if (isDestinatarioInvalido()) {
                return validacaoDestinatarioInvalido();
            }

            vm.email.de = vm.email.de || 'naoresponder@oobj.com.br';
            vm.email.assunto = vm.email.assunto || '(sem assunto)';
            vm.email.mensagem = vm.email.mensagem || getMensagemDefault();

            return validacaoOk();
        }

        /**
         * Validação usada para a seleção de anexos
         *
         * @param anexoAdded
         *          Se há anexos adicionados
         * @returns {*}
         */
        function validacaoAnexos(anexoAdded) {
            if (!anexoAdded) {
                vm.msgValidacao = 'Ops! Você não selecionou nenhum <b>Anexo</b>. ' +
                    'Você deve selecionar ao menos <b>um</b> tipo de anexo.';
                vm.invalid = true;
            }

            return anexoAdded;
        }

        /**
         * Mensagem padrão do email
         *
         * @returns {string}
         */
        function getMensagemDefault() {
            return 'Prezado Cliente, \n\n' +
                'Você está recebendo em anexo o arquivo XML referente a uma Nota Fiscal Eletrônica. ' +
                'Abaixo você tem mais detalhes sobre o documento.';
        }

        /**
         * Fecha o modal de enviar email
         */
        function cancelar() {
            vm.rows = null;
            $uibModalInstance.dismiss('cancel');
        }

        /**
         * Cria as tags default do assunto
         */
        function definirAssuntos() {
            vm.assuntos = [
                new Assunto('Número da ' + vm.modelo, 'NUMERO'),
                new Assunto('Série da ' + vm.modelo, 'SERIE'),
                new Assunto('Nome do Emitente da ' + vm.modelo, 'EMITENTE'),
                new Assunto('Nome do Destinatário da ' + vm.modelo, 'DESTINATARIO'),
                new Assunto('Nome do Transportador da ' + vm.modelo, 'TRANSPORTADOR'),
                new Assunto('Chave de acesso da ' + vm.modelo, 'CHAVE_ACESSO')
            ];
        }

        /**
         * Cria as opções de anexos default
         */
        function definirAnexos() {
            vm.anexos = [
                new Anexo('Proc NF-e', true, 'fa-file-code-o'),
                new Anexo('Proc Eventos', false, 'fa-file-code-o'),
                new Anexo('DANFE', false, 'fa-file-pdf-o'),
                new Anexo('DACCE', false, 'fa-file-pdf-o')
            ];
        }

        /**
         * @constructor
         */
        function Email(de, para, assunto, mensagem, anexos) {
            this.de = de;
            this.para = para || ['E-mail(s) contido(s) no arquivo XML'];
            this.assunto = assunto || (vm.modelo + ' |NUMERO| - Série |SERIE| emitida por |EMITENTE|');
            this.mensagem = mensagem || getMensagemDefault();
            this.anexos = anexos;
        }

        /**
         * @constructor
         */
        function Assunto(label, value, tag) {
            this.label = label;
            this.value = value;
            this.tag = tag || '|' + this.value + '|';
        }

        /**
         * @constructor
         */
        function Anexo(name, selected, icon) {
            this.name = name;
            this.selected = selected || false;
            this.icon = icon;
        }
    }
    EnviarEmailModalController.$inject = ['$uibModalInstance', 'selectedRows', 'ModalUtil', 'EnviarEmailModalService'];
})();

/**
 * Service do modal de enviar NFe por email
 *
 * Created by ATILLA on 25/02/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .service('EnviarEmailModalService', EnviarEmailModalService);

    /** @ngInject */
    function EnviarEmailModalService($log, $q) {
        return {
            enviarPorEmail: enviarPorEmail
        };

        /**
         * Envia os documentos fiscais por email
         *
         * @param email
         *          Objeto com os detalhes do email, incluindo anexos
         */
        function enviarPorEmail(email) {
            return $q(function(resolve, reject) {
                try {
                    $log.debug(email);
                    resolve('Email enviado com sucesso!');
                } catch (err) {
                    reject('Houve um problema ao enviar o(s) documento(s) por e-mail:\n' + err);
                }
            });
        }
    }
    EnviarEmailModalService.$inject = ['$log', '$q'];
})();

/**
 * Controller do Modal Imprimir
 *
 * Created by ATILLA on 19/02/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .controller('ImprimirModalController', ImprimirModalController);

    /** @ngInject */
    function ImprimirModalController($uibModalInstance, selectedRows, ModalUtil, ImprimirModalService) {
        var vm = this;

        // variáveis globais do controlador
        vm.rows = selectedRows;
        vm.quantidadeItens = vm.rows.length;
        vm.localizacaoImpressora = 'padrao';

        buscarImpressoras();

        vm.selecionar = selecionar;
        vm.imprimir = imprimir;
        vm.cancel = cancelar;

        /**
         * Faz a busca por impressoras no servidor
         */
        function buscarImpressoras() {
            ImprimirModalService.buscarImpressoras().then(function (impressoras) {
                vm.impressoras = impressoras;
            });
        }

        /**
         * Executado para selecionar/desfazer seleção de uma impressora listada
         *
         * @param $index
         *          Posição da impressora no array de impressoras
         */
        function selecionar($index) {
            vm.impressoras.forEach(function (impressora, index) {
                // desfaz seleção das impressoras, exceto a atual selecionada
                if (impressora.selected && $index !== index) {
                    impressora.selected = false;
                }
            });

            // seleciona ou desfaz seleção da impressora escolhida no modal
            vm.impressoras[$index].selected = !vm.impressoras[$index].selected;
        }

        /**
         * Envia os documentos selecionados para serem impressos nas impressoras selecionadas
         */
        function imprimir() {
            // garante que só é enviado para impressão se algum item for selecionado
            if (vm.quantidadeItens > 0) {
                // impressora selecionada
                var toPrint = null;

                // verifica e armazena a impressora selecionada
                vm.impressoras.forEach(function (impressora) {
                    if (impressora.selected) {
                        toPrint = impressora;
                    }
                });

                // envia os documentos e a impressora selecionada para o service
                ImprimirModalService.imprimir(vm.rows, toPrint).then(function(result) {
                    $uibModalInstance.close();
                    ModalUtil.msgSuccess(result);
                });
            } else {
                $uibModalInstance.close();
                ModalUtil.msgWarning('É necessário selecionar documentos antes de imprimir.');
            }
        }

        /**
         * Fecha o modal de impressao
         */
        function cancelar() {
            vm.rows = null;
            $uibModalInstance.dismiss('cancel');
        }
    }
    ImprimirModalController.$inject = ['$uibModalInstance', 'selectedRows', 'ModalUtil', 'ImprimirModalService'];
})();

/**
 * Service do Modal Imprimir
 *
 * Created by ATILLA on 19/02/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .service('ImprimirModalService', ImprimirModalService);

    /** @ngInject */
    function ImprimirModalService($q, $log) {
        return {
            buscarImpressoras: buscarImpressoras,
            imprimir: imprimir
        };

        /**
         * Envia os documentos para serem impressos nas impressoras selecionadas
         *
         * @param docs
         *      Documentos a serem impressos
         * @param toPrint
         *      Impressoras selecionadas
         */
        function imprimir(docs, toPrint) {
            return $q(function(resolve, reject) {
                try {
                    $log.debug('Imprimindo...');
                    resolve('Documento(s) impresso(s) com sucesso!');
                } catch (err) {
                    reject(err);
                }
            });
        }

        /**
         * Faz uma busca por impressoras no servidor
         *
         * @returns {*}
         */
        function buscarImpressoras() {
            return $q(function(resolve, reject) {
                try {
                    resolve([new Printer('Printer 01'),
                        new Printer('Impressora 02'),
                        new Printer('Impressora 03'),
                        new Printer('Impressora 04'),
                        new Printer('Microsoft XPS Document Printer')
                    ]);
                } catch (err) {
                    reject(err);
                }
            });
        }

        /**
         * @constructor
         */
        function Printer(name, selected) {
            this.name = name;
            this.selected = selected || false;
        }
    }
    ImprimirModalService.$inject = ['$q', '$log'];
})();

/**
 * Controlador do modal de Confirmar Manifestação.
 * Esse modal abre após o usuário selecionar documentos para serem manifestados.
 * Ele exibe todos os documentos selecionados e pede para o usuário confirmar essa pois ela é sem volta.
 *
 * Created by Leonardo on 01/02/2016.
 */
(function () {
    'use strict';

    var SEM_DOCUMENTOS = 0;
    var UM_DOCUMENTO = 1;

    angular.module('oobj-directives')
        .controller('ManifestarConfirmarModalController', ManifestarConfirmarModalController);

    ManifestarConfirmarModalController.$inject =
        ['$uibModalInstance', 'ModalUtil', 'ManifestarService', 'selectedRows', 'justificativa', 'dataEvento'];

    /** @ngInject */
    function ManifestarConfirmarModalController($uibModalInstance,
                                                ModalUtil,
                                                ManifestarService,
                                                selectedRows,
                                                justificativa,
                                                dataEvento) {
        var vm = this;

        ManifestarService.getManifestacoesSelecionadas(selectedRows).then(function(data) {
            vm.docs = data;
        });

        vm.acao = function () {
            if (!vm.docs || vm.docs.length === SEM_DOCUMENTOS) {
                ModalUtil.msgError('Nenhum documento selecionado para manifestação');
            } else {
                ModalUtil.msgSuccess('Manifestação(ões) realizada(s) com sucesso.');
            }
            vm.docs = null;
            $uibModalInstance.close();
        };

        vm.cancel = function () {
            vm.docs = null;
            $uibModalInstance.close();
        };

        /*
         * Remove um item do array vm.docs quando o usuário clica no X presente na tela.
         */
        vm.remover = function (doc) {
            // obtem o indice do elemento no array
            var index = vm.docs.indexOf(doc);
            // retira apenas essa posição do array
            vm.docs.splice(index, UM_DOCUMENTO);
        };

    }
})();
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
/**
 * Service responsável por comunicar com o backend e trazer os dados para serem exibidos para o usuário.
 *
 * Created by Leonardo on 05/02/2016.
 */
(function() {
    'use strict';

    angular.module('oobj-directives').service('ManifestarService', ManifestarService);

    /** @ngInject */
    function ManifestarService($q) {
        return {
            getManifestacoes: getManifestacoes,
            getManifestacoesSelecionadas: getManifestacoesSelecionadas,
            getDestinatarios: getDestinatarios,
            hasJustificativa: hasJustificativa
        };

        /**
         * Obtém as manifestações para serem exibidas no select-box.
         *
         * @returns {*[]} array com as possíveis manifestações
         */
        function getManifestacoes() {
            return $q(function(resolve, reject) {
                try {
                    resolve([
                        { valor: 'CIENCIA_OPERACAO', descricao: 'Ciência da Operação' },
                        { valor: 'DESCONHECIMENTO_OPERACAO' , descricao: 'Desconhecimento da Operação' },
                        { valor: 'OPERACAO_NAO_REALIZADA', descricao: 'Operação não Realizada' },
                        { valor: 'CONFIRMACAO_OPERACAO', descricao: 'Confirmação da Operação' }
                    ]);
                } catch (err) {
                    reject(err);
                }
            });
        }

        /**
         * Normaliza as linhas selecionadas na row da grid para exibir com as propriedades esperadas no HTML.
         *
         * @param rows
         *          linhas selecionadas na grid que serão realizadas a manifestação
         * @returns {Array} array normalizado
         */
        function getManifestacoesSelecionadas(rows) {
            return $q(function(resolve, reject) {
                try {
                    var rowsCopy = angular.copy(rows),
                        docArray = [];

                    angular.forEach(rowsCopy, function(item) {
                        var doc = {
                            numero: item.numero,
                            serie: item.serie,
                            emitente: item.emitente,
                            cnpj: item.cnpj
                        };
                        docArray.push(doc);
                    });

                    resolve(docArray);
                } catch (err) {
                    reject(err);
                }
            });
        }

        /**
         * Busca no banco de dados os possíveis destinatários para que seja realizada a manifestação dessa empresa.
         *
         * @returns {*[]} um array com as empresas que o usuário pode manifestar
         */
        function getDestinatarios() {
            return $q(function(resolve, reject) {
                try {
                    resolve([
                        { id: 1, nome: '[07.385.111/000-2] E-Sales Soluções Oobj'}
                    ]);
                } catch (err) {
                    reject(err);
                }
            });
        }

        /**
         * Verifica se o valor passado por parâmetro é de DESCONHECIMENTO_OPERACAO ou OPERACAO_NAO_REALIZADA pois
         * esses são obrigatórios
         *
         * @param value
         * @returns {boolean}
         */
        function hasJustificativa(value) {
            return $q(function(resolve, reject) {
                try {
                    resolve(value === 'DESCONHECIMENTO_OPERACAO' || value === 'OPERACAO_NAO_REALIZADA');
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
    ManifestarService.$inject = ['$q'];
})();

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

/**
 * Controlador do reconhecimento de documentos.
 * Realiza a comunicação com o backend para para reconhecer os documentos selecionados na aplicação.
 *
 * Created by Leonardo on 01/02/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .controller('ReconhecerDocumentosModalController', ReconhecerDocumentosModalController);

    /** @ngInject */
    function ReconhecerDocumentosModalController($uibModalInstance, selectedRows, ModalUtil,
                                                 ReconhecerDocumentosModalService) {
        var vm = this;

        vm.docs = selectedRows;
        vm.quantidadeItens = vm.docs.length;

        vm.reconhecer = reconhecer;
        vm.cancelar = cancelar;

        /**
         * Reconhece os documentos
         */
        function reconhecer() {
            ReconhecerDocumentosModalService.reconhecer(vm.docs).then(function (result) {
                ModalUtil.msgSuccess(result);
                $uibModalInstance.close();
            }).catch(function (reason) {
                ModalUtil.msgError(reason);
                $uibModalInstance.close();
            });
        }

        /**
         * Fecha o modal
         */
        function cancelar() {
            vm.rows = null;
            $uibModalInstance.close();
        }
    }
    ReconhecerDocumentosModalController.$inject = ['$uibModalInstance', 'selectedRows', 'ModalUtil', 'ReconhecerDocumentosModalService'];
})();

/**
 * Service responsável por consultar a API para reconhecer os documentos
 *
 * Created by ATILLA on 09/03/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .service('ReconhecerDocumentosModalService', ReconhecerDocumentosModalService);

    /** @ngInject */
    function ReconhecerDocumentosModalService($log, $q) {
        return {
            reconhecer: reconhecer
        };

        /**
         * Reconhece dos documentos na alicação
         *
         * @param dfe
         *          Documentos a serem reconhecidos
         */
        function reconhecer(dfe) {
            return $q(function(resolve, reject) {
                try {
                    $log.debug(dfe);
                    resolve('Documento(s) reconhecido(s) com cucesso!.');
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
    ReconhecerDocumentosModalService.$inject = ['$log', '$q'];
})();

/**
 * Constrolador do modal de reconsultar na sefaz
 *
 * Created by Isaias on 29/01/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .controller('ReconsultarSefazModalController', ReconsultarSefazModalController);

    /** @ngInject */
    function ReconsultarSefazModalController($uibModalInstance, selectedRows, ModalUtil, ReconsultarSefazModalService) {
        var vm = this;

        vm.docs = selectedRows;
        vm.quantidadeItens = vm.docs.length;

        vm.reconsultar = reconsultar;
        vm.cancelar = cancelar;

        /**
         * Reconsulta os documentos
         */
        function reconsultar() {
            ReconsultarSefazModalService.reconsultar(vm.docs).then(function (result) {
                ModalUtil.msgSuccess(result);
                $uibModalInstance.close();
            }).catch(function (reason) {
                ModalUtil.msgError(reason);
                $uibModalInstance.close();
            });
        }

        /**
         * Fecha o modal
         */
        function cancelar() {
            vm.rows = null;
            $uibModalInstance.close();
        }
    }
    ReconsultarSefazModalController.$inject = ['$uibModalInstance', 'selectedRows', 'ModalUtil', 'ReconsultarSefazModalService'];
})();

/**
 * Service responsável por consultar a API para reconsultar na sefaz
 *
 * Created by ATILLA on 09/03/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .service('ReconsultarSefazModalService', ReconsultarSefazModalService);

    /** @ngInject */
    function ReconsultarSefazModalService($log, $q) {
        return {
            reconsultar: reconsultar
        };

        /**
         * Reconhece dos documentos na alicação
         *
         * @param dfe
         *          Documentos a serem reconhecidos
         */
        function reconsultar(dfe) {
            return $q(function(resolve, reject) {
                try {
                    $log.debug(dfe);
                    resolve('Documento(s) reconsultados(s) com cucesso!.');
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
    ReconsultarSefazModalService.$inject = ['$log', '$q'];
})();

/**
 * Created by ATILLA on 29/01/2016
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .controller('ReentregarDocumentosModalController', ReentregarDocumentosModalController);

    /** @ngInject */
    function ReentregarDocumentosModalController($uibModalInstance, selectedRows, ModalUtil,
                                                 ReentregarDocumentosModalService) {
        var vm = this;

        vm.docs = selectedRows;
        vm.quantidadeItens = vm.docs.length;

        vm.reentregar = reentregar;
        vm.cancelar = cancelar;

        /**
         * Reentregar os documentos
         */
        function reentregar() {
            ReentregarDocumentosModalService.reentregar(vm.docs).then(function (result) {
                ModalUtil.msgSuccess(result);
                $uibModalInstance.close();
            }).catch(function (reason) {
                ModalUtil.msgError(reason);
                $uibModalInstance.close();
            });
        }

        /**
         * Fecha o modal
         */
        function cancelar() {
            vm.rows = null;
            $uibModalInstance.close();
        }
    }
    ReentregarDocumentosModalController.$inject = ['$uibModalInstance', 'selectedRows', 'ModalUtil', 'ReentregarDocumentosModalService'];
})();

/**
 * Service responsável por consultar a API para reetregar os documentos
 *
 * Created by ATILLA on 09/03/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .service('ReentregarDocumentosModalService', ReentregarDocumentosModalService);

    /** @ngInject */
    function ReentregarDocumentosModalService($log, $q) {
        return {
            reentregar: reentregar
        };

        /**
         * Reconhece dos documentos na alicação
         *
         * @param dfe
         *          Documentos a serem reentregados
         */
        function reentregar(dfe) {
            return $q(function(resolve, reject) {
                try {
                    $log.debug(dfe);
                    resolve('Os documentos foram enfileirados para serem reentregues. ' +
                        'Caso eles(s) não se encaixem na(s) regra(s) configurada(s), não ' +
                        'serão entregue(s). Para validar a reentrega, clique na opção ' +
                        '"Histórico de Entrega" na tela de Documentos Recebidos.');
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
    ReentregarDocumentosModalService.$inject = ['$log', '$q'];
})();

/**
 * Created by ATILLA on 28/01/2016
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .controller('ReentregarResumoModalController', ReentregarResumoModalController);

    /** @ngInject */
    function ReentregarResumoModalController($uibModalInstance, selectedRows, ModalUtil, ReentregarResumoModalService) {
        var vm = this;

        vm.docs = selectedRows;
        vm.quantidadeItens = vm.docs.length;

        vm.reentregar = reentregar;
        vm.cancelar = cancelar;

        /**
         * Reentregar resumo dos documentos
         */
        function reentregar() {
            ReentregarResumoModalService.reentregar(vm.docs).then(function (result) {
                ModalUtil.msgSuccess(result);
                $uibModalInstance.close();
            }).catch(function (reason) {
                ModalUtil.msgError(reason);
                $uibModalInstance.close();
            });
        }

        /**
         * Fecha o modal
         */
        function cancelar() {
            vm.rows = null;
            $uibModalInstance.close();
        }
    }
    ReentregarResumoModalController.$inject = ['$uibModalInstance', 'selectedRows', 'ModalUtil', 'ReentregarResumoModalService'];
})();

/**
 * Service responsável por consultar a API para reetregar os resumo
 *
 * Created by ATILLA on 09/03/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .service('ReentregarResumoModalService', ReentregarResumoModalService);

    /** @ngInject */
    function ReentregarResumoModalService($log, $q) {
        return {
            reentregar: reentregar
        };

        /**
         * Reconhece dos resumo na alicação
         *
         * @param dfe
         *          Documentos a serem reentregados
         */
        function reentregar(dfe) {
            return $q(function(resolve, reject) {
                try {
                    $log.debug(dfe);
                    resolve('Os resumos foram enfileirados para serem reentregues. ' +
                        'Caso eles(s) não se encaixem na(s) regra(s) configurada(s), não ' +
                        'serão entregue(s). Para validar a reentrega, clique na opção ' +
                        '"Histórico de Entrega" na tela de Não Recebidas.');
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
    ReentregarResumoModalService.$inject = ['$log', '$q'];
})();

/**
 * Created by ATILLA on 28/01/2016
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .controller('RegistrarEntradaModalController', RegistrarEntradaModalController);

    /** @ngInject */
    function RegistrarEntradaModalController($uibModalInstance, selectedRows, ModalUtil, RegistrarEntradaModalService) {
        var vm = this;

        vm.docs = selectedRows;
        vm.quantidadeItens = vm.docs.length;

        vm.registrarEntrada = registrarEntrada;
        vm.cancelar = cancelar;

        /**
         * Registra a entrada dos documentos
         */
        function registrarEntrada() {
            RegistrarEntradaModalService.registrarEntrada(vm.docs).then(function (result) {
                ModalUtil.msgSuccess(result);
                $uibModalInstance.close();
            }).catch(function (reason) {
                ModalUtil.msgError(reason);
                $uibModalInstance.close();
            });
        }

        /**
         * Fecha o modal
         */
        function cancelar() {
            vm.rows = null;
            $uibModalInstance.close();
        }
    }
    RegistrarEntradaModalController.$inject = ['$uibModalInstance', 'selectedRows', 'ModalUtil', 'RegistrarEntradaModalService'];
})();

/**
 * Service responsável por consultar a API para registrar entrada
 *
 * Created by ATILLA on 09/03/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .service('RegistrarEntradaModalService', RegistrarEntradaModalService);

    /** @ngInject */
    function RegistrarEntradaModalService($log, $q) {
        return {
            registrarEntrada: registrarEntrada
        };

        /**
         * Registra a entrada dos documentos
         *
         * @param dfe
         *          Documentos a serem registrados
         */
        function registrarEntrada(dfe) {
            return $q(function(resolve, reject) {
                try {
                    $log.debug(dfe);
                    resolve('Entrada registrada com sucesso!');
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
    RegistrarEntradaModalService.$inject = ['$log', '$q'];
})();

/**
 * Modal para Reprocessar Documentos
 *
 * Created by ATILLA on 19/02/2016
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .controller('ReprocessarModalController', ReprocessarModalController);

    /** @ngInject */
    function ReprocessarModalController($uibModalInstance, selectedRows, ModalUtil, ReprocessarModalService) {
        var vm = this;

        vm.docs = selectedRows;
        vm.quantidadeItens = vm.docs.length;

        vm.reprocessar = reprocessar;
        vm.cancelar = cancelar;

        function reprocessar() {
            ReprocessarModalService.reprocessar(vm.docs).then(function (result) {
                ModalUtil.msgSuccess(result);
                $uibModalInstance.close();
            }).catch(function (reason) {
                ModalUtil.msgError(reason);
                $uibModalInstance.close();
            });
        }

        function cancelar () {
            vm.docs = null;
            $uibModalInstance.dismiss('cancel');
        }
    }
    ReprocessarModalController.$inject = ['$uibModalInstance', 'selectedRows', 'ModalUtil', 'ReprocessarModalService'];
})();

/**
 * Service responsável por consultar a API para reprocessar documentos
 *
 * Created by ATILLA on 09/03/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .service('ReprocessarModalService', ReprocessarModalService);

    /** @ngInject */
    function ReprocessarModalService($log, $q) {
        return {
            reprocessar: reprocessar
        };

        /**
         * Reprocessa os documentos
         *
         * @param dfe
         *          Documentos a serem reprocessados
         */
        function reprocessar(dfe) {
            return $q(function(resolve, reject) {
                try {
                    $log.debug(dfe);
                    resolve('Arquivo(s) Reprocessado(s) com sucesso! ' +
                        'Faça uma nova consulta para visualizar o status atualizado. ' +
                        'Você pode também reconsultar o(s) status desse(s) documento(s) na Sefaz.');
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
    ReprocessarModalService.$inject = ['$log', '$q'];
})();

/**
 * Modal para geração de Retorno de Autorização
 *
 * Created by ATILLA on 28/01/2016
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .controller('RetornoAutorizacaoModalController', RetornoAutorizacaoModalController);

    /** @ngInject */
    function RetornoAutorizacaoModalController($uibModalInstance, selectedRows, ModalUtil,
                                               RetornoAutorizacaoModalService) {
        var vm = this;

        vm.docs = selectedRows;
        vm.quantidadeItens = vm.docs.length;

        vm.gerarRetorno = gerarRetorno;
        vm.cancelar = cancelar;

        /**
         * Gera retorno de autorização dos arquivos selecionados
         */
        function gerarRetorno() {
            RetornoAutorizacaoModalService.gerarRetorno(vm.docs).then(function (result) {
                ModalUtil.msgSuccess(result);
                $uibModalInstance.close();
            }).catch(function (reason) {
                ModalUtil.msgError(reason);
                $uibModalInstance.close();
            });
        }

        /**
         * Fecha o modal de gerar retorno
         */
        function cancelar() {
            vm.docs = null;
            $uibModalInstance.dismiss('cancel');
        }
    }
    RetornoAutorizacaoModalController.$inject = ['$uibModalInstance', 'selectedRows', 'ModalUtil', 'RetornoAutorizacaoModalService'];
})();

/**
 * Service responsável por consultar a API para gerar retorno de autorização
 *
 * Created by ATILLA on 09/03/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .service('RetornoAutorizacaoModalService', RetornoAutorizacaoModalService);

    /** @ngInject */
    function RetornoAutorizacaoModalService($log, $q) {
        return {
            gerarRetorno: gerarRetorno
        };

        /**
         * Gera retorno de autorização dos documentos
         *
         * @param dfe
         *          Documentos a gerar retorno de autorização
         */
        function gerarRetorno(dfe) {
            return $q(function(resolve, reject) {
                try {
                    $log.debug(dfe);
                    resolve('Retorno de Autorização do(s) Arquivo(s) Gerado(s) com sucesso! ' +
                        'Faça uma nova consulta para visualizar o status atualizado. ' +
                        'Você pode também reconsultar o(s) status desse(s) documento(s) na Sefaz.');
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
    RetornoAutorizacaoModalService.$inject = ['$log', '$q'];
})();

/**
 * Controlador do Modal de Gerar Retorno de Eventos.
 *
 * Created by ATILLA on 28/01/2016
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .controller('RetornoEventosModalController', RetornoEventosModalController);

    /** @ngInject */
    function RetornoEventosModalController($uibModalInstance, selectedRows, ModalUtil, RetornoEventosModalService) {
        var vm = this;

        vm.docs = selectedRows;
        vm.quantidadeItens = vm.docs.length;

        vm.gerarRetorno = gerarRetorno;
        vm.cancelar = cancelar;

        /**
         * Gera retorno de eventos dos arquivos selecionados
         */
        function gerarRetorno() {
            RetornoEventosModalService.gerarRetorno(vm.docs).then(function (result) {
                ModalUtil.msgSuccess(result);
                $uibModalInstance.close();
            }).catch(function (reason) {
                ModalUtil.msgError(reason);
                $uibModalInstance.close();
            });
        }

        /**
         * Fecha o modal de gerar retorno
         */
        function cancelar() {
            vm.docs = null;
            $uibModalInstance.dismiss('cancel');
        }
    }
    RetornoEventosModalController.$inject = ['$uibModalInstance', 'selectedRows', 'ModalUtil', 'RetornoEventosModalService'];
})();

/**
 * Service responsável por consultar a API para gerar retorno de eventos
 *
 * Created by ATILLA on 09/03/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .service('RetornoEventosModalService', RetornoEventosModalService);

    /** @ngInject */
    function RetornoEventosModalService($log, $q) {
        return {
            gerarRetorno: gerarRetorno
        };

        /**
         * Gera retorno de eventos dos documentos
         *
         * @param dfe
         *          Documentos a gerar retorno de eventos
         */
        function gerarRetorno(dfe) {
            return $q(function(resolve, reject) {
                try {
                    $log.debug(dfe);
                    resolve('Retorno de Evento(s) do(s) Arquivo(s) Gerado(s) com sucesso! ' +
                        'Faça uma nova consulta para visualizar o status atualizado. ' +
                        'Você pode também reconsultar o(s) status desse(s) documento(s) na Sefaz.');
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
    RetornoEventosModalService.$inject = ['$log', '$q'];
})();

/**
 * Controlador do modal de revalidar arquivos
 *
 * Created by ATILLA on 28/01/2016
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .controller('RevalidarArquivoModalController', RevalidarArquivoModalController);

    /** @ngInject */
    function RevalidarArquivoModalController($uibModalInstance, selectedRows, ModalUtil, RevalidarArquivoModalService) {
        var vm = this;

        vm.docs = selectedRows;
        vm.quantidadeItens = vm.docs.length;

        vm.revalidar = revalidar;
        vm.cancelar = cancelar;

        /**
         * Revalida os arquivos selecionados
         */
        function revalidar() {
            RevalidarArquivoModalService.revalidar(vm.docs).then(function (result) {
                ModalUtil.msgSuccess(result);
                $uibModalInstance.close();
            }).catch(function (reason) {
                ModalUtil.msgError(reason);
                $uibModalInstance.close();
            });
        }

        /**
         * Fecha o modal de gerar retorno
         */
        function cancelar() {
            vm.docs = null;
            $uibModalInstance.dismiss('cancel');
        }
    }
    RevalidarArquivoModalController.$inject = ['$uibModalInstance', 'selectedRows', 'ModalUtil', 'RevalidarArquivoModalService'];
})();

/**
 * Service responsável por consultar a API para revalidar arquivos
 *
 * Created by ATILLA on 09/03/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .service('RevalidarArquivoModalService', RevalidarArquivoModalService);

    /** @ngInject */
    function RevalidarArquivoModalService($log, $q) {
        return {
            revalidar: revalidar
        };

        /**
         * Revalida os arquivos recebidos
         *
         * @param dfe
         *          Documentos a serem revalidados
         */
        function revalidar(dfe) {
            return $q(function(resolve, reject) {
                try {
                    $log.debug(dfe);
                    resolve('Arquivo(s) Revalidado(s) com sucesso! Faça uma nova consulta para visualizar o ' +
                        'status atualizado. Você pode também reconsultar o(s) status desse(s) documento(s) na Sefaz.');
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
    RevalidarArquivoModalService.$inject = ['$log', '$q'];
})();

/**
 * Controller responsável por abrir um modal para efetuar o upload de arquivos XML.
 *
 * Created by ATILLA on 10/02/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .controller('UploadXMLModalController', UploadXMLModalController);

    /** @ngInject */
    function UploadXMLModalController($uibModalInstance, $scope, UploadXMLModalService, OobjToastService) {
        // constantes usados apenas neste controller
        var UM_ITEM = 1;
        var MAX_FILES_PERMITIDO = 40;
        var LENGTH_ARRAY_VAZIO = 0;
        var ZERO_POR_CENTO = 0;
        var CEM_POR_CENTO = 100;

        // $scope
        var vm = this;

        // variaveis e functions usadas na tela - scope do controller
        vm.files = null;
        vm.fileWrappers = null;
        vm.allCompleted = false;
        vm.deveCancelar = false;
        vm.remover = remover;
        vm.cancelar = cancelar;
        vm.upload = upload;
        vm.fecharModal = fecharModal;
        vm.desfazerCancelamento = desfazerCancelamento;
        vm.cancelarUploads = cancelarUploads;
        vm.success = success;

        // Watch necessário para adicionar os arquivos selecionados em Wrappers
        $scope.$watch('vm.files', wrapFiles);

        /**
         * Adiciona cada arquivo selecionado em um Wrapper e adiciona todos em um array de wrappers
         */
        function wrapFiles() {
            // verifica se há arquivos selecionados
            if (vm.files) {
                // prepara o array para novos arquivos de seleção
                vm.fileWrappers = [];
                vm.limiteExcedido = false;

                // adiciona cada arquivo em um wrapper
                vm.files.forEach(function(file) {
                    // máximo permitido é 40
                    if (vm.fileWrappers.length < MAX_FILES_PERMITIDO) {
                        vm.fileWrappers.push(new FileWrapper(file));
                    } else {
                        // nao faz upload dos arquivos excedentes
                        vm.limiteExcedido = true;
                    }
                });

                // alerta o usuário que o máximo de arquivos permitido foi excedido
                if (vm.limiteExcedido === true) {
                    OobjToastService.msgWarning('O limite máximo para upload é de 40 arquivos.');
                }

                // novos arquivos adicionados, 0% concluído
                vm.allCompleted = false;
            }
        }

        /**
         * Funcao executada quando o usuário termina de selecionar arquivos e clicka em Fazer Upload
         */
        function upload() {
            // Valida se há arquivos selecionados antes da chamada ao service de upload
            if (vm.fileWrappers && vm.fileWrappers.length > LENGTH_ARRAY_VAZIO) {
                UploadXMLModalService.uploadMultiple(vm.fileWrappers, success, error);
            } else {
                OobjToastService.msgWarning('É necessário selecionar arquivo(s) para fazer upload!');
            }
        }

        /**
         * Remove o item selecionado e aborta o upload caso esteja em andamento
         *
         * @param index
         *          Posição no array do file que deve ser removido
         */
        function remover(index) {
            // obtem o arquivo selecionado (wrapper)
            var wrap = vm.fileWrappers[index];

            // verifica se o upload está em andamento - ainda não está em 100%
            if (wrap.upload && wrap.file.progress < CEM_POR_CENTO) {
                // aborta o upload em andamento
                wrap.upload.abort();
            }

            // remove o arquivo da lista
            vm.fileWrappers.splice(index, UM_ITEM);
        }

        /**
         * Callback executando quando cada upload é concluído
         */
        function success() {
            // total requerido em porcentagem - 100%
            var totalPercentRequired = vm.fileWrappers.length * CEM_POR_CENTO;
            var totalPercentAtual = ZERO_POR_CENTO;

            // calcula a porcentagem de uploads concluídos
            vm.fileWrappers.forEach(function (wrap) {
                // soma a porcentagem do arquivo com a porcentagem total atual
                totalPercentAtual += wrap.file.progress;
            });

            // verifica se todos os uploads foram concluídos (se é 100%)
            if (totalPercentRequired === totalPercentAtual) {
                vm.allCompleted = true;
            }
        }

        /**
         * Callback de erro executando quando há uma falha no upload
         *
         * @param erro
         *          String/Objeto com a descrição do erro
         */
        function error(erro) {
            if (typeof erro === 'string') {
                OobjToastService.msgError(erro);
            }
        }

        /**
         * Funcao executada quando o usuário clica no botão Cancelar
         */
        function cancelar() {
            vm.deveCancelar = true;
        }

        /**
         * Funcao executada quando o usuário NÃO confirma o cancelamento
         */
        function desfazerCancelamento() {
            vm.deveCancelar = false;
        }

        /**
         * Cancela todos os uploads em andamento
         */
        function cancelarUploads() {
            // efetua o abort do upload apenas se o cancelamento foi solicitado pelo botão Cancelar especificamente
            if (vm.deveCancelar === true && vm.fileWrappers) {
                vm.fileWrappers.forEach(function (wrap) {
                    // realiza o abort do upload apenas se ainda não foi concluído
                    if (wrap.upload && wrap.file.progress < CEM_POR_CENTO) {
                        wrap.upload.abort();
                    }
                });

                // reseta os vetores de arquivos para upload
                vm.files = null;
                vm.fileWrappers = null;
            }

            vm.fecharModal();
        }

        /**
         * Fecha o Modal de Upload de XML
         */
        function fecharModal() {
            $uibModalInstance.dismiss('cancel');
        }

        /**
         * @param file
         *          Arquivo do usuário a ser feito upload
         * @param upload
         *          Função que faz chamada a API para fazer upload do arquivo
         * @constructor
         */
        function FileWrapper(file, upload) {
            this.file = file;
            this.upload = upload;
        }
    }
    UploadXMLModalController.$inject = ['$uibModalInstance', '$scope', 'UploadXMLModalService', 'OobjToastService'];
})();

/**
 * Service responsável por fazer upload de arquivos no backend
 *
 * Created by ATILLA on 10/02/2016.
 */
(function () {
    'use strict';

    angular
        .module('oobj-directives')
        .service('UploadXMLModalService', UploadXMLModalService);

    /** @ngInject */
    function UploadXMLModalService(Upload, $log) {
        // progresso inicial = 0, final = 100
        var PROGRESS_INICIAL = 0;
        var PROGRESS_FINAL = 100;

        return {
            uploadMultiple: uploadMultiple,
            upload: upload
        };

        /**
         * Funcao para efetuar o upload de multiplos arquivos
         *
         * @param filesWrapper
         *          Array com os files em Wrappers (@link FileWrapper)
         * @param success
         *          Callback a ser executado quando cada upload for finalizado
         * @param error
         *          Callback a ser executado quando algum erro ocorrer durante o upload
         */
        function uploadMultiple(filesWrapper, success, error) {
            if (filesWrapper) {
                filesWrapper.forEach(function(fileWrapper) {
                    upload(fileWrapper, success, error);
                });
            }
        }

        /**
         * Funcao para efetuar o upload de um arquivo
         *
         * @param fileWrapper
         *          File a ser enviado para upload encapsulado em um Wrapper (@link FileWrapper)
         * @param success
         *          Callback a ser executado quando cada upload for finalizado
         * @param error
         *          Callback a ser executado quando algum erro ocorrer durante o upload
         */
        function upload(fileWrapper, success, error) {
            // define funções default para lidar com o upload do arquivo
            success = success || successDefault;
            error = error || errorDefault;

            // verifica se já foi feito upload do mesmo
            if (angular.isUndefined(fileWrapper.file.progress) || fileWrapper.file.progress < PROGRESS_FINAL) {
                fileWrapper.file.progress = PROGRESS_INICIAL;

                // sets the upload service definition into the FileWrapper
                fileWrapper.upload = defineUpload(fileWrapper.file);

                // faz o upload do arquivo na API do Backend
                fileWrapper.upload.then(success, error, progress);
            }
            // dispara o callback de error caso o arquivo tenha sido uploaded
            else if (error) {
                error('Já foi feito o upload do arquivo ' + fileWrapper.file.name);
            }
        }

        /**
         * Define as propriedades para fazer upload de um arquivo numa API
         *
         * @param file
         *          Arquivo a ser enviado para upload na API
         * @returns {*}
         */
        function defineUpload(file) {
            return Upload.upload({
                // url: ENV.API_ENDPOINT + '/upload',
                // API temporária
                url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
                data: {
                    username: 'Painel 2.0',
                    file: file
                }
            });
        }

        /**
         * Default success handler
         *
         * @param resp
         *          HTTPResponse retornado quando o upload de um arquivo é concluído
         */
        function successDefault(resp) {
            $log.debug(resp);
        }

        /**
         * Default progress handler
         *
         * @param event
         *          Evento retornado quando cada chunk é enviado
         */
        function progress(event) {
            event.config.data.file.progress = parseInt(PROGRESS_FINAL * event.loaded / event.total);
        }

        /**
         * Default error handler
         *
         * @param erro
         *          String/Objecto com detalhes do erro
         */
        function errorDefault(erro) {
            $log.error(erro);
        }
    }
    UploadXMLModalService.$inject = ['Upload', '$log'];
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
        return {
            restrict: 'EA',
            transclude: true,
            templateUrl: 'js/directives/oobj-fieldset/oobj-fieldset.html',
            scope: {
                id: '@?',
                colspan: '@?',
                title: '@?'
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
        .directive('oobjFooter', oobjFooter);

    /** @ngInject */
    function oobjFooter() {
        return {
            restrict: 'EA',
            templateUrl: 'js/directives/oobj-footer/oobj-footer.html',
            scope: {
                version: '@?',
                generatedData: '@?',
                year: '@?'
            },
            link: link
        };

        function link(scope) {
            scope.version = '0.0.1';
            scope.generatedData = new Date();
            scope.year = new Date();
        }
    }
})();
/**
 * Created by ATILLA on 27/01/2016
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .controller('EventoDestinatarioModalController', EventoDestinatarioModalController);

    EventoDestinatarioModalController.$inject = ['$uibModalInstance', '$filter', '$window', 'selectedRow'];

    /** @ngInject */
    function EventoDestinatarioModalController($uibModalInstance, $filter, $window, selectedRow) {
        var vm = this;
        
        vm.dfe = selectedRow;

        /** temporário */
        mockarEventoDestinatario(vm.dfe);

        vm.saibaMais = function () {
            $window.open(vm.dfe.eventoDestinatario.linkSaibaMais, '_self');
            vm.dfe = null;
            $uibModalInstance.close();
        };

        vm.acao = function () {
            $window.open(vm.dfe.eventoDestinatario.linkAcao, '_self');
            vm.dfe = null;
            $uibModalInstance.close();
        };

        vm.cancel = function () {
            vm.dfe = null;
            $uibModalInstance.dismiss('cancel');
        };

        /** temporário */
        function Status(titulo, descricao, icone, cor, linkSaibaMais, linkAcao) {
            this.titulo = titulo;
            this.descricao = descricao;
            this.icone = icone;
            this.cor = cor;
            this.linkSaibaMais = linkSaibaMais;
            this.linkAcao = linkAcao;
        }

        /** temporário */
        function mockarEventoDestinatario(dfe) {
            dfe.eventoDestinatario = new Status('Ciência da Operação',
                '<p>Ciência da Operação Homologada<br>' +
                'Data/Hora: ' + $filter('date')(new Date(), 'dd/MM/yyyy hh:MM:ss') + '</p>',
                'fa-hand-pointer-o', '#3498db', 'http://oobj.wiki.br/index.php?title=P%C3%A1gina_principal');
        }
    }
})();

/**
 * Created by ATILLA on 27/01/2016
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .controller('EventoEmitenteModalController', EventoEmitenteModalController);

    EventoEmitenteModalController.$inject = ['$uibModalInstance', '$filter', '$window', 'selectedRow'];

    /** @ngInject */
    function EventoEmitenteModalController($uibModalInstance, $filter, $window, selectedRow) {
        var vm = this;
        
        vm.dfe = selectedRow;

        /** temporário */
        mockarEventoEmitente(vm.dfe);

        vm.saibaMais = function () {
            $window.open(vm.dfe.eventoEmitente.linkSaibaMais, '_self');
            vm.dfe = null;
            $uibModalInstance.close();
        };

        vm.acao = function () {
            $window.open(vm.dfe.eventoEmitente.linkAcao, '_self');
            vm.dfe = null;
            $uibModalInstance.close();
        };

        vm.cancel = function () {
            vm.dfe = null;
            $uibModalInstance.dismiss('cancel');
        };

        /** temporário */
        function Status(titulo, descricao, icone, cor, linkSaibaMais, linkAcao) {
            this.titulo = titulo;
            this.descricao = descricao;
            this.icone = icone;
            this.cor = cor;
            this.linkSaibaMais = linkSaibaMais;
            this.linkAcao = linkAcao;
        }

        /** temporário */
        function mockarEventoEmitente(dfe) {
            dfe.eventoEmitente = new Status('Carta de Correção',
                '<p>Carta de Correção Homologada na SEFAZ<br>' +
                'Data/Hora: ' + $filter('date')(new Date(), 'dd/MM/yyyy hh:MM:ss') + '</p>',
                'fa-comments', '#f1c40f', 'http://oobj.wiki.br/index.php?title=P%C3%A1gina_principal',
                'http://oobj.wiki.br/index.php?title=P%C3%A1gina_principal');
        }
    }
})();

/**
 * Created by ATILLA on 27/01/2016
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .controller('StatusIntegridadeArquivoModalController', StatusIntegridadeArquivoModalController);

    StatusIntegridadeArquivoModalController.$inject = ['$uibModalInstance', '$window', 'selectedRow'];

    /** @ngInject */
    function StatusIntegridadeArquivoModalController($uibModalInstance, $window, selectedRow) {
        var vm = this;
        
        vm.dfe = selectedRow;

        // mock temporário
        mockarStatusIntegridade(vm.dfe);

        vm.saibaMais = function () {
            $window.open(vm.dfe.statusIntegridadeArquivo.linkSaibaMais, '_self');
            vm.dfe = null;
            $uibModalInstance.close();
        };

        vm.acao = function () {
            $window.open(vm.dfe.statusIntegridadeArquivo.linkAcao, '_self');
            vm.dfe = null;
            $uibModalInstance.close();
        };

        vm.cancel = function () {
            vm.dfe = null;
            $uibModalInstance.dismiss('cancel');
        };

        /** temporário */
        function Status(titulo, descricao, icone, cor, linkSaibaMais, linkAcao) {
            this.titulo = titulo;
            this.descricao = descricao;
            this.icone = icone;
            this.cor = cor;
            this.linkSaibaMais = linkSaibaMais;
            this.linkAcao = linkAcao;
        }

        /** temporário */
        function mockarStatusIntegridade(dfe) {
            dfe.statusIntegridadeArquivo = new Status('XML com falha estrutural',
                '<p>Indica que o arquivo XML possui alguma falha estrutural de acordo com o <br>' +
                'schema estabelecido pela Sefaz. Para corrigir, solicite ao fornecedor o arquivo  <br>' +
                'XML com estrutura válida ou realize o download direto da Sefaz (possível  <br>' +
                'apenas com a manifestação do destinatário).</p>',
                'fa-file-code-o', '#e74c3c', 'http://oobj.wiki.br/index.php?title=P%C3%A1gina_principal',
                'http://oobj.wiki.br/index.php?title=P%C3%A1gina_principal');
        }
    }
})();

/**
 * Created by ATILLA on 27/01/2016
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .controller('SituacaoSefazModalController', SituacaoSefazModalController);

    SituacaoSefazModalController.$inject = ['$uibModalInstance', '$filter', '$window', 'selectedRow'];

    /** @ngInject */
    function SituacaoSefazModalController($uibModalInstance, $filter, $window, selectedRow) {
        var vm = this;
        
        vm.dfe = selectedRow;

        /** temporário */
        mockarSituacaoSefaz(vm.dfe);

        vm.saibaMais = function () {
            $window.open(vm.dfe.situacaoSefaz.linkSaibaMais, '_self');
            vm.dfe = null;
            $uibModalInstance.close();
        };

        vm.acao = function () {
            $window.open(vm.dfe.situacaoSefaz.linkAcao, '_self');
            vm.dfe = null;
            $uibModalInstance.close();
        };

        vm.cancel = function () {
            vm.dfe = null;
            $uibModalInstance.dismiss('cancel');
        };

        /** temporário */
        function Status(titulo, descricao, icone, cor, linkSaibaMais, linkAcao) {
            this.titulo = titulo;
            this.descricao = descricao;
            this.icone = icone;
            this.cor = cor;
            this.linkSaibaMais = linkSaibaMais;
            this.linkAcao = linkAcao;
        }

        /** temporário */
        function mockarSituacaoSefaz(dfe) {
            dfe.situacaoSefaz = new Status('Autorizado',
                '<p>Documento Autorizado na SEFAZ<br>' +
                'Data/Hora: ' + $filter('date')(new Date(), 'dd/MM/yyyy hh:MM:ss') + '</p>',
                'fa-check', '#2ecc71', 'http://oobj.wiki.br/index.php?title=P%C3%A1gina_principal');
        }
    }
})();

/**
 * Created by Ricardo on 04/02/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .factory('OobjColumnsFactory', OobjColumnsFactory);

    /** @ngInject */
    function OobjColumnsFactory($filter, $templateCache, $uibModal) {

        return {
            newColumnCompany : newColumnCompany,
            newColumnReal : newColumnReal,
            newColumn : newColumn,
            newColumnDate : newColumnDate,
            newColumnCicloDeVida : newColumnCicloDeVida,
            newColumnOptions : newColumnOptions,
            newColumnNumeroSerie : newColumnNumeroSerie,
            newCFeColumnOptions : newCFeColumnOptions,
            criarConfiguracaoCicloDeVida : criarConfiguracaoCicloDeVida
        };

        function newColumnCompany(name, field, width, sortColumn, headerCellClass,
                                  cellFilter, gridMenuShowHideColumns) {
            var column = {};
            column.name = name;
            column.sortColumn = sortColumn;
            column.field = field;
            column.width = width;
            column.headerCellClass = headerCellClass || 'ui-grid-header-center';
            column.cellTemplate =
                $templateCache.get('js/directives/oobj-grid/grid-columns/oobj-razao-social-cnpj-column.tpls.html');
            column.cellClass = 'ui-grid-vleft';
            column.cellFilter = cellFilter;
            column.enableSorting = true;
            column.sortCellFiltered = true;

            if (angular.isUndefined(gridMenuShowHideColumns)) {
                column.gridMenuShowHideColumns = true;
            } else {
                column.gridMenuShowHideColumns = gridMenuShowHideColumns;
            }

            column.mask = mask;

            return column;
        }

        /**
         * Cria o objeto responsável por configurar quais colunas aparecerão no ciclo de vida
         * Por padrão, um construtor vazio, mostar toda as colunas
         *
         * @param mostrarIntegridade
         * @param mostrarSituacaoSefaz
         * @param mostrarEventoEmitente
         * @param mostrarEventoDestinatario
         * @returns {{integridade: boolean, situacaoSefaz: boolean,
         *              eventoEmitente: boolean, eventoDestinatario: boolean}}
         */
        function criarConfiguracaoCicloDeVida(mostrarIntegridade, mostrarSituacaoSefaz,
                                   mostrarEventoEmitente, mostrarEventoDestinatario) {
            return {
                integridade : (mostrarIntegridade !== false),
                situacaoSefaz : (mostrarSituacaoSefaz !== false),
                eventoEmitente : (mostrarEventoEmitente !== false),
                eventoDestinatario : (mostrarEventoDestinatario !== false)
            };
        }

        function newColumnCicloDeVida(name, field, gridScope, width, cicloDeVidaConfig, headerCellClass,
                                         cellFilter, gridMenuShowHideColumns) {

            var column = {};

            column.gridScope = gridScope;
            column.name = name;
            column.field = field;
            column.width = width || 150;
            column.headerCellClass = headerCellClass || 'ui-grid-header-center';
            column.cellTemplate =
                $templateCache.get('js/directives/oobj-grid/grid-columns/ciclo-vida/oobj-column-ciclo-vida.html');
            column.cellClass = 'ui-grid-vstatus-doc';
            column.cellFilter = cellFilter;
            column.enableSorting = false;

            if (angular.isUndefined(gridMenuShowHideColumns)) {
                column.gridMenuShowHideColumns = true;
            } else {
                column.gridMenuShowHideColumns = gridMenuShowHideColumns;
            }

            if (column.gridScope) {
                column.gridScope.cicloVidaConfig = cicloDeVidaConfig ||
                    criarConfiguracaoCicloDeVida(true, true, true, true);

                column.gridScope.openModalIntegridadeArquivo = openModalIntegridadeArquivo;
                column.gridScope.openModalSituacaoSefaz = openModalSituacaoSefaz;
                column.gridScope.openModalEventoDestinatario = openModalEventoDestinatario;
                column.gridScope.openModalEventoEmitente = openModalEventoEmitente;
            }

            column.mask = mask;

            return column;
        }

        function newColumnReal(name, field, width, sortColumn, headerCellClass, cellTemplate, cellClass, enableSorting,
                 gridMenuShowHideColumns) {
            var column = {};
            column.name = name;
            column.field = field;
            column.width = width;
            column.sortColumn = sortColumn;
            column.headerCellClass = headerCellClass || 'ui-grid-header-center';
            column.cellTemplate = cellTemplate || '';
            column.cellClass = cellClass || 'ui-grid-vcenter';
            column.cellFilter = 'currency:"R$ "';
            column.enableSorting = enableSorting;

            if (angular.isUndefined(gridMenuShowHideColumns)) {
                column.gridMenuShowHideColumns = true;
            } else {
                column.gridMenuShowHideColumns = gridMenuShowHideColumns;
            }

            column.mask = mask;
            return column;
        }

        function newColumn(name, field, width, headerCellClass, cellTemplate, cellClass, enableSorting,
                               gridMenuShowHideColumns) {
            var column = {};
            column.name = name;
            column.field = field;
            column.width = width;
            column.headerCellClass = headerCellClass || 'ui-grid-header-center';
            column.cellTemplate = cellTemplate || '';
            column.cellClass = cellClass || 'ui-grid-vcenter';
            column.enableSorting = enableSorting;

            if (angular.isUndefined(gridMenuShowHideColumns)) {
                column.gridMenuShowHideColumns = true;
            } else {
                column.gridMenuShowHideColumns = gridMenuShowHideColumns;
            }

            column.mask = mask;
            return column;
        }

        function newColumnDate(name, field, width, sortColumn, cellFilter, headerCellClass, cellTemplate, cellClass,
                               enableSorting, gridMenuShowHideColumns) {
            var column = {};
            column.name = name;
            column.field = field;
            column.width = width;
            column.sortColumn = sortColumn;
            column.headerCellClass = headerCellClass || 'ui-grid-header-center';
            column.cellTemplate = cellTemplate || '';
            column.cellClass = cellClass || 'ui-grid-vcenter-middle';
            column.cellFilter = cellFilter || 'date:"dd/MM/yyyy"';
            column.enableSorting = enableSorting;
            column.cellTemplate = '<div class="ui-grid-cell-contents">' +
                '{{ COL_FIELD | date:\'dd/MM/yyyy\' }}<br>{{ COL_FIELD | date:\'HH:mm\' }}</div>';

            if (angular.isUndefined(gridMenuShowHideColumns)) {
                column.gridMenuShowHideColumns = true;
            } else {
                column.gridMenuShowHideColumns = gridMenuShowHideColumns;
            }

            column.mask = mask;
            return column;
        }

        function newColumnOptions(gridScope, name, width, headerCellClass) {
            var column = {};
            column.gridScope = gridScope;
            column.name = name || 'Opções';
            column.field = '';
            column.width = width || 89;
            column.headerCellClass = headerCellClass || 'ui-grid-header-center';
            column.cellTemplate =
                $templateCache.get('js/directives/oobj-grid/grid-columns/options/oobj-column-options-nfe.html');
            column.cellClass = null;
            column.cellFilter = null;
            column.enableSorting = false;
            column.gridMenuShowHideColumns = false;

            if (column.gridScope) {
                column.gridScope.openModalDetalhesNFe = openModalDetalhesNFe;
                column.gridScope.openModalEventosVinculados = openModalEventosVinculados;
                column.gridScope.openModalHistoricoEntrega = openModalHistoricoEntrega;
                column.gridScope.openModalObservacoes = openModalObservacoes;
            }
            return column;
        }

        function newCFeColumnOptions(gridScope, width, headerCellClass) {
            var column = {
                gridScope: gridScope,
                name: 'Opções',
                width: width || 70,
                headerCellClass: headerCellClass || 'ui-grid-header-center',
                cellClass: null,
                cellFilter: null,
                enableSorting: false,
                gridMenuShowHideColumns: false,
                cellTemplate:
                    $templateCache.get('js/directives/oobj-grid/grid-columns/options/oobj-column-options-cfe.html')
            };

            if (column.gridScope) {
                column.gridScope.openModalDetalhes = openModalDetalhesCFe;
                column.gridScope.openModalEventosVinculados = openModalEventosVinculados;
                column.gridScope.openModalHistoricoEntrega = openModalHistoricoEntrega;
                column.gridScope.openModalObservacoes = openModalObservacoes;
            }
            return column;
        }

        function newColumnNumeroSerie(name, field, width, sortColumn, headerCellClass, cellClass, cellFilter,
                                      enableSorting, gridMenuShowHideColumns) {
            var column = {};
            column.name = name;
            column.field = field;
            column.width = width;
            column.sortColumn = sortColumn;
            column.headerCellClass = headerCellClass || 'ui-grid-header-center';
            column.cellTemplate =
                $templateCache.get('js/directives/oobj-grid/grid-columns/oobj-num-serie-column.tpls.html');
            column.cellClass = cellClass || 'ui-grid-vcenter';
            column.cellFilter = cellFilter;
            column.enableSorting = enableSorting;

            if (angular.isUndefined(gridMenuShowHideColumns)) {
                column.gridMenuShowHideColumns = true;
            } else {
                column.gridMenuShowHideColumns = gridMenuShowHideColumns;
            }

            column.mask = mask;
            return column;
        }

        function openModalIntegridadeArquivo(row) {
            openModal(row, 'StatusIntegridadeArquivoModalController',
                'js/directives/oobj-grid/grid-columns/ciclo-vida/integridade-arquivo/' +
                'status-integridade-arquivo.modal.html');
        }

        function openModalSituacaoSefaz(row) {
            openModal(row, 'SituacaoSefazModalController',
                'js/directives/oobj-grid/grid-columns/ciclo-vida/situacao-sefaz/situacao-sefaz.modal.html');
        }

        function openModalEventoDestinatario(row) {
            openModal(row, 'EventoDestinatarioModalController',
                'js/directives/oobj-grid/grid-columns/ciclo-vida/evento-destinatario/evento-destinatario.modal.html');
        }

        function openModalEventoEmitente(row) {
            openModal(row, 'EventoEmitenteModalController',
                'js/directives/oobj-grid/grid-columns/ciclo-vida/evento-emitente/evento-emitente.modal.html');
        }

        function openModalDetalhesNFe(row) {
            openModal(row, 'DetalhesNfeController',
                'js/directives/oobj-grid/grid-columns/options/detalhes-nfe/detalhes-nfe.modal.html', 'lg');
        }

        function openModalDetalhesCFe(row) {
            openModal(row, 'DetalhesCFeController',
                'views/cfe-emissao/detalhes-cfe.modal.html', 'lg');
        }

        function openModalEventosVinculados(row) {
            openModal(row, 'EventosVinculadosModalController',
                'js/directives/oobj-grid/grid-columns/options/eventos-vinculados/eventos-vinculados.modal.html', 'lg');
        }

        function openModalObservacoes(row) {
            openModal(row, 'ObservacoesModalController',
                'js/directives/oobj-grid/grid-columns/options/observacoes/observacoes.modal.html', 'lg');
        }

        function openModalHistoricoEntrega(row) {
            openModal(row, 'HistoricoEntregaModalController',
                'js/directives/oobj-grid/grid-columns/options/historico-entrega/historico-entrega.modal.html', 'lg');
        }

        function openModal(row, controller, templateUrl, size) {
            $uibModal.open({
                controller: controller,
                controllerAs: 'vm',
                templateUrl: templateUrl,
                size: size,
                // usado para obter o item selecionado na grid
                resolve: {
                    selectedRow: function() { return row.entity; }
                }
            });
        }

        function mask(value, pattern) {
            return $filter(pattern)(value);
        }
    }
    OobjColumnsFactory.$inject = ['$filter', '$templateCache', '$uibModal'];
})();

/**
 * Controller responsável por consultar e exibir os detalhes de uma determinada NF-e.
 *
 * Created by Danilo on 19/01/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .controller('DetalhesNfeController', DetalhesNfeController);

    /** @ngInject */
    function DetalhesNfeController($uibModalInstance, selectedRow,
                                   DetalhesNfeService, ModeloDocumento, OobjToastService) {
        var vm = this;

        vm.modeloDocumento = ModeloDocumento.NFE;

        vm.title = 'Detalhes da NF-e';
        vm.row = selectedRow;
        vm.dfe = {};
        vm.detalhesProduto = [];

        // Executa a consulta dos dados da NF-e no back-end.
        getNfe(vm.row.id);

        vm.cancel = function () {
            vm.dfe = null;
            $uibModalInstance.dismiss('cancel');
        };

        /**
         * Obtém os detalhes de um produto específico.
         *
         * @param index o indice do produto na NF-e (começa em 0)
         */
        vm.getDetalhesProduto = function (index) {
            if (vm.detalhesProduto[index] === undefined) {
                DetalhesNfeService.getDetalhesProduto(vm.dfe.id, index)
                    .then(successHandler).catch(errorHandler);
            }

            function successHandler(response) {
                vm.detalhesProduto[index] = response.data;
            }

            function errorHandler() {
                OobjToastService.msgError('Houve uma falha ao obter os detalhes do produto. ' +
                    'Tente novamente mais tarde.', 'Falha!');
            }
        };

        /**
         * Obtém os detalhes da NF-e.
         *
         * @param id o ID da NF-e na base de dados
         */
        function getNfe(id) {
            DetalhesNfeService.getDetalhesNfe(id).then(successHandler).catch(errorHandler);

            function successHandler(response) {
                vm.dfe = response.data;
            }

            function errorHandler() {
                OobjToastService.msgError('Houve uma falha ao obter os detalhes da NF-e. ' +
                    'Tente novamente mais tarde.', 'Falha!');
            }
        }
    }
    DetalhesNfeController.$inject = ['$uibModalInstance', 'selectedRow', 'DetalhesNfeService', 'ModeloDocumento', 'OobjToastService'];
})();

/**
 * Service responsável por consultar os detalhes da NF-e e dos produtos da NF-e no back-end.
 *
 * Created by Danilo on 25/01/2016.
 */
(function () {
    'use strict';

    angular.module('oobj-directives').service('DetalhesNfeService', DetalhesNfeService);

    /** @ngInject */
    function DetalhesNfeService($http, ENV) {
        return {
            getDetalhesNfe: getDetalhesNfe,
            getDetalhesProduto: getDetalhesProduto
        };

        /**
         * Obtém os detalhes da NF-e.
         *
         * @param idNfe o ID da NF-e na base de dados.
         * @returns o JSON do DFe
         */
        function getDetalhesNfe(idNfe) {
            return $http.get(ENV.API_ENDPOINT + '/details-nfe/detalhes-nfe', { params: { idNfe: idNfe }});
        }

        /**
         * Obtém os detalhes de um produto específico da NF-e.
         *
         * @param idNfe o ID da NF-e na base de dados
         * @param idProduto o ID do produto na NF-e (começa em 0)
         * @returns o JSON com os detalhes do produto
         */
        function getDetalhesProduto(idNfe, idProduto) {
            return $http.get(ENV.API_ENDPOINT + '/details-nfe/detalhes-produto',
                {params: {
                    idNfe: idNfe,
                    idProduto: idProduto
                }});
        }
    }
    DetalhesNfeService.$inject = ['$http', 'ENV'];
})();

/**
 * Controller responsável por consultar e exibir eventos vinculados a um determinado documento.
 *
 * Created by ATILLA on 01/02/2016
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .controller('EventosVinculadosModalController', EventosVinculadosModalController);

    EventosVinculadosModalController.$inject = ['$scope', '$uibModalInstance', 'selectedRow', 'ModalUtil',
        'EventosVinculadosModalService'];

    /** @ngInject */
    function EventosVinculadosModalController($scope, $uibModalInstance, selectedRow, ModalUtil,
                                              EventosVinculadosModalService){
        var vm = this;

        vm.dfe = selectedRow;
        vm.deveExibirEventosEmitente = true;
        vm.deveExibirEventosDestinatario = true;
        vm.deveExibirEventosSefaz = true;

        addOnChangeExibirEventos();
        buscarEventos();

        vm.downloadPDF = downloadPDF;
        vm.downloadXML = downloadXML;
        vm.cancel = cancel;

        function downloadPDF() {
            ModalUtil.msgSuccess('PDF adicionado na fila de <b>Arquivos para Downloads</b>.');
            $uibModalInstance.close();
        }

        function downloadXML() {
            ModalUtil.msgSuccess('XML adicionado na fila de <b>Arquivos para Downloads</b>.');
            $uibModalInstance.close();
        }

        function cancel() {
            vm.dfe = null;
            $uibModalInstance.dismiss('cancel');
        }

        /**
         * Inicializa os eventos
         */
        function buscarEventos() {
            EventosVinculadosModalService.consultarEventosEmitente(vm.dfe).then(function (eventos) {
                vm.eventosEmitente = eventos;
            });

            EventosVinculadosModalService.consultarEventosDestinatario(vm.dfe).then(function (eventos) {
                vm.eventosDestinatario = eventos;
            });

            EventosVinculadosModalService.consultarEventosSefaz(vm.dfe).then(function (eventos) {
                vm.eventosSefaz = eventos;
            });
        }

        /**
         * Adiciona observers para consultar eventos vinculados (uma espécie de onChange)
         */
        function addOnChangeExibirEventos() {
            // Adiciona watch nos eventos do emitente
            $scope.$watch('vm.deveExibirEventosEmitente', function (newVal) {
                if (newVal === true) {
                    EventosVinculadosModalService.consultarEventosEmitente(vm.dfe).then(function (eventos) {
                        vm.eventosEmitente = eventos;
                    });
                }
            });

            // Adiciona watch nos eventos do destinatário
            $scope.$watch('vm.deveExibirEventosDestinatario', function (newVal) {
                if (newVal === true) {
                    EventosVinculadosModalService.consultarEventosDestinatario(vm.dfe).then(function (eventos) {
                        vm.eventosDestinatario = eventos;
                    });
                }
            });

            // Adiciona watch nos eventos da sefaz
            $scope.$watch('vm.deveExibirEventosSefaz', function (newVal) {
                if (newVal === true) {
                    EventosVinculadosModalService.consultarEventosSefaz(vm.dfe).then(function (eventos) {
                        vm.eventosSefaz = eventos;
                    });
                }
            });
        }
    }
})();

/**
 * Service responsável por consumir a API de consulta por eventos vinculados a um documento.
 *
 * Created by ATILLA on 04/02/2016.
 */
(function () {
    'use strict';

    angular
        .module('oobj-directives')
        .service('EventosVinculadosModalService', EventosVinculadosModalService);

    /** @ngInject */
    function EventosVinculadosModalService($q) {
        return {
            consultarEventosEmitente: consultarEventosEmitente,
            consultarEventosDestinatario: consultarEventosDestinatario,
            consultarEventosSefaz: consultarEventosSefaz
        };

        /**
         * Consulta eventos do emitente
         *
         * @param dfe
         * @returns {Array}
         */
        function consultarEventosEmitente(dfe) {
            return $q(function(resolve, reject) {
                try {
                    var eventos = [];

                    /** mock temporário */
                    eventos.push(new Evento('btn-warning', 'fa-comments', 'Emitente', 'Carta de Correção (110110)',
                        { 'Sequencial': '4', 'Correção': 'Descrição correta do item 1 é REGRIGERANTE BARÉ' }, true, true
                    ));
                    eventos.push(new Evento('btn-warning', 'fa-comments', 'Emitente', 'Carta de Correção (110110)',
                        { 'Sequencial': '3', 'Correção': 'Descrição correta do item 1 é REGRIGERANTE BARÉ' }, false,
                        false
                    ));
                    eventos.push(new Evento('btn-danger', 'fa-times', 'Emitente', 'Cancelamento (110110)',
                        { 'Justificativa': 'Cancelamento de NFe - Erro de digitação' }, true, false
                    ));

                    resolve(eventos);
                } catch (err) {
                    reject(err);
                }
            });
        }

        /**
         * Consulta eventos do Destinatário
         *
         * @param dfe
         * @returns {Array}
         */
        function consultarEventosDestinatario(dfe) {
            return $q(function(resolve, reject) {
                try {
                    var eventos = [];

                    resolve(eventos);
                } catch (err) {
                    reject(err);
                }
            });
        }

        /**
         * Consulta eventos da SEFAZ
         *
         * @param dfe
         * @returns {Array}
         */
        function consultarEventosSefaz(dfe) {
            return $q(function(resolve, reject) {
                try {
                    var eventos = [];

                    /** mock temporário */
                    eventos.push(
                        new Evento('oobj-options-column-btn-gray', 'fa-bullhorn', 'SEFAZ', 'CT-e Autorizado (610600)',
                            {
                                'Modelo': '01 - Rodoviário',
                                'Chave Acesso CT-e': '43151107385111000102555010211602201400048150',
                                'Emitente': 'SOLIDA TRANSPORTE LTDA (CNPJ: 74.167.222/0002-10 / IE: 796011983115)'
                            }, true, false
                        ));

                    resolve(eventos);
                } catch (err) {
                    reject(err);
                }
            });
        }

        /**
         * @constructor
         */
        function Evento(type, icon, autor, tipo, det, vigente, pdf) {
            this.type = type;
            this.icon = icon;
            this.autor = autor;
            this.tipo = tipo;
            this.dataHoraEvento = new Date();
            this.dataHoraRegistro = new Date();
            this.protocolo = '123434131442341';
            this.det = det;
            this.vigente = vigente;
            this.pdf = pdf;
        }
    }
    EventosVinculadosModalService.$inject = ['$q'];
})();

/**
 * Created by Renato Borges on 28/01/2016
 */
(function () {
    'use strict';

    angular
        .module('oobj-directives')
        .controller('HistoricoEntregaModalController', HistoricoEntregaModalController);

    HistoricoEntregaModalController.$inject = ['$uibModalInstance', 'selectedRow'];

    /** @ngInject */
    function HistoricoEntregaModalController($uibModalInstance, selectedRow) {
        var vm = this;

        vm.title = 'Histórico de Entrega da NF-e';
        vm.dfe = selectedRow;

        vm.cancel = function () {
            vm.dfe = null;
            $uibModalInstance.dismiss('cancel');
        };
    }
})();
/**
 * Controller responsável por adicionar observações a um determinado documento.
 *
 * Created by ATILLA on 04/02/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .controller('ObservacoesModalController', ObservacoesModalController);

    /** @ngInject */
    function ObservacoesModalController($uibModalInstance, selectedRow, ObservacoesModalService){
        var vm = this;

        vm.dfe = selectedRow;
        vm.observacao = {};
        vm.habilitarEdicao = false;

        vm.editar = editar;
        vm.salvar = salvar;
        vm.cancelarEdicao = cancelarEdicao;
        vm.cancelar = cancelar;

        consultar();

        /**
         * Habilita ou desabilita a edição da observação
         */
        function editar() {
            vm.habilitarEdicao = !vm.habilitarEdicao;
            vm.resultado = null;
        }

        /**
         * Salva as observações do documento
         */
        function salvar() {
            vm.observacao.data = new Date();

            ObservacoesModalService.salvar(vm.observacao, vm.dfe).then(function(data) {
                // volta a observação para o modo readonly
                editar();
                vm.resultado = data;
            });
        }

        /**
         * Volta as observações ao estado original e readonly
         */
        function cancelarEdicao() {
            consultar();

            vm.habilitarEdicao = false;
            vm.resultado = null;
        }

        /**
         * Fecha o modal e cancela as alterações
         */
        function cancelar() {
            vm.dfe = null;
            $uibModalInstance.dismiss('cancel');
        }

        /**
         * Consulta as observações do documento
         */
        function consultar() {
            ObservacoesModalService.consultar(vm.dfe).then(function(data) {
                vm.observacao = data;
            });
        }
    }
    ObservacoesModalController.$inject = ['$uibModalInstance', 'selectedRow', 'ObservacoesModalService'];
})();

/**
 * Service responsável por consumir a API de consulta por observações vinculados a um documento.
 *
 * Created by ATILLA on 04/02/2016.
 */
(function () {
    'use strict';

    angular
        .module('oobj-directives')
        .service('ObservacoesModalService', ObservacoesModalService);

    /** @ngInject */
    function ObservacoesModalService($q, $log) {
        return {
            consultar: consultar,
            salvar: salvar,
            excluir: excluir
        };

        /**
         * Consulta observações vinculadas a um documento
         *
         * @param dfe
         * @returns {{comentario: string, data: Date, usuario: string}}
         */
        function consultar(dfe) {
            return $q(function(resolve, reject) {
                try {
                    $log.debug('Consultando observacoes do documento');
                    resolve({
                        comentario: 'Esta NFe é muito legal!',
                        data: new Date(),
                        usuario: 'Fulano89'
                    });
                } catch(err) {
                    reject(err);
                }
            });
        }

        /**
         * Salva ou atualiza as observações de um documento
         *
         * @param observacao
         * @param dfe
         */
        function salvar(observacao, dfe) {
            return $q(function(resolve, reject) {
                try {
                    $log.debug('Salvando observacoes do documento');
                    resolve('Observação salva com sucesso!');
                } catch(err) {
                    reject(err);
                }
            });
        }

        /**
         * Exclui as observações vinculadas a um documento
         *
         * @param dfe
         */
        function excluir(dfe) {
            return $q(function(resolve, reject) {
                try {
                    $log.debug('Excluindo observacoes do documento');
                    resolve('Observação excluída com sucesso!');
                } catch(err) {
                    reject(err);
                }
            });
        }
    }
    ObservacoesModalService.$inject = ['$q', '$log'];
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
        return function(columnName, field, width) {
            this.columnName = columnName || '';
            this.field = field || '';
            this.width = width || '45';
            this.mask = mask;
        };

        function mask(value, pattern) {
            return $filter(pattern)(value);
        }
    }
})();

/**
 * Grid customizada para ser utilizada no Painel.
 * Usa a ui-grid.
 *
 * Created by ATILLA on 02/10/2015.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjGrid', oobjGrid);

    /** @ngInject */
    function oobjGrid(uiGridConstants, $timeout, i18nService) {
        return {
            templateUrl: 'js/directives/oobj-grid/oobj-grid.html',
            scope: {
                colspan: '@?',
                loading: '@?',
                data: '=?',
                initGrid: '&',
                pesquisar: '&?',
                rowHeight: '@?'
            },
            compile: compile
        };

        function compile() {
            i18nService.setCurrentLang('pt-br');

            // constantes globais da directiva
            var PRIMEIRA_PAGINA_BACKEND = 0;
            var PRIMEIRA_PAGINA_GRID = 1;
            var PRIMEIRO_ITEM = 0;
            var ROW_HEIGHT = 44;
            var PIXEL_EXTRA_GRID = 73;
            var DIFERENCA_PAGE_GRID_BACKEND = 1;
            var TIMEOUT_RENDER_GRID = 100;

            return {
                pre: preLink,
                post: postLink
            };

            function preLink(scope, element) {
                // resolve a função recebida por parametro
                if (typeof scope.pesquisar === 'function') {
                    scope.pesquisar = scope.pesquisar();
                }

                scope.language = 'pt-br';
                scope.pageSizes = [10, 25, 50, 75, 100];

                definirGridOptions(scope, element);

                // função para adicionar colunas na grid externamente
                scope.addColumn = function(column) {
                    scope.gridOptions.columnDefs.push(column);
                };

                scope.initGrid()(scope);
            }

            function postLink(scope) {
                // obtem as linhas selecionadas na grid
                scope.getSelectedRows = function () {
                    return scope.gridApi.selection.getSelectedRows();
                };

                if (!scope.data) {
                    // executa uma pesquisa inicial para exibir dados ao entrar numa página com a oobj-grid
                    scope.loading = true;
                    scope.pesquisar(scope.callbackDefault, PRIMEIRA_PAGINA_BACKEND, scope.pageSizes[PRIMEIRO_ITEM]);
                } else {
                    // faz o resize de acordo com a qtd de itens, esperando um pequeno delay para fazer o render certo
                    $timeout(scope.autoResizeDataDefault, TIMEOUT_RENDER_GRID);
                }
            }

            /**
             * Configura todos os detalhes da table
             *
             * @param scope
             *          Scope da grid
             * @param element
             *          Element jquery da directiva
             */
            function definirGridOptions(scope, element) {
                scope.gridOptions = {
                    data: scope.data || [],
                    columnDefs: [],
                    rowHeight: scope.rowHeight || ROW_HEIGHT,
                    paginationPageSizes: scope.pageSizes,
                    paginationPageSize: scope.pageSizes[PRIMEIRO_ITEM],
                    enableHorizontalScrollbar: uiGridConstants.scrollbars.NEVER,
                    enableVerticalScrollbar: uiGridConstants.scrollbars.NEVER,
                    enableRowSelection: true,
                    enableRowHeaderSelection: true,
                    enableGridMenu: true,
                    useExternalPagination: true,
                    multiSelect: true,
                    onRegisterApi: onRegisterApi
                };

                /**
                 * Callback executado no retorno de cada consulta
                 *
                 * @param data
                 *          dados retornados do backend
                 */
                scope.callbackPesquisa = function(data) {
                    scope.gridOptions.totalItems = data.totalElements || 0;
                    scope.gridOptions.data = data.content;

                    scope.loading = false;
                    scope.autoResize(scope.gridOptions.data.length || scope.pageSizes[PRIMEIRO_ITEM]);
                };

                /**
                 * Callback executado no retorno de cada consulta, retornando para a primeira pagina por padrão
                 *
                 * @param data
                 *          dados retornados do backend
                 */
                scope.callbackDefault = function(data) {
                    if (data.status && data.status > 499) {
                        scope.loading = false;
                        scope.gridOptions.data = [];
                        scope.gridOptions.totalItems = scope.gridOptions.data.length;

                    } else {
                        scope.gridOptions.totalItems = data.totalElements || 0;
                        scope.gridOptions.data = data.content;

                        if (scope.gridApi) {
                            // go to first page
                            scope.gridApi.pagination.seek(PRIMEIRA_PAGINA_GRID);
                        }

                        scope.loading = false;
                        scope.autoResize(scope.gridOptions.data.length || scope.pageSizes[PRIMEIRO_ITEM]);
                    }
                };

                /**
                 * Redefine o height da table de acordo com a quantidade de itens exibidos
                 *
                 * @param totalItems
                 *          Quantidade total de itens listados na página atual
                 */
                scope.autoResize = function(totalItems) {
                    var pixels = totalItems * scope.gridOptions.rowHeight;
                    // Adiciona alguns pixels extra no tamanho da grid.
                    // Necessário para que os botões de paginação não sejam renderizados em cima da última row
                    element.find('.table').css('height', (pixels + PIXEL_EXTRA_GRID) + 'px');
                };

                /**
                 * Auto resize executado quando os dados da grid são recebidos estaticamente (scope.data)
                 *
                 * @param size
                 *          Quantidade de itens a ser exibido na página atual
                 */
                scope.autoResizeDataDefault = function(size) {
                    scope.loading = true;
                    size = size || scope.pageSizes[PRIMEIRO_ITEM];

                    // verifica se o size desejado é maior que a quantidade total de itens
                    // neste caso, o size máximo será o total de itens
                    if (size > scope.gridOptions.data.length) {
                        scope.autoResize(scope.gridOptions.data.length);
                    } else {
                        scope.autoResize(size);
                    }

                    scope.loading = false;
                };

                /**
                 * Define os listening da grid, como paginação, ordenação, etc
                 *
                 * @param gridApi
                 *          Objecto da API injetada pela ui-grid
                 */
                function onRegisterApi(gridApi) {
                    scope.gridApi = gridApi;

                    // Caso os dados sejam recebidos estáticamente
                    if (scope.data) {
                        definirGridApiDataStatic();
                    }
                    // Caso os dados tenham que ser buscados via API no Backend
                    else {
                        definirGridApiBackend();
                    }
                }

                /**
                 * Define o GridApi para casos em que os dados são pesquisados no backend (paginação, ordenação, etc)
                 */
                function definirGridApiBackend() {
                    var sortColumn;
                    var sortDirection;

                    scope.gridApi.pagination.on.paginationChanged(scope, function (pageGrid, size) {
                        scope.loading = true;
                        // a pagina do backend é um número a menos do que o componente de grid
                        // ex: primeira página no backend é 0, enquanto na ui-grid, a primeira pagina é 1
                        var pageBackend = pageGrid - DIFERENCA_PAGE_GRID_BACKEND;
                        scope.pesquisar(scope.callbackPesquisa, pageBackend, size, sortDirection, sortColumn);
                    });

                    scope.gridApi.core.on.sortChanged(scope, function (scopeApi, sortColumns) {
                        if (sortColumns && sortColumns[0]) {
                            scope.loading = true;

                            sortColumn = sortColumns[0].colDef.sortColumn || sortColumns[0].field;
                            sortDirection = sortColumns[0].sort.direction || 'asc';
                            // a pagina do backend é um número a menos do que o componente de grid
                            // ex: primeira página no backend é 0, enquanto na ui-grid, a primeira pagina é 1
                            var page = scopeApi.options.paginationCurrentPage - DIFERENCA_PAGE_GRID_BACKEND;
                            var size = scopeApi.options.paginationPageSize;

                            scope.pesquisar(scope.callbackPesquisa, page, size, sortDirection, sortColumn);
                        }
                    });
                }

                /**
                 * Define o GridApi para atender casos em que os dados são recebidos estáticamente (scope.data)
                 */
                function definirGridApiDataStatic() {
                    scope.gridOptions.totalItems = scope.data.length || 0;

                    scope.gridApi.pagination.on.paginationChanged(scope, function (pageGrid, size) {
                        // apenas redefine o tamanho da grid de acordo com a quantidade de itens
                        scope.autoResizeDataDefault(size);
                    });
                }
            }
        }
    }
    oobjGrid.$inject = ['uiGridConstants', '$timeout', 'i18nService'];
})();

(function() {
	'use strict';
	
	angular
		.module('oobj-directives')
		.directive('oobjHistEntregaModal', oobjHistEntregaModal);

	/** @ngInject */
	function oobjHistEntregaModal() {
		return {
			restrice: 'AE',
			transclude: true,
			templateUrl: 'oobj-hist-entrega-modal/oobj-hist-entrega-modal.html',
			scope: {
				dfe: '=',
				data: '='
			},
			link: link
		};
		
		function link(scope) {
			scope.gridOptions = {};
			scope.gridOptions.enableFiltering = false;
			scope.gridOptions.enableSorting = false;
			scope.gridOptions.enablePaginationControls = false;
			scope.gridOptions.enableRowHeaderSelection = false;
			scope.gridOptions.enableHorizontalScrollbar = 0;
			scope.gridOptions.enableVerticalScrollbar = 0;
			scope.gridOptions.columnDefs = [
			    { name: 'dataHora', displayName: 'Data/Hora', enableColumnMenu: false },
			    { name: 'entregador', enableColumnMenu: false },
			    { name: 'usuario', displayName: 'Usuário', enableColumnMenu: false },
			    { name: 'origem', enableColumnMenu: false },
			    { name: 'status', enableColumnMenu: false,
			      cellClass: function(grid, row, col) {
			          if (grid.getCellValue(row, col) === 'Sucesso') {
			        	  return 'green';
			          } else {
			        	  return 'red';
			          }
			      }
			    }
			];
			
			scope.gridOptions.data = scope.data;
		}
	}
})();
/**
 * Created by ATILLA on 05/10/2015.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjInputContainer', oobjInputContainer);

    /** @ngInject */
    function oobjInputContainer() {
        return {
            restrict: 'EA',
            templateUrl: 'js/directives/oobj-input-container/oobj-input-container.html',
            transclude: true,
            scope: {
                colspan: '@?',
                label: '@?',
                showLabel: '=?'
            }
        };
    }
})();

/**
 * Directiva <oobj-input-tags></oobj-input-tags>
 *
 * Created by ATILLA on 04/03/2016.
 */
(function() {
    'use strict';

    angular.module('oobj-directives')
        .directive('oobjInputTags', oobjInputTags);

    /** @ngInject */
    function oobjInputTags() {
        return {
            require: 'ngModel',
            templateUrl: 'js/directives/oobj-input-tags/oobj-input-tags.html',
            scope: {
                ngModel: '=',
                colspan: '@?',
                provider: '=?',
                label: '@?',
                showLabel: '=?',
                addOnEnter: '=?',
                addOnSpace: '=?',
                addOnComma: '=?',
                addOnBlur: '=?',
                addOnPaste: '=?',
                tagsPattern: '@?',
                loadOnEmpty: '=?',
                loadOnFocus: '=?',
                ngBlur: '&?',
                ngChange: '&?',
                ngRequired: '=?',
                ngDisabled: '=?',
                ngReadonly: '=?',
                maxlength: '@?',
                minlength: '@?',
                placeholder: '@?'
            },
            compile: compile
        };

        function compile() {
            var STRING_DOES_NOT_MATCH = -1;
            var MIN_LENGHT = 1;

            return {
                pre: preLink,
                post: postLink
            };

            function preLink(scope) {
                scope.placeholder = scope.placeholder || 'Adicione tags separadas por vírgula';
                scope.inputSize = scope.inputSize || 'sm';
                scope.minlength = scope.minlength || MIN_LENGHT;

                if (angular.isUndefined(scope.addOnEnter)) {
                    scope.addOnEnter = scope.provider ? false : true;
                }

                definirAtributosTrueDefault(scope);
                definirAtributosFalseDefault(scope);
            }

            function postLink(scope, element) {
                /**
                 * Procura no provider por itens que contenham a query informada
                 *
                 * @param query
                 *          String a pesquisar dentro do provider
                 * @returns {Array}
                 *          Itens encontrados
                 */
                scope.getTags = function(query) {
                    var filtrados = [];

                    scope.provider.forEach(function(item) {
                        if (item.indexOf(query) > STRING_DOES_NOT_MATCH) {
                            filtrados.push(item);
                        }
                    });

                    return filtrados;
                };

                /**
                 * Limpa o ngModel e seta o focus no input
                 */
                scope.limpar = function() {
                    scope.ngModel = null;
                    element.find('input').focus();
                };
            }

            /**
             * Define as variáveis que são true por padrão
             *
             * @param scope
             *          Escopo da directiva
             */
            function definirAtributosTrueDefault(scope) {
                if (angular.isUndefined(scope.addOnSpace)) {
                    scope.addOnSpace = true;
                }

                if (angular.isUndefined(scope.addOnComma)) {
                    scope.addOnComma = true;
                }

                if (angular.isUndefined(scope.addOnBlur)) {
                    scope.addOnBlur = true;
                }

                if (angular.isUndefined(scope.addOnPaste)) {
                    scope.addOnPaste = true;
                }
            }

            /**
             * Define as variáveis que são false por padrão
             *
             * @param scope
             *          Escopo da directiva
             */
            function definirAtributosFalseDefault(scope) {
                if (angular.isUndefined(scope.loadOnEmpty)) {
                    scope.loadOnEmpty = false;
                }

                if (angular.isUndefined(scope.loadOnFocus)) {
                    scope.loadOnFocus = false;
                }
            }
        }
    }
})();
/**
 * Created by ATILLA on 25/09/2015.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjInputText', oobjInputText);

    /** @ngInject */
    function oobjInputText() {
        return {
            require: 'ngModel',
            restrict: 'EA',
            templateUrl: 'js/directives/oobj-input-text/oobj-input-text.html',
            scope: {
                id: '@?',
                ngModel: '=',
                colspan: '@?',
                type: '@?',
                label: '@?',
                showLabel: '=?',
                ngRequired: '=?',
                ngChange: '&?',
                ngKeyup: '&?',
                ngKeydown: '&?',
                ngBlur: '&?',
                ngDisabled: '=?',
                ngReadonly: '=?',
                maxlength: '@?',
                max: '@?',
                min: '@?',
                mask: '@?',
                removeMask: '=?',
                placeholder: '@?',
                autofocus: '=?',
                currency: '=?',
                toUpper: '=?',
                toLower: '=?',
                // options: lg (large), md (medium), sm (small)
                inputSize: '@?'
            },
            link: link
        };

        function link(scope) {
            if (!scope.inputSize) {
                scope.inputSize = 'sm';
            }

            scope.limpar = function() {
                scope.ngModel = null;
            };
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

    /** @ngInject */
    function oobjLogin() {
        return {
            restrict: 'EA',
            templateUrl: 'js/directives/oobj-login/oobj-login.html',
            scope: {
                logo: '@?',
                labelBtnLogin: '@?',
                login: '&',
                labelForgotPassword: '@?',
                labelNewUser: '@?',
                forgotPassword: '&',
                newUser: '&',
                username: '=?',
                password: '=?'
            }
        };

    }
})();

/**
 * Directiva de Modal, usando UI Bootstrap
 *
 * Created by ATILLA on 14/10/2015
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjModal', oobjModal);

    /** @ngInject */
    function oobjModal() {
        return {
            restrict: 'EA',
            templateUrl: 'js/directives/oobj-modal/oobj-modal.html',
            transclude: true,
            scope: {
                idModal: '@?',
                colspan: '@?',
                title: '@?',
                showBtnOpen: '=?',
                showBtnClose: '=?',
                showBtnAction: '=?',
                labelBtnOpen: '@?',
                labelBtnClose: '@?',
                labelBtnAction: '@?',
                classBtnOpen: '@?',
                classBtnClose: '@?',
                classBtnAction: '@?',
                onClickBtnAction: '&?',
                size: '@?'
            },
            compile: compile
        };

        function compile() {
            return {
                pre: preLink
            };

            function preLink(scope) {
                getDefaults(scope);

                scope.size = scope.size || '';

                if (angular.isUndefined(scope.showBtnOpen)) {
                    scope.showBtnOpen = true;
                }

                if (angular.isUndefined(scope.showBtnClose)) {
                    scope.showBtnClose = true;
                }

                if (angular.isUndefined(scope.showBtnAction)) {
                    scope.showBtnAction = false;
                }
            }

            function getDefaults(scope) {
                scope.idModal = scope.idModal || '#oobjModal';
                scope.classBtnOpen = scope.classBtnOpen || 'btn-default';
                scope.classBtnClose = scope.classBtnClose || 'btn-default';
                scope.classBtnAction = scope.classBtnAction || 'btn-default';
                scope.labelBtnOpen = scope.labelBtnOpen || 'Abrir Modal';
                scope.labelBtnClose = scope.labelBtnClose || 'Fechar';
                scope.labelBtnAction = scope.labelBtnAction || 'Ação';
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
        return {
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

        function compile() {
            return {
                pre: function preLink(scope, element) {
                    scope.itemLabel = scope.itemLabel || 'descricao';
                    scope.itemId = scope.itemId || 'id';
                    scope.inputSize = scope.inputSize || 'sm';

                    bindSelect(scope, element);
                }
            };
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
 * Created by Ricardo Faria on 18/12/2016.
 */
(function () {
    'use strict';

    var EVENT_ARROW_UP = 38;
    var EVENT_ARROW_DOWN = 40;
    var EVENT_SPACE = 32;

    angular
        .module('oobj-directives')
        .directive('oobjNewSelect', oobjSelect);

    /** @ngInject */
    function oobjSelect() {
        return {
            require: ['^ngModel'],
            restrict: 'EA',
            templateUrl: 'js/directives/oobj-newselect/oobj-newselect.html',
            scope: {
                id: '@?',
                ngModel: '=',
                multi: '@?',
                trackByProp: '@',
                valueProp: '@?',
                options: '=',
                ngChange: '&?',
                search: '@?',
                resultProperty: '@?'
            },
            link: link
        };
    }

    function link(scope, element, attrs, ngModel) {
        scope.selectItem = selectItem;
        scope.multi = attrs.multi;
        scope.trackByProp = scope.trackByProp || 'id';
        scope.valueProp = scope.valueProp || 'descricao';
        scope.isSelected = isSelected;
        scope.searchValue = '';

        var focusCtrl = new FocusCtrl(element, attrs.multi);
        new NavegacaoDeTecladoCtrl(scope, element);

        inicializarNgModel(scope, attrs);
        updateApresentacaoSelecionados(scope, attrs.multi);

        /**
         * Seleciona o item atual
         * 
         * @param item a ser selecionado
         */
        function selectItem(item) {
            if (attrs.multi) {
                focusCtrl.informarSelecaoRecente();

                var jaExiste = false;
                var elementoExiste;
                var trackById = item[scope.trackByProp];
                for (var i = 0; i < scope.itensSelecionados.length; i++) {
                    var itemExistente = scope.itensSelecionados[i];
                    if (trackById === itemExistente[scope.trackByProp]) {
                        jaExiste = true;
                        elementoExiste = itemExistente;
                    }
                }
                if (jaExiste) {
                    var index = scope.itensSelecionados.indexOf(elementoExiste);
                    if (index > -1) {
                        scope.itensSelecionados.splice(index, 1);
                    }
                } else {
                    scope.itensSelecionados.push(item);
                }
            } else {
                scope.itemSelecionado = item;
                element.trigger('click');
            }

            updateApresentacaoSelecionados(scope, attrs.multi);
            updateModelValue(scope, ngModel, attrs.multi, attrs.resultProperty);
        }

        /**
         * Verifica se o item passado por parametro está selecionado
         * 
         * @param item a ser testado
         * @returns boolean TRUE caso esteja selecionado, FALSE caso não
         */
        function isSelected(item) {
            var trackById = item[scope.trackByProp];
            if (attrs.multi) {
                for (var i = 0; i < scope.itensSelecionados.length; i++) {
                    var itemExistente = scope.itensSelecionados[i];
                    if (trackById === itemExistente[scope.trackByProp]) {
                        return true;
                    }
                }
            } else {
                if (scope.itemSelecionado && trackById === scope.itemSelecionado[scope.trackByProp]) {
                    return true;
                }
            }

            return false;
        }
    }

    /**
     * Altera o valor atual de apresentação do select
     * 
     * @param  {any} scope da diretiva de select
     * @param  {boolean} multi informa se o select é de seleção multipla ou não
     */
    function updateApresentacaoSelecionados(scope, multi) {
        if (!multi) {
            if (scope.itemSelecionado) {
                scope.valorApresentacaoSelecionados = scope.itemSelecionado[scope.valueProp];
            }
            return;
        }

        var valoresApresentacao = [];
        for (var i = 0; i < scope.itensSelecionados.length; i++) {
            var item = scope.itensSelecionados[i];
            valoresApresentacao.push(item[scope.valueProp]);
        }
        var result = '';
        for (i = 0; i < valoresApresentacao.length; i++) {
            result = result + valoresApresentacao[i];
            if (valoresApresentacao.length !== 1 && i < (valoresApresentacao.length - 1)) {
                result = result + ', ';
            }
        }

        scope.valorApresentacaoSelecionados = result;
    }
    
  
    /**
     * inicializa um select com os valores atuais do model
     * 
     * @param  {any} scope da diretiva
     * @param  {any} attrs atributos da diretiva
     */
    function inicializarNgModel(scope, attrs) {
        if (attrs.multi) {
            inicializarNgModelMulti(scope, attrs.ngModel, scope.options, attrs.resultProperty);
        } else {
            inicializarNgModelSingle(scope, attrs.ngModel, scope.options, attrs.resultProperty);
        }
    }

    /**
     * inicializa um select single com os valores atuais do model
     * 
     * @param scope da diretiva
     * @param ngModelName nome do NG Model passado na construção da diretiva
     * @param options opções de seleção do select
     * @param resultProperty caso haja, atribuir o nome da propertie cujo model deve representar no final
     */
    function inicializarNgModelSingle(scope, ngModelName, options, resultProperty) {
        if (Object.prototype.toString.call(scope.ngModel) === '[object Array]') {
            throw 'O select está configurado como single, mas o atributo ' + ngModelName + ' é um array';
        }
        if (resultProperty) {
            for (var i = 0; i < options.length; i++) {
                if (options[i][resultProperty] === scope.ngModel) {
                    scope.itemSelecionado = options[i];
                    return;
                }
            }
        } else {
            scope.itemSelecionado = scope.ngModel;
        }
    }

    /**
     * inicializa um select multi com os valores atuais do model
     * 
     * @param scope da diretiva
     * @param ngModelName nome do NG Model passado na construção da diretiva
     * @param options opções de seleção do select
     * @param resultProperty caso haja, atribuir o nome da propertie cujo model deve representar no final
     */
    function inicializarNgModelMulti(scope, ngModelName, options, resultProperty) {
        if (!scope.ngModel) {
            scope.itensSelecionados = [];
            return;
        }
        if (Object.prototype.toString.call(scope.ngModel) !== '[object Array]') {
            throw 'O select está configurado como multi, mas o atributo ' + ngModelName + ' não é um array';
        }
        if (resultProperty) {
            scope.itensSelecionados = [];
            for (var i = 0; i < options.length; i++) {
                for (var posNgModel = 0; posNgModel < scope.ngModel.length; posNgModel++) {
                    var identificadorSelecionados = scope.ngModel[posNgModel];
                    if (options[i][resultProperty] === identificadorSelecionados) {
                        scope.itensSelecionados.push(options[i]);
                    }
                }
            }
        } else {
            scope.itensSelecionados = scope.ngModel;
        }
    }
    
    /**
     * Atualiza o modelo cujo controlador fez bind com o estado atual do select
     * 
     * @param  {Object} scope objeto de escopo da diretiva
     * @param  {Object} ngModel vindo do controlador
     * @param  {boolean} multi TRUE caso o select seja de seleção multipla
     * @param  {string} resultProperty
     */
    function updateModelValue(scope, ngModel, multi, resultProperty) {
        var modelo = ngModel[0];
        if (multi) {
            var itensSelecionados = scope.itensSelecionados;
            if (resultProperty) {
                var novoArray = [];
                for (var i = 0; i < itensSelecionados.length; i++) {
                    var propertieResultante = itensSelecionados[i][resultProperty];
                    novoArray.push(propertieResultante);
                }
                modelo.$setViewValue(novoArray);
            } else {
                modelo.$setViewValue(itensSelecionados);
            }
        } else {
            if (resultProperty) {
                modelo.$setViewValue(scope.itemSelecionado[resultProperty]);
            } else {
                modelo.$setViewValue(scope.itemSelecionado);
            }
        }
    }
    
    /**
     * Controlador responsável por informar e controlar o estado de foco atual do componente
     *
     * @param  {JqueryElement} element raiz onde os eventos serão atrelados 
     */
    function FocusCtrl(element, multi) {
        this.__hasFocus = false;
        this.__itemSelecionadoRecentemente = false;
        this.__multi = multi;

        var ctrl = this;

        /**
         * Inclui uma marcação informando que este objeto recebeu uma seleção recentemente
         */
        this.informarSelecaoRecente = function () {
            ctrl.__itemSelecionadoRecentemente = true;
            setTimeout(function () {
                ctrl.__itemSelecionadoRecentemente = false;
            }, 100);
        };

        /**
         * Informa se o elemento em questão é o foco do usuário atualmente
         */
        this.hasFocus = function () {
            return ctrl.__hasFocus || ctrl.__itemSelecionadoRecentemente;
        };

        /**
         * Informa se o elemento em questão é o foco do usuário atualmente
         */
        this.desativarSelecaoRecente = function () {
            ctrl.__itemSelecionadoRecentemente = false;
        };

        element.on('focusin', function () {
            ctrl.__hasFocus = true;
        });
        
        element.on('focusout', function () {
            ctrl.__hasFocus = false;
        });
        
        /**
         * Evento responsável por interceptar o fechamento ou não do dropdown quando solicitado pela aplicação
         */
        element.on('hide.bs.dropdown', function (event) {
            var fechar = true;
            if (ctrl.__multi && ctrl.hasFocus()) {
                ctrl.desativarSelecaoRecente();
                fechar = false;
            }
            return fechar;
        });
    }
    
    /**
     * Controlador responsável por controlar a navegação por teclado do select
     * 
     * @param  {Object} scope da diretiva de select  
     * @param  {JqueryElement} element raiz onde os eventos serão atrelados 
     */
    function NavegacaoDeTecladoCtrl(scope, element) {
        this.__indexAtualNaLista = 0;

        var nav = this;
        scope.indexAtualNavegacaoTeclado = 0;
        
        /**
         * Efetua um bind de evento ao elementar a tecla do teclado
         */
        element.on('keyup', function (event) {
            if (event.which === EVENT_ARROW_UP) {
                navegarParaCima();
            } else if (event.which === EVENT_ARROW_DOWN) {
                navegarParaBaixo();
            } else if (event.which === EVENT_SPACE) {
                scope.selectItem(scope.options[nav.__indexAtualNaLista]);
                scope.$digest();
            }
        });

        function navegarParaCima() {
            if (nav.__indexAtualNaLista === 0) {
                nav.__indexAtualNaLista = scope.options.length - 1;
            } else {
                nav.__indexAtualNaLista--;
            }
            alterarSelecaoDeItem();
        }

        function navegarParaBaixo() {
            if (nav.__indexAtualNaLista === (scope.options.length - 1)) {
                nav.__indexAtualNaLista = 0;
            } else {
                nav.__indexAtualNaLista++;
            }
            alterarSelecaoDeItem();
        }

        function alterarSelecaoDeItem() {
            scope.indexAtualNavegacaoTeclado = nav.__indexAtualNaLista;
            scope.$digest();
        }
    }

})();

/**
 * Created by ATILLA on 29/01/2016
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .service('ModalUtil', ModalUtil);

    ModalUtil.$inject = ['$uibModal'];

    /** @ngInject */
    function ModalUtil($uibModal) {
        return {
            msg: msg,
            msgInfo: msgInfo,
            msgSuccess: msgSuccess,
            msgWarning: msgWarning,
            msgError: msgError
        };

        function msg(message) {
            msgInfo(message);
        }

        function msgInfo(message, title, tooltip) {
            title = title || 'Mensagem importante!';
            openModal(message, title, tooltip, 'info');
        }

        function msgSuccess(message, title, tooltip) {
            title = title || 'Tudo certo!';
            openModal(message, title, tooltip, 'success');
        }

        function msgWarning(message, title, tooltip) {
            title = title || 'Atenção!';
            openModal(message, title, tooltip, 'warning');
        }

        function msgError(message, title, tooltip) {
            title = title || 'Ops, algo deu errado!';
            openModal(message, title, tooltip, 'error');
        }

        function openModal(message, title, tooltip, type) {
            $uibModal.open({
                backdropClass: 'oobj-notification-modal-background',
                controller: 'OobjNotificationModalController',
                controllerAs: 'vm',
                templateUrl: 'js/directives/oobj-notification-modal/oobj-notification.modal.html',
                resolve: {
                    message: function() { return message; },
                    title: function() { return title; },
                    tooltip: function() { return tooltip; },
                    type: function() { return type; }
                }
            });
        }
    }
})();

/**
 * Created by ATILLA on 28/01/2016
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .controller('OobjNotificationModalController', OobjNotificationModalController);

    OobjNotificationModalController.$inject = ['$uibModalInstance', 'message', 'title', 'tooltip', 'type'];

    /** @ngInject */
    function OobjNotificationModalController($uibModalInstance, message, title, tooltip, type) {
        var vm = this;

        vm.message = message;
        vm.title = title;
        vm.tooltip = tooltip || null;
        vm.type = type;

        definirClasses();

        vm.close = function () {
            $uibModalInstance.close();
        };

        vm.ok = function () {
            $uibModalInstance.dismiss('ok');
        };

        /**
         * Define as classes CSS para serem usadas no modal, de acordo com o tipo (vm.type)
         */
        function definirClasses() {
            vm.btnClass = 'oobj-notification-modal-btn-ok ';

            if (vm.type === 'success') {
                vm.iconClass = 'fa-check oobj-notification-modal-header-success';
                vm.btnClass = vm.btnClass + 'btn-success';
            } else if (vm.type === 'error') {
                vm.iconClass = 'fa-times oobj-notification-modal-header-error';
                vm.btnClass = vm.btnClass + 'btn-danger';
            } else if (vm.type === 'warning') {
                vm.iconClass = 'fa-exclamation oobj-notification-modal-header-warning';
                vm.btnClass = vm.btnClass + 'btn-warning';
            } else {
                // default é info
                vm.iconClass = 'fa-info oobj-notification-modal-header-info';
                vm.btnClass = vm.btnClass + 'btn-primary';
            }
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
        return {
            restrict: 'EA',
            templateUrl: 'js/directives/oobj-panel/oobj-panel.html',
            transclude: true,
            scope: {
                title: '@?',
                footer: '@?',
                colspan: '@?',
                panelClass: '@?'
            },
            link: link
        };

        function link(scope) {
            scope.panelClass = scope.panelClass || 'panel-default';
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
         return {
            require: 'ngModel',
            restrict: 'EA',
            templateUrl: 'js/directives/oobj-radio/oobj-radio.html',
            scope: {
                id: '@?',
                label: '@?',
                ngModel: '=',
                inline: '=?',
                optionName: '@?',
                optionValue: '@?',
                colspan: '@?',
                labelBold: '=?'
            },
            link: link
        };

        function link(scope) {
            if (scope.inline === true) {
                scope.radioClass = 'radio-inline';
            }

            if (scope.colspan) {
                var classes = scope.colspan;

                if (scope.radioClass) {
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
        return {
            templateUrl: 'js/directives/oobj-search/oobj-search.html',
            transclude: true,
            scope: {
                vm: '=?',
                title: '@?',
                footer: '@?',
                showBtnOnTop: '=?',
                showBtnLimpar: '=?',
                showBtnOnBottom: '=?',
                showBtnPesquisar: '=?',
                showBtnPesquisaAvancada: '=?'
            },
            compile: compile
        };

        function compile() {
            return {
                pre: function (scope) {
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
            };

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
        return {
            require: 'ngModel',
            restrict: 'EA',
            templateUrl: 'js/directives/oobj-select/oobj-select.html',
            scope: {
                id: '@?',
                ngModel: '=',
                colspan: '@?',
                label: '@?',
                showLabel: '=?',
                ngRequired: '=?',
                onOpen: '&',
                provider: '=?',
                itemLabel: '@?',
                inputSize: '@?',
                itemId: '@?',
                maxSelected: '@?',
                search: '=?'
            },
            compile: compile
        };

        function compile() {
            return {
                pre: function preLink(scope, element) {
                    scope.itemId = scope.itemId || 'id';
                    scope.itemLabel = scope.itemLabel || 'descricao';
                    scope.inputSize = scope.inputSize || 'sm';

                    bindSelect(scope, element);
                },
                post: function postLink(scope, element) {
                    var button = element.find('button');

                    button.addClass('btn-' + scope.inputSize);
                    button.addClass('oobj-group-input-btn');
                    button.addClass('oobj-select');
                }
            };
        }

        function bindSelect(scope, element) {
            var select = element.find('select');

            // Verifica se o valor atribuido para o maxSelected é um número
            // Caso não seja um número, não terá restrições de quantidade máxima de seleção permitido
            // Essa flexibilidade permite o uso do componente para select single, select multiple limitado e ilimitado
            // Exemplos:
            //     <oobj-select max-selected="3" /> // permitira a seleção de no máximo 3 itens
            //     <oobj-select max-selected="*" /> // permitira a seleção de itens sem limitação
            //     <oobj-select />                  // permitira a seleção de apenas um item
            if (!isNaN(scope.maxSelected)) {
                select.attr('data-max-options', scope.maxSelected);
            }
            // O valor padrão para o máximo de seleção permitido é 1 (UM)
            // Para casos em que a seleção permitida é de apenas UM item, o select deixa de ser Multiple
            else {
                select.removeAttr('multiple');
            }

            if (scope.search !== false) {
                select.attr('data-live-search', true);
            }

            // watch the provider in case the array changes then updates the view
            scope.$watch('provider', function(newValue, oldValue) {
                angular.forEach(newValue, function(value) {
                    var content = value[scope.itemLabel] ? value[scope.itemLabel] : value;
                    select.append(
                        angular.element('<option></option>')
                            .attr('value', value[scope.itemId])
                            .text(content)
                    );
                });

                select.selectpicker('refresh');
            });

        }
    }
})();

(function () {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjSidebar', oobjSidebar);

    /** @ngInject */
    function oobjSidebar() {
        return {
            templateUrl: 'js/directives/oobj-sidebar/oobj-sidebar.html',
            restrict: 'E',
            replace: true,
            scope: {
                provider: '='
            },
            link: link
        };

        function link(scope) {
            scope.selectedMenu = 'dashboard';
            scope.collapseVar = 0;
            scope.multiCollapseVar = 0;

            scope.check = function (x) {
                if (x === scope.collapseVar) {
                    scope.collapseVar = 0;
                } else {
                    scope.collapseVar = x;
                }
            };

            scope.multiCheck = function (y) {
                if (y === scope.multiCollapseVar) {
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

    angular
        .module('oobj-directives')
        .directive('oobjStats', oobjStats);

    /** @ngInject */
    function oobjStats () {
        return {
            templateUrl: 'js/directives/oobj-stats/oobj-stats.html',
            restrict: 'AE',
            replace: true,
            scope: {
                'model': '=?',
                'comments': '@?',
                'number': '@?',
                'name': '@?',
                'colour': '@?',
                'details': '@?',
                'type': '@?',
                'goto': '@?'
            }
        };
    }
})();

/**
 * Diretiva Oobj para o componente textarea do HTML.
 * Estiliza e atribui valores padrões para que a aplicação fique uniforme ao utilizar esse tipo de atributo.
 * Created by Leonardo on 02/02/2016.
 */
(function () {
    'use strict';

    angular.module('oobj-directives')
        .directive('oobjTextarea', oobjTextarea);

    /** @ngInject */
    function oobjTextarea() {
        return {
            restrict: 'AE',
            replace: true,
            templateUrl: 'js/directives/oobj-textarea/oobj-textarea.html',
            scope: {
                id: '@?',
                rows: '@?',
                label: '@?',
                title: '@?',
                showLabel: '=?',
                colspan: '@?',
                ngModel: '=?',
                tooltipMessage: '@?',
                ngRequired: '=?',
                ngReadonly: '=?',
                textareaClass: '@?',
                ngMaxlength: '@?',
                ngMinlength: '@?',
                placeholder: '@?',
                inputSize: '@?',
                showFilledChars: '=?'
            },
            link: link
        };

        function link(scope) {
            scope.title = scope.title || 'Oobj Textarea';

            if (angular.isUndefined(scope.showFilledChars)) {
                scope.showFilledChars = false;
            }
        }
    }
})();
/**
 * Created by Renato Borges on 27/11/2015.
 */
(function () {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjTimelineModal', oobjTimelineModal);

    /** @ngInject */
    function oobjTimelineModal() {
        return {
            transclude: true,
            templateUrl: 'js/directives/oobj-timeline-modal/oobj-timeline-modal.html',
            scope: {
                dfe: '=?',
                items: '=?'
            },
            link: link
        };

        function link(scope) {
            scope.type = 'todos';
        }
    }
})();

/**
 * Created by Leonardo on 08/10/2015.
 */
(function () {
    'use strict';

    angular
        .module('oobj-directives')
        .directive('oobjTimeline', oobjTimeline);

    oobjTimeline.$inject = ['filterFilter'];

    /** @ngInject */
    function oobjTimeline(filterFilter) {
        return {
            templateUrl: 'js/directives/oobj-timeline/oobj-timeline.html',
            restrict: 'E',
            replace: true,
            scope: {
                provider: '=',
                colspan: '@?',
                filter: '=?filterBy'
            },
            link: link
        };

        function link(scope) {
            // filter elements of the timeline by type whenever it changes
            scope.$watch('filter', function (newType) {
                scope.items = filterFilter(scope.provider, function (item) {
                    if (newType === 'todos') {
                        return true;
                    } else {
                        return newType === item.type;
                    }
                });
            });
        }
    }
})();

/**
 * Popups toast para exibir mensagens/alertas para usuários.
 *
 * Created by Leonardo on 11/02/2016.
 */
(function() {
    'use strict';

    angular
        .module('oobj-directives')
        .service('OobjToastService', OobjToastService);

    /** @ngInject */
    function OobjToastService(toastr, $log) {
        return {
            msg: msg,
            msgInfo: msgInfo,
            msgSuccess: msgSuccess,
            msgWarning: msgWarning,
            msgError: msgError
        };

        function msg(message) {
            msgInfo(message);
        }

        function msgInfo(message, title) {
            title = title || 'Info';
            toastr.info(message, title);
            $log.info(message);
        }

        function msgSuccess(message, title) {
            title = title || 'Sucesso';
            toastr.success(message, title);
            $log.log(title + ': ' + message);
        }

        function msgWarning(message, title) {
            title = title || 'Aviso';
            toastr.warning(message, title);
            $log.warn(message);
        }

        function msgError(message, title, exception) {
            title = title || 'Erro';
            toastr.error(message, title);
            $log.error(message + ' | ' + exception);
        }
    }
    OobjToastService.$inject = ['toastr', '$log'];
})();
