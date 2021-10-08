// 함수의 기본 파라미터
// 함수 호출 시 넣어야할 파라미터 넣지 않았을 때, 기본값으로 사용할 파라미터를 지정하는 것

 function calculateCircleArea(r) {
     return Math.PI * r * r;
 }

 const area = calculateCircleArea(4);       // r 없음 => NaN
 console.log(area);     // 50.26548245743669


 // 파라미터를 넣어야하는데 안넎었을 때 어떤 값을 기본값으로 사용
 // 단축평가 논리계싼법 이용

function calculateCircleArea(r) {
    const radius = r || 10;
    return Math.PI * radius * radius;
}

const area = calculateCircleArea();       
console.log(area);     // 314.1592653589793



// es6에서 함수 기본 파라미터 지정 문법
// 파라미터 안에 (파라미터 값 = 기본값) 
// 화살표 문법에서도 사용 가능


function calculateCircleArea(r = 1) {
    return Math.PI * r * r;
}

const area = calculateCircleArea();       
console.log(area);      // 기본값 1일 때 결과 나옴



// 화살표 함수로 만들기

const calculateCircleArea = (r = 1) => Math.PI * r * r ;

const area = calculateCircleArea();       
console.log(area); 