// script.js

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {

    // 1. Get the elements from the DOM
    const section = document.getElementById('map-container');
    const display = document.getElementById('coord-display');

    // 2. Add an event listener for mouse movement
    section.addEventListener('mousemove', function(event) {
        
        // 3. Get the position of the mouse relative to the SECTION
        // event.clientX/Y gives coordinates relative to the viewport.
        // section.getBoundingClientRect() gives the section's position relative to the viewport.
        const rect = section.getBoundingClientRect();
        
        // Calculate X: mouse X - section's left edge
        let x = event.clientX - rect.left;
        
        // Calculate Y: mouse Y - section's top edge
        // This gives a value where 0 is at the TOP of the section.
        let y = event.clientY - rect.top;

        // 4. FLIP THE Y-AXIS
        // We want the origin (0,0) at the BOTTOM left.
        // So we subtract the calculated Y from the total height of the section.
        y = rect.height - y;

        // 5. Update the display element with the coordinates.
        // Use Math.floor() to get clean integer values.
        display.textContent = `X: ${Math.floor(x)}, Y: ${Math.floor(y)}`;
    });

});