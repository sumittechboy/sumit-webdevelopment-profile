const accessKey = "cgqCW53vTRwQrwcJSqjGCRUh1o5YTwoxHv0XrMzdmxs"; // Access Key from screenshot
const gallery = document.getElementById('gallery');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const loader = document.getElementById('loader');

async function fetchImages(query) {
    if (!query) return;

    // Show loader, clear gallery
    loader.style.display = 'block';
    gallery.innerHTML = '';

    const url = `https://api.unsplash.com/search/photos?client_id=${accessKey}&query=${query}&per_page=12`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        displayImages(data.results);
    } catch (error) {
        console.error('Error fetching images:', error);
        gallery.innerHTML = '<p style="text-align:center; color:red; width:100%;">Failed to fetch images. Please check your connection or API key.</p>';
    } finally {
        loader.style.display = 'none';
    }
}

function displayImages(results) {
    if (results.length === 0) {
        gallery.innerHTML = '<p style="text-align:center; width:100%;">No results found.</p>';
        return;
    }

    results.forEach(element => {
        const imageCard = document.createElement('div');
        imageCard.classList.add('image-card');

        const img = document.createElement('img');
        img.src = element.urls.small; // Use small for better performance in grid
        img.alt = element.alt_description || 'Unsplash Image';
        img.loading = 'lazy'; // Lazy load for performance

        // Optional: Open full size on click
        img.onclick = () => window.open(element.urls.full, '_blank');
        img.style.cursor = 'pointer';
        img.title = 'Click to view full size';

        imageCard.appendChild(img);
        gallery.appendChild(imageCard);
    });
}

// Initial fetch
fetchImages(searchInput.value);

// Event Listeners
searchBtn.addEventListener('click', () => {
    fetchImages(searchInput.value);
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        fetchImages(searchInput.value);
    }
});
