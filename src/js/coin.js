//business logic for coin cointers
export const coinCounter = (num) => {
  //plug in the value
  const coins = [25, 10, 5, 1];
  const result = {
    25: 0,
    10: 0,
    5: 0,
    1: 0,
  };

  const changeFinder = (num, index) => {
    if (isNaN(num) || num <= 0 || index >= coins.length) {
      return result;
    }

    //ex num = 0.77 cents
    const bigNum = num * 100; //0.77 becomes 77

    const currentCoin = coins[index];
    // console.log(currentCoin);
    const coinNumber = Math.trunc(bigNum / currentCoin); //find the amount of this coin that fits in the number value. Cut off any decimal places on the number to get a whole number of coins.
    result[currentCoin] = coinNumber; //update the coin counter value with the number of coins that fit in this value
    // console.log(result);
    const newNum = (num - (coinNumber * currentCoin) / 100).toFixed(2); //update the value of num to be the original value minus the change we just found. Round to two decimal places so that information is not lost.
    // console.log(newNum);
    const newIndex = index + 1;
    // console.log(newIndex);

    changeFinder(newNum, newIndex); //run it again, this time with the new number and the i plus 1 of the coin array
  };

  changeFinder(num, 0);

  return result;
};