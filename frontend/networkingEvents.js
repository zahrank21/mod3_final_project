class networkingEvent{
  constructor(id, name, location, description, datetime) {
    this.id = id
    this.name = name
    this.location = location
    this.description = description
    this.datetime = datetime
  }


  displayNetworkingEvent(){
    let newNetworkingEvent = document.createElement('div');
    let newNetworkingEventName = document.createElement('p')
    let newNetworkingEventLocation = document.createElement('p')
    let newNetworkingEventDescription = document.createElement('p')
    let newNetworkingEventDatetime = document.createElement('p')
    let divNetworkingEvent = document.getElementById("networking-event-container")

    newNetworkingEventName.innerText = 'Name: ' + this.name;
    newNetworkingEventLocation.innerText = 'Location: ' + this.location;
    newNetworkingEventDescription.innerText = 'Description: ' + this.description;
    newNetworkingEventDatetime.innerText = 'Date and Time: ' + this.datetime;

    const deleteButton = document.createElement('button')
    const deleteButtonLabel = document.createTextNode('delete')
    deleteButton.appendChild(deleteButtonLabel)
    deleteButton.addEventListener('click', e => {
      e.preventDefault()
      e.target.parentNode.remove()

      let body = {name: this.name, location: this.location, description: this.description, datetime: this.datetime}

      fetch(BASE_URL + `events/${this.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
      })
    })

    newNetworkingEvent.append(newNetworkingEventName, newNetworkingEventLocation, newNetworkingEventDescription, newNetworkingEventDatetime, deleteButton)
    divNetworkingEvent.appendChild(newNetworkingEvent)
  }

}

// document.addEventListener("DOMContentLoaded", event => {
//
//   const contentBody = document.getElementById("content_body")
//   const networkButton = document.getElementById("networking_block");
//   networkButton.addEventListener("click", event => {
//     contentBody.innerHTML = "";
//     // const foodSection = document.getElementById("communityFridge");
//     // foodSection.style.display = "block"
//     let networkEvent = document.createElement("div");
//     networkEvent.innerHTML = `<div id="networking-event-container">
//       <h3>Networking Events</h3>
//       <form id="add-networking-event" action="/events" method="post">
//         <label>Add New Networking Event:</label>
//         <input type="text" name="name" id="networking-event-name" placeholder="Name">
//         <label>Location</label>
//         <input type="text" name="name" id="networking-event-location" placeholder="Location">
//         <label>Description</label>
//         <input type="text" name="name" id="networking-event-description" placeholder="Description">
//         <label>Date and Time: </label>
//         <input type="datetime-local" name="datetime" id="networking-event-datetime" placeholder="Date and Time">
//         <input type="submit" value="Submit">
//       </form>
//     </div>`
//     contentBody.appendChild(networkEvent);
//   })
//
// })
