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
    newItems.setAttribute("class", "ui floating message")
    let newMealpalLink = document.createElement("p")
    let expDate = document.createElement("p")
    let linkCount = document.createElement("p")
    let divMealpal = document.getElementById("mealpal-container")

    newMealpalLink.innerHTML = `Link: <a href="http://${this.referralLink}"> ${this.referralLink}</a>`
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
