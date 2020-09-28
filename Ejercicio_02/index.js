let contador = parseInt(window.prompt("Introduce un número"));

for (let i = 1; i <= contador; i++) {
  /*  console.log(i); */

  let parrafo = `<p>${i}</p>`;
  container.innerHTML += parrafo;
}
