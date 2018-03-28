class Job {
  constructor(title, description, company, link) {
    this.title = title
    this.description = description
    this.company = company
    this.link = link
  }

  displayJobs() {
    let newJob = document.createElement("div");
    let newJobTitle = document.createElement("p");
    let newJobDescription = document.createElement("p");
    let newJobCompany = document.createElement("p");
    let newJobLink = document.createElement("p");
    let divJob = document.getElementById("career")

    newJobTitle.innerText = "Title: " + this.title;
    newJobDescription.innerText = "Description: " + this.description;
    newJobCompany.innerText = "Company: " + this.company;
    // newJobLink.innerText = "Link to Job: " + this.link;
    newJobLink.innerHTML = `Link to Job: <a href="http://${this.link}"> ${this.link}</a>`;


    newJob.append(newJobTitle, newJobDescription, newJobCompany, newJobLink);
    divJob.appendChild(newJob);
  }







  //endofclass
}
