let items = document.querySelectorAll('.slider-item');
let arr = [...items];

const btnLeft = document.querySelector('.left');
const btnRight = document.querySelector('.right');

btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight);

function moveLeft() {
  let step = 1; //шаг
  for (let i = 0; i < step; i++) {

    arr[0].classList.remove('active');
    if (!arr[0].classList.contains('no-active')) {
      arr[0].classList.add('no-active');
    }
    arr.unshift(arr.pop());
  }
  arr[0].classList.add('active');
  arr[0].classList.remove('no-active');
  items = [...arr];
}

function moveRight() {
  let step = 1;
  for (let i = 0; i < step; i++) {
    arr[0].classList.remove('active');
    if (!arr[0].classList.contains('no-active')) {
      arr[0].classList.add('no-active');
    }
    arr.push(arr.shift());
  }
  arr[0].classList.add('active');
  arr[0].classList.remove('no-active');
  items = [...arr];
}
