function nestedArrayAddition(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 0) {
      sum += nestedArrayAddition(arr[i]);
      console.log(`at i = ${i} we found array ${arr[i]}`);
    } else {
      sum += arr[i];
      console.log(sum);
    }
  }
  return sum;
}

console.log(nestedArrayAddition([1, [2], 3]));

/*
[1, 2, 3, [4, 5, 6, [7, 8], [9]], 10]
[1,[2],3]
[[[[[[[5]]]]]]]

*/
