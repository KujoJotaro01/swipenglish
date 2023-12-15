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

        if (Math.abs(deltaX) > 10) { // Prevent small accidental movements
            card.classList.toggle('flipped');
            stopDragging(); // Stop dragging after flipping
        }
        else if (Math.abs(deltaY) > 10) { // bir önceki karta geçişi sağladık şimdilik bu şekilde 
            window.location.href = "0.html";
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
    }
});