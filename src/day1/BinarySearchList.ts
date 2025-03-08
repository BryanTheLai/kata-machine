export default function bs_list(haystack: number[], needle: number): boolean {
    let l = 0;
    let r = haystack.length;

    do {
        const m = Math.floor(l + (r - l) / 2);

        if (needle === haystack[m]) {
            return true;
        }

        if (needle > haystack[m]) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    } while (l < r);
    return false;
}
