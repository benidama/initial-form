//GETTING INPUTS WITH DOM

const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const age = document.getElementById("age");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");
const form = document.getElementById("form");
const checkbox = document.getElementById("checkbox");

//GETTING INPUT ERRORS

const firstName_error = document.getElementById("first_name_error");
const lastName_error = document.getElementById("last_name_error");
const age_error = document.getElementById("age_error");
const email_error = document.getElementById("email_error");
const password_error = document.getElementById("password_error");
const confirmPassword_error = document.getElementById("confirm_password_error");
const checkbox_error = document.getElementById("checkbox_error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
});

function validateForm() {
  //check first_name
  const firstNameValue = firstName.value.trim();
  if (firstNameValue.length < 3) {
    firstName_error.textContent =
      "First name must be at least 3 characters long";
    firstName_error.style.color = "red";
  } else {
    firstName.style.border = "1px solid green";
  }

  //check last_name
  const lastNameValue = lastName.value.trim();
  if (lastNameValue.length < 3) {
    lastName_error.textContent = "Last name must be at least 3 characters long";
    lastName_error.style.color = "red";
  } else {
    lastName.style.border = "2px solid green";
  }

  //check age
  const ageValue = age.value.trim();
  if (ageValue < 18 || ageValue > 60) {
    age_error.textContent = "Required age is between 18 and 60";
    age_error.style.color = "red";
  } else {
    age.style.border = "2px solid green";
  }

  //check email
  const emailValue = email.value.trim();
  const Regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9{2,4}$]/;
  if (Regex.test(emailValue) === false) {
    email_error.textContent = "Please enter a valid email";
    email_error.style.color = "red";
  } else {
    email.style.border = "2px solid green";
  }

  //check password
  const passwordValue = password.value.trim();
  if (passwordValue.length < 8 || passwordValue.length > 16) {
    password_error.textContent = "Password must be between 8 and 16 characters";
    password_error.style.color = "red";
  } else {
    password.style.border = "2px solid green";
  }

  //check confirm password
  const confirmPasswordValue = confirmPassword.value.trim();
  if (passwordValue !== confirmPasswordValue) {
    confirmPassword_error.textContent = "Please enter the same password!";
    confirmPassword_error.style.color = "red";
  } else {
    confirmPassword.style.border = "1px solid green";
  }

  //check checkbox
  if (checkbox.checked === false) {
    checkbox_error.textContent = "Please accept to our terms and condition";
    checkbox_error.style.color = "red";
  }
}
