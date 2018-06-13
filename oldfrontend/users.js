
document.addEventListener("DOMContentLoaded", event => {

// let users = document.getElementById("users");


  (function getUsers(){
    return fetch(BASE_URL + "users")
    .then(res => res.json())
  })()

  // allUserData = (json) => {
  //   json.forEach(user => {
  //
  //   })
  // }





// displayUsers = (json) => {
//
//     json.forEach(user => {
//       console.log(user)
//     let p = document.createElement("p");
//     p.innerText = user["name"];
//     users.append(p);
//   })
// }
// let deleteButton = document.createElement('button')
// let deleteButtonLabel = document.createTextNode('Delete')
// deleteButton.appendChild(deleteButtonLabel)
// deleteButton.addEventListener('click', e => {
//   e.preventDefault();
//   document.removeChild();
// })

})
