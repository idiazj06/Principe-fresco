const items = document.getElementById('items');
const fragment = document.createDocumentFragment()
const templateCard = document.getElementById('template-card').content;



document.addEventListener('DOMContentLoaded', e => {
    fetchData()
})


const fetchData = async () => {
    try {
        const res = await fetch('http://localhost:4000/hombres')
        const data = await res.json()
        console.log(data)
        recorrerData(data)
    } catch (error) {
        console.log(error)
    }
}


const recorrerData = data => {
    data.forEach(ropa => {
        console.log(ropa)
        const {
            id,
            nombrePrenda,
            thumbnailUrl,
            precio,
            inventario
        } = ropa
        

        templateCard.querySelector('.card-img-top').setAttribute('src', thumbnailUrl.imagen1)
        templateCard.querySelector('.card-title').textContent = nombrePrenda

        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone) 
    })
    items.appendChild(fragment)
}