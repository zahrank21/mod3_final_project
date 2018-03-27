const BASE_URL = "http://localhost:3000/";

document.addEventListener("DOMContentLoaded", event => {

let users = document.getElementById("users");

  (function getUsers(){
    return fetch(BASE_URL + "users")
    .then(res => res.json())
    .then(json => displayUsers(json))
  })()

<<<<<<< HEAD
  displayUsers = (json) => {
      json.forEach(user => {
      let p = document.createElement("p");
      p.innerText = user["name"];
      users.appendChild(p);
    })
  }

  $('.menu .item')
  .tab()
  ;
=======
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
>>>>>>> 27557b38ad89bcbc1c17f872c169634e782979a4

})
