document.addEventListener("DOMContentLoaded", event =>{
let foodButton = document.getElementById("food_app_button");

// $(document).ready(function(){
//      $('#food_app_button').click(function(){
//         $('#modaldiv').modal('show');
//      });
// });

$(document).ready(function() {
  $('#food_app_button').click(function(){
  $('#modaldiv').modal({
    transition: 'horizontal flip',
    duration: 1000,
    onShow: function() {
      $('#modaldiv').modal({
        transition: 'fade',
        duration: 100,
      })
    },
    onApprove: function(){
        $('#modaldiv').modal('hide');
    }
  }).modal('show');
})});

foodButton.addEventListener("click", event => {
  console.log('button clicked')
  // let foodModal = `<div class="ui modal">
  //     <div class="header">MOOO</div>
  //     <div class="scrolling content">
  //     <div id="food">
  //
  //       <h2>Food</h2>
  //
  //       <div id ="fridge-container">
  //         <h4>Community Fridge</h4>
  //         <form id="add-food" action="/foods" method="POST">
  //           <label>Add Food to Community Fridge:</label>
  //           <input type="text" name="name" id="food-name">
  //           <input type="integer" name="amount" id="food-count">
  //           <input type="submit" value="Submit">
  //         </form>
  //       </div>
  //
  //       <div id = "mealpal-container">
  //         <h4>MealPal Referrals</h4>
  //         <form id="add-mealpal-link" action="/mealpals" method="POST">
  //           <label>Add Your MealPal Link</label>
  //           <input type="text" name="name" id="mealpal-link">
  //           <input type="submit" value="Submit">
  //         </form>
  //       </div>
  //
  //     </div>
  //     </div>
  //   </div>`


  let foodCont = document.getElementById("food_app");
  debugger
  foodCont.appendChild(foodModal);
  // debugger


  })





})
