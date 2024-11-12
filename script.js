// Function to animate the loading dots
function animateLoadingDots() {
    const loadingDots = document.getElementById('loadingDots');
    let dotCount = 0;

    setInterval(() => {
        dotCount = (dotCount + 1) % 4; // Cycle through 0 to 3
        loadingDots.textContent = '.'.repeat(dotCount); // Update the dots
    }, 500); // Change the interval as needed
}

// Start the loading animation
animateLoadingDots();
