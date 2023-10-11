// Function to generate a random integer between min and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random RGB color
function getRandomColor() {
    const red = getRandomInt(0, 255);
    const green = getRandomInt(0, 255);
    const blue = getRandomInt(0, 255);
    return `rgb(${red}, ${green}, ${blue})`;
}

// Update the color box background and text when the button is clicked
const colorBox = document.getElementById("color-box");
const generateBtn = document.getElementById("generate-btn");
const quantityInput = document.getElementById("quantity");

generateBtn.addEventListener("click", function () {
    const quantity = parseInt(quantityInput.value);
    colorBox.innerHTML = ""; // Clear previous colors
    for (let i = 0; i < quantity; i++) {
        const randomColor = getRandomColor();
        const colorDiv = document.createElement("div");
        colorDiv.className = "color-box";
        colorDiv.style.backgroundColor = randomColor;
        colorBox.appendChild(colorDiv);
    }
});

// Increase and decrease the quantity of colors
document.getElementById("increase-quantity").addEventListener("click", function () {
    quantityInput.value = parseInt(quantityInput.value) + 1;
});

document.getElementById("decrease-quantity").addEventListener("click", function () {
    const currentQuantity = parseInt(quantityInput.value);
    if (currentQuantity > 1) {
        quantityInput.value = currentQuantity - 1;
    }
});
