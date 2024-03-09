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
            <img src="/swipenglish/sourceFiles/sound.png
            " alt="Play Sound">
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
// createCard('cardX', '/swipenglish/sourceFiles/vucutImages/.webp', '/swipenglish/sourceFiles/vucutImages/.webp', '/swipenglish/sourceFiles/vucutSound/.mp3');
createCard('card1', '/swipenglish/sourceFiles/vucutImages/agizB.webp', '/swipenglish/sourceFiles/vucutImages/agizF.webp', '/swipenglish/sourceFiles/vucutSound/.mp3');
createCard('card2', '/swipenglish/sourceFiles/vucutImages/aparmakB.webp', '/swipenglish/sourceFiles/vucutImages/aparmakF.webp', '/swipenglish/sourceFiles/vucutSound/.mp3');
createCard('card3', '/swipenglish/sourceFiles/vucutImages/ayakB.webp', '/swipenglish/sourceFiles/vucutImages/ayakF.webp', '/swipenglish/sourceFiles/vucutSound/.mp3');
createCard('card4', '/swipenglish/sourceFiles/vucutImages/bacakB.webp', '/swipenglish/sourceFiles/vucutImages/bacakF.webp', '/swipenglish/sourceFiles/vucutSound/.mp3');
createCard('card5', '/swipenglish/sourceFiles/vucutImages/bilekB.webp', '/swipenglish/sourceFiles/vucutImages/bilekF.webp', '/swipenglish/sourceFiles/vucutSound/.mp3');
createCard('card6', '/swipenglish/sourceFiles/vucutImages/boyunF.webp', '/swipenglish/sourceFiles/vucutImages/boyunB.webp', '/swipenglish/sourceFiles/vucutSound/.mp3');
createCard('card7', '/swipenglish/sourceFiles/vucutImages/burunB.webp', '/swipenglish/sourceFiles/vucutImages/burunF.webp', '/swipenglish/sourceFiles/vucutSound/.mp3');
createCard('card8', '/swipenglish/sourceFiles/vucutImages/ceneB.webp', '/swipenglish/sourceFiles/vucutImages/ceneF.webp', '/swipenglish/sourceFiles/vucutSound/.mp3');
createCard('card9', '/swipenglish/sourceFiles/vucutImages/dirsekB.webp', '/swipenglish/sourceFiles/vucutImages/dirsekF.webp', '/swipenglish/sourceFiles/vucutSound/.mp3');
createCard('card10', '/swipenglish/sourceFiles/vucutImages/dizB.webp', '/swipenglish/sourceFiles/vucutImages/dizF.webp', '/swipenglish/sourceFiles/vucutSound/.mp3');
createCard('card11', '/swipenglish/sourceFiles/vucutImages/elB.webp', '/swipenglish/sourceFiles/vucutImages/elF.webp', '/swipenglish/sourceFiles/vucutSound/.mp3');
createCard('cardX', '/swipenglish/sourceFiles/vucutImages/gogusB.webp', '/swipenglish/sourceFiles/vucutImages/gogusF.webp', '/swipenglish/sourceFiles/vucutSound/.mp3');
createCard('cardX', '/swipenglish/sourceFiles/vucutImages/gozB.webp', '/swipenglish/sourceFiles/vucutImages/gozF.webp', '/swipenglish/sourceFiles/vucutSound/.mp3');
createCard('cardX', '/swipenglish/sourceFiles/vucutImages/kafaB.webp', '/swipenglish/sourceFiles/vucutImages/kafaF.webp', '/swipenglish/sourceFiles/vucutSound/.mp3');
createCard('cardX', '/swipenglish/sourceFiles/vucutImages/kalcaB.webp', '/swipenglish/sourceFiles/vucutImages/kalcaF.webp', '/swipenglish/sourceFiles/vucutSound/.mp3');
createCard('cardX', '/swipenglish/sourceFiles/vucutImages/karnB.webp', '/swipenglish/sourceFiles/vucutImages/karnF.webp', '/swipenglish/sourceFiles/vucutSound/.mp3');
createCard('cardX', '/swipenglish/sourceFiles/vucutImages/kolB.webp', '/swipenglish/sourceFiles/vucutImages/kolF.webp', '/swipenglish/sourceFiles/vucutSound/.mp3');
createCard('cardX', '/swipenglish/sourceFiles/vucutImages/kulakB.webp', '/swipenglish/sourceFiles/vucutImages/kulakF.webp', '/swipenglish/sourceFiles/vucutSound/.mp3');
createCard('cardX', '/swipenglish/sourceFiles/vucutImages/omuzB.webp', '/swipenglish/sourceFiles/vucutImages/omuzF.webp', '/swipenglish/sourceFiles/vucutSound/.mp3');
createCard('cardX', '/swipenglish/sourceFiles/vucutImages/parmakB.webp', '/swipenglish/sourceFiles/vucutImages/parmakF.webp', '/swipenglish/sourceFiles/vucutSound/.mp3');
createCard('cardX', '/swipenglish/sourceFiles/vucutImages/sacB.webp', '/swipenglish/sourceFiles/vucutImages/sacF.webp', '/swipenglish/sourceFiles/vucutSound/.mp3');
createCard('cardX', '/swipenglish/sourceFiles/vucutImages/vucutB.webp', '/swipenglish/sourceFiles/vucutImages/vucutF.webp', '/swipenglish/sourceFiles/vucutSound/.mp3');
createCard('cardX', '/swipenglish/sourceFiles/vucutImages/yanakB.webp', '/swipenglish/sourceFiles/vucutImages/yanakF.webp', '/swipenglish/sourceFiles/vucutSound/.mp3');
createCard('cardX', '/swipenglish/sourceFiles/vucutImages/yuzB.webp', '/swipenglish/sourceFiles/vucutImages/yuzF.webp', '/swipenglish/sourceFiles/vucutSound/.mp3');