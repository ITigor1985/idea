const items = document.querySelectorAll('.slider-item');
const btnLeft = document.querySelector('.left');
const btnRight = document.querySelector('.right');

btnLeft.addEventListener("click", moveLeft);
console.log(items) 

function moveLeft(){
    items.forEach((item, index, items) => {
        if(item.classList.contains('active')){
           item.classList.remove('active');
           
            
            // items.push(lastElement).classList.add('active');
        }
        
      })
}