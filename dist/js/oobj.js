/**
 * Created by ATILLA on 06/10/2015.
 */
(function() {
    'use strict';

    angular.module('oobjDirectives')
        .directive('oobjAutocomplete', oobjAutocomplete);

    oobjAutocomplete.$inject = [];

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
            templateUrl: 'oobj-button/oobj-button.html',
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

    angular.module('oobjDirectives')
        .directive('oobjChartDoughnut', oobjChartDoughnut);

    oobjChartDoughnut.$inject = [];

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

    angular.module('oobjDirectives')
        .directive('oobjChartLine', oobjChartLine);

    oobjChartLine.$inject = [];

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

    angular.module('oobjDirectives')
        .directive('oobjChartPie', oobjChartPie);

    oobjChartPie.$inject = [];

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

    angular.module('oobjDirectives')
        .directive('oobjChartRadar', oobjChartRadar);

    oobjChartRadar.$inject = [];

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

    angular.module('oobjDirectives')
        .directive('oobjCheckbox', oobjCheckbox);

    oobjCheckbox.$inject = [];

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

    angular.module('oobjDirectives')
        .directive('oobjCrud', oobjCrud);

    oobjCrud.$inject = [];

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
            templateUrl: 'oobj-grid/oobj-grid.html',
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

    angular.module('oobjDirectives')
            .directive('oobjInputText', oobjInputText);

    oobjInputText.$inject = [];

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
            scope.limpar = function() {
                scope.ngModel = null;
            }
        }

    }
})();


/**
 * Created by Diogo on 06/10/2015.
 */
(function() {
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
            module('oobjDirectives');
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
})();
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
            templateUrl: 'oobj-panel/oobj-panel.html',
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
            templateUrl: 'oobj-pesquisa/oobj-pesquisa.html',
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
            templateUrl: 'oobj-select/oobj-select.html',
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
(function () {
    'use strict';

    angular.module('oobjDirectives')
        .directive('oobjSidebar', oobjSidebar);

    oobjSidebar.$inject = [];

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

/**
 * Created by Leonardo on 08/10/2015.
 */
(function () {
    'use strict';

    angular.module('oobjDirectives')
        .directive('oobjTimeline', oobjTimeline);

    oobjTimeline.$inject = [];

    function oobjTimeline() {

        var directive = {
            templateUrl: 'oobj-timeline/oobj-timeline.html',
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

/**
 * Created by ATILLA on 25/09/2015.
 */
(function() {
    'use strict';

    angular.module('oobjDirectives',
            ['ui.bootstrap',
            'ngAnimate',
            'ui.router',
            'ui.grid',
            'ui.bootstrap',
            'toastr',
            'angular-loading-bar',
            'daterangepicker',
            'templates-main']);
})();
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
