// 모달 기능 생성 - 모달창 열기
const checkBtn = document.querySelector('.check-btn');
const modal = document.querySelector('#modal-window');
const closeBtn = document.querySelector('.modal-close');
// 모달 열기
function modalOn() {
  modal.style.display = 'flex';
}

// 모달 끄기
function modalOff() {
  modal.style.display = 'none';
}

// 모달 열기
checkBtn.addEventListener('click', () => {
  modalOn();
});

// 바깥 영역 클릭 시 모달창 끄기
modal.addEventListener('click', (e) => {
  const evt = e.target;
  if (evt.classList.contains('modal-back')) modalOff();
});

// 종료창 클릭 시 모달창 끄기
closeBtn.addEventListener('click', () => {
  modalOff();
});

// esc 누르면 모달창 끄기
window.addEventListener('keyup', (e) => {
  if (modal.style.display === 'flex' && e.key === 'Escape') modalOff();
});
