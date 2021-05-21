// 배열 내장함수
// filter 함수
// 특정 조건을 만족하는 원소들을 가지고 새로 배열을 만드는 것

// done 값이 false인 것 필터링
// 기존 배열 건드리지 않고 새로운 배열 만듬
// 조건확인 ->  함수 삽입
// 매우 유용

const todos = [
    {
        id: 1,
        text: '자바스크립트 입문',
        done: true,
    },
    {
        id: 2,
        text: '함수 배우기',
        done: true,
    },
    {
        id: 3,
        text: '객체와 배열 배우기',
        done: true,
    },
    {
        id: 4,
        text: '클래스 배우기',
        done: false,
    }
    
];

const taskNotDone = todos.filter(todo => todo.done === false);     // !todo.done
console.log(taskNotDone);   // [{ id: 4, text: '클래스 배우기', done: false }]



// splice 함수
// 배열에서 특정 항목 제거함, 기존 배열을 수정함 (기존 배열 건드림)
// 배열명.splice(제거할_항목순서, 제거갯수)
// 배열명.splice = 제거된 결과값을 볼 수 있음

const numbers = [10, 20, 30, 40];

const index = numbers.indexOf(30);

const spliced = numbers.splice(index, 2);

console.log(spliced);       // [30, 40] 
console.log(numbers);       // [10, 20]


// slice 함수
// 기존의 배열을 건드리지 않음(배열 그대로 있음), 배열을 잘라낼 때 사용
// 파라미터에 넣는 값도 다름 -> .slice(start, end) -> 어떤 인덱스부터 어디까지 자를지! ( end 인덱스 전까지 자름)

const sliced = numbers.slice(0, 2);
console.log(sliced);        // [10, 20]
console.log(numbers);       // [10, 20, 30, 40]  변화 없음