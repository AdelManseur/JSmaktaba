var maktaba = (function () {
  // Private function
  function square(x) {
    return x * x;
  }

  // Public API (an object)
  return {
    calculateSquare: function (number) {
      return square(number);
    }
  };
})();
