// 함수
    // function 키워드로 설정 
// 특정 코드를 하나의 명령어로 실행하게 해주는 기능
// 파라미터 -> 함수(처리) -> 결과
// 파라미터 : input , 넣는 값, 함수에서 받아오는 값
// return : 결과값으로 반환
    // 함수에서 return이 사용되면 그 함수는 종료
    // 그 뒤에 또 코드 입력 불가 

function add(a, b) {
    return a + b;
}

const sum = add(1, 2);
console.log(sum);       // 3


function hello(name) {
    console.log('Hello, ' + name + '?');
}

hello('0eun');


// template literal
    // `문자 입력 ${자바스크립트 값}} !`
// es6에서의 문자 조합 방법
    // es6 ECMAScript 6 (ES2015) , 자바스크립트 문법
    // 현재 ES10까지 나옴

function hello2(name) {
    return `Hello, ${name}!`;
}

const result = hello('Kimi');
console.log(result);



// 점수 등급으로 변형하는 함수 만들기
function getGrade(score) {
    if (score === 100) {
        return 'A+';
    } else if (score >= 90) {
        return 'A';
    } else if (score === 89) {
        return 'B+';
    } else if (score >= 80) {
        return 'B';
    } else if (score === 79) {
        return 'C+';
    } else if (score >= 70) {
        return 'C';
    } else if (score === 69) {
        return 'D+';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

const grade = getGrade(90);
console.log(grade);


