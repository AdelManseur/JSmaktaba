// mathCalculator.js

var maktaba = (function() {
  // Private helper function for internal use
  function validateInput(number) {
    if (typeof number !== 'number') {
      throw new Error('Input must be a number');
    }
  }

  function validateElementName (name) {
    if (typeof number !== 'string') {
      throw new Error('Input must be a string');
    }
    }

  // Public methods exposed in the library
  return {
    square: function(number) {
      validateInput(number);
      return number * number;
    },

    squareRoot: function(number) {
      validateInput(number);
      return Math.sqrt(number);
    },
    
    createDiv: function(name) {
      validateElementName(name);
      let div = document.createElement(name);
      document.body.appendChild(div);
    }
  };
})();
