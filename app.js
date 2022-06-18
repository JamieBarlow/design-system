// Variables to select example text box for styling
let testStyles = document.getElementById("tryout");
const pgraphs = testStyles.getElementsByTagName("p");

 // Select bg color
 document.getElementById("color-select").onchange = function() {
    let color = document.getElementById("color-select").value;
    switch (color) {
        case "0":
            testStyles.style.backgroundColor = "#0C1446";
            break;
        case "1":
            testStyles.style.backgroundColor = "#87ACA3";
            break;
        case "2":
            testStyles.style.backgroundColor = "#2B7C85";
            break;
        case "3":
            testStyles.style.backgroundColor = "#175873";
            break;
        case "4":
            testStyles.style.backgroundColor = "#5885AF";
            break;
        case "5":
            testStyles.style.backgroundColor = "#C3E0E5";
            break;
    }
 }

// Select font
document.getElementById("font-select").onchange = function() {
    let font = document.getElementById("font-select").value;
    switch (font) {
        case "0":
            testStyles.style.fontFamily = "Inter,sans-serif";
            break;
        case "1":
            testStyles.style.fontFamily = "Manrope,sans-serif";
            break;
        case "2":
            testStyles.style.fontFamily = "Source Code Pro,monospace";
            break;
    }
 }

// Change text size
function textSize(size) {
    for (let i = 0; i < pgraphs.length; i++) {
        let remSize = `${size}rem`;
        pgraphs[i].style.fontSize = remSize;
    }
 }

 // Change CSS color depending on color you have written into each color-panel
function changeColor() {
let colorHexes = document.getElementsByClassName("color-hex");
let colorPanels = document.getElementsByClassName("color-panel");
for (let i = 0; i < colorHexes.length; i++) {
    colorPanels[i].style.backgroundColor = colorHexes[i].innerHTML;
    }
}
changeColor();
