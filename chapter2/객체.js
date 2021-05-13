// 객체
// 어떤 값을 선언할 때, 하나의 이름에 여러종류의 값을 넣을 수 있게 함
// 객체사용하여 강아지에 대한 값 선언
    // key 값 : 숫자도 가능하나 보통 문자열, 공백 안됨, 따옴표로 공백 표기 가능
const dog = {       // 중괄호 코드블럭 아님
    // 이름(key) : 값
    // 쉼표로 값을 나열
    name: '멍멍이',
    age: 2,
    cute: true,
    sample: {       // 또 다른 객체 입력 가능
        a: 1,
        b: 2,
        c: 3,
    }

}


const cat = {
    name: 'kitti',
    age: 2,
    'cat is cute': true      // key 공백 따옴표로 표시
}

console.log(cat);       // 객체 정보 확인
console.log(cat.name);
console.log(cat.age);



// 어벤져스 캐릭터 객체

const ironMan = {
    name : '토니 스타크',
    actor: '로버트 다우니 주니어',
    alias: '아이언맨'
};

const captainAmerica = {
    name: '스티븐 로저스',
    actor: '크리스 에반스',
    alias: '캡틴 아메리카'
};

console.log(ironMan);
console.log(captainAmerica);


// 함수의 파라미터에서 객체 받아서 사용하기
// hero -> 객체 형태의 파라미터
/* function print(hero) {
    const text = `${hero.alias}(${hero.name})역할을 맡은 배우는 ${hero.actor}입니다.`;
    console.log(text);
}

print(ironMan);
print(captainAmerica); */



// 객체 비구조화 할당 (es6 문법)
    // = 객체 구조 분해
    // 객체에서 특정값 추출
    // 특정 값을 객체에서 빼옴!
    // hero 안의 값을 조회하기 위해 hero. 반복 -> 비구조화 할당 -> 편해짐
    // 객체에서 매번 값을 조회할 때마다 반복하는 행위 -> 객체 내부에서 해당 값을 빼옴 -> 이름 선언

function print(hero) {
    // 어디에서 어떤 값을 추출할지 정의
    const { alias, name, actor } = hero;
    const text = `${alias}(${name})역할을 맡은 배우는 ${actor}입니다.`;
    console.log(text);
}

print(ironMan);
print(captainAmerica);



    // 파라미터 사용 단계에서의 비구조화 할당
    // 코드 깔끔!

    function print({ alias, name, actor }) {
        // 어디에서 어떤 값을 추출할지 정의
        const text = `${alias}(${name})역할을 맡은 배우는 ${actor}입니다.`;
        console.log(text);
    }
    
    print(ironMan);
    print(captainAmerica);

    
    // 비구조화할당 굳이 함수내부에서 사용할 필요 없음
    const { name } = ironMan;
    console.log(name);      // 토니 스타크


