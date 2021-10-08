// 삼항연산자
// condition ? true : false
    // -> 조건이 true 결과값이 true, false면 false가 됨

const array = [];

let text = '';
if(array.length === 0) {
    text = '배열이 비어있습니다';
} else {
    text = '배열이 비어있지 않습니다.'
}

console.log(text);


// 삼항연산자로 변환

const array = [];

let text = array.length === 0 
? '배열이 비어있습니다.'                // 너무 길면 줄바꿈
: '배열이 비어있지 않습니다';

console.log(text);


// 삼항 연산자 중첩 사용
// 될 수 있으면 중첩은 사용하지 않음 -> if문 사용

const condition1 = false;
const condition2 = false;

const value = condition1 
? '와우!'
: condition2 
    ? 'hello'
    : 'bye';

console.log(value);         // bye