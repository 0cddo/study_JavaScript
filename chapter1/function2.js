
// new Function(/* 인자1, 인자2, ... , 함수의 바디 */);

/* const sum = new Function('a', 'b', 'c', 'return a + b + c');

console.log(sum(1, 2, 3)); */


// function과 new Function의 차이점

// global.a = 0;

/* {
	const a = 1;

	const test = new Function('return a');

	console.log(test());	 	// 0
}

{
	const a = 2;

	const test = function() {
		return a;	
	}
	console.log(test());		// 2
} */



// 생성자 함수 이용하여 새로운 객체 만드는 법

/* function Person(name, age) {
	console.log(this);		// this 객체를 가리키는 용도
	this.name = name;
	this.age = age;
}

const p = new Person('0eun', 32); // 객체 생성

console.log(p, p.name, p.age);

const a = new Person('Kimi', 32);

console.log(a, a.name, a.age);

const Cat = (name, age) => {
	console.log(this);
	this.name = name;
	this.age = age;
};

const c = new Cat('kitti', 1); */


// 함수를 호출하면 함수를 만들어 리턴

/* function plus(base) {
	return function(num) {
		return base + num;
	};
}

const plus5 = plus(5);		// base => 5
console.log(plus5(10));	

const plus7 = plus(7);		// base => 7
console.log(plus7(8));
 */

// 함수를 인자로 하여 함수 호출

function hello(c) {
	console.log('hello');
	c();						// 콜백함수
}

hello(function() {
	console.log('콜백');			// c();
});