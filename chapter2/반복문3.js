// 반복문
// for of 
// 주로 배열을 다룰 때 사용함
// for (let 요소명아무거나 of 배열명) {     }
// 배열 안의 요소 사용하여 작업 시 이용, 뭐 굳이 안써도 돼 (for in과 헷갈림)

const numbers = [10, 20, 30, 40, 50];

for (let number of numbers) {
    console.log(number);
}

// 배열 내장함수가 있음 -> 더 쉬운 방법 있음~~~



// for in
// 객체에 대한 반복적 작업 처리 시 사용

const doggy2 = {
    name: '휴지',
    sound: '멍멍',
    age: 3
};

for (let key in doggy2) {
    console.log(`${key}: ${doggy2[key]}`);  // 키 와 값 함께 나타내기
}



// 객체의 정보를 변형적으로 가져올 수 있는 방법
// 객체의 내장함수 : 객체 -> 배열 (중요!!!)
    // Object.keys() / Objects.values() / Objects.entries()

const doggy = {
    name: '몽실이',
    sound: '멍멍',
    age: 10
};

console.log(Object.keys(doggy));    // 객체 키 값 배열화
console.log(Object.values(doggy));  // 객체 값 배열화
console.log(Object.entries(doggy));     // 객체 요소들 배열
