function createCard(id, frontImageSrc, backImageSrc, soundSrc) {
    const section = document.createElement('section');
    section.innerHTML = `
    <div>
    <div class="card" id="${id}" onmousedown="startDragging(event, '${id}')" onmouseup="stopDragging('${id}')">
        <div class="card-inner">
            <div class="card-front">
                <img loading="eager" src="${frontImageSrc}">
            </div>
            <div class="card-back">
                <img loading="eager" src="${backImageSrc}">
            </div>
        </div>
    </div>
    <div class="sound-container">
        <audio id="sound_${id}" src="${soundSrc}"></audio>
        <button class="sound" onclick="playSound('${id}')">
            <img src="images/sound.png" alt="Play Sound">
        </button>
    </div>
</div>
`;
    document.getElementById('main-container').appendChild(section);
    setupDraggableCard(id);
}


function playSound(id) {
    const sound = document.getElementById(`sound_${id}`);
    sound.play();
}

const style = document.createElement('style');

document.head.appendChild(style);

function setupDraggableCard(cardId) {
    let isDragging = false;
    let initialX;
    let initialY;

    const card = document.getElementById(cardId);

    function startDragging(event) {
        isDragging = true;
        initialX = event.clientX || event.touches[0].clientX;
        initialY = event.clientY || event.touches[0].clientY;
    }

    function stopDragging() {
        isDragging = false;
    }

    function handleDrag(event) {
        if (isDragging) {
            const deltaX = (event.clientX || event.touches[0].clientX) - initialX;
            const deltaY = (event.clientY || event.touches[0].clientY) - initialY;
            const threshold = 60;

            // Check if the absolute deltaY is greater than the absolute deltaX
            // If it is, ignore the drag event
            if (Math.abs(deltaY) > Math.abs(deltaX)) {
                return;
            }

            if (Math.abs(deltaX) > threshold || Math.abs(deltaY) > threshold) {
                card.classList.toggle('flipped');
                stopDragging();
            }
        }
    }

    card.addEventListener('mousedown', startDragging);
    card.addEventListener('mouseup', stopDragging);
    card.addEventListener('touchstart', startDragging);
    card.addEventListener('touchend', stopDragging);
    card.addEventListener('mousemove', handleDrag);
    card.addEventListener('touchmove', handleDrag);
}
// Create cards // Create cards  createCard('card', 'image/.webp', 'image/.webp', 'sound/.mp3');

createCard('card1', 'images/dunyaB.webp', 'images/dunyaF.webp', 'sound/dunya.mp3');
createCard('card2', 'images/ayB.webp', 'images/ayF.webp', 'sound/.mp3');
createCard('card3', 'images/gunesB.webp', 'images/gunesF.webp', 'sound/gunes.mp3');
createCard('card4', 'images/jupiterB.webp', 'images/jupiterF.webp', 'sound/jupiter.mp3');
createCard('card5', 'images/mars.webp', 'images/mars.webp', 'sound/mars.mp3');
createCard('card6', 'images/merkurB.webp', 'images/merkurF.webp', 'sound/merkur.mp3');
createCard('card7', 'images/neptunB.webp', 'images/neptunF.webp', 'sound/neptun.mp3');
createCard('card7', 'images/plutoB.webp', 'images/plutoF.webp', 'sound/.mp3');
createCard('card7', 'images/saturnB.webp', 'images/saturnF.webp', 'sound/saturn.mp3');
createCard('card7', 'images/uranusB.webp', 'images/uranusF.webp', 'sound/uranus.mp3');
createCard('card7', 'images/venusB.webp', 'images/venusF.webp', 'sound/venus.mp3');

