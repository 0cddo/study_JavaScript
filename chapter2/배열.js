// 객체 : 한 변수나 상수 안에 여러가지 정보를 담음


// 배열
// 여러개의 항목이 들어있는 리스트
// [0, 1, 2, 3] -> 나열 
// 자바스크립트는 배열의 항목이 같은 타입일 필요는 없음
// const 배열명 = [ 원소 나열]
// 배열안에 배열이 들어갈 수도 있음

const array = [1, 2, 3, 4, 5];
console.log(array);

const array = [ 1, 'blabla', {}, 4];
// 객체 항목별 출력
console.log(array[0]);      // 1
console.log(array[1]);      // blabla
console.log(array[2]);      // {}
console.log(array[3]);      // 4
console.log(array[4]);      // undefined


// 배열 안의 원소들끼리 구분은 쉼표 사용
const objects = [
    {name: '멍멍이'},
    {name: '야옹이'}
];

console.log(objects);
console.log(objects[0]);
console.log(object[1]);

console.log(objects.length);        // 2

// 배열에 항목 추가하기
    // 내장함수 push 이용
    // 배열 가장 마지막에 추가됨

objects.push ({
    name: '몽자'
});

console.log(objects);       // index 2 추가됨


// 배열의 크기
    // 배열 안에 몇 개의 요소가 있는지 알아내기, 
    // length 이용

console.log(objects.length);     // 3


// 빈 배열

const a = [];superHeroes.forEach(hero => console.log(hero));
