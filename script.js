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

    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Validation

   let isValid = true;
    const messages = [];

    // Username Validation

    if (username.length < 3){
        isValid=false;
        messages.push('Username must be at least 3 characters long!');
    }

    // Email Validation

    if (!email.includes ('@') || !email.includes ('.')){
        isValid=false;
        messages.push('Email must include "@" and "."!');
    }
    // Password Validation

    if (password.length < 8){
        isValid=false;
        messages.push('Password must be at least 8 characters long!');
    }

    // Feedback Display

    feedbackDiv.style.display = 'block';

    if (isValid){
        feedbackDiv.textContent = 'Registration successful!';
        feedbackDiv.style.color = "#28a745";
    } else {
        feedbackDiv.innerHTML = messages.join('<br>');
        feedbackDiv.style.color = "#dc3545";
    }

    
})
