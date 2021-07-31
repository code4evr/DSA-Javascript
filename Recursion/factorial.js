function factorial(n) {
  let value = 0;
  if (n < 2) {
    return 1;
  }
  return (value = n * factorial(n - 1));
}

console.log(factorial(6));
