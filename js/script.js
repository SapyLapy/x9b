const games = [
    { title: "A Dance Of Fire And Ice", url: "games/adanceoffireandice.html", img: "https://play-lh.googleusercontent.com/L8rCly8hMWuP95PbihDZlSV2u0oGrs0hl2lEXboO7XHX2XalJZ1rjgOsFYXnEDWbpQ" }
];

const grid = document.getElementById("gamesGrid");

const grannyCard = document.createElement("div");
grannyCard.className = "granny-card";
grannyCard.innerText = "Granny Collection";

grannyCard.onclick = () => {
  window.location.href = "granny.html";
};

grid.prepend(grannyCard); 

function renderGames(gamesToRender) {
    const grid = document.getElementById('gamesGrid');
    grid.innerHTML = '';
    
    gamesToRender.forEach(game => {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.innerHTML = `
            <img src="${game.img}" alt="${game.title}">
            <h3>${game.title}</h3>
        `;
        card.onclick = () => window.location.href = game.url;
        grid.appendChild(card);
    });
}

document.getElementById('search').addEventListener('input', (e) => {
    const filtered = games.filter(g => 
        g.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    renderGames(filtered);
});

renderGames(games);
