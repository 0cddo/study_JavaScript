// 상속이 없다면
// 거의 내용은 비슷한데 반복하게 됨 => 해결 : 상속!
function Dog(name, sound) {
    this.type = '개';
    this.name = name;
    this.sound = sound;
}

function Cat(name, sound) {
    this.type = '고양이';
    this.name = name;
    this.sound = sound;
}

Dog.prototype.say = function() {
    console.log(this.sound);
}

Cat.prototype.say = function() {
    console.log(this.sound);
}

const dog = new Dog('몽자', '멍멍!');
const cat = new Cat('꿍이', '야옹~');



// 상속이 있다면

function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
}

Animal.prototype.say = function() {
    console.log(this.sound);
}


// Dog와 Cat의 객체 생성자 함수를 만들지만 최대한 부모 객체에서 상속(재사용)받음!
// 부모객체.call(this, a, b, c);
    // -> this : 자식 객체 생성자 함수의 this, 부모 객체의 파라미터들
    
// 자식1
function Dog(name, sound) {         // type은 직접 넣는다
    Animal.call(this, '개', name, sound);   // call 사용
}

// 자식2
function Cat(name, sound) {
    Animal.call(this, '고양이', name, sound);
}

// 프로토타입 공유
Dog.prototype = Animal.prototype;
Cat.prototype = Animal.prototype;

const dog = new Dog('몽자', '멍멍!');
const cat = new Cat('꿍이', '야옹~');

dog.say();
cat.say();

