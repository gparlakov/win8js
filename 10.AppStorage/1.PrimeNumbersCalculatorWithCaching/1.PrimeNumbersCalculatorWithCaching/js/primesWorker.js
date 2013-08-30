/// <reference group="Dedicated Worker" />

var isPrime = function (number) {
    var isPrimeNumber = true;

    var numberSqrt = Math.sqrt(number);
    for (var i = 2; i < numberSqrt; i++) {
        if (number % i == 0) {
            isPrimeNumber = false;
            break;
        }
    }

    return isPrimeNumber;
}

var calculatePrimesTo = function (firstNumber, secondNumber, count) {
    var primes = [];

    for (var i = firstNumber; i < secondNumber; i++) {
        if (isPrime(i)) {
            primes.push(i);

            if (count > 0 && primes.length == count) {
                break;
            }
        }
    }

    return primes;
}

onmessage = function (event) {
    var count = 0;
    var firstNumber = 0;
    var secondNumber = 0;

    if (event.data.number) {
        secondNumber = event.data.number;
    }

    if (event.data.firstNumber && event.data.secondNumber) {
        firstNumber = event.data.firstNumber;
        secondNumber = event.data.secondNumber;
    }

    if (event.data.count) {
        count = event.data.count;
    }
    
    var primes = calculatePrimesTo(firstNumber, secondNumber, count);    

    postMessage(primes);
}
