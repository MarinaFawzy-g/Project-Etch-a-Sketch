// This function creates a grid of squares inside a container.
// The total number of squares is (size x size).
// Each square changes to a random color when the mouse hovers over it.
function createGrid(size) {
  const container = document.getElementById("container");
  container.innerHTML = '';
  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener("mouseover", () => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });

    container.appendChild(square);
  }
}

// This part listens for a button click.
// It asks the user to enter the grid size and creates a new grid with that size.
// If the input is not valid (not between 1 and 100), it shows an alert.
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
createGrid(16);

