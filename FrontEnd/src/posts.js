const url = window.location.search
const urlQuery = new URLSearchParams(url)
fetch(`http://127.0.0.1:3333/listaPost?id=${urlQuery.get("id")}`).then(response => response.json()).then(data =>{
    const titulo = document.getElementById("titulo")
    const imagem = document.getElementById("foto")
    const texto = document.getElementById("texto")

    titulo.innerText = data.data[0].titulo
    imagem.src = data.data[0].foto
    texto.innerText = data.data[0].texto
})