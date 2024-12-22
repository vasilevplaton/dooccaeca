document.addEventListener('click', function(event) {
    const point = {
        x: event.clientX,
        y: event.clientY
    };
    console.log(`Mouse clicked at (${point.x}, ${point.y})`);
});
