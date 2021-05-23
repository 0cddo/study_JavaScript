// promise
// 비동기 작업을 편하게 처리 -> es6도입
// 콜백함수 처리 -> 비동기 작업 많을 때는 코드가 쉽게 난잡해짐
// 원래는 라이브러리였는데 편해서 js 스펙에 추가됨



// 콜백함수가 많을 때 코드가 어떻게 복잡해지는지 알아보자

function increaseAndPrint(n, callback) {
    setTimeout(() => {
        const increased = n + 1;
        console.log(increased);
        if (callback) {
            callback(increased)
        }
    }, 1000)
}

// 콜백지옥
// increaseAndPrint(0);        // 1초 뒤에 1 출력 ( n + 1)
increaseAndPrint(0, n => {
    increaseAndPrint(n, n => {
        increaseAndPrint(n, n => {
            increaseAndPrint(n, n => {
                increaseAndPrint(n, n => {
                    console.log('작업 끝!');        // 1 2 3 4 5 작업 끝!
                })
            })
        })
    })
});



// promise를 이용하여 콜백지옥에서 탈출하기
// 함수 형태 등록 -> 파라미터 : resolve (프로미스 성공) / reject (프로미스 실패)

// 예제1
const myPromise = new Promise((resolve, reject) => {
    // 1초 뒤 성공하는 프로미스
    setTimeout(() => {
        resolve('result');
    }, 1000)
})

// 프로미스 끝난 뒤에 할 작업 설정 .then
myPromise.then(result => {
    console.log(result);
})


// 예제2
const myPromise = new Promise((resolve, reject) => {
    // 1초 뒤 실패하는 프로미스
    setTimeout(() => {
        reject(new Error());
    }, 1000)
})

// 프로미스 끝난 뒤 error 잡아낼 때 .catch
myPromise.then(result => {
    console.log(result);
}).catch(e => {
    console.error(e);
})



// 프로미스를 만드는 함수 작성

function increaseAndPrint(n) {
    // 새로운 프로미스 만들어서 반환
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const value = n + 1;
            if (value === 5) {
                const error = new Error();
                error.name = 'ValueFiveError';
                reject(error);
                return;
            }
            console.log(value)
            resolve(value);
        }, 1000);
    })
}

// 처리해야할 비동기 작업이 많을 때 콜백보다 훨씬 깔끔함

/* increaseAndPrint(0).then(n => {
    return increaseAndPrint(n);
}).then(n => {
    return increaseAndPrint(n);
}).then(n => {
    return increaseAndPrint(n);
}).then(n => {
    return increaseAndPrint(n);
}).then(n => {
    return increaseAndPrint(n);
}).catch(e => {
    console.log(e);
}) */


// 반환함수만 넣어도 사용 가능(위의 코드 간결)
// 프로미스사용 -> 비동기작업 갯수 많아도 코드 깊이 깊어지지 않음,
// 에러발생시 어떤 부분에서 에려가 발생한지 파악 어려움
// 특정조건에 따라 분기를 나누는 작업도 어려움 (then으로 이어져서)
// 어떤 특정 값을 공유하면서 사용하기 어려움

increaseAndPrint(0).then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.catch(e => {
    console.error(e);
})