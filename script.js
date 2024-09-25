function clearScreen() {
    document.getElementById("screen").value = "";
}

function appendCharacter(character) {
    document.getElementById("screen").value += character;
}

function backspace() {
    let screen = document.getElementById("screen").value;
    document.getElementById("screen").value = screen.slice(0, -1);
}

function calculate() {
    try {
        let screen = document.getElementById("screen").value;
        document.getElementById("screen").value = eval(screen);
    } catch (e) {
        alert("Invalid Expression");
    }
}