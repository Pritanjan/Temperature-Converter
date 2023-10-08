function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById("temperature").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    let result;

    if (fromUnit === "celsius" && toUnit === "fahrenheit") {
        result = (temperatureInput * 9/5) + 32;
    } else if (fromUnit === "celsius" && toUnit === "kelvin") {
        result = temperatureInput + 273.15;
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
        result = (temperatureInput - 32) * 5/9;
    } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
        result = ((temperatureInput - 32) * 5/9) + 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "celsius") {
        result = temperatureInput - 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
        result = ((temperatureInput - 273.15) * 9/5) + 32;
    } else {
        result = temperatureInput; // No conversion needed
    }

    document.getElementById("result").textContent = `Result: ${result.toFixed(2)} ${toUnit}`;
}

function clearFields() {
    // Clear the input and select fields
    document.getElementById("temperature").value = "";
    document.getElementById("fromUnit").selectedIndex = 0; // Set the first option as selected
    document.getElementById("toUnit").selectedIndex = 0; // Set the first option as selected

    // Clear the result span
    document.getElementById("result").textContent = "";
}
