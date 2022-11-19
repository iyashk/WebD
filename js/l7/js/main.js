console.log("Hello");
const view1 = document.querySelector("#view2");
console.log(view1);
const div = view1.querySelector("div");
console.log(div);
const h2 = div.querySelector("h2");
console.log(h2);

const dosomething = () => {
    alert("do something");
}

h2.addEventListener("click",dosomething,false);
h2.removeEventListener('click',dosomething,false);
h2.addEventListener("click",(event)=>{
    console.log(event.target);
    event.target.textContent = "clicked";
});

document.addEventListener("readystatechange",(event)=>{
    if (event.target.readyState === "complete"){
        console.log("ready state complete");
        initApp();
    }
})

const initApp = () =>{
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click",(event)=>{
        // view.style.backgroundColor = "purple";
        view.classList.toggle("darkblue");
        view.classList.toggle("purple");
        // event.stopPropagation(); 
    });
    div.addEventListener("click",(event)=>{
        div.style.backgroundColor = "blue"; 
    });
    h2.addEventListener("click",(event)=>{
        event.target.textContent= "clicked";
    });

}

