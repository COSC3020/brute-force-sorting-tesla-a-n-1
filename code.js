function permutationSort(a) {
    let permutationCount = 0;

    //first permutation
    let currentPermutation = [...a];

    while (true) {
        permutationCount++;

        if (isSorted(currentPermutation)) {
            // Apply perm to origional list
            for (let i = 0; i < a.length; i++) {
                a[i] = currentPermutation[i];
            }
            return permutationCount;
        }

        // Lexicographically generate next perm
        if (!genNextLexicoPerm(currentPermutation)) {
            break; // because there's no more permutations
        }
    }

    return permutationCount;
}

function isSorted(a) {
    for (let i = 0; i < a.length - 1; i++) {
        if (a[i] > a[i+1]) {
            return false;
        }
    }

    return true;
}

function genNextLexicoPerm(a) {
    //1 Find largest k that a[k] < a[k + 1] 
    let k = -1;
    for (let i = 0; i < a.length - 1; i++) {
        if (a[i] < a[i+1]) {
            k = i;
        }
    }

   // if no such index exists, this is the last permutation
    if (k === -1) {
        return false;
    }

    // 2 find largest index i > k that a[k] < a[i]
    let l = k + 1;
    for (let i = k + 1; i < a.length; i++) {
        if (a[k] < a[i]) {
            l = i;
        }
    }

    // 3 swap a[k] with a[l]
    [a[k], a[l]] = [a[l], a[k]];

    // 4 reverse sequence from a[k+1} to end 
    let left = k + 1;
    let right = a.length - 1;
    while (left < right) {
        [a[left], a[right]] = [a[right], a[left]];
        left++;
        right--;
    }
    
    return true;
}




