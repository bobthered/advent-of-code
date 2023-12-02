export const parseInput = (input = '') => {
    // get pairs
    const pairs = input.split('\n\n').map(pair => pair.split('\n').map(text => JSON.parse(text)));

    return { pairs }
}