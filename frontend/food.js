class Food {
    constructor(id, food, inFridge = true, count, cFId = 1) {
      this.id = id
      this.food = food;
      this.inFridge = inFridge;
      this.count = count;
      this.communityFridgeId = cFId;
    }

    displayFood() {
      let newItems = document.createElement("div")
      let newFoodItem = document.createElement("p")
      let communityFridge = document.getElementById("communityFridge")
      newFoodItem.innerText = "Item: " + this.food;
      let newCountItem = document.createElement("p")
      newCountItem.innerText = "Quantity: " + this.count;
      console.log(this.id)
      
      const deleteButton = document.createElement('button')
      const deleteButtonLabel = document.createTextNode('delete')
      deleteButton.appendChild(deleteButtonLabel)
      deleteButton.addEventListener('click', e => {
        e.preventDefault()
        e.target.parentNode.remove()

        let body = {type_of_food: this.food, in_fridge: true, count: this.count, community_fridge_id: 1}

        fetch(BASE_URL + `foods/${this.id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body)
        })


      })

      newItems.append(newFoodItem, newCountItem, deleteButton);
      communityFridge.appendChild(newItems);
    }


}

document.addEventListener("DOMContentLoaded", event => {

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
  })

})
