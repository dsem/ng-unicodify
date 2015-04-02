/**
 * @description Convert characters to similar-looking Unicode symbols in
 * @version 0.0.1
 * @author Dylan Semler
 * @license Mit
 * @year 2015
 */

(function() {
    'use strict';

    angular
        .module('ng-unicodify')
        .directive('unicodify', unicodify);

    function unicodify(charSwap) {

        var directive = {
            restrict: 'C',
            scope: true,
            link: link
        };

        return directive;

        function link(scope, element) {
            var text = element[0].innerText;

            var replacementText = '';
            for (var i = 0; i < text.length; i++) {
                replacementText += charSwap.swap(text[i]);
            }

            element[0].innerText = replacementText;
        }
    }
})();
