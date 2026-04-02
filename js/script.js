const games = [
    { 
        title: "A Dance Of Fire And Ice", 
        url: "games/adanceoffireandice.html", 
        img: "https://play-lh.googleusercontent.com/L8rCly8hMWuP95PbihDZlSV2u0oGrs0hl2lEXboO7XHX2XalJZ1rjgOsFYXnEDWbpQ" 
    },

    { 
        title: "Retro Bowl", 
        url: "games/retrobowl.html", 
        img: "https://pbs.twimg.com/profile_images/1217942835527409665/swRMqEkK_400x400.jpg" 
    },
    
    { 
        title: "Slice It All!", 
        url: "games/sliceitall.html", 
        img: "https://play-lh.googleusercontent.com/npZcw60ibNbcfK8niudMcGA2qyeDOCbE6PRlCL2Ct5SoC5WuRH0DFsGtGkimHyhUmac" 
    }
];

function renderGames(gamesToRender) {
    const grid = document.getElementById('gamesGrid');
    grid.innerHTML = '';
    
    // 🔥 Add Granny FIRST
    const grannyCard = document.createElement("div");
    grannyCard.className = "granny-card";
    grannyCard.onclick = () => window.location.href = "granny.html";

    grannyCard.innerHTML = `
        <img src="https://tr.rbxcdn.com/180DAY-609e2739a3228f30ea6228fd04f74f92/500/280/Image/Jpeg/noFilter">
        <div class="overlay">Granny Collection</div>
    `;

    grid.appendChild(grannyCard);

    // Then add games
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
