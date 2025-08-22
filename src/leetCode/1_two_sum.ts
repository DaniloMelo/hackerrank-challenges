/*
https://leetcode.com/problems/two-sum/description/

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
*/

function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  let res: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    const comp = target - nums[i];

    // 1. Verificamos se o complemento já existe no mapa
    if (map.has(comp)) {
      // 2. Se sim, retornamos os dois índices
      res = [map.get(comp)!, i];
    }

    // 3. Se não, adicionamos o número atual e seu índice ao mapa
    map.set(nums[i], i);
  }

  return res;
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSum([3, 2, 4], 6)); // [1,2]
console.log(twoSum([3, 3], 6)); // [0,1]
