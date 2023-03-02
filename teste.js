function fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
}

function sequenciafibonacci(n) {
  let fib = fibonacci(n);
  let index = fib.indexOf(n);

  if (index === -1) {
    return `${n} O número informado não pertence a sequência Fibonacci.`;
  } else {
    return `${n} O número informado pertence a sequência Fibonacci ${index}.`;
  }
}

let number = parseInt(prompt("Coloque um número: "));
let message = sequenciafibonacci(number);
console.log(message);

