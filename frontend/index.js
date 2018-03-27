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

  // $('#login_splash_page')
  // // default everything
  // .transition()
  // ;


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
    splashPage.innerHTML= `<div id="food">

      <h2>Food</h2>

      <div id ="fridge-container">
        <h4>Community Fridge</h4>
        <form id="add-food" action="/foods" method="POST">
          <label>Add Food to Community Fridge:</label>
          <input type="text" name="name" id="food-name" placeholder="Item">
          <input type="integer" name="amount" id="food-count" placeholder="Amount">
          <input type="submit" value="Submit">
        </form>
      </div>

      <div id = "mealpal-container">
        <h4>MealPal Referrals</h4>
        <form id="add-mealpal-link" action="/mealpals" method="POST">
          <label>Add Your MealPal Link</label>
          <input type="text" name="name" id="mealpal-link" placeholder="Link">
          <label>Expiration Date</label>
          <input type="date" name="date_field" id="expiration-date" placeholder="Date">
          <input type="submit" value="Submit">
        </form>
      </div>

      <div id="restaurant-container">
        <h4>Restaurant Recommendations</h4>

      </div>

    </div>

    <div id="career">
      <h2>Career</h2>

      <div id="job-openings">
        <label>Job Openings</label>

      </div>

      <div id="alumni-whiteboard">
        <label>Alumni Whiteboard</label>

      </div>

    </div>

    <div id="coding">
    </div>

    <div id="social">
    </div>

    <div id="commute">
    </div>
`
  }
})
