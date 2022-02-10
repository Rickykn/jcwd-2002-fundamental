const number = [1, 2, 3, 4, 5, 6, 7, 8];

// const duplicateForEach = (arr, callback) => {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i], i, arr);
//   }
// };

// duplicateForEach(number, (val,idx,arr) => {

// });

const duplicateFilter = (arr, callback) => {
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      resultArr.push(arr[i]);
    }
  }
};
