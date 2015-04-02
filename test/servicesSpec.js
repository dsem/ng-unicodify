'use strict';

describe('service', function() {

    // load modules
    beforeEach(module('ng-unicodify'));

    it('should swap "b" for a unicode "b"', inject(function(charSwap) {
        var orig = 'b';
        var swapped = charSwap.swap(orig);

        expect(["\u1d80",
                "\u00fe",
                "\u24d1",
                "\u249d",
                "\u1e03",
                "\u1e05",
                "\u0180",
                "\u0183",
                "\u0182",
                "\u0183",
                "\u0184",
                "\u0185"]
              ).toContain(swapped);
    }));
});
