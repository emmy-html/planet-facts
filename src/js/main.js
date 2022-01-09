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

document.addEventListener('DOMContentLoaded', function() {
    // your code here
 }, false);