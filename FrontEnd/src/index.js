function abrePost(id){
  window.location.href = `posts.html?id=${id}`
}

fetch('http://127.0.0.1:3333/listaPosts').then(response => response.json()).then(data =>{
  const posts = data.data
  const container = document.getElementById("posts")
  for(let i = 0; i < posts.length; i++){
    const div = document.createElement("div")
    div.innerHTML = `
                  <div class="card" style="width: 18rem;" id="${posts[i].id}">
                    <img src="${posts[i].foto}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${posts[i].titulo}</h5>
                      <p class="card-text">${posts[i].texto}</p>
                      <a href="#" class="btn btn-primary" id="cardBtn" onclick="abrePost(${posts[i].id})">Veja Mais</a>
                    </div>
                  </div>
    `
    /* console.log(posts) */
    container.appendChild(div)
  }
})



