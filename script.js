const h1 = document.querySelector('#demo');
const minusBtn = document.querySelector('#minus');

let counter = 0

const render = () => {
   h1.innerHTML = counter;
   if(counter == 0){
     minusBtn.setAttribute('disabled', true)
   }else{
    minusBtn.removeAttribute('disabled', false)
   }
}

const ClickHandlerPlus = () => {
    counter++;
    render()
}



const ClickHandlerMinus = () => {
    counter--;
    render()
};
