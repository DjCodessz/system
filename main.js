function radixSortLSD(array) {
    const maxNum = Math.max(...array) * 10;
    let divisor = 10;
    while (divisor < maxNum) {
       let buckets = [...Array(10)].map(() => []);
       for (let num of array) {
          buckets[Math.floor((num % divisor) / (divisor / 10))].push(num);
       }
       array = [].concat.apply([], buckets);
       divisor *= 10;
    }
    return array;
}

let arrayToBeSorted = [99, 1999999999, 51, 23, 102];
let sortedArray = radixSortLSD(arrayToBeSorted);
console.log(sortedArray);
