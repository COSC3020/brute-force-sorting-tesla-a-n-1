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

Average case: still $O(n! * n)$ since n! permutations are made and each permutation requires O(n) time to check if it's sorted

Sources: [Permutations](https://en.wikipedia.org/wiki/Permutation#:~:text=Random%20generation%20of%20permutations,-Main%20article%3A%20Fisher&text=Unlike%20for%20systematic%20generation%2C%20which,random%20one%20of%20the%20n!) 

 [Heap's Algorithm:](https://en.wikipedia.org/wiki/Heap%27s_algorithm)
 I translated the recursive code in the page and then tried the non-recursive code they had instead of trying to use 
 the lexicographic implementation. 
Here is the non-recursive code I translated: "
```
procedure permutations(n : integer, A : array of any):
    // c is an encoding of the stack state.
    // c[k] encodes the for-loop counter for when permutations(k - 1, A) is called
    c : array of int

    for i := 0; i < n; i += 1 do
        c[i] := 0
    end for

    output(A)
    
    // i acts similarly to a stack pointer
    i := 1;
    while i < n do
        if  c[i] < i then
            if i is even then
                swap(A[0], A[i])
            else
                swap(A[c[i]], A[i])
            end if
            output(A)
            // Swap has occurred ending the while-loop. Simulate the increment of the while-loop counter
            c[i] += 1
            // Simulate recursive call reaching the base case by bringing the pointer to the base case analog in the array
            i := 1
        else
            // Calling permutations(i+1, A) has ended as the while-loop terminated. Reset the state and simulate popping the stack by incrementing the pointer.
            c[i] := 0
            i += 1
        end if
    end while
```
"

For symbols: [Github reference](https://github.com/alemohamad/html-symbols/blob/master/readme.md)

I then used Claude.ai to debug my permutationSort after I translated and implemented the non-recursive heapsort.
Here is the prompt I gave it: "Hey Claude, Could you help me figure out why the tests aren't passing for my permutationSort algorithm. The code uses heap's algorithm. Here is the code.js file and code.test.js file." I then gave it code.js and code.test.js

This is what it told me: "
I'll help you debug the permutationSort function. The issue lies in how the algorithm is tracking permutations and terminating once a sorted array is found.
Let's analyze the problems in your current implementation:

Your algorithm generates permutations but doesn't stop when a sorted permutation is found
The sorting happens as a side effect rather than explicitly returning the sorted array
The counting logic isn't accurately tracking the number of permutations until the sorted one is found

Here's a fixed version:Fixed permutationSort 

The key issues I fixed in your permutationSort function:

- Early termination: Your algorithm was generating all possible permutations even after finding the sorted one. I added a check to exit early when the sorted permutation is found.
- Counting logic: The count was being incremented before checking if the array was sorted, which led to inaccurate counting. Now we increment the counter after each new permutation and before checking if it's sorted.
- Edge cases: Added proper handling for empty or single-element arrays, which should return 1 permutation.
- Initial check: The function now checks if the initial array is already sorted before starting the permutation process.

The main differences from your original code:

- Used the found flag to stop generating permutations once we find the sorted one
- Moved the count increment to occur after a new permutation is created
- Added an initial check for already sorted arrays
- Added special case handling for arrays of length 0 or 1

This modified implementation should pass all the tests in your test file, including the check that already sorted arrays return a permutation count of 1.
Would you like me to explain Heap's algorithm in more detail or help with any other aspect of the code?" Then I implemented what Claude fixed 

"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice."
