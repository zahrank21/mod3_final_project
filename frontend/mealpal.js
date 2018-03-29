class Mealpal {
  constructor(userId, referralLink, count = 0, expDate) {
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

    })

    newItems.append(newMealpalLink, expDate, linkCount, deleteButton)
    divMealpal.appendChild(newItems)
  }

}
