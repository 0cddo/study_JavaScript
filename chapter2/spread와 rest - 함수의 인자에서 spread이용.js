// 함수 인자에서 spread

// 파라미터와 인자의 차이
// 파라미터 : 함수에서 받아오는 값
// 인자 : 함수를 사용할 때 넣어주는 값

function subtract(x, y) {       // x, y 는 파라미터
    return x - y;
}

// const resuslt = substract(numbers[0], numbers[1]);
// const result = substract(1, 2)       // 1, 2는 인자
const numbers = [1, 2];
const result = subtract(...numbers);      
console.log(result)         // -1



// spread를 함수의 인자로 이용

function sum(...rest) {
    return rest.reduce((acc, current) => acc + current, 0);
}

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8];  // 인자값을 배열로 만든 후
console.log(sum(...numbers));       // 36     // 함수의 인자에 spread넣어줌