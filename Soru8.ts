function sum(...nums: number[]): number {
  return nums.reduce((t, n) => t + n, 0);
}

console.log(sum(1, 2, 3));
console.log(sum(10, 20, 30, 40));