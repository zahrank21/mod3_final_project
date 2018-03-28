


document.addEventListener("DOMContentLoaded", event => {
  let splashPage = document.getElementById("main_body");
  let loginButton = document.getElementById("login_button");
  let signupButton = document.getElementById("signup_button");


  function loadMainPage() {
    splashPage.innerHTML= `

    <!DOCTYPE html>
    <html lang="en" dir="ltr">
      <head>
        <meta charset="utf-8">
        <title></title>
      </head>
      <body>
        <div id="food">

          <h2>Food</h2>

          <div id ="fridge-container">
            <h4>Community Fridge</h4>
            <form id="add-food" action="/foods" method="POST">
              <label>Add Food to Community Fridge:</label>
              <input type="text" name="name" id="food-name">
              <input type="integer" name="amount" id="food-count">
              <input type="submit" value="Submit">
            </form>
          </div>

          <div id = "mealpal-container">
            <h4>MealPal Referrals</h4>
            <form id="add-mealpal-link" action="/mealpals" method="POST">
              <label>Add Your MealPal Link</label>
              <input type="text" name="name" id="mealpal-link">
              <input type="submit" value="Submit">
            </form>
          </div>

        </div>

        <div id="career">
        </div>

        <div id="coding">
        </div>

        <div id="social">
        </div>

        <div id="commute">
        </div>

      </body>
    </html>

`
  }

})
