let loginForm = document.querySelector(".my-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let isValidPassword = true;
  let errorMessage = "";

  if (password.length < 8) {
    isValidPassword = false;
    errorMessage += "Password must be at least 8 characters long.\n";
  }
  if (password.match(/^\d+$/)) { 
    isValidPassword = false;
    errorMessage += "Password cannot only consist of integers.\n";
  }

  if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
    isValidPassword = false;
    errorMessage += "Password must contain both uppercase and lowercase letters.\n";
  }
  if (!isValidPassword) {
    alert(errorMessage);
    return;
  }
  console.log("Email:", email);
  console.log("Password:", password);
  alert("Login successful!");
});