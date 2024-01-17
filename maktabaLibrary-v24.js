var maktaba = (function() {
  // Private helper function for internal use
  function validateInput(number) {
    if (typeof number !== 'number') {
      throw new Error('Input must be a number');
    }
  }

  function validateElementName(name, options = {}) {
    const { id, className, innerHTML, isCreated } = options;

    if (typeof name !== 'string') {
      throw new Error('Input must be a string');
    }

    if (typeof id === 'undefined' || typeof id !== 'string') {
      throw new Error('ID must be a string');
    }

    if (typeof className !== 'undefined') {
      if (typeof className === 'string') {
        // Valid case for a single class
      } else if (Array.isArray(className)) {
        // Valid case for an array of classes
        className.forEach((cls) => {
          if (typeof cls !== 'string') {
            throw new Error('Class must be a string or an array of strings');
          }
        });
      } else {
        throw new Error('Class must be a string or an array of strings');
      }
    }

    if (typeof innerHTML === 'undefined' || typeof innerHTML !== 'string') {
      throw new Error('innerHTML must be a string');
    }
    if (typeof iscreated !== 'boolean') {
      throw new Error('isCreated must be a string');
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
    
    create: function(name, options = {}) {
      validateElementName(name, options);
      const { id, className, innerHTML, isCreated } = options;

      if (name === 'button') {
        let button = document.createElement('button');
        button.setAttribute('id', id);
        
        if (typeof className === 'string') {
          button.classList.add(className);
        } else if (Array.isArray(className)) {
          button.classList.add(...className);
        }

        button.innerHTML = innerHTML;
        document.body.appendChild(button);
        if(isCreated === false){
          button.remove();
        }
        console.log('type:', name );
        console.log('ID:', id);
        console.log('Class:', className);
        console.log('innerHTML:', innerHTML);
      }

      if (name === 'textarea') {
        let textarea = document.createElement('textarea');
        textarea.setAttribute('id', id);
        
        if (typeof className === 'string') {
          textarea.classList.add(className);
        } else if (Array.isArray(className)) {
          textarea.classList.add(...className);
        }

        textarea.innerHTML = innerHTML;
        document.body.appendChild(textarea);
        console.log('type:', name );
        console.log('ID:', id);
        console.log('Class:', className);
        console.log('innerHTML:', innerHTML);
      }

      if (name === 'div') {
        let div = document.createElement('div');
        div.setAttribute('id', id);
        
        if (typeof className === 'string') {
          div.classList.add(className);
        } else if (Array.isArray(className)) {
          div.classList.add(...className);
        }

        div.innerHTML = innerHTML;
        document.body.appendChild(div);
        console.log('type:', name );
        console.log('ID:', id);
        console.log('Class:', className);
        console.log('innerHTML:', innerHTML);
      }
    }
  };
})();
