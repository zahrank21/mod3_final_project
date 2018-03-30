document.addEventListener("DOMContentLoaded", event => {

  function solveBAC(form) {
    var ounces = eval(form.ounces.value);
    var percent = eval(form.percent.value);
    var weight = eval(form.weight.value);
    var hours = eval(form.hours.value);

    var result = (ounces * percent * 0.075 / weight) - (hours * 0.015);
    if (result < 0) {
      message = "There is a negligible amount of alcohol in your system.  You are not legally intoxicated.";
      result = "-- neglible amount --";
    }
    else {
      if (result == "NaN")
      mesage = "Please try again.";
      if (result > 0.08)
      message = "In MOST and possibly ALL states you would be considered intoxicated and arrested for DUI.";
      if (result < 0.08)
      message = "You are not legally intoxicated";
    }
    form.message.value = message;
    form.bacamount.value = result + " %";
  }

  const contentBody = document.getElementById("content_body");
  let bacButton = document.getElementById("bac_block")
  bacButton.addEventListener("click", event => {
    console.log("hellooo")
    contentBody.innerHTML = "";
    let bacDiv = document.createElement("div")
    bacDiv.innerHTML = `<center>

    <table>
    <tr><td>
    <ul>
    <li>FLUID OUNCES CONSUMED<br>
    (Beer ~ 12 oz. Wine Glass  ~ 4 oz.  1 Shot ~ 1.5 oz)</li>
    <li>YOUR WEIGHT (Lbs)</li>
    <li>ALCOHOL PERCENTAGE IN BEVERAGE<br>
    (Beer ~ 4-4.5%  Wine ~ 15-20%  1 Shot ~ 30-50%)</li>
    <li>HOURS CONSUMING DRINK</li>
    </ul>
    </td>
    </tr>
    </table>

    <form method=post name=bacform>
    <table border=4>
    <tr>
    <td align=center>
    Fluid Ounces Consumed
    </td>
    <td align=center>
    <input type=text name=ounces size=6>
    </td>
    <td align=center>
    Percent Alcohol
    </td>
    <td align=center>
    <input type=text name=percent size=6>
    </td>
    </tr>
    <tr>
    <td align=center>
    Your Weight (Lbs)
    </td>
    <td align=center>
    <input type=text name=weight size=6>
    </td>
    <td align=center>
    Hours Consuming Drink
    </td>
    <td align=center>
    <input type=text name=hours size=6>
    </td>
    </tr>
    <tr>
    <td colspan=4 align=center>
    <input type=button name=bac value="Calculate Your BAC %" onClick="javascript:solveBAC(this.form)">
    </td>
    </tr>
    <tr>
    <td align=center>
    BAC Percentage
    </td>
    <td colspan=3 align=center>
    <input type=text name=bacamount size=21>
    </td>
    </tr>
    <tr>
    <td align=center>
    BAC Analysis
    </td>
    <td colspan=3 align=center>
    <textarea name=message rows=3 cols=35 wrap=virtual></textarea>
    </td>
    </tr>
    </table>
    </form>
    </center>`

    contentBody.appendChild(bacDiv)
  })

})




//
//
//
// <center>
//
// <table>
// <tr><td>
// <ul>
// <li>FLUID OUNCES CONSUMED<br>
// (Beer ~ 12 oz. Wine Glass  ~ 4 oz.  1 Shot ~ 1.5 oz)</li>
// <li>YOUR WEIGHT (Lbs)</li>
// <li>ALCOHOL PERCENTAGE IN BEVERAGE<br>
// (Beer ~ 4-4.5%  Wine ~ 15-20%  1 Shot ~ 30-50%)</li>
// <li>HOURS CONSUMING DRINK</li>
// </ul>
// </td>
// </tr>
// </table>
//
// <form method=post name=bacform>
// <table border=4>
// <tr>
// <td align=center>
// Fluid Ounces Consumed
// </td>
// <td align=center>
// <input type=text name=ounces size=6>
// </td>
// <td align=center>
// Percent Alcohol
// </td>
// <td align=center>
// <input type=text name=percent size=6>
// </td>
// </tr>
// <tr>
// <td align=center>
// Your Weight (Lbs)
// </td>
// <td align=center>
// <input type=text name=weight size=6>
// </td>
// <td align=center>
// Hours Consuming Drink
// </td>
// <td align=center>
// <input type=text name=hours size=6>
// </td>
// </tr>
// <tr>
// <td colspan=4 align=center>
// <input type=button name=bac value="Calculate Your BAC %" onClick="javascript:solveBAC(this.form)">
// </td>
// </tr>
// <tr>
// <td align=center>
// BAC Percentage
// </td>
// <td colspan=3 align=center>
// <input type=text name=bacamount size=21>
// </td>
// </tr>
// <tr>
// <td align=center>
// BAC Analysis
// </td>
// <td colspan=3 align=center>
// <textarea name=message rows=3 cols=35 wrap=virtual></textarea>
// </td>
// </tr>
// </table>
// </form>
// </center>
