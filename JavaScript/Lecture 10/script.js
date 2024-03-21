// var block=document.querySelector("#getblock")
// var unblock=document.querySelector("#getunblock")

// block.addEventListener("click",function(){
//     localStorage.setItem("block",true);
//     show();
// })

// unblock.addEventListener("click",function(){
//     localStorage.setItem("block",false);
//     show();
// })

// function show(){
//     if(localStorage.getItem("block")==='false'){
//         document.querySelector("#status span").textContent="Not Blocked";
//     }
//     else{
//         document.querySelector("#status span").textContent="Blocked";}
    
// }


// document.querySelector("#hide").addEventListener("click",function(){
//     document.body.classList.toggle("overflow-hidden")
// })


document.querySelector("#hide").addEventListener("mouseenter",function(){
    document.querySelector(".tooltip").style.display="initial"
})
document.querySelector("#hide").addEventListener("mouseleave",function(){
    document.querySelector(".tooltip").style.display="none"
})