function compareArrays(arr1, arr2) {
  return arr1.length == arr2.length && arr1.every((value, index) => { return value === arr2[index] });
}

function advancedFilter(arr) {
  let resultArr = arr.filter(e => e > 0 && e % 3 == 0).map(e => e * 10);
  return resultArr; // array
}
