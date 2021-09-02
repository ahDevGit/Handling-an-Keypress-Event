'use strict';

const modal = document.querySelector('.modal');
const showModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

let openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
let removeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
let closeOnOverlay = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

for (let i = 0; i < showModal.length; i++)
  showModal[i].addEventListener('click', openModal)
closeModal.addEventListener('click', removeModal);
overlay.addEventListener('click', closeOnOverlay);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);sdf
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeOnOverlay();
  }
});
