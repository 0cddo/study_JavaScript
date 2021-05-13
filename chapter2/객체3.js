// 게터 함수와 세터 함수
// 객체 안에 getter setter 설정 가능
    // 특정 값을 바꾸거나 조회하려고 할 때 원하는 코드 실행 가능
    // getter 함수 : 특정 값 조회할 때 사용 ( 코드 실행 후 연산된 값을 받아 사용)

const numbers = {
    a: 1,
    b: 2,
    get sum() {
        console.log('sum 함수가 실행됩니다!');
        return this.a + this.b;
    }
};

/* numbers.a = 5;
console.log(numbers.a);  */    // 5    // 바뀐 값이 출력

console.log(numbers.sum);       // 조회만해도 함수 실행됨 
numbers.b = 5;
console.log(numbers.sum);       // 변경내용에 대한 코드 호출(조회) -> 함수 실행


// setter 함수
    // 키 값 앞에 _ 있는 이유 -> setter 함수 만들 때겹치지 않기 위해서 (필수 아님 관용적 방법)
    // 키 값과 함수 이름 똑같을 수 없음
        // but getter와 setter 함수 같은 이름 사용 가능
    // 함수에 파라미터 무조건 설정해야함
const dog = {
    _name: '멍멍이',
    get name(){
        console.log('_name을 조회합니다..');
        return this._name;
    },
    set name(value) {
        console.log('이름이 바뀝니다.. ' + value);
        this._name = value;     // _name 이름 바뀜
    }
};

/* console.log(dog._name);     //  멍멍이
dog.name = '몽자';           // 이름이 바뀝니다.. 몽자      // value = 몽자 (파라미터값 입력) -> this._name = value; 코드 실행
console.log(dog._name);  */    // 몽자         // _name 초기값 변경


// getter와 setter 이름 동일시 특정 값 조회할 때 _ 넣을 필요 없음
    // get 함수도 같이 실행됨  (조회 + 변경 동일하게 실행됨)

console.log(dog.name);      // _name을 조회합니다..  멍멍이
dog.name = '동구';          // 이름이 바뀝니다. 동구            // _name 값 변경
console.log(dog.name);      // _name을 조회합니다.. 동구