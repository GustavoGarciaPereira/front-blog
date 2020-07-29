const o_post = document.getElementById("lista_posts")

var url_string = window.location.href;
var url = new URL(url_string);
var id = url.searchParams.get("id");

fetch(`http://127.0.0.1:8000/post/posts/?id=${id}`).then(response =>{
    return response.json();
        })
    .then(data =>{
        render(data)
    })

function render(dado){
    const novo = dado.map((x)=>{
        return `
        <p class="titulo-livro">${x.titulo}</p>
        <img src="${x.imagem_post}" style="width: 600px; height: 400px;" alt="capa do livro Fahrenheit 451">
        <br>
        <br>
        <br>
        <br>
        ${formarar_post(x.post)}
        `
    }).join('')
    o_post.innerHTML = novo
}

function formarar_post(testo){
    var con="";
    for(var i=0;i<testo.length;i+=34){
        con+=`<p>${testo.substring(i,i+34)}</p>`
    }
    return con;

}