// get, set

/* class A {
	_name = 'no name';		// 최초값

	get name() {
		return this._name + '@@@';
	}

	set name(value) {
		this._name = value + '!!!';
	}
}

const a = new A();
console.log(a);
a.name = '0eun';
console.log(a);
console.log(a.name);
console.log(a._name);	    */	


// readonly

/* class B {
	_name = 'no name';

	get name() {
		return this-_name + '@@@';
	}
}

const b = new B();
console.log(b);
b.name = 'kimi';			// 세터함수 없으므로 동작 안함
console.log(b);	 */


// static 변수, 함수

class A {
	static age = 32;		// static 변수
	static hello() {		// static 함수 
		console.log(A.age);
	}
}

console.log(A, A.age);
A.hello();


class B {
	age = 32;		// 멤버 변수
	static hello() {
		console.log(this.age);		// 말이 안되는 문법
	}
}

console.log(B, B.age);
B.hello();


class C {
	static name = '이 클래스의 이름은 C가 아니다.'
}

console.log(C); 