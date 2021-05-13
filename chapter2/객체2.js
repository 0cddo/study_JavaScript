// 객체 안에 함수 넣기
// this -> 함수가 위치한 객체 (자기자신 의미)
    // function 키워드 this -> 자기가 속한 곳 가르킴
    // 화살표 -> 자기가 속한 곳 연결 안됨
    // 만든 함수를 밖으로 꺼내면 this와의 관계가 사라짐

const dog = {
    name : '수달이',
    sound: '멍멍!',
    // say: function(){  }   // 함수 이름 지워도 작동
    // say(){  }            // function 키워드 지워도 작동 
    // but 화살표 함수 사용 불가        // error 
        // say: () => {
        //     console.log(this)       // undefined (this 모름)
        // }        
    say: function say() {   
        console.log(this.sound);
    }
};


const cat = { 
    name : '꿍이',
    sound: '야옹~'
};

cat.say = dog.say;          // dog 객체 안의 say -> this.sound (say 키 값, 함수 등록), this는 해당 객체(자신이 속한 것) 가리킴 -> cat.sound
dog.say();  // 멍멍!
cat.say();  // 야옹~


const catSay = cat.say;     // 엮인 곳 없음 (this 가리키는 것 모름)
catSay();                   // error 발생