const BASE_URL = "http://localhost:3000/";

document.addEventListener("DOMContentLoaded", event => {

let users = document.getElementById("users");

let deleteButton = document.createElement('button')
let deleteButtonLabel = document.createTextNode('Delete')
deleteButton.appendChild(deleteButtonLabel)
deleteButton.addEventListener('click', e => {
  e.preventDefault();
  document.removeChild();
})
// (function getUsers(){
//   return fetch(BASE_URL + "users")
//   .then(res => res.json())
//   .then(json => displayUsers(json))
// })()
//
// // function displayUsers(json) {
// //   json.forEach(user) {
// //     let p = document.createElement("p");
// //     p.innerText = user.name;
// //     users.innerHTML += p;
// //   }
// // }
//
// displayUsers = (json) => {
//     json.forEach(user => {
//     let p = document.createElement("p");
//     p.innerText = user["name"];
//     users.appendChild(p);
//   })
// }

})
