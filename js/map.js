// let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// let arr2 = [1, 2, 3, 4, 5, 6, 7];
// let res = {}

// for(let i = 0; i < arr2.length; i++) {
//     res[arr2[i]] = arr1[i]
// }   
// arr2.forEach((el, index) => res[el] = arr1[index])

// let obj = {'a': 12, 'b': 21, 'c': 13, 'd': 23, 'e': 17};
// let res = {}
// let res2 = {}

// for(let key in obj){
//     obj[key] >= 10 && obj[key] <= 20 ? res[key] = obj[key] : res2[key] = obj[key]
// }

// console.log(res, res2);
// let obj = {1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 
// 	'сб', 7: 'вс'}; 
// let res = {}
// let res2 = {}

// for(let key in obj) {
//     console.log(key);
//     key % 2 === 0 ? res[obj[key]] = key : res2[key] = obj[key]
// }

// console.log(res, res2);

let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
let res = {}

for(let key in obj) {
    res[obj[key] ** 2] = key
}

console.log(res);