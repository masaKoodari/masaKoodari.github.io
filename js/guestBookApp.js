const listaLisäys = function(){
    let vierasValue = document.getElementById("vieras").value;
    document.getElementById("vieraslista").innerHTML += "<li>" +vierasValue+ "</li>";
    document.getElementById("vieras").value = "";
}


/* navigointi palkin scripti */

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }