const BASE_URL = "http://localhost:3000/";

document.addEventListener("DOMContentLoaded", event => {

let users = document.getElementById("users");


  $('.menu .item')
  .tab()
  ;

  $('.ui.checkbox').checkbox('attach events', '.check.button', 'check');

  let splashPage = document.getElementById("main_body");
  let loginButton = document.getElementById("login_button");
  let signupButton = document.getElementById("signup_button");
  clearHTML = () => splashPage.innerHTML = "";
  loginButton.addEventListener("click", () => {
    clearHTML();
    loadMainPage();
  })
  signupButton.addEventListener("click", () => {
    clearHTML();
    loadMainPage();
  })

  function loadMainPage() {
    splashPage.innerHTML= `<object type="text/html" data="mainpage.html"></object>`
  }
})
