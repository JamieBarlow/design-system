// Variables to select example text box for styling
let testStyles = document.getElementById("tryout");
const pgraphs = testStyles.getElementsByTagName("p");

// Change text size
function textSize(size) {
    for (let i = 0; i < pgraphs.length; i++) {
        let remSize = `${size}rem`;
        pgraphs[i].style.fontSize = remSize;
    }
 }

 // Change bg color
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
