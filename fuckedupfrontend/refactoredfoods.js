const communityFridge = document.getElementById("fridge-container")

function Food() {
  return class Food {
    constructor(type_of_food, in_fridge = true, count, community_fridge = 1) {
      this.type_of_food = type_of_food
      this.in_fridge = true
      this.count = count
      this.community_fridge = community_fridge
    }


    renderNewFood() {

        e.preventDefault()
        let foodFormItem = document.createElement("div");

        let typeOfFoodInput = document.createElement("p")
        typeOfFoodInput.innerText = `Item: ${this.type_of_food}`

        let foodCountInput = document.createElement("p")
        foodCountInput.innerText = `Quantity: ${this.count}`

        //copy and paste this to any place you want delete button
        const deleteButton = document.createElement('button')
        const deleteButtonLabel = document.createTextNode('delete')
        deleteButton.appendChild(deleteButtonLabel)
        deleteButton.addEventListener('click', e => {
          e.preventDefault()
          e.target.parentNode.remove()
        })
          // figure delete out later
          // fetch(BASE_URL + 'foods',{
          // method: "DELETE",
          // headers: {
          //   "Content-Type": "application/json",
          // },
          // body: JSON.stringify(body)
          // })
          //
          // e.target.reset()



        foodFormItem.append(typeOfFoodInput, foodCountInput, deleteButton)
        communityFridge.appendChild(foodFormItem)

        let body = {'type_of_food': `${this.type_of_food}`,'in_fridge': `${this.in_fridge}`, 'count':`${this.count}`, 'community_fridge_id': `${this.community_fridge}`}


        fetch(BASE_URL + 'foods',{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
        })

        e.target.reset()
      }





  }
}
