var maktaba = (function() {
  // Private helper function for internal use
  function validateInput(number) {
    if (typeof number !== 'number') {
      throw new Error('Input must be a number');
    }
  }

  function validateElementName(name) {
    if (typeof name !== 'string') {
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
    
    createButton: function(name) {
      validateElementName(name);
      if (name === 'button') { // fixed the typo here, it should be 'button' not 'buttton'
        let button = document.createElement('button');
        document.body.appendChild(button);
      }
    }
  };
})();
