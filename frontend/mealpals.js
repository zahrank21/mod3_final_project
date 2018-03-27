document.addEventListener("DOMContentLoaded", event => {

  (function getMealpals(){
   return fetch(BASE_URL + 'mealpals')
   .then (resp => resp.json())
   .then(json => renderMealpals(json))
  })()

  let mealPalList = document.getElementById("mealpal-container")

  renderMealpals = (json) => {
    json.forEach(mealpal => {
    let mealpalItem = document.createElement("div")
    let mealpalLink = document.createElement("p")
    mealpalLink.innerText = `Link: ${mealpal["referral_link"]}`
    let mealpalUses = document.createElement("p")
    mealpalUses.innerText = `Used: ${mealpal["count"]} Time(s)`
    mealpalItem.append(mealpalLink, mealpalUses)
    mealPalList.append(mealpalItem)
    })
  }

  let addMealpalForm = document.getElementById("add-mealpal-link")

  addMealpalForm.addEventListener('submit', e => {
    e.preventDefault();
    let mealpalItem = document.createElement("div")
    let mealpalLinkInput = document.createElement("p")
    mealpalLinkInput.innerText = document.getElementById("mealpal-link").value
    let mealpalUses = document.createElement("p")
    mealpalUses.innerText = 0

    mealpalItem.append(mealpalLinkInput, mealpalUses)
    mealPalList.append(mealpalItem, deleteButton)

    e.target.reset();
  })



})
