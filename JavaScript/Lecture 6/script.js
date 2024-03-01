// var h1= document.querySelector("h1");
// h1.style.color="red";
// h1.style.fontFamily="gilroy";
// h1.style.fontSize="50px";


// document.createElement

var btn=document.querySelector("button");
btn.addEventListener('mouseover',function(){
    btn.textContent=("Starting Now");
    btn.style.backgroundColor="green";

})


var btn=document.querySelector("button");
btn.addEventListener('mouseleave',function(){
    btn.textContent=("Starting ");
    btn.style.backgroundColor="red";

})