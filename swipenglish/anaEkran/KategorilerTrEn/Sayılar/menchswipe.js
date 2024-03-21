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

// Create cards createCard('cardX', '/swipenglish/sourceFiles/sayılarImages/.webp', '/swipenglish/sourceFiles/sayılarImages/.webp' ,'/swipenglish/sourceFiles/sayılarSound/.mp3');

createCard('card1', '/swipenglish/sourceFiles/sayılarImages/zeroB.webp', '/swipenglish/sourceFiles/sayılarImages/zeroF.webp', '/swipenglish/sourceFiles/sayılarSound/sifir.mp3');
createCard('card2', '/swipenglish/sourceFiles/sayılarImages/oneB.webp', '/swipenglish/sourceFiles/sayılarImages/oneF.webp', '/swipenglish/sourceFiles/sayılarSound/bir.mp3');
createCard('card3', '/swipenglish/sourceFiles/sayılarImages/twoB.webp', '/swipenglish/sourceFiles/sayılarImages/twoF.webp', '/swipenglish/sourceFiles/sayılarSound/iki.mp3');
createCard('card4', '/swipenglish/sourceFiles/sayılarImages/threeB.webp', '/swipenglish/sourceFiles/sayılarImages/threeF.webp', '/swipenglish/sourceFiles/sayılarSound/uc.mp3');
createCard('card5', '/swipenglish/sourceFiles/sayılarImages/fourB.webp', '/swipenglish/sourceFiles/sayılarImages/fourF.webp', '/swipenglish/sourceFiles/sayılarSound/dort.mp3');
createCard('card6', '/swipenglish/sourceFiles/sayılarImages/fiveB.webp', '/swipenglish/sourceFiles/sayılarImages/fiveF.webp', '/swipenglish/sourceFiles/sayılarSound/bes.mp3');
createCard('card7', '/swipenglish/sourceFiles/sayılarImages/sixB.webp', '/swipenglish/sourceFiles/sayılarImages/sixF.webp', '/swipenglish/sourceFiles/sayılarSound/alti.mp3');
createCard('card8', '/swipenglish/sourceFiles/sayılarImages/sevenB.webp', '/swipenglish/sourceFiles/sayılarImages/sevenF.webp', '/swipenglish/sourceFiles/sayılarSound/yedi.mp3');
createCard('card9', '/swipenglish/sourceFiles/sayılarImages/eightB.webp', '/swipenglish/sourceFiles/sayılarImages/eightF.webp', '/swipenglish/sourceFiles/sayılarSound/sekiz.mp3');
createCard('card10', '/swipenglish/sourceFiles/sayılarImages/nineB.webp', '/swipenglish/sourceFiles/sayılarImages/nineF.webp', '/swipenglish/sourceFiles/sayılarSound/dokuz.mp3');
createCard('card11', '/swipenglish/sourceFiles/sayılarImages/tenB.webp', '/swipenglish/sourceFiles/sayılarImages/tenF.webp', '/swipenglish/sourceFiles/sayılarSound/on.mp3');

