// promise

// console.log(Promise);

/* const p = new Promise((resolve, reject) => {
	/* pending 
	setTimeout(() => {
		resolve(); 		// fulfilled
	}, 1000);
})

p.then(() => {
	// callback을 작성하는 공간 , resolve이후에 실행됨 
    console.log('1000ms 후에 fulfilled 됩니다.')
})
 */

// 대규모 프로젝트 할 때 이용하는 방법

/* function p() {
	return new Promise((resolve, reject) => {
		/* pending 
		setTimeout(() => {
		resolve(); 		// fulfilled
	}, 1000);
	})
}

p().then(() => {
	// resolve 이후에 실행
	console.log('1000ms 후에 fulfilled 됩니다.');
}); */


// rejected

/* function p() {
	return new Promise((resolve, reject) => {
		// pending 
		setTimeout(() => {
		reject(); 		// rejected
	}, 1000);
	})
}

p().then(() => {
	// resolve 이후에 실행
	console.log('1000ms 후에 fulfilled 됩니다.');
})
.catch(() => {
	console.log('1000ms 후에 rejected 됩니다.');
}); */



// 메시지 불러오기

/* function p() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
		resolve('hello'); 		// 메시지, 객체 등 추가 가능
	}, 1000);
	})
}

// 비동기 함수 p가 성공 후에 데이터를 받아서 넘겨줄 수 있음
// then 의 callback 함수 인자로 받음  
p()
	.then((message) => {
		console.log('1000ms 후에 fulfilled 됩니다.', message);
	})
	.catch(() => {
		console.log('1000ms 후에 rejected 됩니다.');		// 실행 
	}); */



/* function p() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        reject('error'); 		
    }, 1000);
    })
}
    
p()
    .then((message) => {
        console.log('1000ms 후에 fulfilled 됩니다.', message);
    })
    .catch(reason => {
        console.log('1000ms 후에 rejected 됩니다.', reason);		// 실행 
    }); */



// Error 객체 이용하기

/* function p() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
		reject(new Error('bad code')); 		
	}, 1000);
	})
}
 
p()
	.then((message) => {
		console.log('1000ms 후에 fulfilled 됩니다.', message);
	})
	.catch(error => {
		console.log('1000ms 후에 rejected 됩니다.', error);			});

 */

// .finally() 이용하기

function p() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        reject(new Error('bad code'));      
    }, 1000);
    })
}
 
p()
    .then((message) => {
        console.log('1000ms 후에 fulfilled 됩니다.', message);
    })
    .catch(error => {
        console.log('1000ms 후에 rejected 됩니다.', error);          
	})
	  .finally(() => {
		console.log('end');	
	});



    