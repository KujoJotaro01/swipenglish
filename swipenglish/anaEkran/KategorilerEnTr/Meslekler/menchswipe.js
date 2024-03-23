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
// Create cards ('cardX', '/swipenglish/sourceFiles/mesleklerImages/ _copy.webp', '/swipenglish/sourceFiles/mesleklerImages/ _copy.webp', '.mp3');

createCard('card1', '/swipenglish/sourceFiles/mesleklerImages/mimar_copy.webp', '/swipenglish/sourceFiles/mesleklerImages/architect_copy.webp', '.mp3');
createCard('card2', '/swipenglish/sourceFiles/mesleklerImages/ressam_copy.webp', '/swipenglish/sourceFiles/mesleklerImages/artist_copy.webp', '.mp3');
createCard('card3', '/swipenglish/sourceFiles/mesleklerImages/asc_copy.webp', '/swipenglish/sourceFiles/mesleklerImages/chef_copy.webp', '.mp3');
createCard('card4', '/swipenglish/sourceFiles/mesleklerImages/avukat_copy.webp', '/swipenglish/sourceFiles/mesleklerImages/lawyer_copy.webp', '.mp3');
createCard('card5', '/swipenglish/sourceFiles/mesleklerImages/frnc.webp', '/swipenglish/sourceFiles/mesleklerImages/baker.webp', '.mp3');
createCard('card6', '/swipenglish/sourceFiles/mesleklerImages/ciftci.webp', '/swipenglish/sourceFiles/mesleklerImages/farmer.webp', '.mp3');
createCard('card7', '/swipenglish/sourceFiles/mesleklerImages/doktor.webp', '/swipenglish/sourceFiles/mesleklerImages/doctor.webp', '.mp3');
createCard('card8', '/swipenglish/sourceFiles/mesleklerImages/muhendis_copy.webp', '/swipenglish/sourceFiles/mesleklerImages/engineer_copy.webp', '.mp3');
createCard('card9', '/swipenglish/sourceFiles/mesleklerImages/ogretmen.webp', '/swipenglish/sourceFiles/mesleklerImages/teacher_copy.webp', '.mp3');
createCard('card10', '/swipenglish/sourceFiles/mesleklerImages/polis.webp', '/swipenglish/sourceFiles/mesleklerImages/police.webp', '.mp3');
