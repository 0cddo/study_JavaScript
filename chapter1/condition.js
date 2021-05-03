// falsy

/* if (false) console.log(false);
if(0) console.log(false);
if('') console.log(' ');
if (null) console.log(null);
if (undefined) console.log(undefined);
if (NaN) console.log(NaN);
 */


// true

/* if (true) console.log(true);
if (31) console.log(31);
if (-31) console.log(-31);
if ('young') console.log('young');
if ({}) console.log({});
if ([]) console.log([]);
 */


// n % 3 === 0 과 n % 5 === 0의 값 여러번 반복, 변수나 상수에 넣음

const n = 15;
const multipleOfThree = (n % 3 === 0);  // 일종의 boolean 값
const multipleOfFive = (n % 5 === 0);

/* if (multipleOfThree && multipleOfFive) { 	// 두 개의 조건 모두 참
	console.log('n은 15의 배수입니다.');
} else if (multipleOfThree) {
	console.log('n은 3의 배수입니다.');
} else if (multipleOfFive) {
	console.log('n은 5의 배수입니다.');
} else { 
	console.log('n은 3의 배수도 아니고, 5의 배수도 아닙니다.');
} */


// 중첩을 이용하여 표현

if (multipleOfThree && multipleOfFive) {   
    console.log('n은 15의 배수입니다.');
} else {		// 15의 배수가 아닌 것 (중첩)
	if (multipleOfThree) {
    	console.log('n은 3의 배수입니다.');
	} else if (multipleOfFive) {
    	console.log('n은 5의 배수입니다.');
	} else { 
    	console.log('n은 3의 배수도 아니고, 5의 배수도 아닙니다.');
	}
}