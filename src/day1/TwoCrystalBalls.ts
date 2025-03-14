export default function two_crystal_balls(breaks: boolean[]): number {
    // TwoCrystalBalls problem uses jumping, specifically sqrt the length of array.
    // Jump first, then when something happens, go back by 1 and do linear search from there. 
    // O(sqrt(n))
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
