// 단축 평각 논리 계산법
// 논리 연산자를 이용해 코드를 짧게 작성
// 논리 연산자를 사용할 때 boolean값만 들어가야하는 것 아님

const dog = {
    name : '몽실이'
};

function getName(animal) {
    // if (animal) {
    //     return animal.name; 
    // } 
    // return undefined;

    return animal && animal.name;   // 한 줄 작성 가능
}

const name = getName(dog);
console.log(name);      // 몽실이

const name2 = getName();
console.log(name2);      // undefined



// truthy 한 값과 falsy한 값을 이용하여 논리 연산자 이용하기
// && 논리 연산자
    // 리액트 쓸 때 조건부 렌더링할 때 알아두면 좋음
    // truthy 한 값은 true로 간주함
    // -> truthy && truthy -> 오른쪽 값
    // -> falsy && truthy -> 볼 것도 없이 falsy

console.log(true && 'hello');       // hello
console.log(false && 'hello');      // false
console.log('hello' && 'bye');      // bye
console.log(null && 'hello');       // null
console.log(undefined && 'hello');      // undefined
console.log('' && 'hello');     // ''
console.log(0 && 'hello');      // 0 
console.log(1 && 'hello');      // hello
console.log(1 && 1);            // 1



// 위의 내용 특정값이 유효할 때만 어떤 값을 조회해야할 때 많이 사용함
const object = { name : '0eun'};

const name = object && object.name;
console.log(name);      // 0eun (object가 null일 경우 null 출력)



// or 논리 연산자 이용하기 
// 어떤값이 falsy할 때 대체로 사용하기 매우 유용

const namelessDog = {
    name : ''
  };
  
  function getName(animal) {
    const animalName = animal && animal.name;
    if(!animalName) {
        return '이름이 없는 동물입니다 :('
    }
    return animalName;
  }
  
  const name = getName(namelessDog);
  console.log(name);        // 이름이 없는 동물입니다 :9



// or 연산자로 코드를 더 간략하게 만들기

const namelessDog = {
    name : ''
  };
  
  function getName(animal) {
    const animalName = animal && animal.name;
    return name || '이름이 없는 동물입니다 :(';
  }
  
  const name = getName(namelessDog);
  console.log(name);


// or 연산자 분석
    // -> truthy || false  => 왼쪽 truthy면, 왼쪽값 사용
    // -> falsy || truthy => 왼쪽 Falsy면, 오른쪽값 truthy 사용 
    // or 연산자 어떠한 값이 없을 때 그거 대신에 이거 사용할래~ 할 때 사용하면 유용

console.log(false || 'hello');      // hello
console.log('' || '이름없다');      // 이름없다
console.log(null || '널이다~');     // 널이다~
console.log(undefined || 'defined 되지 않았다!');       // defined 되지 않았다!
console.log(0 || '제로다');     // 제로다

console.log(1 || '음?');        // 1
console.log(true ||'여기 안본다~');     // true
console.log('와아!' || '여기 안봐요!');     // 와아!
console.log([] || '노노');  // 노노
