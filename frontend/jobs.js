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

    })


    newJob.append(newJobTitle, newJobDescription, newJobCompany, newJobLink, deleteButton);
    divJob.appendChild(newJob);
  }

  //endofclass
}

document.addEventListener("DOMContentLoaded", event => {
  const contentBody = document.getElementById("content_body")
  const jobButton = document.getElementById("job_block");
  jobButton.addEventListener("click", event => {
    // const mealpalSection = document.getElementById("mealpal-container");
    // mealpalSection.style.display = "block"
    contentBody.innerHTML = "";
    let jobContainer = document.createElement("div");
    jobContainer.innerHTML = `<div id="jobs-container">
      <h3>Job Openings</h3>
      <form id="add-job" action="/jobs" method="POST">
        <label>Position</label>
        <input type="text" name="name" id="job-title" placeholder="Title">
        <label>Description</label>
        <input type="text" name="name" id="job-description" placeholder="Description">
        <label>Company</label>
        <input type="text" name="name" id="job-company" placeholder="Company Name">
        <label>Link</label>
        <input type="text" name="name" id="job-link" placeholder="Job Link">
        <input type="submit" value="Submit">
      </form>
    </div>`
    contentBody.appendChild(jobContainer);
  })

})
