function insertionSort(arr) {
  let outerLoop = 0;
  let innerLoop = 0;

  // Method 1:

  // for (let i = 0; i < arr.length; i++) {
  //   outerLoop++;
  //   let temp = 0;
  //   let key = i;
  //   for (let j = i + 1; j > 0; j--) {
  //     innerLoop++;
  //     if (j > arr.length - 1) {
  //       break;
  //     }
  //     console.log(`j is ${j}`);
  //     if (arr[j] < arr[key]) {
  //       console.log(`value of i = ${i}, j = ${j}, k = ${key} \n`);
  //       temp = arr[j];
  //       arr[j] = arr[key];
  //       arr[key] = temp;
  //       key -= 1;
  //       console.log(arr, '\n');
  //     } else {
  //       break;
  //     }
  //   }
  // }

  // Method 2:

  for (let i = 1; i < arr.length; i++) {
    outerLoop++;
    let numberToInsert = arr[i];
    let j;
    for (j = i - 1; arr[j] > numberToInsert && j >= 0; j--) {
      innerLoop++;
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = numberToInsert;
  }
  console.log(`outer loop ran ${outerLoop}`);
  console.log(`inner loop ran ${innerLoop}`);
  console.log(arr);
}

insertionSort([5, 4, 3, 2, 1, 6, 0, 8, 9, 7]);
