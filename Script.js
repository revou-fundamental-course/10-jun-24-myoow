function convert() {
    const celsius = document.getElementById("celsius").value;
    const fahrenheit = (parseFloat(celsius) * 9/5) + 32;
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
    document.getElementById("calculation").value = `${celsius}°C * (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
}

function reset() {
    document.getElementById("celsius").value = '';
    document.getElementById("fahrenheit").value = '';
    document.getElementById("calculation").value = '';
}

function reverse() {
    const fahrenheit = document.getElementById("fahrenheit").value;
    const celsius = (parseFloat(fahrenheit) - 32) * 5/9;
    document.getElementById("celsius").value = celsius.toFixed(2);
    document.getElementById("calculation").value = `${fahrenheit}°F - 32 * (5/9) = ${celsius.toFixed(2)}°C`;
}

function showConversionInfo() {
    const info = document.getElementById("conversionInfo");
    info.style.display = info.style.display === 'none' ? 'block' : 'none';
}
