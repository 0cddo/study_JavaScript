// 화살표 함수 (arrow function)
    // es6 문법
// const 함수명 = (매개변수) => { 코드 }
// 화살표 함수 특징 한줄 코드인 경우 반환 값을 바로 입력하면 됨
/* const add = (a, b) => {
    return a + b;
} */

const add = (a, b) => a + b;

const sum = add(1, 2);
console.log(sum);


const hello = (name) => {
    console.log(`Hello, ${name}!`);
}

hello('0eun'); 


// arrow 함수와 function 키워드 함수의 차이
// 화살표 함수의 this와 function 함수의 this가 가르키는 것이 다름

