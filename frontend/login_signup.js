document.addEventListener("DOMContentLoaded", event => {

  $('.menu .item').tab();
  $('.ui.checkbox').checkbox('attach events', '.check.button', 'check');

  let splashPage = document.getElementById("login_signup");
  let loginButton = document.getElementById("login_button");
  let signupButton = document.getElementById("signup_button");
  const sideBar = document.getElementById("side_navbar")
  const contentBody = document.getElementById("content_body")


  loginButton.addEventListener("click", () => {
    splashPage.style.display = "none";
    sideBar.style.display = "block"
    let homePage = document.createElement("div")
    

  })
  signupButton.addEventListener("click", () => {
    splashPage.style.display = "none";
    sideBar.style.display = "block"

  })

  const signOut = document.getElementById("sign_out")
  signOut.addEventListener("click", () => {
    window.location.reload(true);
  })
//endofdom
})
