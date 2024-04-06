const searchInput = document.getElementById('searchInput');
const searchFields = document.getElementById('searchFields');

searchInput.addEventListener('click', () => {
    searchFields.classList.toggle('hidden');
});

document.addEventListener('click', (event) => {
    if (!searchInput.contains(event.target) && !searchFields.contains(event.target)) {
        searchFields.classList.add('hidden');
    }
});