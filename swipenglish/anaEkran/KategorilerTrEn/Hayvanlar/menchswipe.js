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
// Create cards // Create cards  createCard('card', 'image/.webp', 'image/.webp', 'sound/.mp3');
 
createCard('card1', '/swipenglish/sourceFiles/hayvanlarImages/aslan_copy.webp', '/swipenglish/sourceFiles/hayvanlarImages/lion_copy.webp', '/swipenglish/sourceFiles/hayvanlarSound/aslan.mp3');
createCard('card2', '/swipenglish/sourceFiles/hayvanlarImages/balk_copy.webp', '/swipenglish/sourceFiles/hayvanlarImages/fish_copy.webp', '/swipenglish/sourceFiles/hayvanlarSound/balk.mp3');
createCard('card3', '/swipenglish/sourceFiles/hayvanlarImages/kus_copy.webp', '/swipenglish/sourceFiles/hayvanlarImages/bird_copy.webp', '/swipenglish/sourceFiles/hayvanlarSound/kus.mp3');
createCard('card4', '/swipenglish/sourceFiles/hayvanlarImages/kedi_copy.webp', '/swipenglish/sourceFiles/hayvanlarImages/cat_copy.webp', '/swipenglish/sourceFiles/hayvanlarSound/kedi.mp3');
createCard('card5', '/swipenglish/sourceFiles/hayvanlarImages/inek_copy.webp', '/swipenglish/sourceFiles/hayvanlarImages/cow_copy.webp', '/swipenglish/sourceFiles/hayvanlarSound/inek.mp3');
createCard('card6', '/swipenglish/sourceFiles/hayvanlarImages/kopek_copy.webp', '/swipenglish/sourceFiles/hayvanlarImages/dog_copy.webp', '/swipenglish/sourceFiles/hayvanlarSound/kopek.mp3');
createCard('card7', '/swipenglish/sourceFiles/hayvanlarImages/ordek_copy.webp', '/swipenglish/sourceFiles/hayvanlarImages/duck_copy.webp', '/swipenglish/sourceFiles/hayvanlarSound/ordek.mp3');
createCard('card8', '/swipenglish/sourceFiles/hayvanlarImages/fil_copy.webp', '/swipenglish/sourceFiles/hayvanlarImages/elephant_copy.webp', '/swipenglish/sourceFiles/hayvanlarSound/fil.mp3');
createCard('card9', '/swipenglish/sourceFiles/hayvanlarImages/tilki_copy.webp', '/swipenglish/sourceFiles/hayvanlarImages/fox_copy.webp', '/swipenglish/sourceFiles/hayvanlarSound/tilki.mp3');
createCard('card10', '/swipenglish/sourceFiles/hayvanlarImages/kaplumba_copy.webp', '/swipenglish/sourceFiles/hayvanlarImages/turtle_copy.webp', '/swipenglish/sourceFiles/hayvanlarSound/kaplumbaga.mp3');
createCard('card11', '/swipenglish/sourceFiles/hayvanlarImages/koyun_copy.webp', '/swipenglish/sourceFiles/hayvanlarImages/sheep_copy.webp', '/swipenglish/sourceFiles/hayvanlarSound/koyun.mp3');
createCard('card12', '/swipenglish/sourceFiles/hayvanlarImages/kurt_copy.webp', '/swipenglish/sourceFiles/hayvanlarImages/wolf_copy.webp', '/swipenglish/sourceFiles/hayvanlarSound/kurt.mp3');
createCard('card13', '/swipenglish/sourceFiles/hayvanlarImages/maymun_copy.webp', '/swipenglish/sourceFiles/hayvanlarImages/monkey_copy.webp', '/swipenglish/sourceFiles/hayvanlarSound/maymun.mp3');
createCard('card14', '/swipenglish/sourceFiles/hayvanlarImages/fare_copy.webp', '/swipenglish/sourceFiles/hayvanlarImages/mouse_copy.webp', '/swipenglish/sourceFiles/hayvanlarSound/.mp3');
createCard('card15', '/swipenglish/sourceFiles/hayvanlarImages/tavsan_copy.webp', '/swipenglish/sourceFiles/hayvanlarImages/rabbit_copy.webp', '/swipenglish/sourceFiles/hayvanlarSound/tavsan.mp3');
createCard('card16', '/swipenglish/sourceFiles/hayvanlarImages/kopekbalg_copy.webp', '/swipenglish/sourceFiles/hayvanlarImages/shark_copy.webp', '/swipenglish/sourceFiles/hayvanlarSound/kopekbalg.mp3');
createCard('card17', '/swipenglish/sourceFiles/hayvanlarImages/ylan_copy.webp', '/swipenglish/sourceFiles/hayvanlarImages/snake_copy.webp', '/swipenglish/sourceFiles/hayvanlarSound/ylan.mp3');

