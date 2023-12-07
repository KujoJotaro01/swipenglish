let isDragging = false;
let initialX;

function startDragging(event) {
    isDragging = true;
    initialX = event.clientX;
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

        if (Math.abs(deltaX) > 10) { // Prevent small accidental movements
            card.classList.toggle('flipped');
            stopDragging(); // Stop dragging after flipping
        }
    }
});