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
