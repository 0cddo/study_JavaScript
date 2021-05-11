let value = 1;
console.log(value);

value = 2;
console.log(value);
// let value = 3;

// 한한번  선선언언하하면  ㄷ똑똑같같은  이이름름으으로  선선언  불불가가
// 다다른  블블록  범범위위에에서서는  똑똑같같은  이이름름으으로  선선언  가가능능

const a = 1;
// a = 2;

// 상수 값이 고정적
// 값 바꿀 수 없음

// var 키워드
// var와 let의 사용 범위가 다름
// 구형 브라우저는 let, const 사용 불가
// 개발 시 바벨을 이용해 최신 자바스크립트가 구형 브라우저에서도 돌아갈 수 있도록 함
// var은 많이 안씀

// 데이터 타입
// 숫자
// 문자열 (텍스트)
let text = 'hello';
let name = "JavaScript";

// boolean
let good = true;
let loading = false;

// null undefined (없음)
let friend = null; // 진짜 없다
let something = undefined; // 아직 정해지지 않았다

// 범인이 아직 누군지 모른다 (undefined)
let criminal;
console.log(criminal);