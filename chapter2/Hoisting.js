// Hoisting
// 아직 선언되지 않은 함수 또는 변수를 끌어 올려서 사용하는 자바스크립트 작동방식


// 선언이 되기 전 호출
// 자바스크립트는 위의 호출이 아래에 있다고 해석함 => 끌어올리는 것: 호이스팅
// 호이스팅은 왠만하면 피해라! 유지보수가 힘들어짐, 코드가 헷갈려짐, 의도치 않은 결과물 나옴

myFunction();           // 정상 작동

function myFunction() {
    console.log('hello world');
}



// 변수의 호이스팅

console.log(number);        // undefined
var number = 2; 

// -> 위의 코드 자바스크립트의 해석
var number;     // 비어있는 값으로 선언 (undefined)

console.log(number);        // undefined
number = 2;         // 나중에 값 설정



// const와 let은 호이스팅 일어나지 않음
// const와 let 사용하여 변수에 대한 호이스팅 방지 가능

function fn() {
    console.log(a);
    let a = 2;
}

fn();       // Error : Cannot access 'a' before initialization -> 값이 설정되기 전에 a를 조회할 수 없다




// 함수에서의 호이스팅 방지 방법 (뭐 굳이 이렇게 안해도됨~~~)
// 함수를 변수에 담아서 사용  // 선언 후 호출!
// es린트? 도구 사용하면 호이스팅 발생 코드를 에디터 상에서 확인가능함

myFunction();

const myFunction = function myFunction() {
    console.log('hello world');
}