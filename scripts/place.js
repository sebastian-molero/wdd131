const temperature = 12;
const wind = 5;

function calculateWindChill(temperature, wind) {
    return(13.12 + (0.6215 * temperature) - 11.37 * wind ** 0.16 + 0.3965 * temperature * wind ** 0.16).toFixed(2);
}
document.getElementById("windChillResult").innerHTML = `${calculateWindChill(temperature, wind)}`;