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
// Create cards createCard('cardX', '/swipenglish/sourceFiles/aylarImages/.webp', '/swipenglish/sourceFiles/aylarImages/.webp' ,'/swipenglish/sourceFiles/aylarSound/.mp3');

createCard('card1', '/swipenglish/sourceFiles/aylarImages/ocakF.webp', '/swipenglish/sourceFiles/aylarImages/ocakB.webp', '/swipenglish/sourceFiles/aylarSound/ocak.mp3');
createCard('card2', '/swipenglish/sourceFiles/aylarImages/subatF.webp', '/swipenglish/sourceFiles/aylarImages/subatB.webp', '/swipenglish/sourceFiles/aylarSound/subat.mp3');
createCard('card3', '/swipenglish/sourceFiles/aylarImages/martF.webp', '/swipenglish/sourceFiles/aylarImages/martB.webp', '/swipenglish/sourceFiles/aylarSound/mart.mp3');
createCard('card4', '/swipenglish/sourceFiles/aylarImages/nisanF.webp', '/swipenglish/sourceFiles/aylarImages/nisanB.webp', '/swipenglish/sourceFiles/aylarSound/nisan.mp3');
createCard('card5', '/swipenglish/sourceFiles/aylarImages/mayısF.webp', '/swipenglish/sourceFiles/aylarImages/mayısB.webp', '/swipenglish/sourceFiles/aylarSound/mayis.mp3');
createCard('card6', '/swipenglish/sourceFiles/aylarImages/haziranF.webp', '/swipenglish/sourceFiles/aylarImages/haziranB.webp', '/swipenglish/sourceFiles/aylarSound/haziran.mp3');
createCard('card7', '/swipenglish/sourceFiles/aylarImages/temmuzF.webp', '/swipenglish/sourceFiles/aylarImages/temmuzB.webp', '/swipenglish/sourceFiles/aylarSound/temmuz.mp3');
createCard('card8', '/swipenglish/sourceFiles/aylarImages/agustF.webp', '/swipenglish/sourceFiles/aylarImages/agustB.webp', '/swipenglish/sourceFiles/aylarSound/agustos.mp3');
createCard('card9', '/swipenglish/sourceFiles/aylarImages/eylulF.webp', '/swipenglish/sourceFiles/aylarImages/eylulB.webp', '/swipenglish/sourceFiles/aylarSound/eylul.mp3');
createCard('card10', '/swipenglish/sourceFiles/aylarImages/octoberF.webp', '/swipenglish/sourceFiles/aylarImages/octoberB.webp', '/swipenglish/sourceFiles/aylarSound/ekim.mp3');
createCard('card11', '/swipenglish/sourceFiles/aylarImages/kasımF.webp', '/swipenglish/sourceFiles/aylarImages/kasımB.webp', '/swipenglish/sourceFiles/aylarSound/kasim.mp3');
createCard('card12', '/swipenglish/sourceFiles/aylarImages/decF.webp', '/swipenglish/sourceFiles/aylarImages/decB.webp', '/swipenglish/sourceFiles/aylarSound/aralik.mp3');
