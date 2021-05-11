// 비교연산자
// 두 값을 비교할 때는 === 사용

const a = 1;
const b = 2;
const equals = a === b;
console.log(equals);        // false; 값이 같으면 true;


// == 
// 타입을 검사하지 않음
// 실제로 값이 다름 (실수 유발)
// 웬만하면 === 사용 (확실한 방법)
const a = 1;
const b = '1';
const equals = a == b;
console.log(equals);        // true


const a = false;
const b = 0;
const equals = a == b;
console.log(equals);        // true;


const a = true;
const b = 1;
const equals = a == b;
console.log(equals);        // true;


const a = null;
const b = undefined;
const equals = a == b;
console.log(equals);        // true;


// !==  (같지 않다)  
// != 도 작동함 (타입 검사 안함)
const a = 'a';
const b = 'b';
const notEquals = a !== b;      // a != b;   // false; 
console.log(notEquals);         // true; 


// 크기 비교
// 이상 이하 비교 = 은 부등호 뒤에 옴
const a = 10;
const b = 15;
const c = 15;

console.log(a < b);         // true
console.log(b > a);         // true
console.log(b >= a);        // true     // b가 a보다 크거나 같다
console.log(a <= c);        // true     // a가 c보다 작거나 같다
console.log(b < c);         // false;


// 문자열 
const a = '안녕';
const b = '하세요';

console.log(a + b);
