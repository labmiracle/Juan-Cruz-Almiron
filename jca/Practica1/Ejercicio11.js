function onlyUniques(...args) {
    const uniques = [];
    args.forEach((arg) => {
      if (!uniques.includes(arg)) {
        uniques.push(arg);
      }
    });
    return uniques;
  }

  console.log(onlyUniques(1, 2, 3, 4, 4, 5, 5, 6)); // [1, 2, 3, 4, 5, 6]
console.log(onlyUniques('a', 'b', 'b', 'c', 'd', 'd')); // ['a', 'b', 'c', 'd']
console.log(onlyUniques(true, true, false, false, true)); // [true, false]