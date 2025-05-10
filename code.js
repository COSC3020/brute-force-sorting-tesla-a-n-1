function permutationSort(a) {
    let count = 0;
    let found = false;

    function heapPermuteIterative(n) {
        let c = Array(n).fill(0);
        let i = 0;

        while (i < n) {
            if (c[i] < i) {
                count++;
                if (isSorted(a)) {
                    found = true;
                    return;
                }

                if (i % 2 === 0) {
                    [a[0], a[i]] = [a[i], a[0]];
                } else {
                    [a[c[i]], a[i]] = [a[i], a[c[i]]];
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
