let items = document.querySelectorAll('.slider-item');
let arr = [...items];

const btnLeft = document.querySelector('.left');
const btnRight = document.querySelector('.right');

btnLeft.addEventListener("click", moveLeft);


function moveLeft(){    
let step=1;//шаг
for(i=0;i<step;i++){
    arr[0].classList.remove('active');
    arr.unshift(arr.pop())} ;
    arr[0].classList.add('active');
    items=[...arr];    
}