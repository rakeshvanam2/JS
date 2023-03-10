function findPair(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (j = i + 1; j <= nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
  return null;
}

nums = [-1, 7, 2, -11, 3, 2];
target = -12;

console.log(findPair(nums, target));