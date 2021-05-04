// while 무한 루프
// 랜덤하게 반복되게 설정

/* while (true) {
	console.log('안녕하세요');
	if (Math.random() * 100 > 90) {
		break;
	}
} */


//  do while 반복문

/* do {
	console.log('안녕하세요');
} while (Math.random() * 100 <= 90); */


// for of

/* for (const i of [1, 2, 3]) {
	console.log(i); 				// 1 2 3 순차대로 나옴
}
 */


// for in

Object.prototype.test = function() {};

for (const i in { a: 1, b: 2, c: 3 }) {
	console.log(i);
}