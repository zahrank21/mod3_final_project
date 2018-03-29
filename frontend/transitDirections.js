// console.log("transit direction js")
// debugger

document.addEventListener("DOMContentLoaded", event => {
  console.log("inside transitDirections");
  let direct = document.getElementById("directions_form")
  console.log("direct is", direct);
  console.log("--------");
  direct.addEventListener("submit", event => {
    event.preventDefault();
    let destination = document.getElementById("destinations");
    let destConverted = destination.value.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ").replace(/[ ]/g,"+")
    let divGmap = document.getElementById("gmap")
    let mapDiv = document.getElementById('mapDiv')
    mapDiv.innerHTML = `<iframe width="450" height="450" frameborder="0" style="border:0"
      src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyA3w3-NnXWWqhgJS5ItzMF4xU7jF8wiD6o&origin=11+Broadway,+New+York,+NY+10004&destination=${destConverted}&mode=transit">
    </iframe>`
    divGmap.append(mapDiv);
  })
})
