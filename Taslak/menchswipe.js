function createCard(id, frontImageSrc, backImageSrc) {
    const section = document.createElement('section');
    section.innerHTML = `
        <div>
            <div class="card" id="${id}" onmousedown="startDragging(event, ${id})" onmouseup="stopDragging(${id})">
                <div class="card-inner">
                    <div class="card-front">
                        <img loading="eager" src="${frontImageSrc}">
                    </div>
                    <div class="card-back">
                        <img loading="eager" src="${backImageSrc}">
                    </div>
                </div>
            </div>
        </div>
    `;
    document.getElementById('main-container').appendChild(section);
    setupDraggableCard(id);
}

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
// Create cards createCard('card', 'image/.webp', 'image/.webp');

createCard('card1', 'Back.webp', 'Front.webp');
createCard('card2', 'Back.webp', 'Front.webp');
