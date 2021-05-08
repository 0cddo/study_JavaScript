// new Object
/* 
const a = new Object();

console.log(a, typeof a); */

// boolean 값 입력 

/* const b = new Object(true);

console.log(b, typeof b); */

// 리터럴 값 입력

/* const c = new Object({name : '0eun'});

console.log(c, typeof c); */


// prototype

/* function Person(name, age) {
	this.name = name;
	this.age = age;
	// this.hello = function() {
	//	console.log('hello', this.name, this.age);
	// };
}

Person.prototype.hello = function() {
	console.log('hello', this.name, this.age);
};

const p  = new Person('0eun', 32);

p.hello();		// hello 0eun 32
console.log(p.toString());

console.log(Person.prototype);
console.log(Person.prototype.toString);
console.log(Person.prototype.constructor);
// console.log(Person.hello);	
console.log(Person.prototype.hello); 

console.log(Object.prototype);
console.log(Object.prototype.toString);
console.log(Object.prototype.constructor);

console.log(p instanceof Person);
console.log(p instanceof Object);
 */


// prototype 상속

function Person() {}

Person.prototype.hello = function() {
	console.log('hello');
};

function Korean(region) {
	this.region = region;
	this.where = function() {
		console.log('where', this.region);
	};
}

Korean.prototype = Person.prototype;

const k = new Korean('Seoul');

k.hello();
k.where();

console.log(k instanceof Korean);
console.log(k instanceof Person);
console.log(k instanceof Object);