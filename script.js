function bclick(val)
{
    document.getElementById("screen").value+=val;
}

function clearscr()
{
    document.getElementById("screen").value=""
}

function equalClick(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}

function backspace() {
    var screenValue = document.getElementById("screen").value;
    document.getElementById("screen").value = screenValue.slice(0, -1);
}

function percentage() {
    var text = document.getElementById("screen").value;
    var value = parseFloat(text);
    if (!isNaN(value)) {
        value = value / 100;
        document.getElementById("screen").value = value;
    }
}

function reciprocal() {
    var text = document.getElementById("screen").value;
    var value = parseFloat(text);
    if (!isNaN(value) && value !== 0) {
        value = 1 / value;
        document.getElementById("screen").value = value;
    } else {
        document.getElementById("screen").value = "Error";
    }
}

function square() {
    var text = document.getElementById("screen").value;
    var value = parseFloat(text);
    if (!isNaN(value)) {
        value = value * value;
        document.getElementById("screen").value = value;
    }
}

function squareRoot() {
    var text = document.getElementById("screen").value;
    var value = parseFloat(text);
    if (!isNaN(value) && value >= 0) {
        value = Math.sqrt(value);
        document.getElementById("screen").value = value;
    } else {
        document.getElementById("screen").value = "Error";
    }
}

function addMinusSign() {
    var currentValue = document.getElementById("screen").value;
    if (currentValue.length > 0 && currentValue !== "Error") {
        // Check if the first character is already a minus sign, and remove it if present
        if (currentValue[0] === '-') {
            currentValue = currentValue.substring(1);
        } else {
            currentValue = "-" + currentValue;
        }
        document.getElementById("screen").value = currentValue;
    }
}