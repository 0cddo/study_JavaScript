// 배열 내장함수 연습문제 
// 배열내 10보다 큰 원소들의 갯수를 구해라

// 해설 1

function countBiggerThanTen(numbers) {
  /* 구현해보세요 */
 let count = 0;
 numbers.forEach(n => {
   if (n > 10) {
     count++
   }
 });
 return count;
}

const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count); // 5

export default countBiggerThanTen;



// 해설 2

function countBiggerThanTen(numbers) {
  /* 구현해보세요 */
  const ten = numbers.filter(n => n > 10 );
  return ten.length;
  // return numbers.filter(n => n > 10).length;
}

const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count); // 5

export default countBiggerThanTen;



// 해설 3

function countBiggerThanTen(numbers) {
    /* 구현해보세요 */
    return numbers.reduce((acc, current) => {
      if(current > 10) {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0)
  }
  
  const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
  console.log(count); // 5
  
  export default countBiggerThanTen;
  
  
  
  
  
  