const BASE_URL = "http://localhost:3000/";

document.addEventListener("DOMContentLoaded", event => {
  let foodSection = document.getElementById("foodSection");

  function fetchJSON (link) {
    return fetch(BASE_URL + link)
      .then(res => res.json())
  }

  function renderFood(json) {
    json.forEach(jsonFood => {
      let newFood = new Food(jsonFood.type_of_food, jsonFood.in_fridge, jsonFood.count, jsonFood.community_fridge_id)
      newFood.displayFood()
    })
  }

  let newFoodForm = document.getElementById("newFoodForm")
  function newFood() {
    newFoodForm.addEventListener('submit', event => {
      event.preventDefault();
      let food = document.getElementById('food-name').value
      let foodCount = parseInt(document.getElementById('food-count').value)
      let body = {type_of_food: food, in_fridge: true, count: foodCount, community_fridge_id: 1}
      renderFood([body]);
      fetch(BASE_URL + "foods", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
      })
      event.target.reset();

    })
  }

  fetchJSON("foods").then(json => renderFood(json))

  //will refractor eventually
  newFood();


  function renderMealpals(json) {
    json.forEach(jsonMealpal => {
      console.log(jsonMealpal)
      let newMealpal = new Mealpal(jsonMealpal.user_id, jsonMealpal.referral_link, jsonMealpal.count, jsonMealpal.expiration_date)
      newMealpal.displayMealpal();
    })
  }

  fetchJSON("mealpals").then(json => renderMealpals(json));

  let mealpalForm = document.getElementById("add-mealpal-link")
  function renderNewMealPal() {
    mealpalForm.addEventListener('submit', event => {
      event.preventDefault();
      let mealpalLink = document.getElementById("mealpal-link").value
      let expDate = document.getElementById("expiration-date").value
      let body = {user_id: 1, referral_link: mealpalLink, count: 0, expiration_date: expDate}
      renderMealpals([body])
      fetch(BASE_URL + "mealpals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
      })
      event.target.reset();
    })

  }

  renderNewMealPal();

  function renderJobs(json) {
    json.forEach(jsonJob => {
      let newJob = new Job(jsonJob.title, jsonJob.description, jsonJob.company, jsonJob.link)
      newJob.displayJobs();
    })
  }

  fetchJSON("jobs").then(json => renderJobs(json));









})
