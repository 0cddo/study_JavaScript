// var 블록스코프 이용

var c = 0;

{
    c++;
    console.log(c);
}

{
    var d = 0;
    console.log(d);
}

console.log(d);