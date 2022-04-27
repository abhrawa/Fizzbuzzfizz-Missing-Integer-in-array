/**
 * Step-1 Iterate a loop on Given array.
 * Step-2 Apply condition If element of array is equal to sum of index of array and 1.
 * Step-3 If not equal then return the index by adding 1.
 */

let arry = [1, 2, 3, 4, 5, 6, 7, 8, 10];
function findMissingInteger(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      return i + 1;
    }
  }
}
console.log(findMissingInteger(arry));
