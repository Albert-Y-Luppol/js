// Given an array of non-negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Your goal is to reach the last index in the minimum number of jumps.

console.clear();
console.log(jump([2, 3, 1, 1, 4])); //[1, 2, 1, 1, 1]

// functions

function jump(nums) {
  let jumps = 0,
    curPosition = 0;

  while (curPosition < nums.length - 1) {
    if (curPosition + 1 + nums[curPosition] >= nums.length) {
      //   console.log("To the end: " + nums.slice(curPosition));
      curPosition = nums.length - 1;
    } else {
      //   console.log(
      //     "getStep: " +
      //       nums.slice(curPosition, nums[curPosition] + curPosition + 1)
      //   );
      let step = getBiggest(
        nums.slice(curPosition, nums[curPosition] + curPosition + 1)
      );
      curPosition += step;
    }
    // console.log("Position: " + curPosition);

    jumps++;
  }

  return jumps;
}

function getBiggest(arr) {
  //   console.log("arr: " + arr);
  let res = 1;
  let maxStep;
  for (let step = 1; step < arr.length; step++) {
    if (step + arr[step] >= res) {
      res = step + arr[step];
      maxStep = step;
    }
    // console.log("maxStep: " + maxStep);
  }
  //   console.log("maxStep: " + maxStep);
  return maxStep;
}
