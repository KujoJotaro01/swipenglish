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
            <img src="image/sound.png" alt="Play Sound">
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
}

// Create cards  createCard('card', 'image/.webp', 'image/.webp');

createCard('card1', 'image/zeroB.webp', 'image/zeroF.webp' , 'sound/sifir.mp3');
createCard('card2', 'image/oneB.webp', 'image/oneF.webp' ,'sound/bir.mp3');
createCard('card3', 'image/twoB.webp', 'image/twoF.webp','sound/iki.mp3');
createCard('card4','image/threeB.webp','image/threeF.webp','sound/uc.mp3')
createCard('card5', 'image/fourB.webp', 'image/fourF.webp','sound/dort.mp3');
createCard('card6', 'image/fiveB.webp', 'image/fiveF.webp','sound/bes.mp3'); 
createCard('card7', 'image/sixB.webp', 'image/sixF.webp','sound/alti.mp3');
createCard('card8', 'image/sevenB.webp', 'image/sevenF.webp','sound/yedi.mp3');
createCard('card9', 'image/eightB.webp', 'image/eightF.webp','sound/sekiz.mp3');
createCard('card10', 'image/nineB.webp', 'image/nineF.webp','sound/dokuz.mp3');
createCard('card11', 'image/tenB.webp', 'image/tenF.webp','sound/on.mp3');
