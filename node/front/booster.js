let persos = "draco-malfoy";
let dernierTirage = 0;
const TimeMax = 1000 * 60 * 24 * 60;

function fetchBooster() {
    return fetch("https://hp-api.lainocs.fr/characters/" + persos).then(
        (response) => response.json()
    );
}
async function openBooster() {
    const Time = Date.now();
    const data = await fetchBooster();
    if (Time - dernierTirage >= TimeMax) {
        dernierTirage = Time;
        console.log(data);
        document.querySelector("#character_container").innerHTML = `
        <div id="character">
            <a href="booster.html">
                <div id="dp">
                        <h1>${data.name}</h1>
                        <img src="${data.image}" alt="${data.name}">

                </div>
            </a>
        </div>
            <div id="info">
                <h1>House : ${data.house}</h1>
                <h1>Actor : ${data.actor}</h1>
            </div>
        `;
    } else {
        document.querySelector("#character_container").innerHTML = `
            <div id="character">
                <a href="booster.html">
                    pas de carte disponible
                </a>
            </div>
        `;
    }
}
