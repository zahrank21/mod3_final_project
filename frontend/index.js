const BASE_URL = "http://localhost:3000/";

document.addEventListener("DOMContentLoaded", event => {

let users = document.getElementById("users");


  $('.menu .item')
  .tab()
  ;

  $('.ui.checkbox').checkbox('attach events', '.check.button', 'check');

  let splashPage = document.getElementById("login_splash_page");
  let loginButton = document.getElementById("login_button");
  let signupButton = document.getElementById("signup_button");
  clearHTML = () => splashPage.innerHTML = "";
  loginButton.addEventListener("click", clearHTML)
  signupButton.addEventListener("click", clearHTML)

})
