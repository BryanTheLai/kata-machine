export default function bubble_sort(arr: number[]): void {
    // Just swapping left to right. So largest is at the end.
    // O(n^2)

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++){
            // -1 avoids out of bounds(bcs no arr[j+1] for last element). 
            // -i to ignored sorted largest nums at end.
            if (arr[j] > arr[j + 1]) {
                //swap
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] =temp;
            }
        }
    }
}
