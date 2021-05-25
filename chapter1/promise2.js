// promise callback hell

/* function c(callback) {
	setTimeout(() => {
		callback();
	}, 1000);
}

/* c(() => {
    console.log('1000ms 후에 callback 함수가 실행됩니다.');
}); 

c(() => {
    c(() => {
        c(() => {
            console.log('3000ms 후에 callback 함수가 실행됩니다.');
        });
    });
});
 */


// promise를 활용한 비동기 작업

/* function p() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}

p().then(()=> {
    return p();         // 새로운 프로미스 객체 return
}).then(() => p())      // arrow function 한줄 블럭 생략        // 3초 후
.then(p)        // 프로미스 객체 바로 실행
.then(() => {
    console.log('4000ms 후에 fulfilled 됩니다.');
}) */



// Promise 생성방법 2 
// Promise.resolve


/* Promise.resolve(
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('foo');
        }, 1000);
    })
).then(data => {
    console.log('프로미스 객체인 경우, resolve 된 결과를 받아 then이 실행됩니다.', data);
}) */



// 그냥 인자 넣을 때
// Promise 객체 아닌 경우 인자 값이 then의 파라미터에 그대로 넘어가 fulfilled됨
/* Promise.resolve('bar').then(data => {
    console.log('then 메서드가 없는 경우, fulfilled 됩니다.', data);
}) */



// Promise.reject

/* Promise.reject(new Error('reason')).then(error => {

}).catch(error => {
    console.log(error);
}) */



// Promise.all

/* function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    })
}

Promise.all([p(1000), p(2000), p(3000)]).then(messages => {
    console.log('모두 fulfilled 된 뒤에 실행됩니다.', messages);
})
 */

// Promise.race

function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    })
}

Promise.race([p(1000), p(2000), p(3000)]).then(messages => {
    console.log('가장 빠른 하나가 fulfilled 된 뒤에 실행됩니다.', messages);
})