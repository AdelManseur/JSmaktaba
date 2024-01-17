var maktaba = (function() {
  // Private helper function for internal use
  function validateInput(number) {
    if (typeof number !== 'number') {
      throw new Error('Input must be a number');
    }
  }

  function validateElementName(name, id) {
    if (typeof name !== 'string') {
      throw new Error('Input must be a string');
    }
    if (typeof id !== 'string') {
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
    
    create: function(name, id) {
      validateElementName(name, id);
      if (name === 'button') { // fixed the typo here, it should be 'button' not 'buttton'
        let button = document.createElement('button');
        button.setAttribute('id', id);
        document.body.appendChild(button);
      }
      if (name === 'textarea') { // fixed the typo here, it should be 'button' not 'buttton'
        let textarea = document.createElement('textarea');
        document.body.appendChild(textarea);
      }
      if (name === 'div') { // fixed the typo here, it should be 'button' not 'buttton'
        let div = document.createElement('div');
        document.body.appendChild(div);
      }
    }
  };
})();
