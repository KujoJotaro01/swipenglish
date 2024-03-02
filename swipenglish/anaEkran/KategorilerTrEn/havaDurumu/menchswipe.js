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
// Create cards // Create cards  createCard('card', 'image/.webp', 'image/.webp', '.mp3');

createCard('card1', 'images/cloudyB.webp', 'images/cloudyF.webp', 'sound/bulutlu.mp3');
createCard('card2', 'images/foggyB.webp', 'images/foggyF.webp', 'sound/sisli.mp3');
createCard('card3', 'images/partlycloudyB.webp', 'images/partlycloudyF.webp', 'sound/parcalıBulutlu.mp3');
createCard('card4', 'images/rainbowB.webp', 'images/rainbowF.webp', 'sound/gokKusagı.mp3');
createCard('card5', 'images/rainyB.webp', 'images/rainyF.webp', 'sound/yagmurlu.mp3');
createCard('card6', 'images/snowyB.webp', 'images/snowyF.webp', 'sound/karlı.mp3');
createCard('card7', 'images/stormyB.webp', 'images/stormyF.webp', 'sound/fırtınalı.mp3');
createCard('card8', 'images/sunnyB.webp', 'images/sunnyF.webp', 'sound/gunesli.mp3');
createCard('card9', 'images/tornadoB.webp', 'images/tornadoF.webp', 'sound/kasırga.mp3');
createCard('card10', 'images/windyB.webp', 'images/windyF.webp', 'sound/ruzgarlı.mp3');