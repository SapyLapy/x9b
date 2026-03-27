const games = [
    { title: "A Dance Of Fire And Ice", url: "games/adanceoffireandice.html", img: "https://via.placeholder.com/200x150?text=A+Dance+Of+Fire+And+Ice" }
];

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
