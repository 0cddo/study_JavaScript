// 배열 내장함수 
// shift, unshift, push, pop
// 기존 배열 자체에 영향 미침, 변경함

const numbers = [10, 20, 30, 40];

// shift
// 첫번째 원소를 배열에서 추출함
// 기존의 원소가 배열에서 빠져나와 변수에 들어감
// 기존의 배열에 영향 미침 (변경됨)
// 계속 실행하면 함수 빌 때까지 첫번째 원소 빠짐
// 아무것도 없으면 그냥 비워져 있음

const value = numbers.shift();
console.log(value);         // 10
console.log(numbers);       // [20, 30, 40]

numbers.shift();        // [30, 40]
numbers.shift();        // [40]
numbers.shift();
console.log(numbers)    // []



// unshift
// 배열의 맨 앞 부분에 원소를 추가함

numbers.unshift(5);
console.log(numbers);       // [5, 10, 20, 30, 40]


numbers.unshift(0);         // [0, 10, 20, 30, 40]
const value = numbers.shift();
console.log(value);         // 0
console.log(numbers);       // [10, 20, 30, 40]



// pop
// 끝에서부터 빼냄
// 빌 때까지 빠짐

const value = numbers.pop();

console.log(value);     // 40
console.log(numbers);       // [10, 20, 30]
numbers.pop();      // [10, 20]
numbers.pop();      // [10]
numbers.pop();      // []


// push
// 배열의 끝에서부터 원소 추가

numbers.push(50);       // [10, 20, 30, 40, 50]

const value = numbers.pop();    
console.log(value);     // 50
console.log(numbers);   // [10, 20, 30, 40]



// concat
// 여러개의 배열을 하나의 배열로 합침
// 배열1.concat(뒤에 합치는 배열명);
// concat 은 기존의 배열을 수정하지 않음

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const concated = arr1.concat(arr2);
console.log(arr1);      // [1, 2, 3]
console.log(arr2);      // [4, 5, 6]
console.log(concated);      // [1, 2, 3, 4, 5, 6]



// 추가 -> ES6 연산자 : 스프레드 연산자
// 스프레드 연산자를 이용하여 concat 하기

const concated = [...arr1, ...arr2];
console.log(concated);



// join
// 배열안의 값들을 문자열 형태로 합쳐줄 때 사용
// 배열을 쉼표사이에 넣어 문자열 형태로 출력

const array = [1, 2, 3, 4, 5, 6];

console.log(array.join());         // 1,2,3,4,5,6
console.log(array.join(' '));       // 1 2 3 4 5 6
console.log(array.join(', '))       // 1, 2, 3, 4, 5, 6

// join은 파라미터 삽입 가능 
// -> 파라미터 역할 : 출력된 값 구분용 (문자열 입력)

console.log(array.join())


