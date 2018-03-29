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
  newFood();


  function renderMealpals(json) {
    json.forEach(jsonMealpal => {
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

  let jobForm = document.getElementById("add-job");
  function renderNewJob() {
      jobForm.addEventListener("submit", event => {
        event.preventDefault();
        let newJobTitle = document.getElementById("job-title").value
        let newJobDescription = document.getElementById("job-description").value
        let newJobCompany = document.getElementById("job-company").value
        let newJobLink = document.getElementById("job-link").value
        let body = {user_id: newJobTitle, description: newJobDescription, company: newJobCompany, link: newJobLink}
        renderJobs([body]);
        fetch(BASE_URL + "jobs", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body)
        })
        event.target.reset();
      })
  }

  renderNewJob();


function renderHackathons(json){
  json.forEach(jsonHackathon =>{
    let newHackathon = new Hackathon(jsonHackathon.name, jsonHackathon.language, jsonHackathon.datetime, jsonHackathon.location);
    newHackathon.displayHackathon();
  })
}

fetchJSON("hackathons").then(json => renderHackathons(json));

let hackathonForm = document.getElementById('add-hackathon');
function renderNewHackathon(){
  hackathonForm.addEventListener("submit", event => {
    event.preventDefault();
    let newHackathonName = document.getElementById('hackathon-name').value;
    let newHackathonLocation = document.getElementById('hackathon-location').value;
    let newHackathonLanguage = document.getElementById('hackathon-language').value;
    let newHackathonDatetime = document.getElementById('hackathon-datetime').value;
    let body = {name: newHackathonName, language: newHackathonLanguage, datetime: newHackathonDatetime, location: newHackathonLocation}
    renderHackathons([body]);
    fetch(BASE_URL + "hackathons", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body)
    })
    event.target.reset();
  })
}

renderNewHackathon();




})
