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
    mealpalLink.innerText = mealpal["referral_link"]
    let mealpalUses = document.createElement("p")
    mealpalUses.innerText = mealpal["count"]
    mealpalItem.append(mealpalLink, mealpalUses)
    mealPalList.append(mealpalItem)
    })
  }




})
