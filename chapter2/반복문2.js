// 반복문2
// while 문
    // 사용 주의점
        // while문의 조건이 언젠가 false가 되게 해야 함
        // false 안되면 영원히 반복됨, 
        // 조건이 까다로운 경우, 주로 사용함
    // for (초기값; 조건; 변화)
    // while (조건)         // 조건만 있음, 조건 true일 때 실행!

let i = 0;      // 초기값 while문 외부에 선언

while (i < 10) {
    console.log(i);
    i++;        // 변화 코드블럭 내부
}


// while 문 예제
    // !isFun -> true -> 조건실행
    // isFun === false -> true -> 조건실행

let i = 0;
let isFun = false;

while (!isFun) {
    console.log(i);
    i++;
    if (i === 30) {
        isFun = true;       // !isFun 조건 -> false -> 반복 종료
    }
}
