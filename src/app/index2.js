import {fetch as fetchPolyfill} from 'whatwg-fetch'
const items = document.getElementById('items');
const fragment = document.createDocumentFragment()
const dataBuscar = JSON.parse(localStorage.getItem('dataBuscar'))
const categoria = JSON.parse(localStorage.getItem('categoria'))
const contTotal = document.getElementById('contenedorTotal')
const sidebarCarrito = document.getElementById('sidebarCarrito')
const btnSidebarCerrar = document.getElementById('btn-cierre')
const btnSidebarRemove = document.getElementById('btn-remove')
const btnSidebarCheckout = document.getElementById('btn-checkout')
let cantCompra = document.getElementById('cantCompra')
const btnAgregar = document.getElementById('btn-agregar')
const btnComprar = document.getElementById('btn-comprar')
const body = document.getElementById('cuerpo')
let nombreProd = document.getElementById('nomProd')
let precioProd = document.getElementById('precioProd')
let cantidad = 0
let carrito = []
const sidebarNombPrenda = document.getElementById('sidebarNombPrenda')
const sidebarPrecio = document.getElementById('sidebarPrecio')
const dataCarrito = JSON.parse(localStorage.getItem('dataCarrito'))
const sidebarPrecioSubTotal = document.getElementById('sidebarPrecioSubTotal')




document.addEventListener('DOMContentLoaded', async (e) => {
    e.preventDefault()
    console.log(dataBuscar)

    let resp = await fetch(`http://localhost:4001/${categoria}`)
    let data = await resp.json();
    console.log(data)
    let buscar = data.find(buscar => buscar.id === dataBuscar)

    console.log(buscar)

    const {
        inventario,
        nombrePrenda,
        precio,
        thumbnailUrl
    } = buscar;

    let pintar = '';

    document.querySelectorAll('.img-peq')[0].setAttribute('src', thumbnailUrl.imagen1)
    document.querySelectorAll('.img-peq')[1].setAttribute('src', thumbnailUrl.imagen2)
    document.querySelectorAll('.img-peq')[2].setAttribute('src', thumbnailUrl.imagen3)
    document.querySelectorAll('.img-grd')[0].setAttribute('src', thumbnailUrl.imagen1)
    document.querySelectorAll('.img-grd')[1].setAttribute('src', thumbnailUrl.imagen2)
    document.querySelectorAll('.img-grd')[2].setAttribute('src', thumbnailUrl.imagen3)
    document.getElementById('nomProd').textContent = nombrePrenda
    document.getElementById('precioProd').textContent = precio.toFixed(2)

})

btnAgregar.addEventListener('click', e => {
    console.log('clickAgrega')
    agregarSidebar()
})
btnComprar.addEventListener('click', e => {
    console.log('clickCompra')
})


const agregarSidebar = () => {
    sidebarCarrito.style.display = 'block'
    sidebarCarrito.style.opacity = '1'
    contTotal.style.overflow = 'hidden'
    contTotal.style.background = '#585858'
    contTotal.style.opacity = '.5'

    // logica de carrito
    cantidad = cantidad + 1

    carrito=[{"nombre":nomProd.textContent,"precio":Number(precioProd.textContent),"cantidad":cantidad}]
    
    console.log((carrito))
    localStorage.setItem('dataCarrito', JSON.stringify(carrito))

    

    sidebarNombPrenda.textContent = dataCarrito[0].nombre
    sidebarPrecio.textContent = (dataCarrito[0].precio).toFixed(2)
    cantCompra.textContent = dataCarrito[0].cantidad
    console.log(dataCarrito[0].cantidad)
    sidebarPrecioSubTotal.textContent = (dataCarrito[0].precio * dataCarrito[0].cantidad).toFixed(2)
}

btnSidebarCerrar.addEventListener('click', e => {
    e.preventDefault()
    sidebarCarrito.style.display = 'none'
    contTotal.style.overflow = ''
    contTotal.style.background = ''
    contTotal.style.opacity = ''
})


btnSidebarRemove.addEventListener('click', e => {
    e.preventDefault()
    console.log(Number(cantCompra.textContent))
    console.log(Number(cantCompra.textContent) - 1)

    cantCompra.textContent = Number(cantCompra.textContent) - 1


})
btnSidebarCheckout.addEventListener('click', e => {
    e.preventDefault()

})