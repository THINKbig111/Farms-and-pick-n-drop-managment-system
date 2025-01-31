

function toggleNav() {
    const navMenu = document.getElementById("navMenu");
    const menuToggle = document.getElementById("menuToggle");
    
    // Toggle between showing and hiding the menu
    navMenu.classList.toggle("show");
    
    // Change button text between '☰' and 'X'
    if (menuToggle.innerHTML === "☰") {
        menuToggle.innerHTML = "✖";  // Change to 'X'
    } else {
        menuToggle.innerHTML = "☰";  // Change back to the menu icon
    }
}