function combineTwoArrays(arr1, arr2) {
    const combined = [...arr1, ...arr2];
    return combined;
  }
  const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = combineTwoArrays(arr1, arr2);
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]