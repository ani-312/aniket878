const loginPage = document.getElementById("loginPage");
const signupPage = document.getElementById("signupPage");
const mainContent = document.getElementById("mainContent");

function showSignup() {
  loginPage.style.display = "none";
  signupPage.style.display = "block";
}

function showLogin() {
  signupPage.style.display = "none";
  loginPage.style.display = "block";
}

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  loginPage.style.display = "none";
  mainContent.style.display = "block";
});

document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Signup successful! Please login.");
  showLogin();
});

function goToClass(classNumber) {
  alert("Redirecting to Class " + classNumber + " page...");
}
