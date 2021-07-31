function fibonacci(n) {
  let sequence = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    sequence.push(sequence[i - 2] + sequence[i - 1]);
  }
  console.log(sequence);
}

fibonacci(10);
