const arrayCelle = []; //Tabellone tombola
const numeriCasuli = []; //numeri estratti
//creazione bottone avvio e posizionamento all'interno dell'HTML
const pulsanteAvvio = document.createElement("button");
pulsanteAvvio.innerText = "Premi per cominciare a giocare";
const divButton = document.getElementById("divButton");
divButton.appendChild(pulsanteAvvio);

//creazione 76 celle della tombola tramite <div> aggiungengo una classe ad ogni div
const createCelleTombola = (celle) => {
  const tombola = document.getElementById("tombola");
  for (let index = 1; index < 77; index++) {
    const cella = document.createElement("div");
    cella.innerText = index;
    cella.classList.add("cella");
    tombola.appendChild(cella);
    arrayCelle.push(cella[index]);
  }
  console.log(arrayCelle);
  //Creazione bottone estrazione
  const estrazione = document.createElement("button");
  estrazione.innerText = "Avvia Estrazione";
  const sezione = document.getElementById("sezione");
  sezione.appendChild(estrazione);
  //creazione evento dell'avvio estrazione
  estrazione.addEventListener("click", function (evento) {
    const randomNumber = () => {
      const random = Math.floor(Math.random() * 76);
      console.log(randomNumber);

      if (random !== 0 && numeriCasuli.includes(random)) return randomNumber();
      else numeriCasuli.push(random);
    };
  });
};
console.log(numeriCasuli);
//creazione evento
pulsanteAvvio.addEventListener("click", function (evento) {
  createCelleTombola();
  console.log(numeriCasuli);
});
