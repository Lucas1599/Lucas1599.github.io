document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("posts-container");

    if (!container) return;

    const posts = [
        {
            titulo: "Bem-vindo ao Blog",
            conteudo: "Esse é o início do meu projeto pessoal.",
            categoria: "INÍCIO",
            link: "index.html"
        },
        {
            titulo: "🧪 Ácido Sulfúrico — Elixir Corrosivo",
            conteudo: "Mistura experimental com propriedades energéticas.",
            categoria: "RECEITAS",
            link: "receitas.html"
        },
        {
            titulo: "🧠 Influências",
            conteudo: "Fontes de conhecimento e inspiração.",
            categoria: "REFERÊNCIAS",
            link: "about.html #influencias"
        },
        {
            titulo: "👨‍💻 Perfil Profissional",
            conteudo: "Resumo do meu perfil, habilidades e objetivos.",
            categoria: "CURRÍCULO",
            link: "curriculum.html #perfil" 
        }
    ];

    posts.forEach(post => {
        const article = document.createElement("article");
        article.classList.add("post-card");

        article.innerHTML = `
            <span class="tag">${post.categoria}</span>
            <h3>${post.titulo}</h3>
            <p>${post.conteudo}</p>
            <a href="${post.link}">Ler mais →</a>
        `;

        container.appendChild(article);
    });

});
