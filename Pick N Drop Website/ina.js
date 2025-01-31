document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.content');
    let currentSection = 0;

    const switchSection = () => {
        // Hide current section
        sections[currentSection].classList.remove('active');

        // Move to the next section
        currentSection = (currentSection + 1) % sections.length;

        // Show the new section
        sections[currentSection].classList.add('active');
    };

    // Switch section every 5 seconds
    setInterval(switchSection, 10000);
  

});
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

