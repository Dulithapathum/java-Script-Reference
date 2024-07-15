let num = [10, 20, 30, 40, 50, 60, 70]; // Initialize an array with numbers

// Use the reduce method to accumulate a result from the array elements
console.log(
  num.reduce((prevelement, nextelement) => {
    // 'prevelement' is the accumulator that holds the accumulated result (initially the first element or zero if a second argument is provided)
    // 'nextelement' is the current element being processed in the array

    // Add the current element ('nextelement') to the accumulator ('prevelement')
    return prevelement + nextelement;
  })
);
