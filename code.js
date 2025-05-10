function permutationSort(a) {
    if (a.length <= 1) return 1;
    if (isSorted(a)) return 1;
    let count = 1; // already checked initial array
    let found = false;

    function heapPermuteIterative(n) {
        let c = Array(n).fill(0);
        let i = 0;

        while (i < n && !found) {
            if (c[i] < i) {

                if (i % 2 === 0) { //Swap elemnts
                    [a[0], a[i]] = [a[i], a[0]];
                } else {
                    [a[c[i]], a[i]] = [a[i], a[c[i]]];
                }
                
                count++;
                if (isSorted(a)) {
                    found = true;
                    return;
                }
                
                c[i]++;
                i = 0;
            } else {
                c[i] = 0;
                i++;
            }
        }
    }

    heapPermuteIterative(a.length);
    return count;
}

function isSorted(a) {
    for (let i = 0; i < a.length - 1; i++) {
        if (a[i] > a[i + 1]) {
            return false;
        }
    }
    return true;
}
