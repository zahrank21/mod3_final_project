class Hackathon{
  constructor(id, name, language, datetime, location) {
    this.id = id
    this.name = name
    this.language = language
    this.datetime = datetime
    this.location = location
  }


  displayHackathon(){
    let newHackathon = document.createElement('div');
    let newHackathonName = document.createElement('p')
    let newHackathonLanguage = document.createElement('p')
    let newHackathonDatetime = document.createElement('p')
    let newHackathonLocation = document.createElement('p')
    let divHackathon = document.getElementById('hackathon-container')

    newHackathonName.innerText = 'Name: ' + this.name;
    newHackathonLanguage.innerText = 'Language: ' + this.language;
    newHackathonDatetime.innerText = 'Date and Time: ' + this.datetime;
    newHackathonLocation.innerText = 'Location: ' + this.location;

    const deleteButton = document.createElement('button')
    const deleteButtonLabel = document.createTextNode('delete')
    deleteButton.appendChild(deleteButtonLabel)
    deleteButton.addEventListener('click', e => {
      e.preventDefault()
      e.target.parentNode.remove()


      let body = {name: this.name, language: this.language, datetime: this.datetime, location: this.location}

      fetch(BASE_URL + `hackathons/${this.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
      })

    })

    newHackathon.append(newHackathonName, newHackathonLanguage, newHackathonLocation, newHackathonDatetime, deleteButton)
    divHackathon.appendChild(newHackathon);
  }












}
