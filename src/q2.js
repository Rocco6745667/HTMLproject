// by Rocco Ali 218008847 and Daniel Gherman 217284506
// Array of possible colors
let colors = ["#FF0000", "#0000FF", "#008000", "#FFA500", "#FFD700", "#808080"];
// Main display container
let container = document.querySelector(".main-container");
// Track max and current number of boxes
let boxCount = 100;

// Generate 100 boxes
function generateBoxes() {
    for (let i = 0; i < boxCount; i++) {
        let square = document.createElement('div');

        // 20px by 20px square
        let size = "20px"
        square.style.width = size;
        square.style.height = size;

        // Select a random index from the colors array
        let background = colors[Math.floor(Math.random() * colors.length)]
        // Add color and border to box
        square.style.backgroundColor = background
        square.style.border = "2px solid black"

        // Generate a random number between 10 - 410 to represent position
        // 10 - 410 is used because of 10px margin in document (0-400)
        let posTop = Math.floor(Math.random() * 400 + 10)
        let posLeft = Math.floor(Math.random() * 400 + 10)
        // Set positions from top and left of document
        square.style.position = "absolute"
        square.style.top = posTop + "px";
        square.style.left = posLeft + "px";

        // Add event for mouse hover to remove square and change box count
        square.addEventListener("mouseover", function() {
            container.removeChild(this)
            boxCount--;

            // Show dialog if last square is being delete to generate more squares
            if (boxCount == 0) {
                let selection = confirm("Last one! \n\nGenerate More?");
                // Ok selected
                if (selection) {
                    boxCount = 100
                    generateBoxes()
                }
            }
        });

        // Attach square to main display container
        container.appendChild(square)
    }
}

generateBoxes()
