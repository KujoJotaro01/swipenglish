let isDragging = false;
let initialX;
let initialY;

function startDragging(event) {
    isDragging = true;
    initialX = event.clientX;
    initialY = event.clientY;
}

function stopDragging() {
    isDragging = false;
}

window.onload = function() {
    var resim = document.getElementById("resimId"); // resimId, resminizin HTML ID'sidir
    resim.style.pointerEvents = "none";
    var resim = document.getElementById("resimId1"); // resimId, resminizin HTML ID'sidir
    resim.style.pointerEvents = "none";
}

document.getElementById('card').addEventListener('mousemove', function (event) {
    if (isDragging) {
        const card = document.querySelector('.card');
        const deltaX = event.clientX - initialX;
        const deltaY = event.clientY - initialY;

        if (Math.abs(deltaX) > 60) { 
            //math abs mutlak yön yani sağa 10 sola -10 farketmeksizin çalışıcak math absi yukarı aşağı da kullanamayız
            // sağ sol flip hareketini sağlıyor 
            // yukarı aşağı sağ sol hepsinin 10 luk bir ölçütte hareket yapması karışıklığa sebebiyet verebilir bu sebeple şimdilik değerleri değiştiricem
            card.classList.toggle('flipped');
            stopDragging(); // Stop dragging after flipping
        }
        else if (deltaY > 60) { // Yukarı yönde sürükleme
            window.location.href = "0.html"; // iki.html yazılınca bunu da aktifleştiricez
        }       
        else if (deltaY < -60) {  // Aşağı yönde sürükleme
            window.location.href = "iki.html"; 
            // deltaY < -10 kullanma sebebimiz aşağı yukarı yönleri ayırt edebilmek
        }      
    }
});

document.getElementById('card').addEventListener('touchstart', function (event) {
    startDragging(event.touches[0]);
});

document.getElementById('card').addEventListener('touchend', function () {
    stopDragging();
});

document.getElementById('card').addEventListener('touchmove', function (event) {
    if (isDragging) {
        const card = document.querySelector('.card');
        const deltaX = event.touches[0].clientX - initialX;

        if (Math.abs(deltaX) > 10) {
            card.classList.toggle('flipped');
            stopDragging();
        }
        else if (deltaY > 60) { // Yukarı yönde sürükleme
            window.location.href = "0.html"; // iki.html yazılınca bunu da aktifleştiricez
        }       
        else if (deltaY < -60) {  // Aşağı yönde sürükleme
            window.location.href = "iki.html"; 
        }  }
});