const ToggleBtn=document.querySelector(".bars")
const BarDisplay=document.querySelector(".sub")
const skill_container=document.querySelector(".skill_container")
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


// Skills 
let arr=[{
    skill:["asset 9.png","ReactJS"]
}
,{
    skill:["asset 12.png","Redux"]
},{
    skill:["asset 17.png","TailwindCSS"]
},

{
    skill:["asset 18.png","Bootstrap"]
},{
    skill:["asset 20.png","HTML5"]
},{
    skill:["asset 21.png","CSS5"]
},

{
    skill:["asset 22.png","Javascript"]
},

{
    skill:["asset 26.png","Python"]
},{
    skill:["asset 29.png","MySQL"]
},

{
    skill:["asset 33.png","Netlify"]
},
{
    skill:["asset 37.png","Github"]
}
]
arr.map((e)=>{
    let app=document.createElement("div")
    app.classList.add("app")
    console.log("./images/"+typeof(e.skill[0]));
    app.innerHTML=`
    <img src="./images/${e.skill[0]}"  alt="React">
 <h3>${e.skill[1]}</h3>
    `
    skill_container.appendChild(app)
})