// 객체 리터럴

/* const a = {};

console.log(a, typeof a);

const b = {
	name: 'Mark',
};

console.log(b, typeof b); */

// 함수 프로퍼티 객체

/* const c = {
	name: '0eun',
	hello1() {
		console.log('hello1',this);
	},
	hello2: function() {
		console.log('hello2', this);
	},
	hello3: () => {
		console.log('hello3', this);
	}
};

c.hello1();
c.hello2();
c.hello3(); */

/* const c = {
	name: '0eun',
	hello1() {
		console.log('hello1',this.name);
	},
	hello2: function() {
		console.log('hello2', this.name);
	},
	hello3: () => {
		console.log('hello3', this.name);
	}
};

c.hello1();
c.hello2();
c.hello3(); */


// 표준내장 객체 : Array

const a = new Array('red', 'black', 'white');

console.log(a, typeof a);
console.log(a instanceof Array);
console.log(a instanceof Object);


// 리터럴로 표현

const b = ['red', 'green', 'yellow'];

console.log(b, typeof b);
console.log(b instanceof Array);
console.log(b instanceof Object);

// Array가 가진 프로토타입 함수 사용
console.log(b.slice(0, 1)); 		// 0번째부터 1개만 잘라옴
console.log(Array.prototype.slice, Object.prototype.slice);