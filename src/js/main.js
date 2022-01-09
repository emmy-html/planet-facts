import data from './data.json';
// mobile menu
const menuButton = document.getElementById("menu-toggle-button"); // use the DOM to access the hamburger button
function hamburger() {
    // declare all variables
    var menu = document.getElementById("menu"); // use the DOM to access the navigation menu
    if (menu.style.display !== 'block') { // if the menu is hidden, then display it
        menu.style.display = 'block';
        menu.classList.add('fade-in'); // add a fade effect when menu appears on screen
        menuButton.style.color = '#838391'; // change color to show menu is open
    } else { 
        menu.style.display = 'none'; // if the menu is open, hide it again
        menuButton.style.color = '#FFFFFF'; // change color to show menu is closed
    }
}
menuButton.addEventListener("click", hamburger);
// mobile planet structure navigation
let planetOverviewBtn, planetStructureBtn, planetSurfaceBtn, planetContentContainer, planetSrc; // declare all buttons, containers, and links
planetOverviewBtn = document.getElementById("planet-overview-button");
planetStructureBtn = document.getElementById("planet-internal-structure-button");
planetSurfaceBtn = document.getElementById("planet-surface-geology-button");
planetContentContainer = document.getElementById("planet-content-container");
planetSrc = document.getElementById("planet-source");

const body = document.body;

function getPlanetDataByType(dataType) {
    let currentPlanet = body.dataset.planet;  // check body to see what data is being displayed
    let match = data.find(planet => planet.name === currentPlanet);
    if (dataType === "overview") {
        planetContentContainer.innerHTML = match.overview.content;
        planetSrc.href = match.overview.source;
        toggleActive(planetOverviewBtn);
    }
    else if (dataType === "structure") {
        planetContentContainer.innerHTML = match.structure.content;
        planetSrc.href = match.structure.source;
    }
    else if (dataType === "geology") {
        planetContentContainer.innerHTML = match.geology.content;
        planetSrc.href = match.geology.source;
    }
}

planetOverviewBtn.addEventListener("click", getPlanetDataByType.bind(this, 'overview'));
planetStructureBtn.addEventListener("click", getPlanetDataByType.bind(this, 'structure'));
planetSurfaceBtn.addEventListener("click", getPlanetDataByType.bind(this, 'geology'));