// scope 이해하기 
// scope : 변수, 함수 선언 시 어디서 어디까지 유효한지의 범위를 말함
// 1. global scope : 전역, 코드의 모든 범위에서 사용 가능
// 2. function scope : 특정 함수 내부에서만 사용 가능
// 3. block scope : { }로 감싸진 블록 내부에서만 사용 가능한 범위


// 예시 1

const value = 'hello!';         // global scope

function myFunction() {         // global scope
    console.log('myFunction: ');
    console.log(value);
}

function otherFunction() {      // function scope
    console.log('otherFunction: ');
    const value = 'bye!';
    console.log(value);
}

myFunction();       // myFunction: hello!
otherFunction();        // otherFunction: bye!

console.log('global scope: ');      // global scope: 
console.log(value);                 // hello!



// 예시 2

const value = 'hello!';

function myFunction() {
    const value = 'bye!'
    const anotherValue = 'world';
    function functionInside() {
        console.log('functionInside: ')
        console.log(value);
        console.log(anotherValue);
    }
    functionInside();
}

myFunction();       // functionInside: bye! world
console.log('global scope: ');      // global scope:
console.log(value);                 // hello!
console.log(anotherValue);          // error -> anothervalue는 함수 스코프 안에 있으므로 anotherValue 소환 불가



// 예시 3

const value = 'hello!';

function myFunction() {
    const value = 'bye!'
    if (true) {
        const value = 'world';      // 블록내부에서만 유효
        console.log('block scope: ');
        console.log(value);
    }
    console.log('function scope: ');
    console.log(value);
}

myFunction();       // block scope: world       function scope: bye
console.log('global scope: ')       // global scope:
console.log(value);                 // hello!



// const가 아닌 var로 선언 했을 때 scope범위 변화
// block scope에 var로 선언 시, 기존 function scope 내의 선언에 영향이 감
// var로 선언 -> block 단위의 범위가 아닌 함수 단위의 scope 설정됨, 다른 블록에서 선언해도 같은 이름으로 선언하면 기존 선언에 영향 미침
// let도 block으로 scope 제한되어있음 -> block 밖에는 영향 안감
// var를 사용하면 의도와 다르게 작동할 수 있으므로 const 또는 let 사용

var value = 'hello!';

function myFunction() {
    var value = 'bye!'
    if (true) {
        var value = 'world';      // 블록내부에서만 유효
        console.log('block scope: ');
        console.log(value);
    }
    console.log('function scope: ');
    console.log(value);
}

myFunction();       // block scope: world       function scope: world
console.log('global scope: ')       // global scope:
console.log(value); 