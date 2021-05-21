// 클래스
// es6에서 도입
// 객체 생성 및 프로토타입 사용 용이
// class 클래스명 { constructor (파라미터1, 파라미터,...)}
    // -> constructor : 생성자 

class Animal {
    constructor(type, name, sound) {
        this.type = type;
        this.name = name;
        this.sound = sound;
    }
    say() {             // 함수는 자동으로 프로토타입으로 등록됨
        console.log(this.sound);
    }
}

// 함수 프로토타입 등록 확인
/* console.log(Animal.prototype.say);      // say 함수 확인 */


// class의 상속
// extends 키워드 이용
// constructor 선언 -> 부모 constructor 덮어씀 
    // -> super 키워드 : 부모 constructor 호출

class Dog extends Animal {
 constructor(name, sound) {
     super('개', name, sound);
 }   
}

class Cat extends Animal {
    constructor(name, sound) {
        super('고양이', name, sound);
    }
}

const dog = new Dog('배꼽이', '멍멍!');
const cat = new Cat('꿍이', '야옹~');

dog.say();      // 멍멍!
cat.say();      // 야옹~