// getter 함수와 setter 함수 예제
// setter 함수 있을 때
    // -> 조회할 때마다 계산하는 것이 아님, 값이 바뀔 때만 계산함
    // -> 아까 계산한 값을 재사용함
    // -> 특정 값을 설정할 때 실행됨
const numbers = {
    _a: 1,
    _b: 2,
    sum: 3,
    calculate() {
        console.log('calculate');
        this.sum = this._a + this._b;       // setter 함수에서 함수 호출
    },
    get a() {
        return this._a
    },
    get b() {
        return this._b
    },
    set a(value) {
        this._a = value;
        this.calculate();   // sum 값을 업데이트
    },
    set b(value) {
        this._b = value;
        this.calculate();   // sum 값을 업데이트
    }
};

console.log(numbers.sum);       // 3
numbers.a = 5;      // 값을 설정할 때마다 sum 값이 업데이트 됨
numbers.b = 7;
numbers.a = 9;
console.log(numbers.sum);     // 조회할 때마다 계산이 아닌 값이 바뀔 때마다 계산함  



// 위의 예제 getter 함수만 있을 때
// 조회할 때마다 sum함수 실행됨 -> 비효율적

const numbers = {
    a: 1,
    b: 2,
    get sum(){
        console.log('계산을 조회합니다');
        return this.a + this.b;
    }
};

console.log(numbers.sum);


// getter 함수와 setter 함수 예제 2

const cat = {
    _name : '야옹이',
    get name(){
      console.log('이름을 조회합니다:');
      return this._name;
    },
    set name(value){
      console.log('이름을 바꿉니다');
      this._name = value;
    }
    
    };
    
    console.log(cat.name);
    cat.name = '꿍이';
    console.log(cat.name);