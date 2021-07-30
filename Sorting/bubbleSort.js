function bubbleSort(arr) {
  let outerLoop = 0;
  let innerLoop = 0;
  let temp = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    outerLoop++;
    let swapped = false;
    for (let j = 0; j < arr.length; j++) {
      innerLoop++;
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  console.log(`outer loop ran ${outerLoop}`);
  console.log(`inner loop ran ${innerLoop}`);
  console.log(arr);
}

bubbleSort([5, 4, 3, 2, 1, 6, 0, 8, 9, 7]);
