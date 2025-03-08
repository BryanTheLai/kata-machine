export default function two_crystal_balls(breaks: boolean[]): number {
    const jmp = Math.floor(Math.sqrt(breaks.length));
    let startIdx = 0;

    for (; startIdx < breaks.length; startIdx += jmp) {
        if (breaks[startIdx]) break;
    }

    startIdx -= jmp;

    for (let x = startIdx; x < startIdx + jmp; x++) {
        if (breaks[x]) return x;
    }
    return -1;
}
