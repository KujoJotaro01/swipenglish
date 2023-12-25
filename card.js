let isDragging = false;
let initialX;
let initialY;

function startDragging(event) 
{
    isDragging = true;
    initialX = event.clientX || event.touches[0].clientX;
    initialY = event.clientY || event.touches[0].clientY;
}

function stopDragging() 
{
    isDragging = false;
}

function handleDragEvent(event) 
{
    if (isDragging) {
        const card = event.target.closest('.card');
        const deltaX = (event.clientX || event.touches[0].clientX) - initialX;
        const deltaY = (event.clientY || event.touches[0].clientY) - initialY;

        if (Math.abs(deltaX) > 60) {
            card.classList.toggle('flipped');
            stopDragging();
        if(targetCard (deltaY < 60) ) {
            const targetId = targetCard.id;
            window.location.href = `#${targetId}`;
        }
        } 
    }
}

function attachDragListeners()  // burası düzenlenicek
{
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mousedown', startDragging);
        card.addEventListener('mouseup', stopDragging);
        card.addEventListener('mousemove', handleDragEvent);

        card.addEventListener('touchstart', startDragging);
        card.addEventListener('touchend', stopDragging);
        card.addEventListener('touchmove', handleDragEvent);
    });
}

document.getElementById('card').addEventListener('touchmove', function (event) {
    if (isDragging) {
        const card = document.querySelector('.card');
        const deltaX = event.touches[0].clientX - initialX;

        if (Math.abs(deltaX) > 10) {
            card.classList.toggle('flipped');
            stopDragging();
            {
                if(targetCard (deltaY < 60) ) {
                    const targetId = targetCard.id;
                    window.location.href = `#${targetId}`; // index +1 or -1 //
                }
            }
        }
      
    }
});

window.onload = function () 
{
    attachDragListeners();
};
