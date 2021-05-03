// var 함수 스코프


var a = 0;

(function() {
    a++;
    console.log(a);
})();   // 즉시 실행 함수

console.log(a);


// 함수 안에서의 변수 밖에서 실행

(function() {
    var b = 0;
    console.log(b);
})();

b++;
console.log(b);


