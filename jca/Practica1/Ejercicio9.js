function addOnlyNums(...args) {
    let sum = 0;
    for (let arg of args) {
    if (typeof arg === "number") {
    sum += arg;
    } else if (!isNaN(arg)) {
    sum += Number(arg);
    }
    }
    return sum;
    }
    
    console.log(addOnlyNums(1, 2, 3, "4", "5", "6")); // 21
    console.log(addOnlyNums("Hola", 1, "2", "tres")); // 3