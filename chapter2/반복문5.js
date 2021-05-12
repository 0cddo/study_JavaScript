// 반복문 연습
// 배열 요소의 합을 구하는 함수 만들기

function sumOf(numbers) {
    let sum = 0;
    for (i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

const result = sumOf([1, 2, 3, 4, 5]);
console.log(result);


// test

function biggerThanThree(numbers) {
    /* 구현해보세요 */
    let a = [];
    for (let number of numbers) {
      if (number > 3) {
        a.push(number);
      }
    } return a;
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7];
  console.log(biggerThanThree(numbers)); // [4, 5, 6, 7]
  
  export default biggerThanThree;
  