// 연산자
// 프로그래밍 언어 특정연산 시 사용하는 문자

// 대입연산자 => value에 값 1을 넣겠다
let value = 1;

a += 3;     //  a에 1을 더함
a -= 3;
a *= 3;
a /= 3;
console.log(a);

// 산술 연산자 (사칙 연산)
let a = 1 + 2 - (3 * 4) / 4;
console.log(a);

// 코드를 시작하는 시점의 a의 값이 다름
let a = 1;
// a++;    // 기존 a 값에 1 더해짐 (보여준 다음에 계산)
// ++a;    // 변경된 결과값을 보여줌 (계산 후에 보여줌)

console.log(a++);       // 1
console.log(a);         // 2
console.log(++a);       // 3

console.log(a--);       // 3
console.log(a);         // 2

