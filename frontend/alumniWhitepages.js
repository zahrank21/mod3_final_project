class Alumni {
  constructor(username, name, cohort) {
    this.username = username
    this.name = name
    this.cohort = cohort
  }

  displayAlumni() {
    let newAlumni = document.createElement("div")
    let newAlumniName = document.createElement("p")
    let newAlumniUsername = document.createElement("p")
    let newAlumniCohort = document.createElement("p")
    let divAlumni = document.getElementById("alumnis")
    newAlumniName.innerText = "Alumni Name: " + this.name;
    newAlumniUsername.innerText = "Alumni's Username: " + this.username;
    newAlumniCohort.innerText = "Alumni's Cohort: " + this.cohort
    newAlumni.append(newAlumniName, newAlumniUsername, newAlumniCohort)
  

    divAlumni.appendChild(newAlumni)

  }
}
