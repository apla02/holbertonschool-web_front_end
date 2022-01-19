function changeMode(size, weight, transform, background, color) {
    document.documentElement.style["font-size"] = size;
    document.documentElement.style["font-weight"] = weight;
    document.documentElement.style["text-transform"] = transform;
    document.documentElement.style["background-color"] = background;
    document.documentElement.style["color"] = color;
}

function main() {
    let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    // Create DOM elements
    let parag = document.createElement("p");
    let spooky_button = document.createElement("button");
    let dark_button = document.createElement("button");
    let scream_button = document.createElement("button");

    // Adding text to the elements
    parag.innerHTML = "Welcome Holberton!";
    spooky_button.innerHTML = "Spooky";
    dark_button.innerHTML = "Dark mode";
    scream_button.innerHTML = "Scream mode";

    // Adding elements to the body
    document.body.appendChild(parag);
    document.body.appendChild(spooky_button);
    document.body.appendChild(dark_button);
    document.body.appendChild(scream_button);

    // adding events to the buttons
    spooky_button.onclick = spooky;
    dark_button.onclick = darkMode;
    scream_button.onclick = screamMode;
}

main();