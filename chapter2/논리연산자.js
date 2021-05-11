// 논리연산자
let value = true;
value = false;

// NOT !
// false -> true / true -> false
// 특정 불리언 반전
const a = !false;       // true;
console.log(a);


// AND  &&
// 모두 참이여야 참

const a = false && true ;
console.log(a);     // false;


// OR  ||
// 둘 중 하나만 true여도 true

const a = false || true ;
console.log(a);     // true;


// 논리연산자 처리 순서 (우선순위)
// NOT -> AND -> OR
// 괄호 먼저

const value = !(true && false || true && false || !false);
// !(true && false || true && false || true);
// !(false || false || true);
// !(false || true);
// !(true);
// false;
console.log(value);         // false