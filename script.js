function openCategory(categoryName) {
    // Hide home view and show gallery view container
    document.getElementById('home-view').style.display = 'none';
    document.getElementById('gallery-view').style.display = 'block';

    // Hide all individual sections first
    document.getElementById('paintings-section').style.display = 'none';
    document.getElementById('sketches-section').style.display = 'none';
    document.getElementById('calligraphy-section').style.display = 'none';

    // Show only the selected category section
    document.getElementById(categoryName + '-section').style.display = 'block';
    
    // Scroll back to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goHome() {
    // Hide gallery container and show home folders view
    document.getElementById('gallery-view').style.display = 'none';
    document.getElementById('home-view').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
