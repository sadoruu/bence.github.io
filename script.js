let header = document.getElementById("header");
let button = document.getElementById("button");
let hey = document.getElementById("hey");
let question = document.getElementById("question");
var img = document.createElement("nigger");
img.src = "nigger.jpg";
let isClicked = 0;
function changeMode(){
    if (isClicked == 0){
        document.body.style.backgroundColor = "black";
        button.style.backgroundColor = "white";
        hey.style.color = "#ffffff";
        isClicked = 1;
        header.appendChild(img);
    }
    else if (isClicked == 1){
        document.body.style.backgroundColor = "white";
        button.style.backgroundColor = "black";
        hey.style.color = "#000000";
        isClicked = 0;
    }
}
