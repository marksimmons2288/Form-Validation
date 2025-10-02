
element.addEventListener(submit,e) => {
    event.preventDefault();
}


let checkBox = document.getElementById("myCheck");
let text = document.getElementById("text");

function myfunction() {
    if(checkBox.checked==true) {
        text.style.display = "block";}
        else {
            text.style.display = "none";
        }
    }

