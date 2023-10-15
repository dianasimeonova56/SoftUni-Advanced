function oddPositions(arr) {
    return arr.filter((a, i) => i % 2 !== 0)
        .map(x => x * 2)
        .reverse()
        .join(" ");
} oddPositions([10, 15, 20, 25])