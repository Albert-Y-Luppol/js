(()=>{
    'use strict';

    describe("pow", function() {

        describe("raises x to power 3", function() {
      
          function makeTest(x) {
            let expected = x * x * x;
            it(`${x} in the power 3 is ${expected}`, async function() {
              let result = await pow(x, 3);
              assert.equal(result, expected);
            });
          }
      
          for (let x = 1; x <= 5; x++) {
            makeTest(x);
          }
      
        });
      
        it("if n is negative, the result is NaN", function() {
          assert.isNaN(pow(2, -1));
        });
      
        it("if n is not integer, the result is NaN", function() {
          assert.isNaN(pow(2, 1.5));
        });
      
    });
})();