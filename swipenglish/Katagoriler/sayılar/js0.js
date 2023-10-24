var tıklamaSayısı = 0;

document.getElementById('resim').addEventListener('click', function() {
    // Her tıklamada tıklama sayısını artır
    tıklamaSayısı++;

    // Tıklama sayısı çiftse, orijinal resmi göster
    if (tıklamaSayısı % 2 === 0) {
        this.src = 'images/0.jpg';
    } else {
        // Tıklama sayısı tekse, yeni görüntüyü göster
        this.src = 'images/01.jpg';
    }

    // Animasyon sınıfını ekleyerek animasyonu çalıştırıyoruz arkadaşaklar
    this.classList.add('flip-2-ver-right-fwd');

    // Animasyon tamamlandığında animasyon class'ını kaldırarak bir sonraki tıklamaya hazır hale getir
    this.addEventListener('animationend', function() {
        this.classList.remove('flip-2-ver-right-fwd');
    }, { once: true }); // 'once' seçeneğiyle event listener bir kez çalıştırılır
});
