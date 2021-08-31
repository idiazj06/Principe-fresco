const items = document.getElementById('items');
const fragment = document.createDocumentFragment();
const templateCard = document.getElementById('template-card').content;



document.addEventListener('DOMContentLoaded', e => {
    fetchData()
})


const fetchData = async () => {
    try {
        const res = await fetch('http://localhost:3000/hombres')
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
        templateCard.querySelector('.btn-dark').id = id;

        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone) 
    })
    items.appendChild(fragment)
}



items.addEventListener('click', e=>{
    e.preventDefault();
    detectarElemento(e);
});

const detectarElemento = e =>{
if (e.target.classList.contains('btn-dark')) {
    console.log(true);
    console.log(e.target.parentElement);
} else {
    console.log(false);
    
}
}