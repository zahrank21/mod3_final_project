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
