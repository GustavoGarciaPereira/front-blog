const o_post = document.getElementById("lista_posts")

var url_string = window.location.href;
var url = new URL(url_string);
var id = url.searchParams.get("id");

fetch(`https://gustavo-blog.herokuapp.com/post/posts/?id=${id}`).then(response =>{
    return response.json();
        })
    .then(data =>{
        render(data)
    })

function render(dado){
    const novo = dado.map((x)=>{
        return `
        <p class="titulo-livro">${x.titulo}</p>
        <img class="imagem_post" src="${x.imagem_post}" alt="capa do livro Fahrenheit 451">
        <br>
        <br>
        <br>
        <br>
        <div class="texto_poste">${formarar_post(x.post)}</div>
        `
    }).join('')
    o_post.innerHTML = novo
}

function formarar_post(testo){
    var con="";
    for(var i=0;i<testo.length;i+=64){
        con+=`<p>${testo.substring(i,i+64)}</p>`
    }
    return con;

}