// promise all, promise race

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// 화살표 함수로 async 작성 : async () => {     }

const getDog = async () => {
    await sleep(1000);
    return '멍멍이';
}

const getRabbit = async () => {
    await sleep(500);
    return '토끼';
}

const getTurtle = async () => {
    await sleep(3000);
    return '거북이';
}

/* async function process() {
    // process에서 위의 3개 함수 호출
    const dog = await getDog();
    console.log(dog);
    const rabbit = await getRabbit();
    console.log(rabbit);
    const turtle = await getTurtle();
    console.log(turtle);
} */



// 여러개의 promise를 한 번(동시)에 처리하기 -> promise all
// promise all 에 등록한 각 프로미스의 결과를 각 다른 변수로 꺼내고 싶을 때 -> 비구조화할당 이용

async function process() {
    // const start = Date.now();
    // 각각의 프로미스가 끝난 결과 값이 들어간 배열 반환됨
    const [dog, rabbit, turtle] = await Promise.all([getDog(), getRabbit(), getTurtle()]);
    // console.log(Date.now() - start);        // results 구하는데 소요 시간
    console.log(dog);           // 3초 뒤에 한 번에 출력됨 (거북이 3000ms)
    console.log(rabbit);
    console.log(turtle);
}



// promise race
// 배열을 등록하여 그 중 가장 빨리 끝내는 것 하나만 출력

async function process() {
    const first = await Promise.race([getDog(), getRabbit(), getTurtle()]);
    console.log(first);         // 토끼
}



process();


// 에러 다루기
// promise all ->  프로미스 중 하나만 에러가 나도 전체 프로미스가 에러가 난 것으로 간주
// promise race -> 가장 빨리 끝난 것이 에러일 때만 에러로 간주, 성공했으면 전체 에러로 간주하지 않음
async function process() {
    try {
        const [dog, rabbit, turtle] = await Promise.all([getDog(), getRabbit(), getTurtle()]);
        const rabbit = await Promise.race([getDog(), getRabbit(), getTurtle()]);
    } catch(e) {
        console.log(e);
    }
}