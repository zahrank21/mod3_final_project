document.addEventListener("DOMContentLoaded", event => {

  (function getMealpals(){
   return fetch(BASE_URL + 'mealpals')
   .then (resp => resp.json())
   .then(json => renderMealpals(json))
  })()

  let mealPalList = document.getElementById("mealpal-container")

  renderMealpals = (json) => {
    json.forEach(mealpal => {
    let int = mealpal.id
    let mealpalItem = document.createElement("div")
    mealpalItem.setAttribute('id', `${int}`)

    let mealpalLink = document.createElement("p")
    mealpalLink.innerText = `Link: ${mealpal["referral_link"]}`

    let mealpalUses = document.createElement("p")
    mealpalUses.innerText = `Used: ${mealpal["count"]} Time(s)`

    let expirationDate = document.createElement("p")
    expirationDate.innerText = `Promotion Expires: ${mealpal["expiration_date"]}`

    //copy and paste this to any place you want delete button
    const deleteButton = document.createElement('button')
    const deleteButtonLabel = document.createTextNode('delete')
    deleteButton.appendChild(deleteButtonLabel)
    deleteButton.addEventListener('click', e => {
      e.preventDefault()
      e.target.parentNode.remove()

    })
    //

    mealpalItem.append(mealpalLink, mealpalUses, expirationDate, deleteButton)
    mealPalList.append(mealpalItem)

    })
  }

  let addMealpalForm = document.getElementById("add-mealpal-link")

  addMealpalForm.addEventListener('submit', e => {
    e.preventDefault();
    let mealpalItem = document.createElement("div")

    let mealpalLinkInput = document.createElement("p")
    mealpalLinkInput.innerText = `Link: ${document.getElementById("mealpal-link").value}`

    let mealpalUses = document.createElement("p")
    mealpalUses.innerText = `Used: 0 Time(s)`

    let expirationDate = document.createElement("p")
    expirationDate.innerHTML = `Promotion Expires: ${document.getElementById("expiration-date").value}`

    //copy and paste this to any place you want delete button
    const deleteButton = document.createElement('button')
    const deleteButtonLabel = document.createTextNode('delete')
    deleteButton.appendChild(deleteButtonLabel)
    deleteButton.addEventListener('click', e => {
      e.preventDefault()
      e.target.parentNode.remove()

    })
    //

    mealpalItem.append(mealpalLinkInput, mealpalUses, expirationDate, deleteButton)
    mealPalList.append(mealpalItem)


    // post fetch
    let body = {'referral_link': `${document.getElementById("mealpal-link").value}`, 'count': 0, 'expiration_date': `${document.getElementById("expiration-date").value}`}

    fetch(BASE_URL + 'mealpals',{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body)
    })
    //


    e.target.reset();
  })



})
