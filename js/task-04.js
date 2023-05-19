const btnDecrement = document.querySelector('[data-action="decrement"]');
console.log(btnDecrement);

const btnIncrement = document.querySelector('[data-action="increment"]');

const counterValueEl = document.querySelector('#value');

let counterValue = 0;

const handleClickDecrement = () => {
    counterValue--;
    counterValueEl.textContent = counterValue;
};

const handleClickIncrement = () => {
    counterValue++;
    counterValueEl.textContent = counterValue;
};

btnDecrement.addEventListener('click',handleClickDecrement);

btnIncrement.addEventListener('click', handleClickIncrement);