
document.addEventListener("DOMContentLoaded", event => {
  // let careerSection = document.createElement('div')
  // careerSection.setAttribute('id', 'career-section')

  (function getJobs(){
   return fetch(BASE_URL + 'jobs')
   .then (resp => resp.json())
   .then (console.log)
   // .then(json => renderJobs(json))
  })()

  let jobPosts = document.getElementById('jobs-container')

  renderJobs = (json) => {
    json.forEach(job => {
      let jobItem = document.createElement('div')

      let jobTitle = document.createElement('p')
      jobTitle.innertext = `Title: ${job['title']}`

      let jobDescription = document.createElement('p')
      jobDescription.innertext = `Description: ${job['description']}`

      let jobCompany = document.createElement('p')
      jobCompany.innertext = `Company: ${job['company']}`

      let jobLink = document.createElement('p')
      jobLink.innertext = `Link ${job['link']}`

      const deleteButton = document.createElement('button')
      const deleteButtonLabel = document.createTextNode('delete')
      deleteButton.appendChild(deleteButtonLabel)
      deleteButton.addEventListener('click', e => {
        e.preventDefault()
        e.target.parentNode.remove()
      })

      jobItem.append(jobTitle, jobDescription, jobCompany, jobLink, deleteButton)
      jobPosts.appendChild(jobItem)

    })
  }

  let addJobForm = document.getElementById('add-job')

  addJobForm.addEventListener('submit', e => {
    e.preventDefault()

    let jobItem = document.createElement('div')

    let jobTitle = document.createElement('p')
    jobTitle.innertext = `Title: ${document.getElementById('job-title').value}`

    let jobDescription = document.createElement('p')
    jobDescription.innertext = `Description: ${document.getElementById('job-description').value}`

    let jobCompany = document.createElement('p')
    jobCompany.innertext = `Company: ${document.getElementById('job-company').value}`

    let jobLink = document.createElement('p')
    jobLink.innertext = `Link: ${document.getElementById('job-link').value}`

    const deleteButton = document.createElement('button')
    const deleteButtonLabel = document.createTextNode('delete')
    deleteButton.appendChild(deleteButtonLabel)
    deleteButton.addEventListener('click', e => {
      e.preventDefault()
      e.target.parentNode.remove()
    })

    jobItem.append(jobTitle, jobDescription, jobCompany, jobLink, deleteButton)
    jobPosts.appendChild(jobItem)

    let body = {'title': `${document.getElementById("job-title").value}`, 'description':`${document.getElementById("job-description").value}`, 'company': `${document.getElementById("job-company").value}`, 'link': `${document.getElementById('job-link').value}`}
    fetch(BASE_URL + 'jobs',{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body)
    })

    e.target.reset()

  })
})
