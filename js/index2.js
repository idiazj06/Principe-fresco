const items = document.getElementById('items');
const fragment = document.createDocumentFragment()
const dataBuscar =  JSON.parse(localStorage.getItem('dataBuscar'))
const categoria =  JSON.parse(localStorage.getItem('categoria'))




document.addEventListener('DOMContentLoaded', async (e)=>{
    e.preventDefault()
    console.log(dataBuscar)
    
    let resp = await fetch(`http://localhost:3001/${categoria}`)
    let data = await resp.json();
    console.log(data)
    let buscar = data.find(buscar=>buscar.id === dataBuscar)

    console.log(buscar)

    const {inventario, nombrePrenda, precio, thumbnailUrl} = buscar;
    
    let pintar = '';

    pintar = `
    <div id="items">
        <div id="imagenesGrandes">
            <img src="${thumbnailUrl.imagen1}" alt="imagen1">
            <img src="${thumbnailUrl.imagen2}" alt="imagen2">
            <img src="${thumbnailUrl.imagen3}" alt="imagen3">
        </div>
        <div id="infoProducto">
            <span>${nombrePrenda}<br></span>
            <span>${precio.toFixed(2)}<br></span>
            <span>${inventario}<br></span>
        </div>
    </div>`
document.querySelector('#principal').innerHTML = pintar;
})

