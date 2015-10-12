/**
 * Created by ATILLA on 06/10/2015.
 */
(function() {
    'use strict';

    angular.module('oobjDirectives')
        .directive('oobjAutocomplete', oobjAutocomplete);

    oobjAutocomplete.$inject = ['$http'];

    function oobjAutocomplete($http) {
        var directive = {
            require: 'ngModel',
            restrict: 'EA',
            templateUrl: 'scripts/directives/oobj-autocomplete/oobj-autocomplete.html',
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
            scope.limpar = function() {
                scope.ngModel = null;
            }
        }

    }
})();
/**
 * Created by ATILLA on 02/10/2015.
 */
(function() {
    'use strict';

    angular.module('oobjDirectives')
        .directive('oobjButton', oobjButton);

    oobjButton.$inject = [];

    function oobjButton() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'scripts/directives/oobj-button/oobj-button.html',
            scope: {
                label: '@',
                btnClass: '@',
                icon: '@',
                colspan: '@'
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
                    if (angular.isUndefined(attrs.width)) {
                        attrs.width = '150px';
                    }

                    if (angular.isUndefined(scope.btnClass)) {
                        scope.btnClass = 'btn-default';
                    }

                    scope.btnStyle = {};
                    scope.btnStyle.height = attrs.height;
                    scope.btnStyle.width = attrs.width;
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

    angular.module('oobjDirectives')
        .directive('oobjChartBar', oobjChartBar);

    oobjChartBar.$inject = [];

    function oobjChartBar() {
        var directive = {
            require: 'ngModel',
            restrict: 'EA',
            templateUrl: 'scripts/directives/oobj-chart/oobj-chart-bar.html',
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

    angular.module('oobjDirectives')
        .directive('oobjChartDoughnut', oobjChartDoughnut);

    oobjChartDoughnut.$inject = [];

    function oobjChartDoughnut() {

        return {
            require: 'ngModel',
            restrict: 'EA',
            templateUrl: 'scripts/directives/oobj-chart/oobj-chart-doughnut.html',
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

    angular.module('oobjDirectives')
        .directive('oobjChartLine', oobjChartLine);

    oobjChartLine.$inject = [];

    function oobjChartLine() {

        return {
            require: 'ngModel',
            restrict: 'EA',
            templateUrl: 'scripts/directives/oobj-chart/oobj-chart-line.html',
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

    angular.module('oobjDirectives')
        .directive('oobjChartPie', oobjChartPie);

    oobjChartPie.$inject = [];

    function oobjChartPie() {
        var directive = {
            require: 'ngModel',
            restrict: 'EA',
            templateUrl: 'scripts/directives/oobj-chart/oobj-chart-pie.html',
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

    angular.module('oobjDirectives')
        .directive('oobjChartRadar', oobjChartRadar);

    oobjChartRadar.$inject = [];

    function oobjChartRadar() {

        return {
            require: 'ngModel',
            restrict: 'EA',
            templateUrl: 'scripts/directives/oobj-chart/oobj-chart-radar.html',
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

    angular.module('oobjDirectives')
        .directive('oobjCheckbox', oobjCheckbox);

    oobjCheckbox.$inject = [];

    function oobjCheckbox() {
        var directive = {
            require: 'ngModel',
            restrict: 'EA',
            templateUrl: 'scripts/directives/oobj-checkbox/oobj-checkbox.html',
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
 * Created by ATILLA on 30/09/2015.
 */
(function() {
    'use strict';

    angular.module('oobjDirectives')
            .directive('oobjContainer', oobjContainer);

    oobjContainer.$inject = [];

    function oobjContainer() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'scripts/directives/oobj-container/oobj-container.html',
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

    angular.module('oobjDirectives')
        .directive('oobjCrud', oobjCrud);

    oobjCrud.$inject = [];

    function oobjCrud() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'scripts/directives/oobj-crud/oobj-crud.html',
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

            if (angular.isUndefined(scope.showBtnLimpar)) {
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

    angular.module('oobjDirectives')
        .directive('oobjDatePicker', oobjDatePicker);

    oobjDatePicker.$inject = [];

    function oobjDatePicker() {

        var directive = {
            require: 'ngModel',
            restrict: 'EA',
            templateUrl: 'scripts/directives/oobj-date-picker/oobj-date-picker.html',
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
                    applyLabel: "OK",
                    cancelLabel: "Limpar",
                    fromLabel: "Entre",
                    toLabel: "E",
                    customRangeLabel: "Customizar",
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
                cancelClass: "btn-danger"
            };

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
 * Created by Leonardo on 10/5/2015.
 */
(function() {
    'use strict';

    angular.module('oobjDirectives')
        .directive('oobjFooter', oobjFooter);

    oobjFooter.$inject = [];

    function oobjFooter() {
        return {
            restrict: 'EA',
            templateUrl: 'scripts/directives/oobj-footer/oobj-footer.html',
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
 * Created by ATILLA on 02/10/2015.
 */
(function() {
    'use strict';

    angular.module('oobjDirectives')
        .directive('oobjGrid', oobjGrid);

    oobjGrid.$inject = ['$interval', 'uiGridConstants'];

    function oobjGrid($interval, uiGridConstants) {

        var directive = {
            restrict: 'EA',
            templateUrl: 'scripts/directives/oobj-grid/oobj-grid.html',
            scope: {
                title: '@',
                data: '=',
                colspan: '@',
                footer: '@',
                gridOptions: '='
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

                    if (!scope.data.length) {
                        scope.gridStyle.height = '60px';
                    }

                    if (angular.isDefined(scope.data)) {
                        scope.gridOptions.data = scope.data;
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

    angular.module('oobjDirectives')
        .directive('oobjInputContainer', oobjInputContainer);

    oobjInputContainer.$inject = [];

    function oobjInputContainer() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'scripts/directives/oobj-input-container/oobj-input-container.html',
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

    angular.module('oobjDirectives')
            .directive('oobjInputText', oobjInputText);

    oobjInputText.$inject = [];

    function oobjInputText() {

        var directive = {
            require: 'ngModel',
            restrict: 'EA',
            templateUrl: 'scripts/directives/oobj-input-text/oobj-input-text.html',
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
            scope.limpar = function() {
                scope.ngModel = null;
            }
        }

    }
})();


/**
 * Created by Diogo on 06/10/2015.
 */
'use strict';

describe('Teste de Directiva: oobjInputText - ', function() {

    // variaveis globais
    var $rootScope,
        $compile,
        scope, // scope onde nossa directiva esta inserida
        element, // elemento jqlite
        isolatedScope;


    beforeEach(function() {
        // carregando modulo q ira ser testado
        module('painel');
        // carregando templates
        angular.mock.module('templates');
    });

    // cria um novo scope antes de cada teste
    beforeEach(inject(function(_$compile_, _$rootScope_){
        $rootScope = _$rootScope_;
        scope = $rootScope.$new();
        $compile = _$compile_;

        scope.id = "testeId";
        scope.colspan = "testecolspan";
        scope.type = "testetype";
        scope.label = "testelabel";
        scope.maxlength = "testemaxlength";
        scope.max = "testemax";
        scope.min = "testemin";
        scope.mask = "testemask";
        scope.placeholder = "testeplaceholder";
        scope.inputSize = "testeinputSize";

        scope.showLabel = {
            prop: 'valorScope'
        };
        scope.ngModel = {
            prop: 'ngModel'
        };
        scope.ngRequired = {
            prop: 'ngRequired'
        };
        scope.ngDisabled = {
            prop: 'ngDisabled'
        };
        scope.ngReadonly = {
            prop: 'ngReadonly'
        };
        scope.removeMask = {
            prop: 'removeMask'
        };
        scope.autofocus = {
            prop: 'autofocus'
        };
        scope.currency = {
            prop: 'currency'
        };
        scope.toUpper = {
            prop: 'toUpper'
        };
        scope.toLower = {
            prop: 'toLower'
        };

        scope.ngChange = jasmine.createSpy('ngChange');
        scope.ngKeyup = jasmine.createSpy('ngKeyup');
        scope.ngKeydown = jasmine.createSpy('ngKeydown');
        scope.ngBlur = jasmine.createSpy('ngBlur');

        element = getCompiledElement();
        isolatedScope = element.isolateScope();
    }));

    function getCompiledElement(){

        var $element = angular.element('<oobj-input-text show-label="showLabel" ng-model="ngModel" ng-required="ngRequired" ng-disabled="ngDisabled" ng-readonly="ngReadonly" remove-mask="removeMask" autofocus="autofocus" currency="currency" to-upper="toUpper" to-lower="toLower" ng-change="ngChange()" ng-keyup="ngKeyup()" ng-keydown="ngKeydown()" ng-blur="ngBlur()"></oobj-input-text>');

        var compiledElement = $compile($element)(scope);
        scope.$digest();

        return compiledElement;
    }

    it('Teste input text. Divs presentes', function(){
        expect(element.find('div').length).toEqual(3);
        expect(element.find('div')).toBeDefined();
        expect(element.find('div')).toBeTruthy();
    });

    it('Isolated scope deve ter atributos assigned', function () {
        expect(isolatedScope.showLabel).toBeDefined();
        expect(isolatedScope.ngChange).toBeDefined();
        expect(isolatedScope.ngModel).toBeDefined();
        expect(isolatedScope.ngRequired).toBeDefined();
        expect(isolatedScope.ngKeyup).toBeDefined();
        expect(isolatedScope.ngKeydown).toBeDefined();
        expect(isolatedScope.ngBlur).toBeDefined();
        expect(isolatedScope.ngDisabled).toBeDefined();
        expect(isolatedScope.ngReadonly).toBeDefined();
        expect(isolatedScope.removeMask).toBeDefined();
        expect(isolatedScope.autofocus).toBeDefined();
        expect(isolatedScope.currency).toBeDefined();
        expect(isolatedScope.toUpper).toBeDefined();
        expect(isolatedScope.toLower).toBeDefined();
        expect(isolatedScope.inputSize).toBeDefined();
    });

    it('Teste atributos com scope isolado - one way binding ("@").', function(){

        //mesmo modificando o isolateScope ainda permanece o valor atribuido
        expect(scope.id).toEqual('testeId');
        isolatedScope.id = "isoladoId";
        expect(scope.id).toEqual('testeId');

        expect(scope.colspan).toEqual('testecolspan');
        isolatedScope.colspan = "isoladocolspan";
        expect(scope.colspan).toEqual('testecolspan');

        expect(scope.type).toEqual('testetype');
        isolatedScope.type = "isoladotype";
        expect(scope.type).toEqual('testetype');

        expect(scope.label).toEqual('testelabel');
        isolatedScope.label = "isoladolabel";
        expect(scope.label).toEqual('testelabel');

        expect(scope.maxlength).toEqual('testemaxlength');
        isolatedScope.maxlength = "isoladomaxlengthl";
        expect(scope.maxlength).toEqual('testemaxlength');

        expect(scope.max).toEqual('testemax');
        isolatedScope.max = "isoladomax";
        expect(scope.max).toEqual('testemax');

        expect(scope.min).toEqual('testemin');
        isolatedScope.min = "isoladomax";
        expect(scope.min).toEqual('testemin');

        expect(scope.mask).toEqual('testemask');
        isolatedScope.mask = "isoladomask";
        expect(scope.mask).toEqual('testemask');

        expect(scope.placeholder).toEqual('testeplaceholder');
        isolatedScope.placeholder = "isoladoplaceholder";
        expect(scope.placeholder).toEqual('testeplaceholder');

        expect(scope.inputSize).toEqual('testeinputSize');
        isolatedScope.inputSize = "isoladoinputSize";
        expect(scope.inputSize).toEqual('testeinputSize');
    });

    it('Teste atributos com scope isolado - two way binding ("=").', function(){

        isolatedScope.showLabel.prop = "valorIsoladoScope";
        expect(scope.showLabel.prop).toEqual('valorIsoladoScope');

        isolatedScope.ngModel.prop = "valorIsoladoScope";
        expect(scope.ngModel.prop).toEqual('valorIsoladoScope');

        isolatedScope.ngRequired.prop = "valorIsoladoScope";
        expect(scope.ngRequired.prop).toEqual('valorIsoladoScope');

        isolatedScope.ngDisabled.prop = "valorIsoladoScope";
        expect(scope.ngDisabled.prop).toEqual('valorIsoladoScope');

        isolatedScope.ngReadonly.prop = "valorIsoladoScope";
        expect(scope.ngReadonly.prop).toEqual('valorIsoladoScope');

        isolatedScope.removeMask.prop = "valorIsoladoScope";
        expect(scope.removeMask.prop).toEqual('valorIsoladoScope');

        isolatedScope.autofocus.prop = "valorIsoladoScope";
        expect(scope.autofocus.prop).toEqual('valorIsoladoScope');

        isolatedScope.currency.prop = "valorIsoladoScope";
        expect(scope.currency.prop).toEqual('valorIsoladoScope');

        isolatedScope.toUpper.prop = "valorIsoladoScope";
        expect(scope.toUpper.prop).toEqual('valorIsoladoScope');

        isolatedScope.toLower.prop = "valorIsoladoScope";
        expect(scope.toLower.prop).toEqual('valorIsoladoScope');


    });

    it('Teste atributos - function ("&").', function(){
        expect(typeof(isolatedScope.ngChange)).toEqual('function');
        expect(typeof(isolatedScope.ngKeyup)).toEqual('function');
        expect(typeof(isolatedScope.ngKeydown)).toEqual('function');
        expect(typeof(isolatedScope.ngBlur)).toEqual('function');


    });
    it('Teste atributos com scope isolado - function ("&").', function(){
        isolatedScope.ngChange();
        expect(scope.ngChange).toHaveBeenCalled();

        isolatedScope.ngKeyup();
        expect(scope.ngKeyup).toHaveBeenCalled();

        isolatedScope.ngKeydown();
        expect(scope.ngKeydown).toHaveBeenCalled();

        isolatedScope.ngBlur();
        expect(scope.ngBlur).toHaveBeenCalled();

    });


});
/**
 * Created by ATILLA on 30/09/2015.
 */
(function() {
    'use strict';

    angular.module('oobjDirectives')
            .directive('oobjPanel', oobjPanel);

    oobjPanel.$inject = [];

    function oobjPanel() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'scripts/directives/oobj-panel/oobj-panel.html',
            transclude: true,
            scope: {
                title: '@',
                footer: '@',
                colspan: '@',
                panelStyle: '@'
            },
            link: link
        };

        return directive;

        function link(scope, element, attrs, ngModelCtrl) {
            scope.panelClass = 'panel-default';

            if (angular.isDefined(scope.panelStyle)) {
                scope.panelClass = 'panel-' + scope.panelStyle;
            }
        }
    }
})();


/**
 * Created by ATILLA on 08/10/2015.
 */
(function() {
    'use strict';

    angular.module('oobjDirectives')
        .directive('oobjPesquisa', oobjPesquisa);

    oobjPesquisa.$inject = [];

    function oobjPesquisa() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'scripts/directives/oobj-pesquisa/oobj-pesquisa.html',
            transclude: true,
            scope: {
                title: '@',
                vm: '=',
                footer: '@',
                showBtnPesquisaAvancada: '=',
                showBtnLimpar: '=',
                showBtnPesquisar: '=',
                gridOptions: '='
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
        }
    }
})();


/**
 * Created by Leonardo on 10/5/2015.
 */
(function() {
    'use strict';

    angular.module('oobjDirectives')
        .directive('oobjRadio', oobjRadio);

    function oobjRadio() {

        var directive = {
            require: 'ngModel',
            restrict: 'EA',
            templateUrl: 'scripts/directives/oobj-radio/oobj-radio.html',
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
 * Created by ATILLA on 05/10/2015.
 */
(function() {
    'use strict';

    angular.module('oobjDirectives')
        .directive('oobjSelect', oobjSelect);

    oobjSelect.$inject = [];

    function oobjSelect() {
        var directive = {
            require: 'ngModel',
            restrict: 'EA',
            templateUrl: 'scripts/directives/oobj-select/oobj-select.html',
            scope: {
                id: '@',
                ngModel: '=',
                colspan: '@',
                label: '@',
                showLabel: '=?',
                ngRequired: '=',
                placeholder: '@',
                onOpen: '&',
                provider: '=',
                itemLabel: '@',
                itemValue: '@'
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
                    scope.selectStyle = {};

                    if (angular.isDefined(attrs.width)) {
                        scope.selectStyle.width = attrs.width;
                    }

                    if (angular.isDefined(attrs.height)) {
                        scope.selectStyle.height = attrs.height;
                    }
                }
            }
        }
    }
})();
(function() {
'use strict';

angular.module('oobjDirectives')
  .directive('oobjSidebar', oobjSidebar;
  
  function oobjSidebar() {
    var directive = {
      templateUrl:'scripts/directives/oobj-sidebar/oobj-sidebar.html',
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
		
        scope.check = function(x){
          if (x == scope.collapseVar) {
            scope.collapseVar = 0;
          } else {
            scope.collapseVar = x;
          }
        };

        scope.multiCheck = function(y){
          if (y == scope.multiCollapseVar) {
            scope.multiCollapseVar = 0;
          } else {
            scope.multiCollapseVar = y;
          }
        };
	}
  }
})();

/**
 * Created by Leonardo on 08/10/2015.
 */
(function () {
    'use strict';

    angular.module('painel')
        .directive('oobjTimeline', oobjTimeline);

    oobjTimeline.$inject = [];

    function oobjTimeline() {

        var directive = {
            templateUrl: 'scripts/directives/oobj-timeline/oobj-timeline.html',
            restrict: 'E',
            replace: true,
            scope: {
                provider: '=',
                colspan: '@'
            }
        };

        return directive;

    }

})();