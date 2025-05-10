function permutationSort(a) {
    let count = 0;
    let found = false;

    function heapPermute(k) {
        if (k === 1) {
            count++;
            if (isSorted(a)) {
                found = true;
            }
            return;
        }

        heapPermute(k - 1);
        if (found) return;

        for (let i = 0; i < k - 1; i++) {
            if (k % 2 === 0) {
                [a[i], a[k - 1]] = [a[k - 1], a[i]];
            } else {
                [a[0], a[k - 1]] = [a[k - 1], a[0]];
            }

            heapPermute(k - 1);
            if (found) return;
        }
    }

    heapPermute(a.length);
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
