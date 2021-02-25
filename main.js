let decrease = document.querySelector('.decrease');
let reset = document.querySelector('.reset');
let increase = document.querySelector('.increase');
let value = document.querySelector('.value');

let count = 0;

decrease.addEventListener('click',function(){
    count--;
    value.textContent = count;
})

increase.addEventListener('click',function(){
    count++;
    value.textContent = count;
})

reset.addEventListener('click',function(){
    count = 0;
    value.textContent = count;
})
















