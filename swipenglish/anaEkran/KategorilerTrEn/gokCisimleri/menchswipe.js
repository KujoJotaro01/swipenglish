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
            <img src="/swipenglish/sourceFiles/sound.png" alt="Play Sound">
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

// createCard('cardX', '/swipenglish/sourceFiles/gCisimleriImages/.webp', '/swipenglish/sourceFiles/gCisimleriImages/.webp' ,'/swipenglish/sourceFiles/gCisimleriSound/.mp3');

createCard('card1', '/swipenglish/sourceFiles/gCisimleriImages/dunyaB.webp', '/swipenglish/sourceFiles/gCisimleriImages/dunyaF.webp', '/swipenglish/sourceFiles/gCisimleriSound/dunya.mp3');
createCard('card2', '/swipenglish/sourceFiles/gCisimleriImages/ayB.webp', '/swipenglish/sourceFiles/gCisimleriImages/ayF.webp', '/swipenglish/sourceFiles/gCisimleriSound/.mp3');
createCard('card3', '/swipenglish/sourceFiles/gCisimleriImages/gunesB.webp', '/swipenglish/sourceFiles/gCisimleriImages/gunesF.webp', '/swipenglish/sourceFiles/gCisimleriSound/gunes.mp3');
createCard('card4', '/swipenglish/sourceFiles/gCisimleriImages/jupiterB.webp', '/swipenglish/sourceFiles/gCisimleriImages/jupiterF.webp', '/swipenglish/sourceFiles/gCisimleriSound/jupiter.mp3');
createCard('card5', '/swipenglish/sourceFiles/gCisimleriImages/mars.webp', '/swipenglish/sourceFiles/gCisimleriImages/mars.webp', '/swipenglish/sourceFiles/gCisimleriSound/mars.mp3');
createCard('card6', '/swipenglish/sourceFiles/gCisimleriImages/merkurB.webp', '/swipenglish/sourceFiles/gCisimleriImages/merkurF.webp', '/swipenglish/sourceFiles/gCisimleriSound/merkur.mp3');
createCard('card7', '/swipenglish/sourceFiles/gCisimleriImages/neptunB.webp', '/swipenglish/sourceFiles/gCisimleriImages/neptunF.webp', '/swipenglish/sourceFiles/gCisimleriSound/neptun.mp3');
createCard('card8', '/swipenglish/sourceFiles/gCisimleriImages/plutoB.webp', '/swipenglish/sourceFiles/gCisimleriImages/plutoF.webp', '.mp3');
createCard('card9', '/swipenglish/sourceFiles/gCisimleriImages/saturnB.webp', '/swipenglish/sourceFiles/gCisimleriImages/saturnF.webp', '/swipenglish/sourceFiles/gCisimleriSound/saturn.mp3');
createCard('card10', '/swipenglish/sourceFiles/gCisimleriImages/uranusB.webp', '/swipenglish/sourceFiles/gCisimleriImages/uranusF.webp', '/swipenglish/sourceFiles/gCisimleriSound/uranus.mp3');
createCard('card11', '/swipenglish/sourceFiles/gCisimleriImages/venusB.webp', '/swipenglish/sourceFiles/gCisimleriImages/venusF.webp', '/swipenglish/sourceFiles/gCisimleriSound/venus.mp3');

