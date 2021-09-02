'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const CloseModalBtn = document.querySelector('.close-modal');
const showModalsBtn = document.querySelectorAll('.show-modal');

//Open Modal Function
const showModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
//Close Modal Function 
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

for (let i = 0; i < showModalsBtn.length; i++)
  showModalsBtn[i].addEventListener('click', showModal);



CloseModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);