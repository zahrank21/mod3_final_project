


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
      typeOfFood.innerText = food["type_of_food"];
      let foodCount = document.createElement("p");
      foodCount.innerText = food["count"]
      foodItem.append(typeOfFood, foodCount)
      communityFridge.appendChild(foodItem);
    })
  }

  let addFoodForm = document.getElementById("add-food")

  addFoodForm.addEventListener('submit', e => {
    e.preventDefault()
    let foodFormItem = document.createElement("div");
    let typeOfFoodInput = document.createElement("p")
    typeOfFoodInput.innerText = document.getElementById("food-name").value
    let foodCountInput = document.createElement("p")
    foodCountInput.innerText = document.getElementById("food-count").value
    foodFormItem.append(typeOfFoodInput, foodCountInput)
    communityFridge.appendChild(foodFormItem)
    e.target.reset()
  })


})
