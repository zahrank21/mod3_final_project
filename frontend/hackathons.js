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

    newHackathon.append(newHackathonName, newHackathonLanguage, newHackathonLocation, newHackathonDatetime)
    divHackathon.appendChild(newHackathon);
  }












}
