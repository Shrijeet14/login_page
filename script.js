function validateEmail() {
    const emailInput = document.getElementById("email");
    const emailValue = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailRegex.test(emailValue)) {
      return true;
    } else {
      alert("Please enter a valid email address.");
      return false;
    }
  }
  
  function forgotPassword() {
    const emailInput = document.getElementById("email");
    const emailValue = emailInput.value;
    
    if (validateEmail()) {
      // Send password reset link to email address
      alert(`A password reset link has been sent to ${emailValue}.`);
    }
  }
  
  function validateLogin() {
    const emailInput = document.getElementById("email");
    const emailValue = emailInput.value;
    const passwordInput = document.getElementById("password");
    const passwordValue = passwordInput.value;
    
    
    if (validateEmail() && passwordValue !== ""){
      alert("you have been logged in");
      window.location.href = "https://shrijeet14.github.io/agriculturesolution/";
  } else {
      alert("Please enter a valid email address and password.");
    }
  }
  
  function showSignUpForm() {
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.createElement("input");
    confirmPasswordInput.setAttribute("type", "password");
    confirmPasswordInput.setAttribute("class", "form-control");
    confirmPasswordInput.setAttribute("placeholder", "Confirm Password");
    confirmPasswordInput.setAttribute("id", "confirmPassword");
    passwordInput.parentNode.insertBefore(confirmPasswordInput, passwordInput.nextSibling);
  
    const signUpBtn = document.getElementById("signUpBtn");
    signUpBtn.setAttribute("onclick", "validateSignUp()");
  
    const loginHeader = document.querySelector("#loginpage .card-header h3");
    loginHeader.textContent = "Sign Up";
  
    const loginBtn = document.querySelector("#loginpage .login_btn");
    loginBtn.setAttribute("value", "Sign Up");
    loginBtn.setAttribute("onclick", "validateSignUp()");
  
    const rememberDiv = document.querySelector("#loginpage .remember");
    rememberDiv.style.display = "none";
  
    const confirmPasswordDiv = document.createElement("div");
    confirmPasswordDiv.setAttribute("class", "input-group form-group");
    confirmPasswordDiv.appendChild(confirmPasswordInput);
  
    const form = document.querySelector("#loginpage form");
    form.insertBefore(confirmPasswordDiv, form.lastElementChild.previousElementSibling);
  }
  
  function validateSignUp() {
    const emailInput = document.getElementById("email");
    const emailValue = emailInput.value;
    const passwordInput = document.getElementById("password");
    const passwordValue = passwordInput.value;
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const confirmPasswordValue = confirmPasswordInput.value;
  
    if (validateEmail() && passwordValue !== "" && passwordValue === confirmPasswordValue) {
      // Sign up user
      alert(`Signed up with email: ${emailValue} and password: ${passwordValue}.`);
    } else if (passwordValue !== confirmPasswordValue) {
      alert("Passwords do not match. Please try again.");
    } else {
      alert("Please enter a valid email address and password.");
    }

  }
  function removeSignUpButton() {
    const signUpButton = document.getElementById("signup-btn");
    signUpButton.remove();
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    const signUpButton = document.getElementById("signup-btn");
    signUpButton.addEventListener("click", function() {
      removeSignUpButton();
    })});
  