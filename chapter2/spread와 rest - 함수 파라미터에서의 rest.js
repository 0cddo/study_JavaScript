// 함수 파라미터에서의 rest

// 파라미터로 넣어준 모든 값을 합하는 함수

function sum(a, b, c, d, e, f, g) {
    // return a + b + c + d + e + f + g;
    
    let result = 0;
    if(a) result += a;
    if(b) result += b;
    if(c) result += c;
    if(d) result += d;
    if(e) result += e;
    if(f) result += f;
    if(g) result += g;
    return result;
}


console.log(sum(1, 2, 3, 4, 5, 6))     // NaN    // 파라미터 g가 undefined이기 때문



// sum 의 인자가 함수 파라미터의 갯수보다 늘어나면 그 이상은 계산 불가
// 함수의 파라미터 rest를 이용하여 해결
// reduce 배열 내장함수 이용 -> rest는 하나의 배열이기 때문에 reduce 내장함수 이용

function sum(...rest) {
    return rest.reduce((acc, current) => acc + current, 0);
}

// current는 sum의 파라미터
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8))     // 36       // ...rest -> sum의 모든 파라미터를 하나의 배열로 받아옴