document.write(
  `<h1 style="color:blue">hello to HTML, CSS,and JavaScript World!</h1>`
);
document.write("<Hr>");
var x = 33,
  y = 10;
document.write(`
<div style="width: 500px; background-color: lightskyblue;">
    <P>************Simple Calculator******************</P>
    <hr>
    <p>x=${x} and y=${y}</p>
    <hr>
    <p>sum=${x + y} <br>diff=${x - y}</p>
    <hr>
    <p>prod=${x * y} <br>div=${x / y}</p>
    <hr>
    <p>mod=${x % y}</p>
    <hr>
    <p>x++=${++x}</p>
    <hr>
    <p>y--=${--y}</p>
    <hr>
    <P>************End Simple Calculator******************</P>
</div>
`);
document.write("<Hr>");
document.write(`
<P>************Simple Calculator******************</P>
<table border="1" style="color:blue";>
    <tr>
        <td>x=</td>
        <td>${--x}</td>
        <td>y=</td>
        <td>${++y}</td>
    </tr>
    <tr>
        <td colspan="2" style='background-color: gray;'>sum=</td>
        <td colspan="2">${x + y}</td>
    </tr>
    <tr>
        <td colspan="2" style='background-color: gray;'>diff=</td>
        <td colspan="2">${x - y}</td>
    </tr>
    <tr>
        <td colspan="2" style='background-color: gray;'>prod=</td>
        <td colspan="2">${x * y}</td>
    </tr>
    <tr>
        <td colspan="2" style='background-color: gray;'>div=</td>
        <td colspan="2">${x / y}</td>
    </tr>
    <tr>
        <td colspan="2" style='background-color: gray;'>mod=</td>
        <td colspan="2">${x % y}</td>
    </tr>
    <tr>
        <td colspan="2" style='background-color: gray;'>x++=</td>
        <td colspan="2">${++x}</td>
    </tr>
    <tr>
        <td colspan="2" style='background-color: gray;'>y--=</td>
        <td colspan="2">${--y}</td>
    </tr>
</table>
<P>************End Simple Calculator******************</P>
`);
document.write("<Hr>");
document.write(`
<div style="width: 500px; background-color: lightskyblue">
    <h2 style="text-align: center; color: blue;">F(X)</h2>
    <img src="./question-2.jpg" style="max-width: 100%;">
    <div>
        <label style="color: blue;">X</label>
        <input type="text" style="margin-left: 10px;" id="i">
        <br>
        <label style="color: blue;">f(x)</label>
        <span id="WW" style="margin-left: 10px;">0</span>
        <div style="background-color: burlywood; text-align: center;">
            <button style="background-color: blue; color: yellow; font-size: 24px;" id="btn">Calculate</button>
        </div>
    </div>
</div>
`);
function f(x) {
  if (x < 0) {
    return x * x;
  } else if (x >= 1 && x < 20) {
    return x * x - 4;
  } else if (x >= 20 && x <= 35) {
    return Math.sqrt(x - 4) / (2 * x);
  } else {
    return undefined;
  }
}
btn.onclick = function () {
  WW.innerHTML = f(i.value);
};
document.write("<Hr>");
document.write(`
<div>
<h2>Registration form</h2>
<p id="Err"></p>
<form id="R">
    <label>Enter Your name</label>
    <input type="text" id="rname">
    <br>
    <label>Enter Your email</label>
    <input type="email" id="remail">
    <br>
    <button id="rb">Check Myname</button>
</form>
</div>
`);
rb.onclick = function () {
  if (rname.value) {
    window.alert(`Thanks For Registration ${rname.value}`);
  } else {
    Err.innerHTML = "You Should Enter Your Name";
    Err.style.color = "green";
  }
};
document.write("<Hr>");
document.write(`
<div>
<h2>Ordering form</h2>
<form id="o">
    <label>Enter Your Name</label>
    <input type="text" id="on">
    <span id="n1"></span>
    <br>
    <label>Enter password</label>
    <input type="password" id="op">
    <span id="n2"></span>
    <br>
    <input type="radio" id="k" name="aa">
    <label for="k">Samsung Note 5</label>
    <br>
    <input type="radio" id="l" name="aa">
    <label for="l">Iphone 7</label>
    <br><br><br>
    <label>Enter The Quantity: </label>
    <input type="number">
    <br>
    <button id="aaaaa">Submit Order</button>
</form>
</div>
`);
aaaaa.onclick = function (event) {
  event.preventDefault();

  if (on.value != "XYZ") {
    n1.innerHTML = "Name Error!";
    n1.style.color = "red";
  }
  if (op.value != "1234") {
    n2.innerHTML = "Password Error!";
    n2.style.color = "red";
  }

  if (on.value == "XYZ" && op.value == "1234") {
    window.alert("Order Is Completed");
  }
};
