'use strict';

describe('directive: unicodify', function() {

    beforeEach(module('ng-unicodify'));

    var element;

    beforeEach(inject(function($rootScope, $compile) {

        element = angular.element('<span class="unicodify">Un</span>');
        $compile(element)($rootScope);

    }));

    describe('simple character swapping', function() {

        it('should render Un with unicode chars', inject(function() {

            var newHTML = element[0].innerHTML;

            expect([
                '\u01d5',
                '\u260b',
                '\u00da',
                '\u00d9',
                '\u00dc'
            ]).toContain(newHTML[0]);

            expect([
                '\u1d87',
                '\u1d70',
                '\u03c0',
                '\u00f1',
                '\u1f20',
                '\u1f21',
                '\u1f22',
                '\u1f23',
                '\u1f24',
                '\u1f25',
                '\u1f26',
                '\u1f27',
                '\u1f74',
                '\u1f75',
                '\u1f90',
                '\u1f91',
                '\u1f92',
                '\u1f93',
                '\u1f94',
                '\u1f95',
                '\u1f96',
                '\u1f97',
                '\u1fc2',
                '\u1fc3',
                '\u1fc4',
                '\u1fc6',
                '\u1fc7',
                '\u0377',
                '\u03ae',
                '\u03b7',
                '\u03c0'
            ]).toContain(newHTML[1]);

        }));
    });

    describe('nested elements', function() {

        beforeEach(inject(function($rootScope, $compile) {

            element = angular.element('<span class="unicodify">U<span>U</span>U</span>');
            $compile(element)($rootScope);

        }));

        it('should preserve child elements', inject(function() {

            var newHTML = element[0].innerHTML;

            expect(['\u01d5',
                    '\u260b',
                    '\u00da',
                    '\u00d9',
                    '\u00dc'
                ]).toContain(newHTML[0]);

            expect(newHTML.slice(1, 7)).toBe('<span>');

            expect(['\u01d5',
                    '\u260b',
                    '\u00da',
                    '\u00d9',
                    '\u00dc'
                ]).toContain(newHTML[7]);

            expect(newHTML.slice(8, 15)).toBe('</span>');

            expect(['\u01d5',
                    '\u260b',
                    '\u00da',
                    '\u00d9',
                    '\u00dc'
                ]).toContain(newHTML[15]);
        }));
    });
});
