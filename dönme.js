let isFlipped = false;

function flipImage() {
    const flipContainer = document.querySelector('.flip-container');
    flipContainer.classList.toggle('flipped');

    // İmage'lerin üzerine tıklandığında isFlipped değişkenini güncelle
    isFlipped = !isFlipped;

    // Arkadaki resmi göstermek için flip durumuna göre kontrol yap
    if (isFlipped) {
        // Eğer flipped durumdaysa ve image/0.jpg görünüyorsa, image/01.jpg'yi göster
        document.getElementById('backImage').src = 'images/01.jpg';
    } else {
        // Eğer flipped durumdaysa ve image/01.jpg görünüyorsa, image/0.jpg'yi göster
        document.getElementById('backImage').src = 'images/0.jpg';
    }
}
