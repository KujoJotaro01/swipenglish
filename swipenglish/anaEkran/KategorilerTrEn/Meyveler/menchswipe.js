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
// Create cards : createCard('card', 'images/.webp', 'images/.webp' , '.mp3');

createCard('card1', '/swipenglish/sourceFiles/meyvelerImages/ananasFront.webp', '/swipenglish/sourceFiles/meyvelerImages/ananasBack.webp', '/swipenglish/sourceFiles/meyvelerSound/ananas.mp3');
createCard('card2', '/swipenglish/sourceFiles/meyvelerImages/appleBack.webp', '/swipenglish/sourceFiles/meyvelerImages/appleFront.webp', '/swipenglish/sourceFiles/meyvelerSound/elma.mp3');
createCard('card3', '/swipenglish/sourceFiles/meyvelerImages/armutF.webp', '/swipenglish/sourceFiles/meyvelerImages/armutB.webp', '/swipenglish/sourceFiles/meyvelerSound/armut.mp3');
createCard('card4', '/swipenglish/sourceFiles/meyvelerImages/bananaBack.webp', '/swipenglish/sourceFiles/meyvelerImages/bananaFront.webp', '/swipenglish/sourceFiles/meyvelerSound/muz.mp3');
createCard('card5', '/swipenglish/sourceFiles/meyvelerImages/cherryB.webp', '/swipenglish/sourceFiles/meyvelerImages/cherryF.webp', '/swipenglish/sourceFiles/meyvelerSound/kiraz.mp3');
createCard('card6', '/swipenglish/sourceFiles/meyvelerImages/cilekArka.webp', '/swipenglish/sourceFiles/meyvelerImages/cilekOn.webp', '/swipenglish/sourceFiles/meyvelerSound/cilek.mp3');
createCard('card7', '/swipenglish/sourceFiles/meyvelerImages/garbuzB.webp', '/swipenglish/sourceFiles/meyvelerImages/garbuzF.webp', '/swipenglish/sourceFiles/meyvelerSound/karpuz.mp3');
createCard('card8', '/swipenglish/sourceFiles/meyvelerImages/grapeF.webp', '/swipenglish/sourceFiles/meyvelerImages/grapeB.webp', '/swipenglish/sourceFiles/meyvelerSound/.mp3');
createCard('card9', '/swipenglish/sourceFiles/meyvelerImages/kayısıB.webp', '/swipenglish/sourceFiles/meyvelerImages/kayısıF.webp', '/swipenglish/sourceFiles/meyvelerSound/kayisi.mp3');
createCard('card10', '/swipenglish/sourceFiles/meyvelerImages/kiviF.webp', '/swipenglish/sourceFiles/meyvelerImages/kiviB.webp', '/swipenglish/sourceFiles/meyvelerSound/kivi.mp3');
createCard('card11', '/swipenglish/sourceFiles/meyvelerImages/melonB.webp', '/swipenglish/sourceFiles/meyvelerImages/melonF.webp', '/swipenglish/sourceFiles/meyvelerSound/kavun.mp3');
createCard('card12', '/swipenglish/sourceFiles/meyvelerImages/orangeBack.webp', '/swipenglish/sourceFiles/meyvelerImages/orangeFront.webp', '/swipenglish/sourceFiles/meyvelerSound/.mp3');
createCard('card', '/swipenglish/sourceFiles/meyvelerImages/peachB.webp', '/swipenglish/sourceFiles/meyvelerImages/peachF.webp', '/swipenglish/sourceFiles/meyvelerSound/seftali.mp3');

