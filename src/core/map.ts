const map = <T, U>(arr: T[], fn: (a: T) => U): U[] => {
    return arr.map(x => fn(x))
}

export default map;
