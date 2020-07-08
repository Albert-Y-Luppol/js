// Given a collection of distinct integers, return all possible permutations.

// permute([1, 2]);

console.log(shifting([1, 2, 3, 4]));

function permute(nums) {
  let res = [];

  let rotatedArr = rotate(nums);

  //   console.log(rotatedArr);

  rotatedArr.forEach((item) => {
    let arr = swipe(item);
    res.push(...arr);
  });
}

function shifting(arr) {
  if (arr.length == 2) {
    return [arr, [arr[1], arr[0]]];
  } else {
    let res = [];
    arr.forEach((item, index, array) => {
      let partialArr = array.slice();
      partialArr.splice(index, 1);
      shifting(partialArr).forEach((subArr) => {
        subArr.unshift(item);
        res.push(subArr);
      });
    });
    return res;
  }
}
