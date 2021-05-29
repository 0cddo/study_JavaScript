// Promise 객체를 리턴하는 함수

/* unction p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

// Promise 객체를 이용해서 비동기 로직을 수행할 때
p(1000).then(ms => {
    console.log(`${ms}ms 후에 실행된다`);
});

// Promise 객체를 리턴하는 함수를 await로 호출하는 법

const ms = await p(1000);
console.log(`${ms}ms 후에 실행된다.`);

 */


// async - await

/* function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

(async function main() {
    const ms = await p(1000);
    console.log(`${ms}ms 후에 실행된다.`);
})();  */          // 즉시 실행 함수



// reject 된 경우

/* function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(ms);
            reject(new Error('reason'));
        }, ms);
    });
}

(async function main() {
    try {
        const ms = await p(1000);
        // console.log('resolve', ms)
    } catch(error) {
        console.log(error);
    }
})(); */



// async function 자체 생성

/* function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(ms);
            reject(new Error('reason'));
        }, ms);
    });
}

async function asyncP() {
	return 'Mark';			// 문자열 값
}

(async function main() {
    try {
        const name = await asyncP();
		  console.log(name);        
    } catch(error) {
        console.log(error);
    }
})();
 */

/* function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
            // reject(new Error('reason'));
        }, ms);
    });
}

async function asyncP() {
    const ms = await p(1000);
	return 'Mark: ' + ms;			// 문자열 값
}

(async function main() {
    try {
        const name = await asyncP();
		console.log(name);        
    } catch(error) {
        console.log(error);
    }
})(); */



// error의 전파
/* 
function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(ms);
            reject(new Error('reason'));
        }, ms);
    });
}

async function asyncP() {
    const ms = await p(1000);
	return 'Mark: ' + ms;			// 문자열 값
}

(async function main() {
    try {
        const name = await asyncP();
		console.log(name);        
    } catch(error) {
        console.log(error);
    }
})(); */


// finally

/* function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
            // reject(new Error('reason'));
        }, ms);
    });
}

async function asyncP() {
    const ms = await p(1000);		
    return 'Mark: ' + ms;           
}

(async function main() {
    try {
        const name = await asyncP();
        console.log(name);        
    } catch(error) {
        console.log(error);
    } finally {
        console.log('end');
    }
})(); */


// 연속되는 Promise와 async await 비교

/* function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
            // reject(new Error('reason'));
        }, ms);
    });
}


// 연속된 Promise -> 체이닝

p(1000)
    .then(() => p(1000))
    .then(() => p(1000))
    .then(() => p(1000))
    .then(() => {
        console.log('3000ms 후에 실행');
    });


// async await 연속처리
// 한 줄 한줄 비동기 처리되어 순서에 따라 실행됨

(async function main() {
    await p(1000);
    await p(1000);
    await p(1000);
    console.log('3000ms 후에 실행');
})(); */



// Promise.all , Promise.race -> async await

function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
            // reject(new Error('reason'));
        }, ms);
    });
}    


// Promise.all

(async function main() {
    const results = await Promise.all([p(1000), p(2000), p(3000)]);
    console.log(results);
})();


// Promise.race

(async function main() {
    const result = await Promise.race([p(1000), p(2000), p(3000)]);
    console.log(result);
})();