const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onLoginFormSubmit);

function onLoginFormSubmit (event) {
    event.preventDefault();
    
    const {
        elements: {email , password }
      } = event.currentTarget;
    
      if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    }
    
    const formData = new FormData(event.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    console.log(userData);

    loginForm.reset();

};