class Food {
    constructor(food, inFridge = true, count, cFId = 1) {
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

      const deleteButton = document.createElement('button')
      const deleteButtonLabel = document.createTextNode('delete')
      deleteButton.appendChild(deleteButtonLabel)
      deleteButton.addEventListener('click', e => {
        e.preventDefault()
        e.target.parentNode.remove()

      })

      newItems.append(newFoodItem, newCountItem, deleteButton);
      communityFridge.appendChild(newItems);
    }

}
