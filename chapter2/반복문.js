// 반복문
// 특정 작업 반복적으로 사용할 때 사용
// 특정 조건에 따라 실행됨
// 시작 -> 조건 (true / false)
    // -> true -> 구문실행
    // -> false -> 끝


// for문

for (let i = 0; i < 10; i++) {
    console.log(i);
}


for (let i = 10; i >= 0; i-=2) {
    console.log(i);
}


// for문과 배열 함께 사용하기
// 배열 요소 하나씩 출력
// i < names.length         // names.length = 3 , i -> 0, 1, 2 

const names = ['멍멍이', '꿍이', '용가리'];

for (let i = 0; i < names.length; i++) {        
    console.log(names[i]);
}