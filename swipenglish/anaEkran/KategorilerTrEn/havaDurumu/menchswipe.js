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
// createCard('cardX', '/swipenglish/sourceFiles/hDurumuImages/.webp', '/swipenglish/sourceFiles/hDurumuImages/.webp' ,'/swipenglish/sourceFiles/hDurumuSoundSound/.mp3');
createCard('card1', '/swipenglish/sourceFiles/hDurumuImages/cloudyB.webp', '/swipenglish/sourceFiles/hDurumuImages/cloudyF.webp', '/swipenglish/sourceFiles/hDurumuSound/bulutlu.mp3');
createCard('card2', '/swipenglish/sourceFiles/hDurumuImages/foggyB.webp', '/swipenglish/sourceFiles/hDurumuImages/foggyF.webp', '/swipenglish/sourceFiles/hDurumuSound/sisli.mp3');
createCard('card3', '/swipenglish/sourceFiles/hDurumuImages/partlycloudyB.webp', '/swipenglish/sourceFiles/hDurumuImages/partlycloudyF.webp', '/swipenglish/sourceFiles/hDurumuSound/parcalıBulutlu.mp3');
createCard('card4', '/swipenglish/sourceFiles/hDurumuImages/rainbowB.webp', '/swipenglish/sourceFiles/hDurumuImages/rainbowF.webp', '/swipenglish/sourceFiles/hDurumuSound/gokKusagı.mp3');
createCard('card5', '/swipenglish/sourceFiles/hDurumuImages/rainyB.webp', '/swipenglish/sourceFiles/hDurumuImages/rainyF.webp', '/swipenglish/sourceFiles/hDurumuSound/yagmurlu.mp3');
createCard('card6', '/swipenglish/sourceFiles/hDurumuImages/snowyB.webp', '/swipenglish/sourceFiles/hDurumuImages/snowyF.webp', '/swipenglish/sourceFiles/hDurumuSound/karlı.mp3');
createCard('card7', '/swipenglish/sourceFiles/hDurumuImages/stormyB.webp', '/swipenglish/sourceFiles/hDurumuImages/stormyF.webp', '/swipenglish/sourceFiles/hDurumuSound/fırtınalı.mp3');
createCard('card8', '/swipenglish/sourceFiles/hDurumuImages/sunnyB.webp', '/swipenglish/sourceFiles/hDurumuImages/sunnyF.webp', '/swipenglish/sourceFiles/hDurumuSound/gunesli.mp3');
createCard('card9', '/swipenglish/sourceFiles/hDurumuImages/tornadoB.webp', '/swipenglish/sourceFiles/hDurumuImages/tornadoF.webp', '/swipenglish/sourceFiles/hDurumuSound/kasırga.mp3');
createCard('card10', '/swipenglish/sourceFiles/hDurumuImages/windyB.webp', '/swipenglish/sourceFiles/hDurumuImages/windyF.webp', '/swipenglish/sourceFiles/hDurumuSound/ruzgarlı.mp3');
