document.addEventListener("DOMContentLoaded", event => {

  const contentBody = document.getElementById("content_body");
  const arrivalButton = document.getElementById("arrivalTimes_block")
  arrivalButton.addEventListener("click", event => {
    contentBody.innerHTML = "";
    let arrivalDiv = document.createElement("div");
    arrivalDiv.innerHTML = `<div>
        <h1>Click on a Subway line to see the Arrival Times!</h1>
        <div id="subwayLines">

        </div>

      </div>`
    contentBody.appendChild(arrivalDiv);

    let subwayLines = document.getElementById("subwayLines");
    let line1 = document.createElement("div")
    line1.setAttribute("id", "oneLine")
    line1.innerHTML = `<img src="./images/1.png">`
    subwayLines.appendChild(line1)
    let line2 = document.createElement("div")
    line2.setAttribute("id", "twoLine")
    line2.innerHTML = `<img src="./images/2.png">`
    subwayLines.appendChild(line2)
    let line4 = document.createElement("div")
    line4.setAttribute("id", "fourLine")
    line4.innerHTML = `<img src="./images/4.png">`
    subwayLines.appendChild(line4)
    let line5 = document.createElement("div")
    line5.setAttribute("id", "fiveLine")
    line5.innerHTML = `<img src="./images/5.png">`
    subwayLines.appendChild(line5)
    let lineJ = document.createElement("div")
    lineJ.setAttribute("id", "jLine")
    lineJ.innerHTML = `<img src="./images/J.png">`
    subwayLines.appendChild(lineJ)
    let lineN = document.createElement("div")
    lineN.setAttribute("id", "nLine")
    lineN.innerHTML = `<img src="./images/n.png">`
    subwayLines.appendChild(lineN)
    let lineR = document.createElement("div")
    lineR.setAttribute("id", "rLine")
    lineR.innerHTML = `<img src="./images/r.png">`
    subwayLines.appendChild(lineR)
    let lineW = document.createElement("div")
    lineW.setAttribute("id", "wLine")
    lineW.innerHTML = `<img src="./images/w.png">`
    subwayLines.appendChild(lineW)
    let lineZ = document.createElement("div")
    lineZ.setAttribute("id", "zLine")
    lineZ.innerHTML = `<img src="./images/z.png">`
    subwayLines.appendChild(lineZ)
    let lineLIRR = document.createElement("div")
    lineLIRR.setAttribute("id", "lirrLine")
    lineLIRR.innerHTML = `<img src="./images/lirr.jpeg" height="60" width="60">`
    subwayLines.appendChild(lineLIRR)

    const line1Button = document.getElementById("oneLine")
    const line2Button = document.getElementById("twoLine")
    const line4Button = document.getElementById("fourLine")
    const line5Button = document.getElementById("fiveLine")
    const lineJButton = document.getElementById("jLine")
    const lineNButton = document.getElementById("nLine")
    const lineRButton = document.getElementById("rLine")
    const lineWButton = document.getElementById("wLine")
    const lineZButton = document.getElementById("zLine")
    const lineLIRRButton = document.getElementById("lirrLine")
    line1Button.addEventListener("click", event => {
      let show = document.createElement("div")
      show.innerHTML = `<div class="ui small modal">
      <iframe width="483.83" height="452" frameborder="0" style="border:0"
      src="http://subwaytime.mta.info/index.html#/app/subwaytime/1/139/">
    </iframe>
            </div>`
      subwayLines.append(show);
      $('.ui.modal').modal('show');
    })
    line2Button.addEventListener("click", event => {
      let show = document.createElement("div")
      show.innerHTML = `<div class="ui small modal">
              <iframe width="483.83" height="452" frameborder="0" style="border:0"
              src="http://subwaytime.mta.info/index.html#/app/subwaytime/2/230/">
              </iframe>
            </div>`
      subwayLines.append(show);
      $('.ui.modal').modal('show');
    })
    line4Button.addEventListener("click", event => {
      let show = document.createElement("div")
      show.innerHTML = `<div class="ui small modal">
              <iframe width="483.83" height="452" frameborder="0" style="border:0"
              src="http://subwaytime.mta.info/index.html#/app/subwaytime/4/420/">
              </iframe>
            </div>`
      subwayLines.append(show);
      $('.ui.modal').modal('show');
    })
    line5Button.addEventListener("click", event => {
      let show = document.createElement("div")
      show.innerHTML = `<div class="ui small modal">
              <iframe width="483.83" height="452" frameborder="0" style="border:0"
              src="http://subwaytime.mta.info/index.html#/app/subwaytime/5/420/">
              </iframe>
            </div>`
      subwayLines.append(show);
      $('.ui.modal').modal('show');
    })
    lineNButton.addEventListener("click", event => {
      let show = document.createElement("div")
      show.innerHTML = `<div class="ui small modal">
              <iframe width="483.83" height="452" frameborder="0" style="border:0"
              src="http://subwaytime.mta.info/index.html#/app/subwaytime/N/R26/">
              </iframe>
            </div>`
      subwayLines.append(show);
      $('.ui.modal').modal('show');
    })
    lineRButton.addEventListener("click", event => {
      let show = document.createElement("div")
      show.innerHTML = `<div class="ui small modal">
              <iframe width="483.83" height="452" frameborder="0" style="border:0"
              src="http://subwaytime.mta.info/index.html#/app/subwaytime/R/R26/">
              </iframe>
            </div>`
      subwayLines.append(show);
      $('.ui.modal').modal('show');
    })
    lineWButton.addEventListener("click", event => {
      let show = document.createElement("div")
      show.innerHTML = `<div class="ui small modal">
              <iframe width="483.83" height="452" frameborder="0" style="border:0"
              src="http://subwaytime.mta.info/index.html#/app/subwaytime/W/R26/">
              </iframe>
            </div>`
      subwayLines.append(show);
      $('.ui.modal').modal('show');
    })
    lineZButton.addEventListener("click", event => {
      let show = document.createElement("div")
      show.innerHTML = `<div class="ui small modal">
              <iframe width="483.83" height="452" frameborder="0" style="border:0"
              src="http://subwaytime.mta.info/index.html#/app/subwaytime/Z/M23/">
              </iframe>
            </div>`
      subwayLines.append(show);
      $('.ui.modal').modal('show');
    })
    lineJButton.addEventListener("click", event => {
      let show = document.createElement("div")
      show.innerHTML = `<div class="ui small modal">
              <iframe width="483.83" height="452" frameborder="0" style="border:0"
              src="http://subwaytime.mta.info/index.html#/app/subwaytime/J/M23/">
              </iframe>
            </div>`
      subwayLines.append(show);
      $('.ui.modal').modal('show');
    })
    lineLIRRButton.addEventListener("click", event => {
      let show = document.createElement("div")
      show.innerHTML = `<div class="ui small modal" id="lirrModal">
              <iframe width="230" height="430" frameborder="0" style="border:0"
              src="http://service.mta.info/ServiceStatus/status.html?widget=yes">
              </iframe>
            </div>`
      subwayLines.append(show);
      $('.ui.modal').modal('show');
    })


  })//endofeventClick
})//endofeventDOM
