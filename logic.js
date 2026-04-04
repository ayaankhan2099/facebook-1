// Select elements
const form = document.querySelector("form");
const emailInput = form.querySelector('input[type="text"]');
const passwordInput = form.querySelector('input[type="password"]');
const loginBtn = document.querySelector(".login");
const createAccountBtn = document.querySelector(".create-account");

// Handle login
form.addEventListener("submit", function(e) {
  e.preventDefault(); // stop page refresh

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Validation
  if (email === "" || password === "") {
    alert("Please fill in all fields!");
    return;
  }

  if (!email.includes("@")) {
    alert("Please enter a valid email!");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters!");
    return;
  }

  // Simulated login success
  alert("Login Successful!");

  // Clear fields
  emailInput.value = "";
  passwordInput.value = "";
});

// Handle create account button
createAccountBtn.addEventListener("click", function(e) {
  e.preventDefault();
  alert("Redirecting to Create Account page...");
});

// Forgot password link
const forgotLink = document.querySelector("form a");

forgotLink.addEventListener("click", function(e) {
  e.preventDefault();
  alert("Password recovery feature coming soon!");
});