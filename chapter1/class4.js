// 상속 기본

// 부모 클래스
/* class Parent {
	name = 'Shim';

	hello() {
		console.log('hello', this.name);
	}
}

// 자식 클래스
class Child extends Parent {}

const p = new Parent();		// 객체 생성 후 출력
const c = new Child();
console.log(p, c);

// 부모 클래스의 멤버 함수 출력 가능
// 부모 클래스의 멤버 변수 그대로 접근 가능
c.hello();
c.name = '0eun';
c.hello(); */


// 변수, 함수 추가 및 오버라이딩

/* class Parent {
	name = 'Shim'

	hello() {
		console.log('hello', this.name);
	}
}

class Child extends Parent {
	age = 32;

	hello() {		// 부모 클래스의 함수 오버라이딩 및 추가
		console.log('hello', this.name, this.age);
	}
}

const p = new Parent();
const c = new Child();

console.log(p, c);
c.hello();
c.name = '0eun';
c.hello(); */


// super

// 부모 클래스
/* class Parent {
	name;

	constructor(name) {
		this.name = name;
	}
	
	hello() {
		console.log('hello', this.name);
	}
}

// 자식 클래스
class Child extends Parent {
	age;

	constructor(name, age) {
		super(name);		
		this.age = age;
	}
	
	hello() {
		console.log('hello', this.name, this.age);
	}
}

const p = new Parent('0eun');
const c = new Child('0eun', 32);

console.log(p, c);
c.hello(); */



// static 상속

class Parent {
	static age = 32;
}

class Child extends Parent {}

console.log(Parent.age, Child. age);
