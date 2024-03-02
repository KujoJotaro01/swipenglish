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
// Create cards createCard('card', 'image/.webp', 'image/.webp' ,'sound/.mp3');

createCard('card5', 'images/ocakF.webp', 'images/ocakB.webp', 'sound/ocak.mp3');
createCard('card6', 'images/subatF.webp', 'images/subatB.webp', 'sound/subat.mp3');
createCard('card7', 'images/martF.webp', 'images/martB.webp', 'sound/mart.mp3');
createCard('card8', 'images/nisanF.webp', 'images/nisanB.webp', 'sound/nisan.mp3');
createCard('card9', 'images/mayısF.webp', 'images/mayısB.webp', 'sound/mayis.mp3');
createCard('card10', 'images/haziranF.webp', 'images/haziranB.webp', 'sound/haziran.mp3');
createCard('card11', 'images/temmuzF.webp', 'images/temmuzB.webp', 'sound/temmuz.mp3');
createCard('card12', 'images/agustF.webp', 'images/agustB.webp', 'sound/agustos.mp3');
createCard('card13', 'images/eylulF.webp', 'images/eylulB.webp', 'sound/eylul.mp3');
createCard('card14', 'images/octoberF.webp', 'images/octoberB.webp', 'sound/ekim.mp3');
createCard('card15', 'images/kasımF.webp', 'images/kasımB.webp', 'sound/kasim.mp3');
createCard('card16', 'images/decF.webp', 'images/decB.webp', 'sound/aralik.mp3');
