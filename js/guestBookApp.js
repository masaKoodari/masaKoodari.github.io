//ARRAY OF UsER INPUT
var arr = [];

//DISPLAY MESSAGE AND ADD TO ARRAY
function listaLisäys() {
  var vierasValue = document.getElementById("vieras").value;
  if (vierasValue == "") {
    alert("Se oli tyhjä!");
  }
  else {
    arr.push(vierasValue);
    document.getElementById("vieraslista").innerHTML += "<li>" + vierasValue + "</li>";
    document.getElementById("vieras").value = "";
  }
}

//SHOW ARRAY IN VIERASLISTA
function jumalauta() {
  document.getElementById("vieraslista").innerHTML += "<li>" + arr + "</li>";
}

//SEND ARRAY TO JSON
var myJSON = JSON.stringify(arr);

/* navigointi palkin scripti */

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}