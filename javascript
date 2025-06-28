// Discrimination reporting
const discriminationBtn = document.getElementById('discriminationBtn');
const discriminationModal = document.getElementById('discriminationModal');
const closeBtn = document.querySelector('.close');

discriminationBtn.addEventListener('click', () => {
    discriminationModal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    discriminationModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === discriminationModal) {
        discriminationModal.style.display = 'none';
    }
});

document.getElementById('discriminationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Her ville du hatt en API-kall i en ekte applikasjon
    alert('Takk for din rapport! Vi vil behandle saken din og kontakte deg hvis nødvendig.');
    this.reset();
    discriminationModal.style.display = 'none';
});
