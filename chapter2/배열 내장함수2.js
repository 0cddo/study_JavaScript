// map 내장함수
// 배열안의 원소 변환 (모든원소)

// 배열 요소로 제곱 배열 새로 만들기

const array = [ 1, 2, 3, 4, 5, 6, 7, 8];

const squared = [];

for (let i = 0; i < array.length; i++) {
    squared.push(array[i] * array[i]);
}

console.log(squared);

// 다른 방법 2

array.forEach(function(n) {
    squared.push(n * n);
})

console.log(squared);

// 다른 방법 3

array.forEach(n => squared.push(n * n));

console.log(squared);


// map : 어떤 배열이 있을 때 내용을 가지고 전체적으로 변환하고 싶을 때 활용하는 내장함수
// map 내장 함수로 만들기

const square = n => n * n;       // square 화살표 함수
const squared = array.map(square);

console.log(squared);

// map 내장 함수 더 간단히 이용

const squared = array.map(n => n * n);

console.log(squared);


// map 활용
// 객체로 이루어진 배열 중 텍스트로만 이루어진 문자열 배열로 만들기 

const items = [
    {
        id: 1,
        text: 'hello'
    },
    {
        id: 2,
        text: 'bye'
    }
];

const texts = items.map(item => item.text);
console.log(texts);         // ['hello', 'bye']



// indexOf
// 배열에서 원하는 특정항목이 몇 번째 원소인지 알려주는 함수

const superheroes = ['아이언맨', '토르', '닥터 스트레인지', '캡틴 아메리카'];

const index = superheroes.indexOf('토르');
console.log(index);     // 1  ( -1 의미 -> 일치하는게 없다)


// findIndex 함수 
// indexOf와 비슷, 배열내의 값들이 객체이거나 특정 조건으로 찾으려고 할 때 사용
// findeIndex의 파라미터 -> 함수 (특정 조건을 확인, 조건 일치하는 원소 몇번째인지 알려줌 )
const todos = [
    {
        id: 1,
        text: '자바스크립트 입문',
        done: true,
    },
    {
        id: 2,
        text: '함수 배우기',
        done: true,
    },
    {
        id: 3,
        text: '객체와 배열 배우기',
        done: true,
    },
    {
        id: 4,
        text: '클래스 배우기',
        done: false,
    }
    
];

const index =todos.findIndex( todo => todo.id === 3);
console.log(index);         // 2



// find 함수
// findIndex와 유사하나 조금 다름
// 배열의 원소 찾은 값을 반환함 
// indexOf, findeIndex와 finde는 가장 첫번째로 찾은 항목을 알려줌

const todo = todos.find(todo => todo.id === 3);   
console.log(todo);      // {id: 3, text: '객체와 배열 배우기', done: true}

