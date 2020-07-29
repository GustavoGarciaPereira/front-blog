const todos_posts = document.getElementById("conteudo")
const lista_posts = document.getElementById("lista_posts")

fetch(`http://127.0.0.1:8000/post/posts/`).then(response =>{
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
        ${formatar_post(x.post)}
        `
    }).join('')
    todos_posts.innerHTML = novo
}

function formatar_post(testo){
    var con="";
    for(var i=0;i<testo.length;i+=34){
        con+=`<p>${testo.substring(i,i+34)}</p>`
    }
    return con;

}

fetch(`http://127.0.0.1:8000/post/posts/`).then(response =>{
    return response.json();
        })
    .then(data =>{
        listar_livros(data)
    })

function listar_livros(data){
    const lista = data.map((x)=>{
        return `<li><a href='file:///home/gustavopereira/Documentos/django_blog_resenha/front-blog/postagem.html?id=${x.id}'>${x.titulo}</a></li>`
    }).join("")

    lista_posts.innerHTML = lista

}
