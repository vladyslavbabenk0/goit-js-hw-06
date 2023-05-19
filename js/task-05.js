const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', onInputListener);

function onInputListener (event) {
    if (event.currentTarget.value === '') {
        output.textContent = 'Anonymous';
    }
    else {
        output.textContent = event.currentTarget.value;
    };

};