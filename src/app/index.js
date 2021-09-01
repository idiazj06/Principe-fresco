import './main.css';
import {fetch as fetchPolyfill} from 'whatwg-fetch'
const items = document.getElementById('items');
const fragment = document.createDocumentFragment()
const templateCard = document.getElementById('template-card').content;
const templateCard2 = document.getElementById('template-card2').content;




document.addEventListener('DOMContentLoaded', e => {
    fetchData()
})


const fetchData = async () => {
    try {
        const res = await fetch('http://localhost:4000/infoRopa')
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
            hombres,
            mujeres
        } = ropa

        hombres.forEach(ropaInd => {
            const {
                id,
                nombrePrenda,
                thumbnailUrl,
                categoria,
                precio
            } = ropaInd

            console.log(thumbnailUrl.imagen1)

            templateCard.querySelector('.card-img-top').setAttribute('src', thumbnailUrl.imagen1)
            templateCard.querySelector('.card-title').textContent = nombrePrenda
            templateCard.querySelector('.btn-dark').dataset.id = id
            templateCard.querySelector('.btn-dark').setAttribute('id',categoria)
            const clone = templateCard.cloneNode(true)
            fragment.appendChild(clone)
        })
        mujeres.forEach(ropaInd => {
            const {
                id,
                nombrePrenda,
                thumbnailUrl,
                categoria,
                precio
            } = ropaInd

            console.log(thumbnailUrl.imagen1)

            templateCard2.querySelector('.card-img-top').setAttribute('src', thumbnailUrl.imagen1)
            templateCard2.querySelector('.card-title').textContent = nombrePrenda
            templateCard2.querySelector('.btn-dark').dataset.id = id
            templateCard2.querySelector('.btn-dark').setAttribute('id',categoria)
            const clone2 = templateCard2.cloneNode(true)
            fragment.appendChild(clone2)
        })        
    })
    items.appendChild(fragment)
}

items.addEventListener('click',e=>{
    e.preventDefault()
    detectarClick(e)
})


const detectarClick = e =>{
    console.log(e.target)
    if(e.target.classList.contains('btn-dark')){
        console.log(true)
        console.log(e.target.parentElement.parentElement)
        console.log(e.target.parentElement.parentElement)
        // let elementopadreElementoPadre = e.target.parentElement.parentElement
        let botonData = e.target

        console.log(botonData)

        localStorage.setItem('dataBuscar', JSON.stringify(botonData.dataset.id))
        localStorage.setItem('categoria', JSON.stringify(botonData.id))


        
    }else{
        console.log(false)
    }
}