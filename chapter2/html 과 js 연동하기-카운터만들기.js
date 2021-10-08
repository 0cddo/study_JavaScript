// HTML 과 JavaScript 연동하기
// 동적으로 ui 업데이트 -> js사용, 
// js 라이브러리 프레임 워크를 통해 코드관리 용이, 

// 버튼을 누르면 숫자가 바뀌는 카운터 생성

// 1. h2 와 button에대한 DOM을 선택
    // DOM : 각 태그에대한 정보를 가지고 있는 자바스크립트 객체

const number = document.getElementById('number');
// const increase = document.getElementById('increase');
// const decrease = document.getElementById('decrease');

const buttons = document.querySelectorAll('button');
const [increase, decrease] = buttons       




/* console.log(number.innerText);
console.log(increase.offsetTop);
console.log(decrease.id); */


// 2. click 이벤트 설정
    // 이벤트 설정 방법 => DOM.on이벤트명 = 함수 설정

increase.onclick = () => {
    // 값 변경 ->  parseInt : 문자열을 숫자로 변경, 두번째 파라미터 => 몇 진수로 인식할 것인가
    const current = parseInt(number.innerText, 10);     // 10진수
    // number 값 변경
    number.innerText = current + 1;
}

decrease.onclick = () => {
    const current = parseInt(number.innerText, 10);
    number.innerText = current - 1;
}