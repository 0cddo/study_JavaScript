// 멤버 변수
/* 
class A {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}

console.log(new A('0eun', 32)); */


// class field 는 런타임 확인

/* class B {
	name;
	age;
}

console.log(new B());


class C {
	name = 'no name';
	age = 0;

	constructor(name, age){
		this.name = name;		
		this.age = age;
	}
}

console.log(new C('kimi', 32)); */


// 멤버 함수

class A {
	hello1() {
		console.log('hello1', this);
	}

	hello2 = () => {
		console.log('hello2', this);
	};
}

new A().hello1();			// new A() 새로운 객체 생성 
new A().hello2();

class B {
	name = '0eun';

	hello() {
		console.log('hello', this.name);  // 멤버 변수 출력
	}
}

new B().hello();