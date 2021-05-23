// async, await
// 비동기 작업 실행 시 프로미스를 더욱 편리하게 사용 (단점 보완)
// 로직 작성이 매우 편해짐
// 함수의 결과물은 promise를 반영함

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function process() {
    console.log('안녕하세요!');
    await sleep(1000);          // promise 앞에 await 붙임
    console.log('반갑습니다!');
    return true;
}

process().then(value => {
    console.log(value);         // true
});             



// async에서 error를 잡아낼 때 => try catch문을 사용

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function makeError() {
    await sleep(1000);
    const error = new Error();
    throw error;            // throw로 error 발생
}

async function process() {
    try {                   // try catch로 error 잡음
        await makeError();
    } catch (e) {           // e는 throw error의 error 객체를 가리킴
        console.error(e);
    }
}

process();    