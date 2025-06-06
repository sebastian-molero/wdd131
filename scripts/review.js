document.addEventListener('DOMContentLoaded', () => {
    let reviewCount = parseInt(localStorage.getItem('reviewCount')) || 0;

    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);

    document.getElementById('review-count').textContent = reviewCount;

    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;
});
