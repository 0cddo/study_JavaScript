// 비구조화 할당 (구조 분해)
// 코드를 깔끔하게 쓰고싶을 때 사용, 너무 과하게 쓰진 말 것


// 객체에서도 사용함

const object = { a: 1, b: 2};

const {a, b} = object;

console.log(a);     // 1
console.log(b);     // 2


// 비구조화문법 함수에서도 사용 가능
// 함수 파라미터에 사용

const object =  { a: 1, b: 2};

function print({ a, b }) {
    console.log(a);
    console.log(b);
}

print(object);      // 1 2


// b값이 없다고 가정
// 값이 없을 때 기본값을 쓰는 법

const object =  { a: 1, b = 2 };

function print({ a, b }) {
    console.log(a);
    // 방법 1
    // console.log(b || 2)
    console.log(b);
}

print(object);      // 1 undefined


// 함수에서만 쓸 수 있는 것 아니고 비구조화할당 할 때 언제든 쓸 수 있음
// 비구조화 할당 기본값 = (equal) 사용
const object = { a: 1};

const { a, b = 2} = object;
console.log(a);     // 1
console.log(b);     // 2


// 비구조화할당 시 이름 바꾸는 방법

const animal = {
    name : '몽실이',
    type: '개'
};

// const nickname = animal.name;
// 비구조화 할당 -> {원래이름: 바꾸고 싶은 이름} -> 기존의 값이 바뀌는 것은 아님
const { name: nickname } = animal;

console.log(nickname);      // 몽실이
console.log(animal);        // animal 객체 그대로 유지 {name: '몽실이', type: '개'}



// 배열 비구조화 할당

const array = [1]

// const one = array[0];
// const two = array[1];
const [one, two = 2] = array;   // 위의 값이 꺼내짐 // 기본값 설정도 가능

console.log(one);       // 1
console.log(two);       // 2



// 객체의 깊은 곳에 있는 값을 꺼내기~~

const deepObject = {
    state: {
        information: {
            name: '0eun',
            languages: ['korean', 'english', 'chinese'],
        }
    },
    value: 5
}
 

// name, language, value 밖으로 꺼내고 싶음
// 1. 비구조화할당문법 2번 사용

/* const { name, languages } = deepObject.state.information;
    // const {
        name,
        languages: [firstLang, secondLang]
    } = deepObject.state.information;
const { value } = deepObject;

const extracted = {     // 특정 객체를 만들 때 특정 키 이름으로 선언된 값이 이미 있으면 value값 설정 생략 가능함
    name,
    languages,
    // firstLang, secondLang,
    value
};
console.log(extracted); */


// 2. 비구조화할당 1회로 여러값 꺼내오기
// 코드가 조금 지저분하기 때문에 좀 비추~
// 여러번에 걸쳐서 하는걸 추천 뭐 맘대로~~~

const {
    state: {
        information: {
            // name, languages
            // languages 배열을 비구조화할당할 수 있음
            name, languages: [firstLang, secondLang]
        }
    },
    value
}   = deepObject;

const extracted = {
    name, 
    // languages,
    firstLang, secondLang,
    value
};
console.log(extracted);