// 반복문
// break 와 continue
// 반복문에서 벗어나거나 그 다음 loop 돌게 할 수 있음
    // continue : 특정 조건 만족 시, 다음 loop 진행 (그 다음 loop 돌게함)
    // break : 블럭 밖으로 나옴, 코드 아예 끝!
    // 여러 반복문에서 다 쓸 수 있음
    

for (let i = 0; i < 10; i++) {
    if(i === 2) continue;       // 조건문 블록 내 코드 1줄 -> 괄호 생략 가능
    console.log(i);             // 0 1 3 4 5 6 7 8 9 
    
    if(i === 5) break;          // 0 1 3 4 5
}