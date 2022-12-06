// 1-exersize//

// function countTrue(arr) {
// 	let count = 0;
// 	for(let i = 0; i < arr.length; i++){
// 		if(arr[i] == true){
// 			count++;
// 		}
// 	}
// 	return count;
// }

// 2-exersize//
// function redundant(str) {
//     return function() { return str }
// }

// 3-exersize//
// const REGEXP = /^$/;

// const validate = (text) => {
//     return REGEXP.test(text);
// }

// const isNotEmpty = validate("x");
// const isEmpty = validate("");

// console.log(isNotEmpty); //false
// console.log(isEmpty); //true

// 4-exersize//
// function possibleBonus(a, b) {
// 	let x = a
// 	let y = b

// 	for (let i= 1; i<=6; i++){
// 		x+=1;
// 		if (x===y){
// 			return true;
// 		}
// 	}
// 	return false
// };