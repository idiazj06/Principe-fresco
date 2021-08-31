const items = document.getElementById('items');
const fragment = document.createDocumentFragment()
const dataBuscar =  JSON.parse(localStorage.getItem('dataBuscar'))
const categoria =  JSON.parse(localStorage.getItem('categoria'))




document.addEventListener('DOMContentLoaded', async (e)=>{
    e.preventDefault()
    console.log(dataBuscar)
    
    let resp = await fetch(`http://localhost:4001/${categoria}`)
    let data = await resp.json();
    console.log(data)
    let buscar = data.find(buscar=>buscar.id === dataBuscar)

    console.log(buscar)
})

