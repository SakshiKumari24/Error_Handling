function numberChecker(numbers) {
    return function(number) {
      return numbers.includes(number);
    };
  }
  const array = [1, 2, 3, 4, 5];
  const checkNumber = numberChecker(array);
  
  console.log(checkNumber(3));
  console.log(checkNumber(6));
  