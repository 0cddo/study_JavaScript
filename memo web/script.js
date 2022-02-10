const form = document.querySelector("form");
const ul = document.querySelector("ul");
const button = document.querySelector("button");
const input = document.querySelector("#item");
let itemArr = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

localStorage.setItem("items", JSON.stringify(itemArr));
const data = JSON.parse(localStorage.getItem("items"));

// list 추가 함수
const listMaker = (text) => {
  let liEl = document.createElement("li");
  liEl.textContent = text;
  ul.append(liEl);
};

// form 입력 이벤트
form.addEventListener("submit", (e) => {
  e.preventDefault();

  itemArr.push(input.value);
  localStorage.setItem("items", JSON.stringify(itemArr));
  listMaker(input.value);
  input.value = "";
});

data.forEach((item) => {
  listMaker(item);
});

button.addEventListener("click", function () {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
});
