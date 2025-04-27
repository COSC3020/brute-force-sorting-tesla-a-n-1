function permutationSort(a) {
    return 0;
}
/*
    permutationCount = 0

    first permutation
    currentPermutation = copy a

    while true:
        permutationCount++

        check if current perm is sorted
        if isSorted(currentPermutation):
            Apply perm to origional list
            for i from 0 to length(a)-1:
                a[i] = currentPermutation[i]
            return permutationCount

        Lexicographically generate next perm
        if !genNextLexicoPerm(currentPermutation):
            break because there's no more permutations

    return permutationCount

function isSorted(a):
    for i from 0 to length(a)-2:
        if a[i] > a[i+1]:
            return false
    return true

function genNextLexicoPerm(a):
    1 Find largest k that a[k] < a[k + 1] 
    k = -1
    for i from 0 to length(a)-2:
        if a[i] < a[i+1]:
            k=i

    if no such index exists, this is the last permutation
    if k == -1:
        return false

    2 find largest index i > k that a[k] < a[i]
    l = k + 1
    for i from k+1 to length(a)-1:
        if a[k] < a[i]:
            l = i

    3 swap a[k] with a[l]
    swap a[k] and a[l]

    4 reverse sequence from a[k+1} to end 
    reverse subarray a[k+1] to a[length(a)-1]

    ret t
*/



