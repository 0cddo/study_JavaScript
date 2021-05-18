const superHeroes =  [
    '아이언맨',
    '캡틴 아메리카',
    '토르',
    '닥터 스트레인지'
]

for(let i = 0; i < superHeroes.length; i++) {
    console.log(superHeroes[i]);
}

// forEach 함수 

function print(hero) {
    console.log(hero);
}

superHeroes.forEach(print);     // 생성한 함수 hero를 파라미터로 함


// 더 간단하게! 파라미터에 함수 바로 선언하기 -> 익명함수

superHeroes.forEach(function(hero) {    // 익명함수에 파라미터 삽입
    console.log(hero);
})



// 더 더 간단하게 -> 화살표 함수 

superHeroes.forEach(hero => {
    console.log(hero);
});


// 완전 한 줄!

superHeroes.forEach(hero => console.log(hero));
