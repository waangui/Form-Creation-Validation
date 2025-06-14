document.addEventListener('DOMContentLoaded', ()=> {
  
    const form = document.getElementById(id="registration-form");
    const feedbackDiv = document.getElementById(id="form-feedback");

    // Prevent form submission

    form.addEventListener(submit, (event)=>{
        event.preventDefault();
    })

    // Retrieve Input 

    const userName = document.getElementById(id="username");
    const emailInput = document.getElementById(id="email");
    const passwordInpute = document.getElementById(id="password");

})
