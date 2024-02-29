// Exemplo de dados de filmes (pode ser substituído por uma chamada à API)
const filmes = [
    { titulo: "Para todos os garotos que já amei", ano: 2019, genero: "Romance e Comédia" },
    { titulo: "Enrolados", ano: 2010, genero: "Conto de Fadas e Literatura Infantil" },
    { titulo: "As Branquelas", ano: 2004, genero: "Comédia" },
    { titulo: "O Rei Leão Hakuna Matata", ano: 2004, genero: "Animação,Aventura e Comédia" },
    { titulo: "Vingadores", ano: 2012, genero: "Ação e Fantasia" },
    // Adicione mais filmes conforme necessário
];


// Função para exibir filmes na página
function exibirFilmes() {
    const movieList = document.getElementById('movie-list');

    filmes.forEach(filme => {
        const card = document.createElement('div');
        card.classList.add('movie-card');

        const content = `
            <h3>${filme.titulo}</h3>
            <p>Ano: ${filme.ano}</p>
            <p>Gênero: ${filme.genero}</p>
        `;

        card.innerHTML = content;
        movieList.appendChild(card);
    });
}

// Chama a função para exibir os filmes quando a página carrega
document.addEventListener('DOMContentLoaded', exibirFilmes);

//muda a cor de fundo
function changeBackgroundColor(){
    const randomcolor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    document.body.style.backgroundcolor = randomColor;
}



