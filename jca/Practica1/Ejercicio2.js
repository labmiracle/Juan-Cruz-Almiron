function sum(arr, n) {
    if (n === 0) {
      return 0;
    }
    return arr[n-1] + sum(arr, n-1);
  }


  let arr = [1, 2, 3, 4, 5];
let n = 3;
let result = sum(arr, n);
console.log(result);