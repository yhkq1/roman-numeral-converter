const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("output");

const convertToRoman = (num) => {
    const romanRef = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1]
    ];

    let romanResult = [];

    romanRef.forEach((pair) => {
        while (num >= pair[1]) {
            romanResult.push(pair[0]);
            num -= pair[1];
        }
    });

    return romanResult.join("");
};

function errorMessages() {
    result.innerText = "";

    const inputValue = parseInt(input.value, 10);

    if (isNaN(inputValue) || input.value === "") {
        result.innerText = "Please enter a valid number";
        setTimeout(() => (result.innerText = ""), 2000);
    } else if (inputValue < 1) {
        result.innerText = "Please enter a number greater than or equal to 1";
        setTimeout(() => (result.innerText = ""), 2000);
    } else if (inputValue > 3999) {
        result.innerText = "Please enter a number less than or equal to 3999";
        setTimeout(() => (result.innerText = ""), 2000);
    } else {
        convertAndDisplayRoman(inputValue);
    }
}

function convertAndDisplayRoman(num) {
    const romanNumeral = convertToRoman(num);
    result.innerText = romanNumeral;
}

convertBtn.addEventListener("click", errorMessages);
