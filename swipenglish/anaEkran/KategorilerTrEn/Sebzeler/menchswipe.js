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
// Create cards // Create cards  createCard('card', 'image/.webp', 'image/.webp', 'sound/.mp3');

createCard('card1', '/swipenglish/sourceFiles/sebzelerImages/acibiberB.webp', '/swipenglish/sourceFiles/sebzelerImages/acibiberF.webp', '/swipenglish/sourceFiles/sebzelerSound/.mp3');
createCard('card2', '/swipenglish/sourceFiles/sebzelerImages/balkabagF.webp', '/swipenglish/sourceFiles/sebzelerImages/balkabagB.webp', '/swipenglish/sourceFiles/sebzelerSound/.mp3');
createCard('card3', '/swipenglish/sourceFiles/sebzelerImages/brokoliF.webp', '/swipenglish/sourceFiles/sebzelerImages/brokoliB.webp', '/swipenglish/sourceFiles/sebzelerSound/.mp3');
createCard('card4', '/swipenglish/sourceFiles/sebzelerImages/domatesB.webp', '/swipenglish/sourceFiles/sebzelerImages/domatesF.webp', '/swipenglish/sourceFiles/sebzelerSound/domates.mp3');
createCard('card5', '/swipenglish/sourceFiles/sebzelerImages/kabakB.webp', '/swipenglish/sourceFiles/sebzelerImages/kabakF.webp', '/swipenglish/sourceFiles/sebzelerSound/.mp3');
createCard('card6', '/swipenglish/sourceFiles/sebzelerImages/karnabaharF.webp', '/swipenglish/sourceFiles/sebzelerImages/karnabaharB.webp', '/swipenglish/sourceFiles/sebzelerSound/.mp3');
createCard('card7', '/swipenglish/sourceFiles/sebzelerImages/mantarB.webp', '/swipenglish/sourceFiles/sebzelerImages/mantarF.webp', '/swipenglish/sourceFiles/sebzelerSound/.mp3');
createCard('card8', '/swipenglish/sourceFiles/sebzelerImages/misirF.webp', '/swipenglish/sourceFiles/sebzelerImages/misirB.webp', '/swipenglish/sourceFiles/sebzelerSound/.mp3');
createCard('card9', '/swipenglish/sourceFiles/sebzelerImages/patatesF.webp', '/swipenglish/sourceFiles/sebzelerImages/patatesB.webp', '/swipenglish/sourceFiles/sebzelerSound/patates.mp3');
createCard('card10', '/swipenglish/sourceFiles/sebzelerImages/patlcanF.webp', '/swipenglish/sourceFiles/sebzelerImages/patlcanF.webp', '/swipenglish/sourceFiles/sebzelerSound/.mp3');
createCard('card11', '/swipenglish/sourceFiles/sebzelerImages/salatalkB.webp', '/swipenglish/sourceFiles/sebzelerImages/salatalkF.webp', '/swipenglish/sourceFiles/sebzelerSound/salatalik.mp3');
createCard('card12', '/swipenglish/sourceFiles/sebzelerImages/sarmsakB.webp', '/swipenglish/sourceFiles/sebzelerImages/sarmsakF.webp', '/swipenglish/sourceFiles/sebzelerSound/.mp3');
createCard('card13', '/swipenglish/sourceFiles/sebzelerImages/havucB.webp', '/swipenglish/sourceFiles/sebzelerImages/havucF.webp', '/swipenglish/sourceFiles/sebzelerSound/havuc.mp3');
createCard('card14', '/swipenglish/sourceFiles/sebzelerImages/soganB.webp', '/swipenglish/sourceFiles/sebzelerImages/soganF.webp', '/swipenglish/sourceFiles/sebzelerSound/.mp3');
createCard('card15', '/swipenglish/sourceFiles/sebzelerImages/turpF.webp', '/swipenglish/sourceFiles/sebzelerImages/turpB.webp', '/swipenglish/sourceFiles/sebzelerSound/.mp3');
