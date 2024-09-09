const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [7, 8, 9];

// Solution:

/*
 * NOTE: Although we could take the 3 arrays as arguments on the function, 
 *  we will just take 2 arrays as arguments as stated on the instructions.
*/

function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

let merged = mergeArrays(a, b);

merged = mergeArrays(merged, c);

console.log(merged);

/*
 * Expected output:
 *
 * [
 *   1, 2, 3, 4, 5,
 *   6, 7, 8, 9
 * ]
 */