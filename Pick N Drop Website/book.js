function calculatePrice() {
    var origin = document.getElementById('pickup-location').value;
    var destination = document.getElementById('dropoff-location').value;
    var tripType = document.getElementById('trip-type').value;

    // Define the prices for two-way trips
    var prices = {
        'new-shire_el-shaddai': 54600,
        'old-shire_el-shaddai': 45000,
        'area-49_el-shaddai': 32000,
        'area-25_el-shaddai': 60000,
        'new-shire_craizematic': 54600,
        'old-shire_craizematic': 45000,
        'area-49_craizematic': 32000,
        'area-25_craizematic': 60000
    };

    // Key for the price lookup
    var key = origin + '_' + destination;

    // Base price (two-way)
    var basePrice = prices[key];

    // Adjust price based on trip type
    var totalPrice;
    if (tripType === "go-and-back") {
        totalPrice = basePrice;  // Full price for Go and Back
    } else if (tripType === "one-way") {
        totalPrice = basePrice / 2;  // Half price for One Way
    }

    // Display the total price
    if (totalPrice) {
        document.getElementById('price').value = 'MWK ' + totalPrice.toFixed(2);
    } else {
        document.getElementById('price').value = 'MWK 0.00'; // Default if no match
    }
}
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