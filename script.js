// This function creates a grid of squares inside a container.
// The number of squares is size × size, and each square gets darker gradually
// every time the mouse hovers over it (using opacity).
function createGrid(size) {
  const container = document.getElementById("container");
  container.innerHTML = ''; // Clear old squares

  const squareSize = 960 / size; // Set size so grid fits in 960px

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");

    // Set the size of each square
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    // Set the initial background to black but fully transparent
    square.style.backgroundColor = "black";
    square.style.opacity = 0;

    // When mouse hovers over the square, increase opacity by 0.1
    // This creates a darkening effect up to full black
    square.addEventListener("mouseover", () => {
      let currentOpacity = parseFloat(square.style.opacity);
      if (currentOpacity < 1) {
        square.style.opacity = currentOpacity + 0.1;
      }
    });

    // Add the square to the container
    container.appendChild(square);
  }
}

// This code handles the "Resize Grid" button
// It asks the user for a new grid size and recreates the grid
const resizeButton = document.getElementById("resizeButton");

resizeButton.addEventListener("click", () => {
  let newSize = prompt("Enter new grid size (max 100):");
  newSize = parseInt(newSize);
  if (newSize > 0 && newSize <= 100) {
    createGrid(newSize);
  } else {
    alert("Please enter a number between 1 and 100");
  }
});
