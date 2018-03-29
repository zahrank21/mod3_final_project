class Job {
  constructor(id, title, description, company, link) {
    this.id = id
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
    let divJob = document.getElementById("jobs-container")

    newJobTitle.innerText = "Title: " + this.title;
    newJobDescription.innerText = "Description: " + this.description;
    newJobCompany.innerText = "Company: " + this.company;
    // newJobLink.innerText = "Link to Job: " + this.link;
    newJobLink.innerHTML = `Link to Job: <a href="http://${this.link}"> ${this.link}</a>`;


    const deleteButton = document.createElement('button')
    const deleteButtonLabel = document.createTextNode('delete')
    deleteButton.appendChild(deleteButtonLabel)
    deleteButton.addEventListener('click', e => {
      e.preventDefault()
      e.target.parentNode.remove()

      let body = {title: this.title, description: this.description, company: this.company, link: this.link}

      fetch(BASE_URL + `jobs/${this.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
      })
    })


    newJob.append(newJobTitle, newJobDescription, newJobCompany, newJobLink, deleteButton);
    divJob.appendChild(newJob);
  }







  //endofclass
}
