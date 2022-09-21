class Entrada {
    constructor(nombre, localidad, precio){
        this.nombreEvento = nombre;
        this.localidad = localidad;
        this.precio = (precio * 1.15).toFixed(0); //valor ticket service incluido
    }
}


const platea1 = new Entrada("Marco Carola", "Platea1", 4000);
const platea2 = new Entrada("Marco Carola", "Platea2", 7000);
const vip = new Entrada("Marco Carola", "Vip", 10000);


const itemsEntradas = [platea1, platea2, vip]


console.log(itemsEntradas);

const tituloPrincipal = document.getElementById("tituloPrincipal");

tituloPrincipal.innerHTML = `<h1>Tu Boleta.com</h1>`

tituloPrincipal.className = `titulo`

const subTitulo = document.getElementById("subTitulo");

subTitulo.innerHTML = `<h2>Compra tus entradas Marco Carola</h2>`

subTitulo.className = `titulo`

const conntenedorEntradas = document.getElementById("contenedorEntradas");

itemsEntradas.forEach(item =>{
    let div = document.createElement(`div`);
    div.innerHTML =`<p class= "localidad">${item.localidad} ${item.precio}</p> 
                    <button class= "boton">Agregar al carrito</button>`;

    conntenedorEntradas.appendChild(div);
})

