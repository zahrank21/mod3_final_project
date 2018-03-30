const BASE_URL = "http://localhost:3000/";

document.addEventListener("DOMContentLoaded", event => {

  $('.ui.dropdown').dropdown();


// getting or making new user
let signUpButton = document.getElementById('signup_button')
signUpButton.addEventListener('click', event => {
let proposedUsername = document.getElementById("signup-name").value;
let firstName = document.getElementById('first-name').value;
let lastName = document.getElementById('last-name').value;
let cohort = document.getElementById('signup-cohort').value;
fetchJSON('users').then(json => newUser(json, proposedUsername, firstName, lastName, cohort))
})

function newUser(json, proposedUsername, firstName, lastName, cohort){
  let allUsernames = []
  json.forEach(user => {
    allUsernames.push(user.username)
  })
  if (allUsernames.includes(proposedUsername)){
    alert('This username is already taken')
  }else {
    let newUser = new User(proposedUsername, firstName + ' ' + lastName, cohort, false )
    body = {username: proposedUsername, name: firstName + ' ' + lastName, cohort: cohort, alumni: false}
    fetch(BASE_URL + "users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body)
    })
  }
}


let loginButton = document.getElementById('login_button')
// loginButton.addEventListener('click', event => {
//     let currentUser = document.getElementById("username").value
//     console.log(currentUser)
// })
//
// function getCurrentUser(currentUser){
//   if currentUser
// }


// end
  let foodSection = document.getElementById("foodSection");

  function fetchJSON (link) {
    return fetch(BASE_URL + link)
      .then(res => res.json())
  }

  function renderFood(json) {
    json.forEach(jsonFood => {
      let newFood = new Food(jsonFood.id, jsonFood.type_of_food, jsonFood.in_fridge, jsonFood.count, jsonFood.community_fridge_id)
      newFood.displayFood()
    })
  }
  //
  // let newFoodForm = document.getElementById("newFoodForm")
  // function newFood() {
  //   newFoodForm.addEventListener('submit', event => {
  //     event.preventDefault();
  //     let food = document.getElementById('food-name').value
  //     let foodCount = parseInt(document.getElementById('food-count').value)
  //     let body = {type_of_food: food, in_fridge: true, count: foodCount, community_fridge_id: 1}
  //     renderFood([body])
  //     fetch(BASE_URL + "foods", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(body)
  //     })
  //
  //     event.target.reset();
  //
  //   })
  // }
  // fetchJSON("foods").then(json => renderFood(json))
  // newFood();


  const contentBody = document.getElementById("content_body")
  const foodButton = document.getElementById("commFridge_block");
  foodButton.addEventListener("click", event => {
    contentBody.innerHTML = "";
    // const foodSection = document.getElementById("communityFridge");
    // foodSection.style.display = "block"
    let communityFridge = document.createElement("div");
    communityFridge.innerHTML = `<div id="communityFridge">
              <h3>Community Fridge</h3>
              <div id="newFoodForm">
                <label>ADD NEW FOOD TO FRIDGE</label>
                <form id="add-food" action="/foods" method="POST">
                  <label>Add Food to Community Fridge:</label>
                  <input type="text" name="name" id="food-name" placeholder="Item">
                  <input type="integer" name="amount" id="food-count" placeholder="Amount">
                  <input type="submit" value="Submit">
                </form>
              </div>
            </div>`
    contentBody.appendChild(communityFridge);




      let newFoodForm = document.getElementById("newFoodForm")
      function newFood() {
        newFoodForm.addEventListener('submit', event => {
          event.preventDefault();
          let food = document.getElementById('food-name').value
          let foodCount = parseInt(document.getElementById('food-count').value)
          let body = {type_of_food: food, in_fridge: true, count: foodCount, community_fridge_id: 1}
          renderFood([body])
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

  })


  function renderMealpals(json) {
    json.forEach(jsonMealpal => {
      let newMealpal = new Mealpal(jsonMealpal.id, jsonMealpal.user_id, jsonMealpal.referral_link, jsonMealpal.count, jsonMealpal.expiration_date)
      newMealpal.displayMealpal();
    })
  }


  // const contentBody = document.getElementById("content_body")
  const mealpalButton = document.getElementById("mealpal_block");
  mealpalButton.addEventListener("click", event => {
    // const mealpalSection = document.getElementById("mealpal-container");
    // mealpalSection.style.display = "block"
    contentBody.innerHTML = "";
    let mealpalContainer = document.createElement("div");
    mealpalContainer.innerHTML = `<div id = "mealpal-container">
              <h3>MealPal Referrals</h3>
              <form id="add-mealpal-link" action="/mealpals" method="POST">
                <label>Add Your MealPal Link</label>
                <input type="text" name="name" id="mealpal-link" placeholder="Link">
                <label>Expiration Date</label>
                <input type="date" name="date_field" id="expiration-date" placeholder="Date">
                <input type="submit" value="Submit">
              </form>
            </div>`
    contentBody.appendChild(mealpalContainer);


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


  })




  function renderJobs(json) {
    json.forEach(jsonJob => {
      let newJob = new Job(jsonJob.id, jsonJob.title, jsonJob.description, jsonJob.company, jsonJob.link)
      newJob.displayJobs();
    })
  }

  const jobButton = document.getElementById("job_block");
  jobButton.addEventListener("click", event => {
    // const mealpalSection = document.getElementById("mealpal-container");
    // mealpalSection.style.display = "block"
    contentBody.innerHTML = "";
    let jobContainer = document.createElement("div");
    jobContainer.innerHTML = `<div id="jobs-container">
      <h3>Job Openings</h3>
      <form id="add-job" action="/jobs" method="POST">
        <label>Position</label>
        <input type="text" name="name" id="job-title" placeholder="Title">
        <label>Description</label>
        <input type="text" name="name" id="job-description" placeholder="Description">
        <label>Company</label>
        <input type="text" name="name" id="job-company" placeholder="Company Name">
        <label>Link</label>
        <input type="text" name="name" id="job-link" placeholder="Job Link">
        <input type="submit" value="Submit">
      </form>
    </div>`
    contentBody.appendChild(jobContainer);

    fetchJSON("jobs").then(json => renderJobs(json));

    let jobForm = document.getElementById("add-job");
    function renderNewJob() {
      jobForm.addEventListener("submit", event => {
        event.preventDefault();
        let newJobTitle = document.getElementById("job-title").value
        let newJobDescription = document.getElementById("job-description").value
        let newJobCompany = document.getElementById("job-company").value
        let newJobLink = document.getElementById("job-link").value
        let body = {title: newJobTitle, description: newJobDescription, company: newJobCompany, link: newJobLink}
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


  })

  const alumniWhitpagesButton = document.getElementById("alumniWhitepages_block")
  alumniWhitpagesButton.addEventListener("click", event => {
    contentBody.innerHTML = "";
    let alumniWhitepage = document.createElement('div')
    alumniWhitepage.innerHTML = `    <div id="alumni_whitepages">
          <label><h1>Contact an Alumni!</h1></label>
          <div id="alumnis">
          </div>
        </div>`
    contentBody.appendChild(alumniWhitepage)







  function renderAlumnis(json) {
    json.forEach(jsonAlumni => {
      if(jsonAlumni.alumni === true) {

        let newAlumni = new Alumni(jsonAlumni.username, jsonAlumni.name, jsonAlumni.cohort)
        newAlumni.displayAlumni();
      }
    })
  }


  fetchJSON("users").then(json => renderAlumnis(json));



})





function renderHackathons(json){
  json.forEach(jsonHackathon =>{
    let newHackathon = new Hackathon(jsonHackathon.id, jsonHackathon.name, jsonHackathon.language, jsonHackathon.datetime, jsonHackathon.location);
    newHackathon.displayHackathon();
  })
}

const codingEventButton = document.getElementById("codingEvent_block")
codingEventButton.addEventListener("click", event =>{
  contentBody.innerHTML = "";
  let eventDiv = document.createElement("div")
  eventDiv.innerHTML = `      <div id="coding">
          <h2>Coding</h2>
          <div id="hackathon-container">
            <h3>Hackathons</h3>
            <form id="add-hackathon" action="/hackathons" method="post">
              <label>Add New Hackathon Event:</label>
              <input type="text" name="name" id="hackathon-name" placeholder="Name">
              <label>Location</label>
              <input type="text" name="location" id="hackathon-location" placeholder="Location">
              <label>Language</label>
              <input type="text" name="language" id="hackathon-language" placeholder="Language">
              <label>Date and Time</label>
              <input type="datetime-local" name="datetime" id="hackathon-datetime" placeholder="Date and Time">
              <input type="submit" value="Submit">
            </form>
          </div>

        </div>`
  contentBody.appendChild(eventDiv)

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


function renderNetworkingEvents(json){
  json.forEach(jsonNetworkingEvent =>{
    let newNetworkingEvent = new networkingEvent(jsonNetworkingEvent.id, jsonNetworkingEvent.name, jsonNetworkingEvent.location, jsonNetworkingEvent.description, jsonNetworkingEvent.datetime);
    newNetworkingEvent.displayNetworkingEvent();
  })
}


const networkButton = document.getElementById("networking_block");
networkButton.addEventListener("click", event => {
  contentBody.innerHTML = "";
  // const foodSection = document.getElementById("communityFridge");
  // foodSection.style.display = "block"
  let networkEvent = document.createElement("div");
  networkEvent.innerHTML = `<div id="networking-event-container">
    <h3>Networking Events</h3>
    <form id="add-networking-event" action="/events" method="post">
      <label>Add New Networking Event:</label>
      <input type="text" name="name" id="networking-event-name" placeholder="Name">
      <label>Location</label>
      <input type="text" name="name" id="networking-event-location" placeholder="Location">
      <label>Description</label>
      <input type="text" name="name" id="networking-event-description" placeholder="Description">
      <label>Date and Time: </label>
      <input type="datetime-local" name="datetime" id="networking-event-datetime" placeholder="Date and Time">
      <input type="submit" value="Submit">
    </form>
  </div>`
  contentBody.appendChild(networkEvent);



  let networkingEventForm = document.getElementById('add-networking-event')
  function renderNewNetworkingEvent(){
      networkingEventForm.addEventListener('submit', event => {
        event.preventDefault();
        let newNetworkingEventName = document.getElementById('networking-event-name').value;
        let newNetworkingEventLocation = document.getElementById('networking-event-location').value;
        let newNetworkingEventDescription = document.getElementById('networking-event-description').value;
        let newNetworkingEventDatetime = document.getElementById('networking-event-datetime').value;
        let body = {name: newNetworkingEventName, description: newNetworkingEventDescription, datetime: newNetworkingEventDatetime, location: newNetworkingEventLocation}
        renderNetworkingEvents([body]);
        fetch(BASE_URL + "events", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body)
        })
        event.target.reset();

      })
    }

    fetchJSON('events').then(json => renderNetworkingEvents(json));
    renderNewNetworkingEvent();


  })

  const transitButton = document.getElementById("fromFlatiron_block");
  transitButton.addEventListener("click", event =>{
    contentBody.innerHTML = "";
    let transitMap = document.createElement("div");
    transitMap.innerHTML = `<div id="directions">
            <h3>See directions to your destination from Flatiron@</h3>
            <div id="gmap">
              <form id="directions_form">
                <label>Where would you like to go?</label>
                <input type="text" name="name" id="destinations" placeholder="Destination">
                <input type="submit" value="Submit">
              </form>
              <div id="mapDiv">
              </div>
            </div>
          </div>`
    contentBody.appendChild(transitMap);

    let transitForm = document.getElementById("directions_form")
    function renderMap() {
      transitForm.addEventListener("submit", event => {
        event.preventDefault();
        let destination = document.getElementById("destinations");
        let destConverted = destination.value.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ").replace(/[ ]/g,"+")
        let mapDiv = document.getElementById('mapDiv')
        mapDiv.innerHTML = `<iframe width="450" height="450" frameborder="0" style="border:0"
          src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyA3w3-NnXWWqhgJS5ItzMF4xU7jF8wiD6o&origin=11+Broadway,+New+York,+NY+10004&destination=${destConverted}&mode=transit">
        </iframe>`
        divGmap.appendChild(mapDiv);

      })
    }

    renderMap()

  })


  function renderMiscs(json){
    json.forEach(jsonMisc => {
      let newMisc = new Misc(jsonMisc.id, jsonMisc.thing, jsonMisc.code)
      newMisc.displayMisc();
    })
  }


  let miscButton = document.getElementById('misc-block')
  miscButton.addEventListener('click', event => {
    contentBody.innerHTML = '';

    let miscContainer = document.createElement('div')
    miscContainer.innerHTML =`
    <div id = "misc-container">
      <h3>Helpful Items</h3>
      <form id="add-misc-item" action="/miscs" method="POST">
        <input type="text" name="name" id="misc-item" placeholder="Item">
        <input type="text" name="name" id="misc-code" placeholder="Code or Link">
        <input type="submit" value="Submit">
      </form>
    </div>
    `
  contentBody.appendChild(miscContainer)

  fetchJSON('miscs').then(json => renderMiscs(json));

  let miscForm = document.getElementById('add-misc-item')
  function renderNewMisc(){
    miscForm.addEventListener('submit', event => {
      event.preventDefault();
      let newMiscThing = document.getElementById('misc-item').value;
      let newMiscCode = document.getElementById('misc-code').value;
      let body = {thing: newMiscThing, code: newMiscCode}
      renderMiscs([body])

      fetch(BASE_URL + "miscs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
      })
      event.target.reset();
    })

  }

  renderNewMisc();

  })



  function solveBAC(form) {
    var ounces = eval(form.ounces.value);
    var percent = eval(form.percent.value);
    var weight = eval(form.weight.value);
    var hours = eval(form.hours.value);

    var result = (ounces * percent * 0.075 / weight) - (hours * 0.015);
    if (result < 0) {
      message = "There is a negligible amount of alcohol in your system.  You are not legally intoxicated.";
      result = "-- neglible amount --";
    }
    else {
      if (result == "NaN")
      mesage = "Please try again.";
      if (result > 0.08)
      message = "In MOST and possibly ALL states you would be considered intoxicated and arrested for DUI.";
      if (result < 0.08)
      message = "You are not legally intoxicated";
    }
    form.message.value = message;
    form.bacamount.value = result + " %";
  }







})
