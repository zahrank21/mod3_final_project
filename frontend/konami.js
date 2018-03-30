document.addEventListener("DOMContentLoaded", event => {

const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
const reverseCode = [65, 66, 39, 37, 39, 37, 40, 40, 38, 38];
// const reverseCode = [65, 65, 65, 65]

function init() {
  let index = 0;

  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.which || e.detail);

    if (code[index] === key) {
      index++;

      if (index === code.length) {
        alert("Don't tell Laura~!")
        let bac = document.getElementById("secretBAC")
        // let bacButton = document.createElement("div")
        bac.innerHTML = `        Secret Secret
                <i class="dropdown icon"></i>
                <div class="menu">
                  <a class="item" id="bac_block">BAC Calculator</a>
                </div>`

        index = 0;

        function solveBAC(bacAmount, bacPercentage, bacWeight, bacHours) {
        var ounces = bacAmount
        var percent = bacPercentage
        var weight =  bacWeight
        var hours = bacHours

        var result = (ounces * percent * 0.075 / weight) - (hours * 0.015);
        if (result < 0) {
        message = "There is a negligible amount of alcohol in your system.  You are not legally intoxicated.";
        result = "-- neglible amount --";
        }
        else {
        if (result == "NaN")
        mesage = "Please try again.";
        if (result >= 0.7)
        message = 'Died doing what they loved: drinking PBR'
        if (result >= 0.6 && result < .7)
        message = 'Your liver filed for divorce'
        if (result >= 0.4 && result < .5)
        message = 'How are you operating a computer right now'
        if (result >= 0.3 && result < .4)
        message = 'mistakes will be made'
        if (result >= 0.2 && result < .3)
        message = 'oh no bby what is you doin'
        if (result > 0.08 && result < 0.19)
        message = "In MOST and possibly ALL states you would be considered intoxicated and arrested for DUI.";
        if (result < 0.08)
        message = "You are not legally intoxicated";
        }

        alert(message + "     BAC: " + result + ' %')

        }

        const contentBody = document.getElementById("content_body");
        let bacButton = document.getElementById("bac_block")
        bacButton.addEventListener("click", event => {
          console.log("hellooo")
          contentBody.innerHTML = '';

          let bacContainer = document.createElement('div')
          bacContainer.innerHTML = `
          <div id = "bac-container">
            <h3>BAC Calculator</h3>
            <form id="check-bac">
              <h5>Fluid Ounces Consumed</h5>
              <input type="text" id="bac-amount" placeholder="Fluid Ounces">
              <h5>Alcohol Percentage</h5>
              <h5>Beer ~ 4-4.5% Wine ~ 15-20% 1 Shot ~ 30-50%</h5>
              <input type="text" id="bac-percentage" placeholder="Percent Alcohol">
              <h5>Your Weight</h5>
              <input type="text" id="bac-weight" placeholder="Your Weight">
              <h5>Hours Consuming Drink</h5>
              <input type="text" id="bac-hours" placeholder="Hours">
              <input type="submit" value="Submit">
            </form>
          </div>
          `


          contentBody.appendChild(bacContainer)

          let bacForm = document.getElementById('check-bac')
          bacForm.addEventListener('submit', event => {
            event.preventDefault();
            let bacAmount = document.getElementById('bac-amount').value;
            let bacPercentage = document.getElementById('bac-percentage').value;
            let bacWeight = document.getElementById('bac-weight').value;
            let bacHours = document.getElementById('bac-hours').value;
            solveBAC(bacAmount, bacPercentage, bacWeight, bacHours)
          })

        })

      }
    } else {
      index = 0;
    }


  });


}

function reverseInit() {
  let index = 0;

  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.which || e.detail);

    if (reverseCode[index] === key) {
      index++;

      if (index === reverseCode.length) {
        alert("Mischief Managed~!")
        let bac = document.getElementById("secretBAC")
        bac.innerHTML = "";
        const contentBody = document.getElementById("content_body");
        contentBody.innerHTML = "";

        index = 0;
      }
    } else {
      index = 0;
    }


  });
}
reverseInit();
init();

})
