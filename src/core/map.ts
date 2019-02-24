const map = <T, U>(arr: T[], fn: (x: T) => U): U[] => {
  const newArr: U[] = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = fn(arr[i]);
  }
  return newArr;
};

export default map;
