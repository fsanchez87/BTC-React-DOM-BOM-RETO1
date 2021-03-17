let texto = document.getElementById("input1"); // Entrada
let objetoDiv = document.querySelector(".contendorSalida"); // Salida

function addHtml() {    
    let p = document.createElement("p"); // Elemento
    p.innerHTML = texto.value;
    texto.value = " ";
    objetoDiv.appendChild(p);
}

function delHtml() {
    if (objetoDiv.firstChild) {
        objetoDiv.removeChild(objetoDiv.firstChild);
    } 
}

function dellAll() {
   while (objetoDiv.firstChild) {
       objetoDiv.removeChild(objetoDiv.firstChild);
   } 
}
