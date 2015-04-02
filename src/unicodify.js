(function() {
    'use strict';

    angular
        .module('ng-unicodify')
        .directive('unicodify', unicodify);

    function unicodify(charSwap) {

        var directive = {
            restrict: 'C',
            link: link
        };

        return directive;

        function link(scope, element) {

            var nodes;

            function walkElement(nodes) {

                for (var i = 0; i < nodes.length; i++) {
                    var node = nodes[i];

                    if (node.nodeType === 1) {
                        // node is an element
                        walkElement(node.childNodes);
                    }

                    else if (node.nodeType === 3) {
                        // node is text
                        var newText = exchangeText(node.nodeValue);
                        node.nodeValue = newText;
                    }
                }
            }

            function exchangeText(text) {

                var replacementText = '';

                for (var i = 0; i < text.length; i++) {
                    replacementText += charSwap.swap(text[i]);
                }

                return replacementText;
            }

            nodes = element.contents();
            walkElement(nodes);
        }
    }
})();
