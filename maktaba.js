 var maktaba = (function () {
      // Private functions
      function square(x) {
        return x * x;
      }

      function squareRoot(x) {
        return Math.sqrt(x);
      }

      // Public API (an object)
      return {
        calculateSquare: function (number) {
          return square(number);
        },
        calculateSquareRoot: function (number) {
          return squareRoot(number);
        }
      };
    })();
