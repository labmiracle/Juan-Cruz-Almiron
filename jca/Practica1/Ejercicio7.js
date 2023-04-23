let count = 0;

function cc(card) {
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}

console.log(cc(2)); // 1 Bet
console.log(cc(3)); // 2 Bet
console.log(cc(7)); // 2 Bet
console.log(cc("K")); // 1 Bet
console.log(cc("A")); // 0 Hold