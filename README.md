# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`. 

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy. 

## To understand:

First generate all possible permutations, check each permutation to see if it's sorted.
When sorted permutation found, stop and use that arangement.

### Steps:

  1. Generate permutations
  2. For each perm, check if sorted
  3. Count per perm checked
  4. When sorted perm found, apply to og list
  5. return permTryCount

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.
### random vs systematic permutation generator

  - Systematic: O(n!) in worst case. guaranteed solution. lexicographic generation.
      + Lexicographic generation algorithm pseudocode from wikipedia to use as a start:
          " The following algorithm generates the next permutation lexicographically after a given permutation. It changes the given permutation in-place.

        Find the largest index k such that a[k] < a[k + 1]. If no such index exists, the permutation is the last permutation.

        Find the largest index l greater than k such that a[k] < a[l].
        
        Swap the value of a[k] with that of a[l].
        
        Reverse the sequence from a[k + 1] up to and including the final element a[n]."

  Instead of using lexicographic permutation generation, I used heap's algorithm
      
  - Random: O(n! x n) complexity with no upper bound since the approach lacks memory of previously checked permutations

### Complexity:

  - n! possible permutations for list of length n as learned in Discrete
  - every attempt at checking if each permutation is sorted would take O(n) time
  - Overall: O(n! x n) horrible efficiency, esspecially if list >10 elements

Best case: Already sorted $\Omega(n)$

Worst case: reverse order O(n! x n)


Sources: [Permutations](https://en.wikipedia.org/wiki/Permutation#:~:text=Random%20generation%20of%20permutations,-Main%20article%3A%20Fisher&text=Unlike%20for%20systematic%20generation%2C%20which,random%20one%20of%20the%20n!) 

 [Heap's Algorithm:](https://en.wikipedia.org/wiki/Heap%27s_algorithm)

For symbols: [Github reference](https://github.com/alemohamad/html-symbols/blob/master/readme.md)

I also used Claude.ai to frankenstein my versions of permutationSort

"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice."
