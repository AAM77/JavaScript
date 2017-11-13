for (var numCounter = 1; numCounter < 101; numCounter++) {

  if ((numCounter % 5 === 0) && (numCounter % 3 != 0)) {
    console.log("Buzz");
  }
  else if ((numCounter % 5 === 0) && (numCounter % 3 === 0)) {
    console.log("FizzBuzz");
  }
  else if (numCounter % 3 === 0) {
    console.log("Fizz");
  }
  else {
    console.log(numCounter);
  }
}
