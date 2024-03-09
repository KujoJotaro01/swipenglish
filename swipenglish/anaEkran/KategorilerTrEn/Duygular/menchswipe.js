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
//createCard('cardX', '/swipenglish/sourceFiles/IfadelerImages/.webp','/swipenglish/sourceFiles/IfadelerImages/.webp' ,'/swipenglish/sourceFiles/IfadelerSound/.');

createCard('card1', '/swipenglish/sourceFiles/IfadelerImages/endiseB.webp', '/swipenglish/sourceFiles/IfadelerImages/endiseF.webp', '/swipenglish/sourceFiles/IfadelerSound/endiseli.mp3');
createCard('card2', '/swipenglish/sourceFiles/IfadelerImages/hastaB.webp', 'swipenglish/sourceFiles/IfadelerImages/hastaF.webp', '/swipenglish/sourceFiles/IfadelerSound/hasta.mp3');
createCard('card3', '/swipenglish/sourceFiles/IfadelerImages/kizginB.webp', '/swipenglish/sourceFiles/IfadelerImages/kizginF.webp', '/swipenglish/sourceFiles/IfadelerSound/sinirli.mp3');
createCard('card4', '/swipenglish/sourceFiles/IfadelerImages/korkmusB.webp','/swipenglish/sourceFiles/IfadelerImages/korkmusF.webp' ,'/swipenglish/sourceFiles/IfadelerSound/korkmus.mp3');
createCard('card5', '/swipenglish/sourceFiles/IfadelerImages/mutluB.webp','/swipenglish/sourceFiles/IfadelerImages/mutluF.webp' ,'/swipenglish/sourceFiles/IfadelerSound/mutlu.mp3.');
createCard('card6', '/swipenglish/sourceFiles/IfadelerImages/stresliB.webp','/swipenglish/sourceFiles/IfadelerImages/stresliF.webp' ,'/swipenglish/sourceFiles/IfadelerSound/.');
createCard('card7', '/swipenglish/sourceFiles/IfadelerImages/uykuluB.webp','/swipenglish/sourceFiles/IfadelerImages/uykuluF.webp' ,'/swipenglish/sourceFiles/IfadelerSound/.');
createCard('card8', '/swipenglish/sourceFiles/IfadelerImages/uzgunB.webp','/swipenglish/sourceFiles/IfadelerImages/uzgunF.webp' ,'/swipenglish/sourceFiles/IfadelerSound/uzgun.mp3.');
createCard('card9', '/swipenglish/sourceFiles/IfadelerImages/yorgunB.webp','/swipenglish/sourceFiles/IfadelerImages/yorgunF.webp' ,'/swipenglish/sourceFiles/IfadelerSound/yorgun.mp3');