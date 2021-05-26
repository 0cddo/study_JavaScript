// rest
// ... 을 사용 spread와 역할이 조금 다름
// 객체, 배열, 함수의 파라미터에서 사용함
// spread역할 반대 , 퍼져있는 것들을 모아오는 역할을 함


// 객체에서의 rest

const purpleCuteSlime = {
    name: '슬라임',
    attribute: 'cute',
    color: 'purple'
};

// 비구조화할당 하면서 rest 사용
const { color, ...rest } = purpleCuteSlime;
console.log(color);     // purple
console.log(rest);      // {name: "슬라임", attribute: "cute"}

// rest 맘대로 이름 바꿔도 작동함
const { color, ...cuteSlime } = purpleCuteSlime;
console.log(cuteSlime)      // {name: "슬라임", attribute: "cute"}


const { attribute, ...slime } = cuteSlime;
console.log(slime);         // {name: "슬라임"}



// 배열에서의 rest
// 배열에서의 rest는 맨 마지막에 와야함
    // const [...rest, last] = numbers;         // error

// 비구조화할당

const numbers = [0, 1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers;

console.log(one);       // 0
console.log(two);       // 1
console.log(rest);      // [2, 3, 4, 5, 6]  -> 나머지 것들 모아옴

