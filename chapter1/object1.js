// 생성자 함수

/* function A() {}

const a = new A();
console.log(a, typeof a);
console.log(A()); */


// 생성하면서 데이터 넣기

/* function B(name, age) {
	console.log(name, age);
}

const b = new B();		// 인자 없음 => undefined
const c = new B('0eun', 32);
console.log(B());
 */

// 값을 속성으로 넣기

function A() {
	this.name = '0eun';
}

const a = new A();		// 객체 생성, {name: '0eun'}
console.log(a);


// 함수를 속성으로 넣기

function B() {
	this.hello = function() {		// 익명함수
		console.log('hello');
	};
}

new B().hello();