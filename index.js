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
    skill:["asset 9.png","ReactJS","https://react.dev/"]
}
,{
    skill:["asset 12.png","Redux","https://redux-toolkit.js.org/"]
},{
    skill:["asset 17.png","TailwindCSS","https://tailwindcss.com/"]
},

{
    skill:["asset 18.png","Bootstrap","https://getbootstrap.com/"]
},{
    skill:["asset 20.png","HTML5","https://developer.mozilla.org/en-US/docs/Web/HTML"]
},{
    skill:["asset 21.png","CSS5","https://developer.mozilla.org/en-US/docs/Web/CSS"]
},

{
    skill:["asset 22.png","Javascript","https://developer.mozilla.org/en-US/docs/Web/JavaScript"]
},

{
    skill:["asset 26.png","Python","https://www.python.org/"]
},{
    skill:["asset 29.png","MySQL","https://www.mysql.com/"]
},

{
    skill:["asset 33.png","Netlify","https://www.netlify.com/?attr=homepage-modal"]
},
{
    skill:["asset 37.png","Github","https://github.com/"]
}
]
arr.map((e)=>{
    let app=document.createElement("a")
    app.setAttribute("href",e.skill[2])
    app.setAttribute("target","_blank")
    app.classList.add("app")
    console.log("./images/"+typeof(e.skill[0]));
    app.innerHTML=`
    <img src="./images/${e.skill[0]}"  alt="React">
 <h3>${e.skill[1]}</h3>
    `
    skill_container.appendChild(app)
})