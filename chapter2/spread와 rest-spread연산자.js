// spread와 rest-spread연산자
// es6에 도입 -> ... 


// spread : 펼치다 퍼뜨리다, 객체, 배열을 펼치고 퍼뜨릴 수 있음
// 기존의 객체를 참고해서 새로운 객체를 만들 때 spread를 사용
// 기존 객체를 복사하고 거기에 값을 추가할 때 사용 

const slime = {
    name: '슬라임'
};

const cutsSlime = {
    // name: '슬라임',
    ...slime,       // spread 연산자
    attribute: 'cute'
};

const purpleCuteSlime = {
    // name: '슬라임',
    // attribute: 'cute',
    ...cutsSlime,
    color: 'purple'
};

const greenCuteSlime = {
    // color: 'green',          // spread위에 선언 시, color값은 변경없이 그대로 purple
    ...purpleCuteSlime,
    color: 'green',     // purpleCuteSlime의 color값을 덮음
};

console.log(slime);     // {name: "슬라임"}
console.log(cutsSlime);     // {name: "슬라임", attribute: "cute"}
console.log(purpleCuteSlime);       // {name: "슬라임", attribute: "cute", color: "purple"}
console.log(greenCuteSlime);        // {name: "슬라임", attribute: "cute", color: "green"}

console.log(purpleCuteSlime === cutsSlime);     // false  (서로 다른 객체임)

// 만약에 다른 방법을 사용한다면?
// 모든 객체가 같은 내용을 갖게 됨, 모두 같은 객체를 가리킴
// 대입 연산자를 사용해서 같은 객체에 계속 값을 넣어줬기 때문에 결과가 같음?

const slime = {
    name: '슬라임'
};

const cutsSlime = slime;
cutsSlime.attribute = 'cute';

const purpleCuteSlime = cutsSlime;
purpleCuteSlime.color = 'purple';


console.log(slime);     // {name: "슬라임", attribute: "cute", color: "purple"}
console.log(cutsSlime);     // {name: "슬라임", attribute: "cute", color: "purple"}
console.log(purpleCuteSlime);       // {name: "슬라임", attribute: "cute", color: "purple"}

console.log(slime === cutsSlime);       // true



// 배열에서 spread 사용하기

const animals = ['개', '고양이', '참새'];
const anotherAnimals = [...animals, '비둘기'];
// const anotherAnimals = animal.concat('비둘기');          // concat 함수 사용과 동일 , spread 사용 시 역할을 더 확실하게 알 수 있음

console.log(animals);       // ["개", "고양이", "참새"]
console.log(anotherAnimals);        // ["개", "고양이", "참새", "비둘기"]



// 배열에서 spread 연산자 여러번 사용하기
const numbers = [1, 2, 3, 4, 5];

const spreadNumbers = [...numbers, 1000, ...numbers];
console.log(spreadNumbers);     // [1, 2, 3, 4, 5, 1000, 1, 2, 3, 4, 5]