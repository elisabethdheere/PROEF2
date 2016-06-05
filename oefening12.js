function main() {
          document.getElementById("frmContact").onsubmit = function() {
                      if (document.getElementById("email").value == "") {
                               document.getElementById("foutmelding").innerHTML = "Vul aub een email adres in";
                               return false;
                      } else {
                               document.getElementByID("foutmelding").innerHTML = "";
                               return true;
                      }
          };
}

window.onload = function() {
       main();
}




window.onload = function() {
       main();
}
