 var maktaba = (function () {
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

    if (typeof id !== 'string') {
      throw new Error('ID must be a string');
    }

    if (className !== undefined) {
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

    if (typeof innerHTML !== 'string') {
      throw new Error('innerHTML must be a string');
    }

    if (typeof isCreated !== 'boolean') {
      throw new Error('isCreated must be a boolean');
    }
  }

  // Public methods exposed in the library
  return {
    square: function (number) {
      validateInput(number);
      return number * number;
    },

    squareRoot: function (number) {
      validateInput(number);
      return Math.sqrt(number);
    },

    create: function (name, options = {}) {
      validateElementName(name, options);
      const { id, className, innerHTML, isCreated } = options;

      let createdElement;

      switch (name) {
        case 'button':
          createdElement = document.createElement('button');
          break;
        case 'textarea':
          createdElement = document.createElement('textarea');
          break;
        case 'div':
          createdElement = document.createElement('div');
          break;
       case 'a':
          createdElement = document.creteElement('a');
          break;
       case 'input':
          createdElement = document.creteElement('input');
          break;
       case 'br':
          createdElement = document.creteElement('br');
          break;
        default:
          throw new Error(`Unsupported element type: ${name}`);
      }

      createdElement.setAttribute('id', id);

      if (className !== undefined) {
        if (typeof className === 'string') {
          createdElement.classList.add(className);
        } else if (Array.isArray(className)) {
          createdElement.classList.add(...className);
        }
      }

      createdElement.innerHTML = innerHTML;
      document.body.appendChild(createdElement);

      if (!isCreated) {
        createdElement.remove();
      }

      console.log('Type:', name);
      console.log('ID:', id);
      console.log('Class:', className);
      console.log('innerHTML:', innerHTML);
    },
   remove: function (id) {
        const elementToRemove = document.getElementById(id);
    if(elementToRemove){
     elementToRemove.remove();
    }
    else{
     console.warn(`Element with ID '${id}' not found.`);
    }
   }
  };
})();
