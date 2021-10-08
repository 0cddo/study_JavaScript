// 비동기 처리
// 동시에 여러 작업 실행 가능
// 주로 하는 작업 : Ajax Web API 요청 , 파일읽기, 암호화/복호화 , 작업예약
    // ajax web api : 서버에서 데이터를 받아올 때 요청 후 대기해야할 때 사용


// 함수 실행이 얼마나 걸리는지 확인하는 함수
// 연산량이 많은 작업 비동기적으로 처리하기

function work() {
    const start = Date.now();
    for (let i = 0; i < 1000000000; i++) {

    }
    const end = Date.now();
    console.log(end - start + 'ms');        // 밀리세컨 1000ms = 1s
}

work();     // 751ms (값은 변함)  -> 끝난 다음에 아래 코드 실행됨
console.log('다음 작업');


// 작업이 진행되는 동안 다른 작업도 동시에 진행(비동기형태로 전환해야함)
// setTimeout 실행 
    // setTimeout(() => {       }, 0)   // 0 -> 수치 만큼의 시간이 흐른 후에 특정 작업 하겠다 (단위 , ms)
    // 실제로는 4ms 뒤에 실행 됨, 4ms 브라우저에서 지정한 최소값
    // setTimeout -> 함수내에서 실행하고자 하는 작업이 백그라운드에서 수행되므로 기존의 코드 흐름 막지 않고 동시에 다른 작업 진행 가능  

function work() {
    setTimeout(() => {
        const start = Date.now();
        for (let i = 0; i < 1000000000; i++) {

        }
        const end = Date.now();
        console.log(end - start + 'ms');
    }, 0)
}

console.log('작업 시작!')
work();                      // 루프가 끝나면 결과 호출됨
console.log('다음 작업');



// work 함수가 끝난 다음에 어떤 작업을 하고 싶은 경우? 콜백 함수를 파라미터로 전달함
// 콜백함수: 함수타입의 값을 파라미터로 넘김 파라미터로 받은 함수를 특정 작업이 끝난 뒤에 호출하는 것을 의미

function work(callback) {
    setTimeout(() => {
        const start = Date.now();
        for (let i = 0; i < 1000000000; i++) {

        }
        const end = Date.now();
        console.log(end - start + 'ms');
        callback(end - start)       // 얼마나 걸렸는지 알고 싶음 -> 해당 값을 callback 함수의 파라미터에 넣어서 호출
    }, 0)
}

console.log('작업 시작!')
// 콜백함수 등록
work((ms) => {          // callback =>  // end - start 가 넘어옴
    console.log('작업이 끝났어요!')
    console.log(ms +'ms 걸렸다고 해요~')
});                      
console.log('다음 작업');