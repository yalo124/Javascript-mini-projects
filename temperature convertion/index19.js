const value = document.getElementById("input");
const fahrenheit = document.getElementById("Tofahrenheit");
const celsius = document.getElementById("Tocelsius");
const submit = document.getElementById("submit");
const result = document.getElementById("p2");

function convertion() {
    let temp = Number(value.value);

    if (fahrenheit.checked) {
        temp = temp * 9 / 5 + 32;
        result.textContent = `${temp.toFixed(1)}°F`;
    } else if (celsius.checked) {
        temp = (temp - 32) * (5 / 9);
        result.textContent = `${temp.toFixed(1)}°C`;
    } else {
        result.textContent = "Please choose a unit";
    }
}

submit.addEventListener("click", convertion);