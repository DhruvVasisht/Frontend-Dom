var block=document.querySelector("#getblock")
var unblock=document.querySelector("#getunblock")

block.addEventListener("click",function(){
    localStorage.setItem("block",true);
})