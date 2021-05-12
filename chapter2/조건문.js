// 조건문
// 특수한 상황에 특정 작업 실행


// if문
// 조건문이 true면 블럭 안의 구문 실행
// 조건 만족시에 코드 실행
const a = 1;

if (a + 1 === 2) {
    console.log('a + 1 은 2 입니다');       // 실행
    console.log('성공!');       // 실행
}


// 상수 혹은 변수가 서로 다른 블록에서는 같은 이름으로 선언 가능
// 다른 블록 범위 같은 이름 사용 가능 
const a = 1;
if (a + 1 === 2) {
    const a = 2;
    console.log('if문 안의 a 값은' + a);    // if문 안의 a 값은 2
}
console.log('if문 밖의 a 값은' + a);    // if문 밖의 a 값은 1


// 만약 var를 사용 한다면?
// 실수할 확률 높아짐 (var 쓰지마!)
var a = 1;
if (a + 1 === 2) {
    var a = 2;
    console.log('if문 안의 a 값은' + a);    // if문 안의 a 값은 2
}
console.log('if문 밖의 a 값은' + a);       // if문 밖의 a 값은 2 (호이스팅 일어남)


// if else
// 특정 조건 만족시 if구문, 만족 안하면 else 구문
// 조건문 만족 안하면 else 실행

const a = 10;
if(a > 15) {
    console.log('a가 15보다 큽니다')
} else {
    console.log('a가 15보다 크지 않습니다.')        // else구문 실행
}   


// if elseif
// if문을 여러번 사용 (조건에 따라 다양한 결과 만듬)
const a = 8;

if (a === 5){
    console.log('5 입니다!');
} else if (a === 10) {
    console.log('10 입니다!');
} else if (a === 7) {
    console.log('7 입니다');
} else {
    console.log('5도 아니고 10도 아니고 7도 아니네요.');
}