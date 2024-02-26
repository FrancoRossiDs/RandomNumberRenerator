// Selectors for HTML elements
const min = document.getElementById("min");
const max = document.getElementById("max");
const generate = document.getElementById("generate");
const result = document.getElementById("result");

// Function to set initial values for min and max
function inicio() {
    min.value = 0;
    max.value = 100;
}

// Call the function to set initial values
inicio();

// Event listener for "Enter" key on min input
min.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        let minValue = parseInt(min.value);
        let maxValue = parseInt(max.value);

        if (isNaN(minValue) || minValue < 0) {
            minValue = 0;
        } else if (minValue > maxValue) {
            minValue = maxValue - 2;
        }

        min.value = minValue;
    }
});

// Event listener for "Enter" key on max input
max.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        let maxValue = parseInt(max.value);

        if (isNaN(maxValue)) {
            maxValue = 0;
        }

        max.value = maxValue;
    }
});

// Event listener for "Generate" button click
generate.addEventListener('click', () => {
    let minValue = parseInt(min.value);
    let maxValue = parseInt(max.value);

    if (isNaN(minValue) || minValue < 0) {
        minValue = 0;
    }
    if (minValue > maxValue) {
        minValue = maxValue - 2;
    }
    min.value = minValue;

    // Generate a random number within the specified range and display it
    const randomNumber = Math.floor(Math.random() * (maxValue - minValue - 1) + minValue + 1);
    result.innerHTML = randomNumber;
});
