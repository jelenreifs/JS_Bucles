let edad = parseInt(window.prompt("Introduce tu edad"));

let texto = " ";

/* for (variable = valor_inicial; condición_a_evaluar; incremento) {
  acción/es a realizar;
  acción/es a realizar;
};
 */
for (i = 0; i < edad; i++) {
  texto += `Feliz cumpleaños <br>`;
}

document.getElementById("container").innerHTML = texto;
