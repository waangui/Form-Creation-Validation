document.addEventListener('DOMContentLoaded', function () {
  
    const form = document.getElementById(id="registration-form");
    const feedbackDiv = document.getElementById(id="form-feedback");

    // Prevent form submission

    form.addEventListener(submit, (event)=>{
        event.preventDefault();
    })

    // Retrieve Input Elements

    const usernameInput = document.getElementById(id="username");
    const emailInput = document.getElementById(id="email");
    const passwordInput = document.getElementById(id="password");

    // Retrieve trimmed values

    const userName = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
})
