export const getSum = (n) => {
    return [...Array(n).keys()].reduce((a, b) => {
        return a + (b + 1);
    }, 0);
};
