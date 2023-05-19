const input = document.querySelector('#validation-input');
const lengthOfInput = input.dataset.length;

input.addEventListener('blur', onInputBlur);

function onInputBlur (event) {
    if (event.currentTarget.value.length === Number(lengthOfInput)){
        input.classList.remove('invalid');
        input.classList.add('valid');
    }
    else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    };
};