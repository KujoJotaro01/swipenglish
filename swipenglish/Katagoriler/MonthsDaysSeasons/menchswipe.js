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

createCard('card1', 'images/autumnB.webp', 'images/autumnF.webp');
createCard('card2', 'images/springB.webp', 'images/springF.webp');
createCard('card3', 'images/summerB.webp', 'images/summerF.webp');
createCard('card4', 'images/winterB.webp', 'images/winterF.webp');
createCard('card5', 'images/ocakB.webp', 'images/ocakF.webp');
createCard('card6', 'images/subatB.webp', 'images/subatF.webp');
createCard('card7', 'images/martB.webp', 'images/martF.webp');
createCard('card8', 'images/nisanB.webp', 'images/nisanF.webp');
createCard('card9', 'images/mayısB.webp', 'images/mayısF.webp');
createCard('card10', 'images/haziranB.webp', 'images/haziranF.webp');
createCard('card11', 'images/temmuzB.webp', 'images/temmuzF.webp');
createCard('card12', 'images/agustB.webp', 'images/agustF.webp');
createCard('card13', 'images/eylulB.webp', 'images/eylulF.webp');
createCard('card14', 'images/octoberB.webp', 'images/octoberF.webp');
createCard('card15', 'images/kasımB.webp', 'images/kasımF.webp');
createCard('card16', 'images/decB.webp', 'images/decF.webp');
