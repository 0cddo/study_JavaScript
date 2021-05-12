// 조건문
// switch case문
// 특정 값이 무엇이냐에 따라 다른 작업을 하고 싶을 때 사용

// 일치하는 것을 찾음
// break 비교가 끝났음
    // break 없을경우, 연속적으로 다음코드까지 실행함
    // switch 문에서는 break을 꼭 입력
// default 아무것도 해당하지 않는 경우에 실행되는 코드
const device = 'iphone';

switch (device) {
    case 'iphone':
        console.log('아이폰!');
        break;
    case 'ipad':
        console.log('아이패드');
        break;
    case 'galaxy note':
        console.log('갤럭시 노트!');
        break;
    default:
        console.log('잘 모르겠네요 :(')
}