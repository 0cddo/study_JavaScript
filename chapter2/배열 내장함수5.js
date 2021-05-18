// 배열 내장함수

// reduce
// 잘 사용하면 매우 유용!!!
// 배열이 주어졌을 때 배열 안의 모든 값들을 사용하여 어떠한 값을 연산해야할 때 사용함


// 배열 총 합 구하기 1

const numbers = [1, 2, 3, 4, 5];

let sum = 0;

numbers.forEach(n => sum += n);
console.log(sum);           // 15


// reduce 함수 이용 총합 구하기
// reduce 파라미터
    // -> 파라미터 1. 어떤 누적된 값을 계산하는 함수
        // -> 해당 함수 2개의 파라미터 있음
        // -> 1. accumulator,  2. current
        // -> 결과값으로 값을 어떻게 연산할지 설정
    // -> 파라미터 2. accumulator의 기본값(초기값)

    // accumulator : 누적된 값을 의미
    // current : 배열 내 각 원소들 의미 

const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);

console.log(sum);


// const sum = numbers.reduce((a, c) => a + c, 0);      // 파라미터명 함수 사용과 관계 없음
// console.log(sum);


// reduce를 이용해 평균 구하기  
// 배열.reduce((accumulator, current, index, array))
    // -> index : 각 원소가 몇 번째 아이템인지 알려줌
    // -> array : 함수가 실행하고 있는 자기자신 (배열) 의미

const avg = numbers.reduce((accumulator, current, index, array) => {
    // 마지막 index일 때 평균 계산
    if (index === numbers.length - 1) {
        return (accumulator + current) / array.length;
    }
    // 원소들이 더해지는 과정
    return accumulator + current;
}, 0);

console.log(avg);       // 3



// reduce 예시 2
// 루프를 돌려 누적된 값을 출력하는 함수 생성

// reduce 함수를 이용하여 배열의 원소들을 객체 형태로 변경하기
  // 초기값 빈 객체 -> {}

const alphabet = ['a', 'a', 'a', 'b', 'b', 'c', 'c', 'f', 'z'];

const counts = alphabet.reduce((acc, current) => {
    // acc[current] = acc['a'] = acc.a -> 객체 키 값 존재 여부 확인
    // 객체(acc)내 키 값 존재 -> + 1 
  if (acc[current]) {
    acc[current] += 1;

    // 객체(acc)내 키 값 없으면 1로 설정
  } else {
    acc[current] = 1;
  }
    // 함수 종료 (current 없음)
  return acc;
}, {});

console.log(counts);        // {a: 3, b: 2, c: 2, f: 1, z: 1}