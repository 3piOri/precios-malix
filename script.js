const preciosUl = document.getElementById("preciosUl");
async function cargarPrecios() {
    const response = await fetch("precios.json");
    const precios = await response.json();
    precios.forEach((precio) => {
        preciosUl.innerHTML += 
        `<li>${precio.nombre} <span>$ ${precio.precio} </span> </li>`
    })

}

cargarPrecios();
