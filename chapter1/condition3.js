// 조건 ? 조건이 참이면 실행되는 표현식 : 조건이 거짓이면 실행되는 표현식
// 중괄호 {} 를 사용할 수 없는 문법이기 때문에 하나의 표현식만 가능

// let n = 5;

// console.log(n % 5 === 0 ? '5의 배수입니다.' : '5의 배수가 아닙니다'); 


// 표현식의 결과를 변수에 할당할 수 있음

// const message = n % 5 === 0 ? '5의 배수입니다.' : '5의 배수가 아닙니다';
// console.log(message);




// switch 뒤 괄호 안에 있는 값이 무엇인지 중괄호 안에 있는 코드들 비교해서 실행
// default: 뒤에 있는 문장은 항상 참이어서 실행되는 블럭

let n = 5; 

// switch (n) {
// 	default: {
//         console.log(n);	  
//         // n의 참 거짓 여부 확인 없이 default가 있어서 실행됨
//         // 문장 한줄이라 중괄호 생략 가능
//     }
// }

// n이 5로 나누었을 때 나머지가 0인 경우에 실행되는 블럭을 추가
// case '비교할 값': 을 이용해서 맞으면 실행
// case 0:인 경우와 default: 인 경우 두 블럭 모두 순서대로 실행됨

// switch (n % 5) {
//     case 0: {
//         console.log('5의 배수입니다');
//     }
// default:
//     console.log(n);
// }


// switch문 나가기
// break; 실행

// switch (n % 5) {
//     case 0: {
//         console.log('5의 배수입니다');
//         break;
//     }
// default:
//     console.log(n);
// }


// case 문의 순서 조정

n = 7;

switch (n % 5) {
	case 0: {
			console.log('5의 배수입니다');
			break;
    }
	case 1:
	case 2:
	case 3:
	case 4:
		console.log('5의 배수가 아닙니다.');
	default:
		console.log(n);
}
