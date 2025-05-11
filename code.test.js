const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

// Tests specific cases first
console.log("Testing specific cases:");
const testCases = [
  [3, 1, 4, 1, 5],
  [5, 4, 3, 2, 1],
  [1, 2, 3, 4, 5],
  [9, 8, 7, 6],
  [2, 1],
  [1]
];

testCases.forEach(arr => {
  const original = JSON.parse(JSON.stringify(arr));
  const expected = JSON.parse(JSON.stringify(arr)).sort((a, b) => a - b);
  const permCount = permutationSort(arr);
  
  console.log(
    `Test case [${original}]: ` + 
    (JSON.stringify(arr) === JSON.stringify(expected) ? 
      `PASSED (${permCount} permutations)` : 
      `FAILED - Expected [${expected}], got [${arr}]`)
  );
});

// Test that already sorted arrays return permutation count of 1
console.log("\nTesting that sorted arrays return permutation count of 1:");
const sortedTest = jsc.forall("array nat", function(arr) {
  if (arr.length > 6) return true; // Skip arrays that are too large
  
  const sorted = JSON.parse(JSON.stringify(arr)).sort((a, b) => a - b);
  const count = permutationSort(sorted);
  const result = count === 1;
  
  if (!result && arr.length <= 3) {
    console.log(`Failed sorted test with array [${sorted}], got count ${count}`);
  }
  
  return result;
});

// the sorted array test 30 
jsc.assert(sortedTest, { tests: 30 });

const test =
    jsc.forall("array nat", function(arr) {
        var a1 = JSON.parse(JSON.stringify(arr));
        var a2 = JSON.parse(JSON.stringify(arr));
        var count = permutationSort(a1);
        return count >= 0 && JSON.stringify(a1) == JSON.stringify(a2.sort(function(a, b) { return a - b; }));
    });
jsc.assert(test);
