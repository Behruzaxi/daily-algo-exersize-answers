**1.How Much is True?**

**JAVOB**

```js
function countTrue(arr) {
    let count = 0;
	for(let i = 0; i < arr.length; i++){
        if(arr[i] == true){
            count++;
		}
	}
	return count;
}
```
 **exersize link**
 - [source link](https://edabit.com/challenge/GLbuMfTtDWwDv2F73)
-----

**2. A Redundant Function**

**JAVOB**

```js
function redundant(str) {
    return function() { return str }
}
```
 **exersize link**
- [source link](https://edabit.com/challenge/hzxN9bAebBPNqdQto)
------
**3.RegEx Exercise: An empty string**

**JAVOB**

```js
const REGEXP = /^$/;

const validate = (text) => {
    return REGEXP.test(text);
}

const isNotEmpty = validate("x");
const isEmpty = validate("");

console.log(isNotEmpty); //false
console.log(isEmpty); //true
```
 **exersize link**
- [source link](https://edabit.com/challenge/bAqxpvYmDuuvz4LQz)

--------
**4.Tile Teamwork Tactics**

**JAVOB**

```js
function possibleBonus(a, b) {
	let x = a
	let y = b

	for (let i= 1; i<=6; i++){
		x+=1;
		if (x===y){
			return true;
		}
	}
	return false
};
```
 **exersize link**
- [source link](https://edabit.com/challenge/NHfYRHg2tDtcZyykB)


**7.Find Number of Digits in Number**

**javob**

```js
function num_of_digits(...num){
  var n = Math.floor(Math.log10(Math.abs(num))) + 1;
 
  if(n === -Infinity){
    return 1
  }else{
    return n
  }
}
```
 **exersize link**
- [source link](https://edabit.com/challenge/yFJzLfYghz7ZtsyAN)

--------------------------
