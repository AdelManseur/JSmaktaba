// myMathLibrary.js
var myMathLibrary = (function () {
  // Private function
  function square(x) {
    return x * x;
  }

  // Public API
  return {
    calculateSquare: function (number) {
      return square(number);
    }
  };
})();
