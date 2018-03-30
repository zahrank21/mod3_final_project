class Mealpal {
  constructor(id, userId, referralLink, count = 0, expDate) {
    this.id = id
    this.userId = userId
    this.referralLink = referralLink
    this.count = count
    this.expDate = expDate
  }

  displayMealpal() {
    let newItems = document.createElement("div")
    let newMealpalLink = document.createElement("p")
    let expDate = document.createElement("p")
    let linkCount = document.createElement("p")
    let divMealpal = document.getElementById("mealpal-container")

    newMealpalLink.innerText = "Link: " + this.referralLink
    expDate.innerText = "Expiration Date: " + this.expDate
    linkCount.innerText = "Used: " + this.count + " time(s)"

    const deleteButton = document.createElement('button')
    const deleteButtonLabel = document.createTextNode('delete')
    deleteButton.appendChild(deleteButtonLabel)
    deleteButton.addEventListener('click', e => {
      e.preventDefault()
      e.target.parentNode.remove()

      let body = {user_id: 1, referral_link: this.referralLink, count: this.count, expiration_date: this.expDate}

      fetch(BASE_URL + `mealpals/${this.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
      })


    })

    newItems.append(newMealpalLink, expDate, linkCount, deleteButton)
    divMealpal.appendChild(newItems)
  }

}

// document.addEventListener("DOMContentLoaded", event => {
//   const contentBody = document.getElementById("content_body")
//   const mealpalButton = document.getElementById("mealpal_block");
//   mealpalButton.addEventListener("click", event => {
//     // const mealpalSection = document.getElementById("mealpal-container");
//     // mealpalSection.style.display = "block"
//     console.log("BITCH")
//     contentBody.innerHTML = "";
//     let mealpalContainer = document.createElement("div");
//     mealpalContainer.innerHTML = `<div id = "mealpal-container">
//               <h3>MealPal Referrals</h3>
//               <form id="add-mealpal-link" action="/mealpals" method="POST">
//                 <label>Add Your MealPal Link</label>
//                 <input type="text" name="name" id="mealpal-link" placeholder="Link">
//                 <label>Expiration Date</label>
//                 <input type="date" name="date_field" id="expiration-date" placeholder="Date">
//                 <input type="submit" value="Submit">
//               </form>
//             </div>`
//     contentBody.appendChild(mealpalContainer);
//   })
//
// })
