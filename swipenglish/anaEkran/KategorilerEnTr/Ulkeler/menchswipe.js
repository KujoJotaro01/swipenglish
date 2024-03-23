function createCard(id, backImageSrc, frontImageSrc, soundSrc) {
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
// Create cards // Create cards  createCard('card', 'image/.webp', 'image/.webp', 'sound/.mp3');
 
createCard('card1', '/swipenglish/sourceFiles/ulkelerImages/almanya_copy.webp', '/swipenglish/sourceFiles/ulkelerImages/germany_copy.webp', 'swipenglish/sourceFiles/ulkelerSound/almanya.mp3');
createCard('card2', '/swipenglish/sourceFiles/ulkelerImages/amerika_copy.webp', '/swipenglish/sourceFiles/ulkelerImages/america_copy.webp', 'swipenglish/sourceFiles/ulkelerSound/amerika.mp3');
createCard('card3', '/swipenglish/sourceFiles/ulkelerImages/arjantin_copy.webp', '/swipenglish/sourceFiles/ulkelerImages/argentina_copy.webp', 'swipenglish/sourceFiles/ulkelerSound/arjantin.mp3');
createCard('card4', '/swipenglish/sourceFiles/ulkelerImages/brazilya_copy.webp', '/swipenglish/sourceFiles/ulkelerImages/brazil_copy.webp5', 'swipenglish/sourceFiles/ulkelerSound/brazilya.mp3');
createCard('card6', '/swipenglish/sourceFiles/ulkelerImages/cin_copy.webp', '/swipenglish/sourceFiles/ulkelerImages/china_copy.webp', 'swipenglish/sourceFiles/ulkelerSound/.mp3');
createCard('card7', '/swipenglish/sourceFiles/ulkelerImages/msr_copy.webp', '/swipenglish/sourceFiles/ulkelerImages/egypt_copy.webp', 'swipenglish/sourceFiles/ulkelerSound/msr.mp3');
createCard('card8', '/swipenglish/sourceFiles/ulkelerImages/ingiltere_copy.webp', '/swipenglish/sourceFiles/ulkelerImages/england_copy.webp', 'swipenglish/sourceFiles/ulkelerSound/ingiltere.mp3');
createCard('card9', '/swipenglish/sourceFiles/ulkelerImages/fas_copy.webp', '/swipenglish/sourceFiles/ulkelerImages/morocco_copy.webp', 'swipenglish/sourceFiles/ulkelerSound/fas.mp3');
createCard('card10', '/swipenglish/sourceFiles/ulkelerImages/fransa_copy.webp', '/swipenglish/sourceFiles/ulkelerImages/france_copy.webp', 'swipenglish/sourceFiles/ulkelerSound/fransa.mp3');
createCard('card11', '/swipenglish/sourceFiles/ulkelerImages/ispanya_copy.webp', '/swipenglish/sourceFiles/ulkelerImages/spain_copy.webp', 'swipenglish/sourceFiles/ulkelerSound/ispanya.mp3');
createCard('card12', '/swipenglish/sourceFiles/ulkelerImages/italya_copy.webp', '/swipenglish/sourceFiles/ulkelerImages/taly_copy.webp', 'swipenglish/sourceFiles/ulkelerSound/italya.mp3');
createCard('card13', '/swipenglish/sourceFiles/ulkelerImages/kore_copy.webp', '/swipenglish/sourceFiles/ulkelerImages/skore_copy.webp', 'swipenglish/sourceFiles/ulkelerSound/guney_kore.mp3');


createCard('card', '/swipenglish/sourceFiles/ulkelerImages/rusya_copy.webp', '/swipenglish/sourceFiles/ulkelerImages/russia_copy.webp', 'swipenglish/sourceFiles/ulkelerSound/rusya.mp3');