const form = document.querySelector("#form")
const nome = document.querySelector("#nome")
const autor = document.querySelector("#autor")
const genero = document.querySelector("#genero")
const ano = document.querySelector("#ano")
const livros = document.querySelector("#livros")
const pesquisa = document.querySelector("#Pesquisar")
const buscarBtn = document.querySelector("#buscar")
const listar = document.querySelector("#listar")

form.addEventListener("submit",(event)=>{
    event.preventDefault()
    const livro = {
        nome: nome.value,
        autor: autor.value,
        genero: genero.value,
        ano: ano.value
    }
    const livrosList = JSON.parse(localStorage.getItem("livrosLista")) || []

    livrosList.push(livro)
    localStorage.setItem("livrosLista", JSON.stringify(livrosList))
    nome.value = ""
    autor.value = ""
    genero.value = ""
    ano.value = ""
})
listar.addEventListener("click", () => {
    livros.innerHTML = "";
    const livrosList = JSON.parse(localStorage.getItem("livrosLista")) || [];

    livrosList.forEach((livro) => {
        const livroDiv = document.createElement("div");
        livroDiv.innerHTML = `
            <h2>${livro.nome}</h2>
            <p><strong>Autor:</strong> ${livro.autor}</p>
            <p><strong>Gênero:</strong> ${livro.genero}</p>
            <p><strong>Ano:</strong> ${livro.ano}</p>
        `;
        livros.appendChild(livroDiv);
    });
});
buscarBtn.addEventListener("click",()=>{
    const valor = pesquisa.value
    const livrosList = JSON.parse(localStorage.getItem("livrosLista")) || [];
    livros.innerHTML = "";
    
    livrosList.forEach((livroDaVez)=>{
        const propriedades = [livroDaVez.nome.toLowerCase(), livroDaVez.autor.toLowerCase(), livroDaVez.genero.toLowerCase(), livroDaVez.ano];
        if (propriedades.includes(valor.toLowerCase())){
            const livroDiv = document.createElement("div");
            livroDiv.innerHTML = `
            <h2>${livroDaVez.nome}</h2>
            <p><strong>Autor:</strong> ${livroDaVez.autor}</p>
            <p><strong>Gênero:</strong> ${livroDaVez.genero}</p>
            <p><strong>Ano:</strong> ${livroDaVez.ano}</p>
            `
            livros.appendChild(livroDiv);
        }
    })

})