/**
 * Teste unitário para oobj-timeline-modal.directive.js.
 *
 * Created by Leonardo on 15/02/2016.
 */
(function() {
    'use strict';

    describe('Teste de directive: oobjTimelineModal', function() {
        var $rootScope,
            $compile,
            scope;

        beforeEach(module('oobj-directives'));
        beforeEach(inject(function(_$compile_, _$rootScope_) {
            $compile = _$compile_;
            $rootScope = _$rootScope_;

            scope = $rootScope.$new();

            scope.modeloDocumento = 55;
        }));

        it('TODO: aprimorar quando a directiva tiver mais functionalidades', function() {
            var element = '<oobj-timeline-modal modelo-documento="55"></oobj-timeline-modal>';
            $compile(element)(scope);
            scope.$digest();
        });
    });
})();