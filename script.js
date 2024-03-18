// level 5555555555555

// Problem
// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:
// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.
// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
const maxSequence = (arr) => {
  let currentsum = 0;
  let maxSum = 0;
  for (let i = 0; i < arr.length; i++) {
    currentsum += arr[i];
    if (currentsum > maxSum) {
      maxSum = currentsum;
    }
    if (currentsum < 0) {
      currentsum = 0;
    }
  }
  return maxSum;
};
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(
  maxSequence([
    7, 4, 11, -11, 39, 36, 10, -6, 37, -10, -32, 44, -26, -34, 43, 43,
  ])
);
