class Misc{
  constructor(id, thing, code){
    this.thing = thing
    this.code = code
  }

  displayMisc(){
    let newItem = document.createElement('div')
    let newMiscThing = document.createElement('p')
    let newMiscCode = document.createElement('p')
    let divMisc = document.getElementById('misc-container')

    newMiscThing.innerText = this.thing
    newMiscCode.innerText = this.code

    const deleteButton = document.createElement('button')
    const deleteButtonLabel = document.createTextNode('delete')
    deleteButton.appendChild(deleteButtonLabel)
    deleteButton.addEventListener('click', e => {
      e.preventDefault()
      e.target.parentNode.remove()

      let body = {thing: this.thing, code: this.code}

      fetch(BASE_URL + `miscs/${this.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
      })
    })

    newItem.append(newMiscThing, newMiscCode, deleteButton)
    divMisc.appendChild(newItem)

  }
}
