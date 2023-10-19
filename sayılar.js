let kartIndex = 0;
const kartlar = document.querySelectorAll('.kart');

function kaydir() {
    
    if (kartIndex < kartlar.length - 1) {
        kartlar[kartIndex].style.transform = 'translateX(-100%)';
        kartIndex++;
    } else {
        kartlar[kartIndex].style.transform = 'translateX(-100%)';
        kartIndex = 0;
    }
}

const kartContainer = document.querySelector('.kart-container');
kartContainer.addEventListener('click', kaydir);
