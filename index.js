const ToggleBtn=document.querySelector(".bars")
const BarDisplay=document.querySelector(".sub")
console.log(ToggleBtn);
// const link=document.querySelector(".fa-brands")
ToggleBtn.addEventListener("click",funtoggle)
function funtoggle(){
    BarDisplay.classList.toggle("sub-nav3")
    ToggleBtn.classList.toggle("fa-xmark")
    console.log("clicked");
}

function FunProfileToggle(link, isMouseEnter) {
    const iconElement = link.querySelector('i'); // Get the <i> tag element inside the link

    if (isMouseEnter) {
        iconElement.classList.add("fa-bounce"); // Add the "fa-bounce" class on mouseenter
    } else {
        iconElement.classList.remove("fa-bounce"); // Remove the "fa-bounce" class on mouseleave
    }

    console.log(iconElement);
}
