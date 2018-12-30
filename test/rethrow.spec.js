const {expect} = require("chai");
const rebote = require("../index")

describe("rethrow", function() {
  context("with default type", function () {
    context("with EvalError error", function() {
       it("should rethrow the error", function() {
         expect(function () {
           rebote.rethrow(new EvalError)
         }).to.throw();
       });
    });
    
    context("with RangeError error", function() {
       it("should rethrow the error", function() {
         expect(function () {
           rebote.rethrow(new RangeError)
         }).to.throw();
       });
    });
    
    context("with ReferenceError error", function() {
       it("should rethrow the error", function() {
         expect(function () {
           rebote.rethrow(new ReferenceError)
         }).to.throw();
       });
    });
    
    context("with SyntaxError error", function() {
       it("should rethrow the error", function() {
         expect(function () {
           rebote.rethrow(new SyntaxError)
         }).to.throw();
       });
    });
    
    context("with TypeError error", function() {
       it("should rethrow the error", function() {
         expect(function () {
           rebote.rethrow(new TypeError)
         }).to.throw();
       });
    });
    
    context("with URIError error", function() {
       it("should rethrow the error", function() {
         expect(function () {
           rebote.rethrow(new URIError)
         }).to.throw();
       });
    });

    context("with Error error", function() {
       it("should not rethrow the error", function() {
         expect(function () {
           rebote.rethrow(new Error)
         }).to.not.throw();
       });
    });

    context("with string error", function() {
       it("should rethrow the error", function() {
         expect(function () {
           rebote.rethrow("some stirng")
         }).to.not.throw();
       });
    });
  });


  context("with native type", function () {
    context("with EvalError error", function() {
       it("should rethrow the error", function() {
         expect(function () {
           rebote.rethrow(new EvalError, 'native')
         }).to.throw();
       });
    });
    
    context("with RangeError error", function() {
       it("should rethrow the error", function() {
         expect(function () {
           rebote.rethrow(new RangeError, 'native')
         }).to.throw();
       });
    });
    
    context("with ReferenceError error", function() {
       it("should rethrow the error", function() {
         expect(function () {
           rebote.rethrow(new ReferenceError, 'native')
         }).to.throw();
       });
    });
    
    context("with SyntaxError error", function() {
       it("should rethrow the error", function() {
         expect(function () {
           rebote.rethrow(new SyntaxError, 'native')
         }).to.throw();
       });
    });
    
    context("with TypeError error", function() {
       it("should rethrow the error", function() {
         expect(function () {
           rebote.rethrow(new TypeError, 'native')
         }).to.throw();
       });
    });
    
    context("with URIError error", function() {
       it("should rethrow the error", function() {
         expect(function () {
           rebote.rethrow(new URIError, 'native')
         }).to.throw();
       });
    });

    context("with Error error", function() {
       it("should not rethrow the error", function() {
         expect(function () {
           rebote.rethrow(new Error, 'native')
         }).to.not.throw();
       });
    });

    context("with string error", function() {
       it("should rethrow the error", function() {
         expect(function () {
           rebote.rethrow("some stirng", 'native')
         }).to.not.throw();
       });
    });
  });

  context("with all type", function () {
    context("with EvalError error", function() {
       it("should rethrow the error", function() {
         expect(function () {
           rebote.rethrow(new EvalError, 'all')
         }).to.throw();
       });
    });
    
    context("with RangeError error", function() {
       it("should rethrow the error", function() {
         expect(function () {
           rebote.rethrow(new RangeError, 'all')
         }).to.throw();
       });
    });
    
    context("with ReferenceError error", function() {
       it("should rethrow the error", function() {
         expect(function () {
           rebote.rethrow(new ReferenceError, 'all')
         }).to.throw();
       });
    });
    
    context("with SyntaxError error", function() {
       it("should rethrow the error", function() {
         expect(function () {
           rebote.rethrow(new SyntaxError, 'all')
         }).to.throw();
       });
    });
    
    context("with TypeError error", function() {
       it("should rethrow the error", function() {
         expect(function () {
           rebote.rethrow(new TypeError, 'all')
         }).to.throw();
       });
    });
    
    context("with URIError error", function() {
       it("should rethrow the error", function() {
         expect(function () {
           rebote.rethrow(new URIError, 'all')
         }).to.throw();
       });
    });

    context("with Error error", function() {
       it("should rethrow the error", function() {
         expect(function () {
           rebote.rethrow(new Error, 'all')
         }).to.throw();
       });
    });

    context("with string error", function() {
       it("should rethrow the error", function() {
         expect(function () {
           rebote.rethrow("some stirng", 'all')
         }).to.throw();
       });
    });

  });
});


