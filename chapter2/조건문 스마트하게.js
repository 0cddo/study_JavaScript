// 조건문 더 스마트하게 쓰기

// 특정값이 여러값 중에 하나인지 확인하기

function isAnimal(text) {
    return (
        text === '고양이' || text === '개' || text === '거북이' || text === '너구리'
    );
}

console.log(isAnimal('개'));        // true
console.log(isAnimal('맥북'));      // false


// 더 쉽게 작성하기
// 비교 하고 싶은 내용 배열에 넣기
// return 할 때 배열 내장함수 includes(찾고 싶은 것) 사용

function isAnimal(text) {
    const animal = ['개', '고양이', '거북이', '너구리'];
    return animal.includes(text);
}

console.log(isAnimal('고양이'));        // true
console.log(isAnimal('아이폰'));        // false


// 화살표 함수로 생성
// 코드가 짧다고 무조건 좋은건 아님
// 코드를 읽었을 때 어떤 역할을 하는지 알 수 있어야 진짜 좋은 코드

const isAnimal = text => ['개', '고양이', '거북이', '너구리'].includes(text);

console.log(isAnimal('고양이'));        // true
console.log(isAnimal('아이폰'));        // false



// 주어진 값에 따라 다른 결과물 반환해야할 때
// return 코드 한 줄이면 괄호 없이 작성 가능

function getSound(animal) {
    if (animal === '개') return '멍멍!';
    if (animal === '고양이') return '야옹~';
    if (animal === '비둘기') return '구구 구구';
    if (animal === '개구리') return '개굴';
    return '...?';
}

console.log(getSound('개'));        // 멍멍!
console.log(getSound('개구리'));        // 개굴

// 위의 코드 switch 문으로 변경해보기
// switch case안에서 return 하면 break 할 필요 없음

function getSound(animal) {
    switch (animal) {
        case '개':
            return '멍멍!';
        case '고양이':
            return '야옹~';
        case '개구리':
            return '개굴';
        case '참새':
            return '짹짹';
        default:
            return '...?';
    }
}


// 객체를 활용해 더 깔끔하게 조건문 작성하기
// 객체 뒤에 []를 이용해 파라미터 키를 넣어서 호출 -> 각 파라미터 키의 value를 가리킴
// 어떤 값을 넣느냐에 따라 반환하는 값이 달라지는 경우에 많이 사용!

function getSound(animal) {
    const sounds = {
        개: '멍멍!',
        고양이: '야옹~',
        참새: '짹짹',
        개구리: '개굴'
    };
    return sounds[animal] || '...?';
}

console.log(getSound('개'));        // 멍멍!
console.log(getSound('개구리')); 


// 응용 연습

function getName(dog) {
    const dogName = {
      개1: '몽자',
      개2: '휴지',
      개3: '동구',
      개4: '수달이'
    } 
    return dogName[dog] || '강아지 이름이 없어요 :('
  }
  
  console.log(getName('개1'));
  console.log(getName('개5'));
  console.log(getName('개4'));



// 특정값을 반환하는 것이 아니라 특정값이 무엇으로 주어지느냐에 따라 다른 코드를 실행하고 싶은 경우
// value에 함수를 넣어 호출

function makeSound(animal) {
    // 객체 내에 함수 넣기
    const tasks = {
        개: () => {
            console.log('멍멍!');
        },
        고양이() {      // 메서드 만들듯이 선언
            console.log('야옹~');
        },
        // 비둘기: function() { 익명함수 보단 최신 자바스크립트 형태로 사용하자! }
        비둘기() {
            console.log('구구 구구');
        }
    }
    // 객체 안에 animal 값으로 원하는 함수가 있는지 확인
    // 없는 경우
    // 같은 코드는 따로 선언
    const task = tasks[animal];
    if(!task) {
        console.log('찾는 소리가 없어요 :(');
        return;
    }
    task();        // 즉시 호출  
}

makeSound('개');
makeSound('영은');
makeSound('고양이');



// 조건에 따라 해야하는 작업이 달라질 경우 객체를 이용하면 깔끔한 코드 완성!


// 연습


function presents(gift) {
    const anniversary = {
      설날: () => {
        console.log('세뱃돈!');
      },
      크리스마스: () => {
        console.log('산타할아버지께서 주겠지~');
      },
      사귄날: () => {
        console.log('여행!');
      }
    }
    const theGift = anniversary[gift];
    if(!theGift) {
      console.log('준비안하고 뭐했냐아아ㅏ~~~😫');
      return;
    } 
    theGift();
  }
  
  presents('설날');
  
  
  
  
  
  
  