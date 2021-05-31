// 모달만들기
// 열고 닫을 수 있는 형태의 ui

import './모달만들기.css'

const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.querySelector('.modal-wrapper');

open.onclick = () => {
    modal.style.display = 'flex';
};

close.onclick = () => {
    modal.style.display = 'none';
};