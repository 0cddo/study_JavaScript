// function
// 이름이 hello1인 함수 선언

/* /* function hello1() {
	console.log('hello1');
} 

console.log(hello1, typeof hello1); */


// 함수의 매개변수 (함수 바디에서 출력할 내용 담음)
// 함수를 호출할 때 값을 지정

/* function hello2(name) {
	console.log('hello2', name);
}
 */

// 함수의 리턴
// 함수를 실행하면 얻어지는 값

/* function hello3(name) {
	return `hello3 ${name}`;
}

console.log(hello3('kimi')); */
// 매개변수 입력시에 문자열 들어가면 console.log로 함수 호출
// 함수 단독 호출은 안되네? 이유가 뭘까



// function 
// 이름이 hello1 인 함수를 선언

/* const hello1 = function() {
	console.log('hello1');
}

console.log(hello1, typeof hello1); */

// 함수의 매개변수
// 함수를 호출할 때 값을 지정

/* const hello2 = function(name) {
	console.log('hello2', name);
} */

// 함수의 리턴
// 함수를 실행하면 얻어지는 값

/* const hello3 = function(name) {
	return `hello3 ${name}`;
}

console.log(hello3('0eun')); */


// 선언함수와 익명함수

console.log(hello2);

hello1();		// hello1 출력
// hello2();

function hello1() {
	console.log('hello1');
}

var hello2 = function() {
	console.log('hello2');
}


// 익명함수 const 변수 선언
hello3();

const hello3 = function() {
	console.log('hello3');
}