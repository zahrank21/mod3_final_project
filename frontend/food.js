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
      // let communityFridge = document.getElementById("communityFridge")
      let contentBody = document.getElementById("content_body")

      newFoodItem.innerText = "Item: " + this.food;
      let newCountItem = document.createElement("p")
      newCountItem.innerText = "Quantity: " + this.count;

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
      contentBody.appendChild(newItems);
    }


}
