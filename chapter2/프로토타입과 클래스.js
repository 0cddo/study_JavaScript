// 프로토타입과 클래스

// 객체 생성자 함수
// 함수를 통해 새로운 객체 만들고, 넣고 싶은 값 또는 함수를 넣음
// 객체 생성자 함수명 대문자로 시작 
// 함수를 new 키워드를 사용하여 호출했을 때 새로운 객체를 만들고, 기능구현하게 함

function Animal(type, name, sound) {
    this.type = type;       // this는 new 키워드로 만든 객체 가리킴
    this.name = name;
    this.sound = sound;
    // this.say = function() {     // 익명함수
    //     console.log(this.sound);
    // }
}

// 프로토타입 생성
Animal.prototype.say = function() {
    console.log(this.sound);
}

// 프로토타입의 쓰임 -> 함수 외에 어떤 값을 재사용하고 싶을 때도 사용함
// dog안에도 sharedValue가 있고, cat안에도 sharedValue가 있음
Animal.prototype.sharedValue = 1;


      /*   // 프로토타입 다른 방법으로 사용
        function say() {
            console.log(this.sound);
        }

        // 모든 객체에 공통 함수를 가지게 함
        dog.say = say;
        cat.say = say; */


 // new 키워드를 통해 하나의 객체 만듬
 // -> new 객체생성자 이름 (함수 호출)

const dog = new Animal('개', '휴지', '멍멍!');     
const cat = new Animal('고양이', '꿍이', '야옹~');

// 호출
dog.say();
cat.say();


// 새로운 객체 만들어질 때마다 새로운 함수 만들어짐
    // -> 함수의 내용은 똑같음, 같은 기능 반복 -> 재사용
    // -> 재사용 -> 프로토타입 
    // 프로토타입 : 객체가 만들어질 때마다 공통된 함수를 가질 수 있게 함(공유되는 함수나 값 설정 ) 
        // -> 객체 생성자로 무언갈 만들었을 때, 객체들끼리 공유할 수 있는 어떤 값이나 함수, 
        // -> 객체생성 함수의 프로토타입으로 설정함


