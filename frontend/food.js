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
      newItems.append(newFoodItem, newCountItem);
      communityFridge.appendChild(newItems);
    }

}
document.addEventListener("DOMContentLoaded", event => {

  const foodButton = document.getElementById("commFridge_block");
  foodButton.addEventListener("click", event => {
    console.log('hello food')
    const foodSection = document.getElementById("communityFridge");
    foodSection.style.display = "block"
  })

})
