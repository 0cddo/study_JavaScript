// 클래스 생성 연습
// 클래스 내부의 함수는 메소드라고 함
// 클래스 사용 -> 코드 관리 용이!

class Food {
    constructor(name) {
        this.name = name;
        this.brands = [];
    }
    addBrand(brand) {
        this.brands.push(brand);
    }
    print() {
        console.log(`${this.name}을 파는 음식점:`);
        console.log(this.brand.join(', '));
    }
}

const pizza = new Food('피자');
pizza.addBrand('피자헛');
pizza.addBrand('도미노');

const chicken = new Food('치킨');
chicken.addBrand('굽네치킨');
chicken.addBrand('교촌치킨');

pizza.print();
chicken.print();



// 클래스 생성연습 2

class Fruits {
    constructor(color) {
      this.color = color;
      this.name = [];
    }
    addName(fruit) {
      this.name.push(fruit);
    }
    print() {
      console.log(`${this.color} 과일들의 종류:`);
      console.log(this.name.join(', '));
    }
  }
  
  const red = new Fruits('빨간색');
  red.addName('딸기');
  red.addName('사과');
  
  const yellow = new Fruits('노란색');
  yellow.addName('바나나');
  yellow.addName('망고');
  
  red.print();
  yellow.print();



  // 클래스 생성 연습 3

  class Refrigerator {
    constructor (food) {
      this.food = food;
      this.eat = [];
    }
    addFood(meal) {
      this.eat.push(meal);
    }
    print() {
      console.log(`${this.food}은 냉장고에서 빨리 드세요: 요리는?`)
      console.log(this.eat.join(', '));
    }
  }
  
  const seaFood = new Refrigerator('해산물');
  seaFood.addFood('새우 로제파스타');
  seaFood.addFood('조기 구이');
  
  const vege = new Refrigerator('야채');
  vege.addFood('감자전');
  vege.addFood('양파볶음밥');
  
  seaFood.print();
  vege.print();