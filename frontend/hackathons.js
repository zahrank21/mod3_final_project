class Hackathon{
  constructor(name, language, datetime, location) {
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

    })

    newHackathon.append(newHackathonName, newHackathonLanguage, newHackathonLocation, newHackathonDatetime, deleteButton)
    divHackathon.appendChild(newHackathon);
  }












}
