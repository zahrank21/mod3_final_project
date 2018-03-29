class networkingEvent{
  constructor(name, location, description, datetime) {
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

    newNetworkingEvent.append(newNetworkingEventName, newNetworkingEventLocation, newNetworkingEventDescription, newNetworkingEventDatetime)
    divNetworkingEvent.appendChild(newNetworkingEvent)
  }












}
