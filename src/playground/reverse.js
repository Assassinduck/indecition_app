var findDigit = function (num, nth) {
  return num.toString().replace(/\D/g, 0).split("").slice(1);
};

console.log(findDigit(5673,4));