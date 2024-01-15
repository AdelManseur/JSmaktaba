var maktaba = (function () {
  // Private function
  function square(x) {
    return x * x;
  }

  function squareroot(x){
    return sqrt(x);
  }

  // Public API (an object)
  return {
    calculateSquare: function (number) {
      return square(number);
    }
  };

  return {
    calculateSquareRoot: function (number) {
      return squareroot(number);
    }
  };
})();
