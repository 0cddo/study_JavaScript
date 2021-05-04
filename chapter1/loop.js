// 초기화시 선언된 변수 중괄호 안 반복 블럭에서 사용

/* for (let i = 0; i < 5; i++) {
	console.log('안녕하세요',i);
}

for (let i = 0, j = 5; i < 5; i++) {
	console.log('안녕하세요', i, j);
}

for (let i = 0, j = 2; i < 5; i++, j = j * j) {
	console.log('안녕하세요', i, j);
} */

// 반복문 즉시 종료하고 싶을 때, 반복되는 블럭 안에 break; 실행

/* for (let i = 0; i < 5; i++) {
	console.log(i);
	if (i > 2) {
		break;
	}
	console.log('안녕하세요', i);
} */


// 반복되는 블럭 안에 continue; 를 만나면 거기서 바로 해당 블럭 종료
// 다음 반복 있으면 다음 반복으로 넘어감

/* for (let i = 0; i < 5; i++) {
	console.log(i);
	if (i < 2) {
		continue;
	}
	console.log('안녕하세요', i);
} */


// for 무한 루프
// if문에서 일정 값(랜덤 값)이 90넘으면 break;
for(;;) {
	console.log('안녕하세요');
	if (Math.random() * 100 > 90) { 
		break;
	}
}