// 선언적 방식

/* class A {}

console.log(new A());

const B = class {};

console.log(new B());

// 선언적 방식이지만 호이스팅은 일어나지 않음

new C();

class C {} */


// constructor

class A {}

console.log(new A());

class B {
	constructor() {
		console.log('constructor');
	}
}

console.log(new B());

class C {
	constructor(name, age) {
		console.log('constructor', name, age);
	}
}

console.log(new C('0eun', 32));
console.log(new C());