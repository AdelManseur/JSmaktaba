var maktaba = (function() {
  // Private helper function for internal use
  function validateInput(number) {
    if (typeof number !== 'number') {
      throw new Error('Input must be a number');
    }
  }

  function validateElementName(name, id, className, innerHTML) {
    if (typeof name !== 'string') {
      throw new Error('Input must be a string');
    }
    if (typeof id !== 'string') {
      throw new Error('Input must be a string');
    }
    if (typeof className !== 'string') {
      throw new Error('Input must be a string');
    }
    if (typeof innerHTML !== 'string') {
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
    
    create: function(name, id, className, innerHTML) {
      validateElementName(name, id, className, innerHTML);
      if (name === 'button') { // fixed the typo here, it should be 'button' not 'buttton'
        let button = document.createElement('button');
        button.setAttribute('id', id);
        button.classList.add(className);
        button.innerHTML = innerHTML;
        document.body.appendChild(button);
        console.log(id);
        console.log(className);
      }
      if (name === 'textarea') { // fixed the typo here, it should be 'button' not 'buttton'
        let textarea = document.createElement('textarea');
        textarea.setAttribute('id', id);
        textarea.classList.add(className);
        textarea.innerHTML = innerHTML;
        document.body.appendChild(textarea);
        console.log(id);
        console.log(className);
      }
      if (name === 'div') { // fixed the typo here, it should be 'button' not 'buttton'
        let div = document.createElement('div');
        div.setAttribute('id', id);
        div.classList.add(className);
        div.innerHTML = innerHTML;
        document.body.appendChild(div);
        console.log(id);
        console.log(className);
      }
    }
  };
})();
