// Truthy and Falsy
// truthy : true 같은 것
// falsy : false 같은 것
    // -> undefined , null, 0, '', NaN  => falsy한 값들 (false로 간주함)
    // -> if문에서 falsy , truthy한 값으로 조건 작성 짧은 코드 가능
    
function print(person) {
    console.log(person.name);   
}

const person = {
    name: '0eun'
};

print(person);      // 0eun


// person 이 없거나 person 값이 null 일 경우
    // -> null 체킹
function print(person) {
    // person === undefined || person === null (!person과 동일)
    if(!person) return;  
}

const person = null;

print();        // 오류도 뭐도 아무것도 출력안됨


// falsy 값
console.log(!undefined);         // true
console.log(!null);      // true
console.log(!0);     // true
console.log(!'');        // true  (빈 문자열 -> falsy)
console.log(!NaN);      // true (Not a Number)
console.log(!false);


// truthy 값 : falsy값을 제외한 모든 것
console.log(!3);        // false
console.log(!'hello');      // false
console.log(!['array']);        // false
console.log(![]);       // false
console.log(!{});       // false


// ! 없이 truthy , falsy 사용하기

const value = { a: 1 };

if (value) {
    console.log('value가 Truthy 하네요');       // 출력
}

const value = null;

if (value) {
    console.log('falsy한 값은 출력되지 않음')
}


// truthy , falsy 이용하여 true false 출력

const value = null;

// const truthy = value ? true : false;
const truthy = !!value;         // 느낌표 두개로 확인가능!

console.log(truthy);

