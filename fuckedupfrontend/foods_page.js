


document.addEventListener("DOMContentLoaded", event => {

  (function getFoods(){
   return fetch(BASE_URL + 'foods')
   .then (resp => resp.json())
   .then(json => renderFoods(json))
  })()

  let communityFridge = document.getElementById("fridge-container")

  renderFoods = (json) => {
      json.forEach(food => {
      let foodItem = document.createElement("div");

      let typeOfFood = document.createElement("p");
      typeOfFood.innerText = `Item: ${food["type_of_food"]}`;

      let foodCountLabel = document.createElement("h5")
      foodCountLabel.innerText = "Quantity"

      let foodCount = document.createElement("p");
      foodCount.innerText = `Quantity: ${food["count"]}`

      //copy and paste this to any place you want delete button
      const deleteButton = document.createElement('button')
      const deleteButtonLabel = document.createTextNode('delete')
      deleteButton.appendChild(deleteButtonLabel)
      deleteButton.addEventListener('click', e => {
        e.preventDefault()
        e.target.parentNode.remove()


      })
      //

      foodItem.append( typeOfFood, foodCount, deleteButton)
      communityFridge.appendChild(foodItem);
    })
  }

  let addFoodForm = document.getElementById("add-food")

  addFoodForm.addEventListener('submit', e => {
    e.preventDefault()
    let foodFormItem = document.createElement("div");

    let typeOfFoodInput = document.createElement("p")
    typeOfFoodInput.innerText = `Item: ${document.getElementById("food-name").value}`

    let foodCountInput = document.createElement("p")
    foodCountInput.innerText = `Quantity: ${document.getElementById("food-count").value}`

    //copy and paste this to any place you want delete button
    const deleteButton = document.createElement('button')
    const deleteButtonLabel = document.createTextNode('delete')
    deleteButton.appendChild(deleteButtonLabel)
    deleteButton.addEventListener('click', e => {
      e.preventDefault()
      e.target.parentNode.remove()

    })
    //

    foodFormItem.append(typeOfFoodInput, foodCountInput, deleteButton)
    communityFridge.appendChild(foodFormItem)

    let body = {'type_of_food': `${document.getElementById("food-name").value}`, 'count':`${document.getElementById("food-count").value}`, 'community_fridge_id': 1}
    fetch(BASE_URL + 'foods',{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body)
    })

    e.target.reset()
  })


})
