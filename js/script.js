const games = [

    { 
        title: "5 Nights at Epstiens", 
        url: "games/fivenightsatepstiens.html", 
        img: "https://slithergame.io/cache/data/image/game/five-nights-at-epsteins-m300x300.jpg" 
    },
    
    { 
        title: "A Dance Of Fire And Ice", 
        url: "games/adanceoffireandice.html", 
        img: "https://play-lh.googleusercontent.com/L8rCly8hMWuP95PbihDZlSV2u0oGrs0hl2lEXboO7XHX2XalJZ1rjgOsFYXnEDWbpQ" 
    },

     { 
        title: "Baby Sniper In Vietnam", 
        url: "games/babysniperinvietnam.html", 
        img: "https://www.y9freegames.com/wp-content/uploads/thumbs/custom/B/Baby-Sniper-In-Vietnam-150x150.jpg" 
    },

    { 
        title: "Baldi's Basics", 
        url: "games/baldisbasics.html", 
        img: "https://i1.sndcdn.com/artworks-000358969488-in8emu-t500x500.jpg" 
    },

    { 
        title: "Banana Simulator", 
        url: "games/bananasimulator.html", 
        img: "https://m.media-amazon.com/images/I/61o43O+4IAL.png" 
    },

    { 
        title: "Baseball Bros", 
        url: "games/baseballbros.html", 
        img: "https://baseballbrosgame.io//data/image/game/baseball-bros-io-game.jpg" 
    },

    { 
        title: "Kill The Ice Age Baby Adventure", 
        url: "games/killtheiceagebabyadventure.html", 
        img: "https://pbs.twimg.com/media/ERjtRBYU0AAry2w.jpg" 
    },

    { 
        title: "Kim Jong Un Tile Puzzle", 
        url: "games/kimjonguntilepuzzle.html", 
        img: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Kim_Jong-un_at_the_Workers%27_Party_of_Korea_main_building.png" 
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
    },

    { 
        title: "Snow Rider", 
        url: "games/snowrider.html", 
        img: "https://snow-rider3d.io/cache/data/image/snow-rider-3d-2-m200x200.webp" 
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
