// const number = [1, 2, 3, 4, 5, 6, 7, 8];

// // const duplicateForEach = (arr, callback) => {
// //   for (let i = 0; i < arr.length; i++) {
// //     callback(arr[i], i, arr);
// //   }
// // };

// // duplicateForEach(number, (val,idx,arr) => {

// // });

// const duplicateFilter = (arr, callback) => {
//   let resultArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i], i, arr)) {
//       resultArr.push(arr[i]);
//     }
//   }
//   return resultArr;
// };

// let result = duplicateFilter(number, (val) => val > 6);

// console.log(result);

var reverseString = function(s) {
  let result = ""
  
  for(let i=s.length-1;i>=0;i--){
      result += s[i]
  }
  return result.split("")
};



console.log(reverseString([ 'h', 'e', 'l', 'l', 'o' ]))
